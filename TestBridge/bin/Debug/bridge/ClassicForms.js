/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.8.2
 */
Bridge.assembly("ClassicForms", function ($asm, globals) {
    "use strict";

    Bridge.define("System.ComponentModel.IContainer", {
        inherits: [System.IDisposable],
        $kind: "interface"
    });

    Bridge.define("System.ComponentModel.ISupportInitialize", {
        $kind: "interface"
    });

    Bridge.define("System.Data.DataColumn", {
        fields: {
            Name: null,
            Table: null
        },
        ctors: {
            ctor: function (table, name) {
                this.$initialize();
                this.Name = name;
                this.Table = table;
            }
        }
    });

    Bridge.define("System.Data.DataColumnCollection", {
        fields: {
            Table: null,
            Columns: null
        },
        props: {
            Count: {
                get: function () {
                    return this.Columns.Count;
                }
            }
        },
        ctors: {
            ctor: function (table) {
                this.$initialize();
                this.Table = table;
                this.Columns = new (System.Collections.Generic.List$1(System.Data.DataColumn)).ctor();

            }
        },
        methods: {
            GetColumnIndex: function (name) {
                for (var i = 0; i < this.Columns.Count; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(this.Columns.getItem(i).Name, name)) {
                        return i;
                    }
                }

                return -1;
            },
            Add: function (columnName) {
                var data = new System.Data.DataColumn(this.Table, columnName);

                this.Columns.add(data);

                return data;

            }
        }
    });

    Bridge.define("System.Data.DataRow", {
        fields: {
            Element: null,
            data: null,
            Columns: null
        },
        ctors: {
            ctor: function (columns) {
                this.$initialize();
                this.Columns = columns;
                this.data = new (System.Collections.Generic.List$1(System.Object)).$ctor2(this.Columns.Count);
                this.Element = document.createElement("tr");
            }
        },
        methods: {
            getItem: function (columnName) {
                return this.getItem$1(this.Columns.GetColumnIndex(columnName));
            },
            setItem: function (columnName, value) {
                this.setItem$1(this.Columns.GetColumnIndex(columnName), value);
            },
            getItem$1: function (columnIndex) {
                if (columnIndex < 0 || columnIndex > ((this.Columns.Count - 1) | 0)) {
                    return null;
                }

                return this.data.getItem(columnIndex);
            },
            setItem$1: function (columnIndex, value) {
                if (columnIndex < 0) {
                    return;
                }
                if (columnIndex > ((this.Columns.Count - 1) | 0)) {
                    return;
                }

                if (columnIndex > ((this.data.Count - 1) | 0)) {
                    for (var i = this.data.Count; i < ((columnIndex + 1) | 0); i = (i + 1) | 0) {
                        var dc = document.createElement("td");

                        if (i === columnIndex) {
                            this.data.add(value);
                            dc.innerText = (System.String.concat(value, ""));

                            this.Element.appendChild(dc);

                            return;
                        } else {
                            this.Element.appendChild(dc);
                            this.data.add(null);
                        }
                    }
                } else {
                    this.Element.children[columnIndex].innerText = (System.String.concat(value, ""));
                    this.data.setItem(columnIndex, value);
                }
            }
        }
    });

    Bridge.define("System.Data.DataRowCollection", {
        fields: {
            Table: null,
            rows: null
        },
        ctors: {
            ctor: function (table) {
                this.$initialize();
                this.Table = table;
                this.rows = new (System.Collections.Generic.List$1(System.Data.DataRow)).ctor();
            }
        },
        methods: {
            Add: function (dr) {
                var $t;
                this.rows.add(dr);
                this.Table.OnNewRow(this.Table, ($t = new System.Windows.Forms.NewRowEventArgs(), $t.Row = dr, $t));
            }
        }
    });

    Bridge.define("System.Data.DataTable", {
        fields: {
            Columns: null,
            Rows: null
        },
        events: {
            NewRowEvent: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Columns = new System.Data.DataColumnCollection(this);
                this.Rows = new System.Data.DataRowCollection(this);
            }
        },
        methods: {
            NewRow: function () {
                var dr = new System.Data.DataRow(this.Columns);

                return dr;
            },
            AcceptChanges: function () {

            },
            OnNewRow: function (sender, args) {
                if (!Bridge.staticEquals(this.NewRowEvent, null)) {
                    this.NewRowEvent(sender, args);
                }
            }
        }
    });

    Bridge.define("System.Drawing.Color", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null,
                StateKnownColorValid: 0,
                StateARGBValueValid: 0,
                StateValueMask: 0,
                StateNameValid: 0,
                NotDefinedValue: System.Int64(0),
                ARGBAlphaShift: 0,
                ARGBRedShift: 0,
                ARGBGreenShift: 0,
                ARGBBlueShift: 0,
                q: 0
            },
            props: {
                Transparent: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Transparent);
                    }
                },
                AliceBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.AliceBlue);
                    }
                },
                AntiqueWhite: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.AntiqueWhite);
                    }
                },
                Aqua: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Aqua);
                    }
                },
                Aquamarine: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Aquamarine);
                    }
                },
                Azure: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Azure);
                    }
                },
                Beige: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Beige);
                    }
                },
                Bisque: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Bisque);
                    }
                },
                Black: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Black);
                    }
                },
                BlanchedAlmond: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.BlanchedAlmond);
                    }
                },
                Blue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Blue);
                    }
                },
                BlueViolet: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.BlueViolet);
                    }
                },
                Brown: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Brown);
                    }
                },
                BurlyWood: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.BurlyWood);
                    }
                },
                CadetBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.CadetBlue);
                    }
                },
                Chartreuse: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Chartreuse);
                    }
                },
                Chocolate: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Chocolate);
                    }
                },
                Coral: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Coral);
                    }
                },
                CornflowerBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.CornflowerBlue);
                    }
                },
                Cornsilk: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Cornsilk);
                    }
                },
                Crimson: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Crimson);
                    }
                },
                Cyan: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Cyan);
                    }
                },
                DarkBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkBlue);
                    }
                },
                DarkCyan: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkCyan);
                    }
                },
                DarkGoldenrod: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkGoldenrod);
                    }
                },
                DarkGray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkGray);
                    }
                },
                DarkGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkGreen);
                    }
                },
                DarkKhaki: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkKhaki);
                    }
                },
                DarkMagenta: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkMagenta);
                    }
                },
                DarkOliveGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkOliveGreen);
                    }
                },
                DarkOrange: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkOrange);
                    }
                },
                DarkOrchid: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkOrchid);
                    }
                },
                DarkRed: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkRed);
                    }
                },
                DarkSalmon: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkSalmon);
                    }
                },
                DarkSeaGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkSeaGreen);
                    }
                },
                DarkSlateBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkSlateBlue);
                    }
                },
                DarkSlateGray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkSlateGray);
                    }
                },
                DarkTurquoise: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkTurquoise);
                    }
                },
                DarkViolet: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DarkViolet);
                    }
                },
                DeepPink: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DeepPink);
                    }
                },
                DeepSkyBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DeepSkyBlue);
                    }
                },
                DimGray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DimGray);
                    }
                },
                DodgerBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.DodgerBlue);
                    }
                },
                Firebrick: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Firebrick);
                    }
                },
                FloralWhite: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.FloralWhite);
                    }
                },
                ForestGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ForestGreen);
                    }
                },
                Fuchsia: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Fuchsia);
                    }
                },
                Gainsboro: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Gainsboro);
                    }
                },
                GhostWhite: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.GhostWhite);
                    }
                },
                Gold: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Gold);
                    }
                },
                Goldenrod: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Goldenrod);
                    }
                },
                Gray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Gray);
                    }
                },
                Green: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Green);
                    }
                },
                GreenYellow: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.GreenYellow);
                    }
                },
                Honeydew: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Honeydew);
                    }
                },
                HotPink: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.HotPink);
                    }
                },
                IndianRed: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.IndianRed);
                    }
                },
                Indigo: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Indigo);
                    }
                },
                Ivory: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Ivory);
                    }
                },
                Khaki: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Khaki);
                    }
                },
                Lavender: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Lavender);
                    }
                },
                LavenderBlush: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LavenderBlush);
                    }
                },
                LawnGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LawnGreen);
                    }
                },
                LemonChiffon: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LemonChiffon);
                    }
                },
                LightBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightBlue);
                    }
                },
                LightCoral: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightCoral);
                    }
                },
                LightCyan: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightCyan);
                    }
                },
                LightGoldenrodYellow: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightGoldenrodYellow);
                    }
                },
                LightGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightGreen);
                    }
                },
                LightGray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightGray);
                    }
                },
                LightPink: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightPink);
                    }
                },
                LightSalmon: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightSalmon);
                    }
                },
                LightSeaGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightSeaGreen);
                    }
                },
                LightSkyBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightSkyBlue);
                    }
                },
                LightSlateGray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightSlateGray);
                    }
                },
                LightSteelBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightSteelBlue);
                    }
                },
                LightYellow: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LightYellow);
                    }
                },
                Lime: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Lime);
                    }
                },
                LimeGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.LimeGreen);
                    }
                },
                Linen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Linen);
                    }
                },
                Magenta: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Magenta);
                    }
                },
                Maroon: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Maroon);
                    }
                },
                MediumAquamarine: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumAquamarine);
                    }
                },
                MediumBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumBlue);
                    }
                },
                MediumOrchid: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumOrchid);
                    }
                },
                MediumPurple: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumPurple);
                    }
                },
                MediumSeaGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumSeaGreen);
                    }
                },
                MediumSlateBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumSlateBlue);
                    }
                },
                MediumSpringGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumSpringGreen);
                    }
                },
                MediumTurquoise: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumTurquoise);
                    }
                },
                MediumVioletRed: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MediumVioletRed);
                    }
                },
                MidnightBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MidnightBlue);
                    }
                },
                MintCream: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MintCream);
                    }
                },
                MistyRose: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MistyRose);
                    }
                },
                Moccasin: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Moccasin);
                    }
                },
                NavajoWhite: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.NavajoWhite);
                    }
                },
                Navy: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Navy);
                    }
                },
                OldLace: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.OldLace);
                    }
                },
                Olive: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Olive);
                    }
                },
                OliveDrab: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.OliveDrab);
                    }
                },
                Orange: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Orange);
                    }
                },
                OrangeRed: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.OrangeRed);
                    }
                },
                Orchid: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Orchid);
                    }
                },
                PaleGoldenrod: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PaleGoldenrod);
                    }
                },
                PaleGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PaleGreen);
                    }
                },
                PaleTurquoise: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PaleTurquoise);
                    }
                },
                PaleVioletRed: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PaleVioletRed);
                    }
                },
                PapayaWhip: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PapayaWhip);
                    }
                },
                PeachPuff: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PeachPuff);
                    }
                },
                Peru: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Peru);
                    }
                },
                Pink: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Pink);
                    }
                },
                Plum: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Plum);
                    }
                },
                PowderBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.PowderBlue);
                    }
                },
                Purple: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Purple);
                    }
                },
                Red: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Red);
                    }
                },
                RosyBrown: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.RosyBrown);
                    }
                },
                RoyalBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.RoyalBlue);
                    }
                },
                SaddleBrown: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SaddleBrown);
                    }
                },
                Salmon: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Salmon);
                    }
                },
                SandyBrown: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SandyBrown);
                    }
                },
                SeaGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SeaGreen);
                    }
                },
                SeaShell: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SeaShell);
                    }
                },
                Sienna: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Sienna);
                    }
                },
                Silver: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Silver);
                    }
                },
                SkyBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SkyBlue);
                    }
                },
                SlateBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SlateBlue);
                    }
                },
                SlateGray: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SlateGray);
                    }
                },
                Snow: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Snow);
                    }
                },
                SpringGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SpringGreen);
                    }
                },
                SteelBlue: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.SteelBlue);
                    }
                },
                Tan: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Tan);
                    }
                },
                Teal: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Teal);
                    }
                },
                Thistle: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Thistle);
                    }
                },
                Tomato: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Tomato);
                    }
                },
                Turquoise: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Turquoise);
                    }
                },
                Violet: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Violet);
                    }
                },
                Wheat: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Wheat);
                    }
                },
                White: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.White);
                    }
                },
                WhiteSmoke: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.WhiteSmoke);
                    }
                },
                Yellow: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Yellow);
                    }
                },
                YellowGreen: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.YellowGreen);
                    }
                }
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Drawing.Color();
                    this.ARGBAlphaShift = 24;
                    this.ARGBRedShift = 16;
                    this.ARGBGreenShift = 8;
                    this.ARGBBlueShift = 0;
                    this.q = 255.0;
                },
                ctor: function () {
                    System.Drawing.Color.Empty = new System.Drawing.Color.ctor();
                    System.Drawing.Color.StateKnownColorValid = 1;
                    System.Drawing.Color.StateARGBValueValid = 2;
                    System.Drawing.Color.StateValueMask = System.Drawing.Color.StateARGBValueValid;
                    System.Drawing.Color.StateNameValid = 8;
                    System.Drawing.Color.NotDefinedValue = System.Int64(0);
                }
            },
            methods: {
                CheckByte: function (value) {
                    if ((value < 0) || (value > 255)) {
                        throw new System.ArgumentException("InvalidEx2BoundArgument");
                    }
                },
                MakeArgb: function (alpha, red, green, blue) {
                    return System.Int64((alpha << 24) | (red << 16) | (green << 8) | blue);
                },
                FromArgb: function (argb) {
                    return new System.Drawing.Color.$ctor2(System.Int64(argb).and((System.Int64([-1,0]))), System.Drawing.Color.StateARGBValueValid, null, 0);
                },
                FromArgb$3: function (alpha, red, green, blue) {
                    System.Drawing.Color.CheckByte(alpha);
                    System.Drawing.Color.CheckByte(red);
                    System.Drawing.Color.CheckByte(green);
                    System.Drawing.Color.CheckByte(blue);
                    return new System.Drawing.Color.$ctor2(System.Drawing.Color.MakeArgb((alpha & 255), (red & 255), (green & 255), (blue & 255)), System.Drawing.Color.StateARGBValueValid, null, 0);
                },
                FromArgb$1: function (alpha, baseColor) {
                    System.Drawing.Color.CheckByte(alpha);
                    return new System.Drawing.Color.$ctor2(System.Drawing.Color.MakeArgb((alpha & 255), baseColor.R, baseColor.G, baseColor.B), System.Drawing.Color.StateARGBValueValid, null, 0);
                },
                FromArgb$2: function (red, green, blue) {
                    return System.Drawing.Color.FromArgb$3(255, red, green, blue);
                },
                IsEnumValid: function (enumValue, value, minValue, maxValue) {
                    return ((value >= minValue) && (value <= maxValue));
                },
                FromKnownColor: function (color) {
                    return new System.Drawing.Color.$ctor1(color);
                },
                FromHex: function (value) {
                    if (System.String.startsWith(value, "#")) {
                        return System.Drawing.Color.FromHex(value.substr(1));
                    } else {
                        return System.Drawing.Color.FromArgb(parseInt(value));
                    }
                },
                op_Implicit$1: function (color) {
                    return color.ToHtml();
                },
                op_Implicit: function (hexValue) {
                    return System.Drawing.Color.FromHex(hexValue);
                },
                op_Equality: function (left, right) {
                    if (((left.value.ne(right.value)) || (left.state !== right.state)) || (left.knownColor !== right.knownColor)) {
                        return false;
                    }
                    return ((Bridge.referenceEquals(left.name, right.name)) || (((left.name != null) && (right.name != null)) && System.String.equals(left.name, right.name)));
                },
                op_Inequality: function (left, right) {
                    return !(System.Drawing.Color.op_Equality(left.$clone(), right.$clone()));
                },
                getDefaultValue: function () { return new System.Drawing.Color(); }
            }
        },
        fields: {
            name: null,
            value: System.Int64(0),
            knownColor: 0,
            state: 0
        },
        props: {
            R: {
                get: function () {
                    return System.Int64.clipu8((this.Value.shr(16)).and(System.Int64(255)));
                }
            },
            G: {
                get: function () {
                    return System.Int64.clipu8((this.Value.shr(8)).and(System.Int64(255)));
                }
            },
            B: {
                get: function () {
                    return System.Int64.clipu8(this.Value.and(System.Int64(255)));
                }
            },
            A: {
                get: function () {
                    return System.Int64.clipu8((this.Value.shr(24)).and(System.Int64(255)));
                }
            },
            IsKnownColor: {
                get: function () {
                    return ((this.state & System.Drawing.Color.StateKnownColorValid) > 0);
                }
            },
            IsEmpty: {
                get: function () {
                    return (this.state === 0);
                }
            },
            IsNamedColor: {
                get: function () {
                    if ((this.state & System.Drawing.Color.StateNameValid) === 0) {
                        return this.IsKnownColor;
                    }
                    return true;
                }
            },
            IsSystemColor: {
                get: function () {
                    if (!this.IsKnownColor) {
                        return false;
                    }
                    if (this.knownColor > 26) {
                        return (this.knownColor > 167);
                    }
                    return true;
                }
            },
            NameAndARGBValue: {
                get: function () {
                    return System.String.format("{{Name={0}, ARGB=({1}, {2}, {3}, {4})}}", this.Name, Bridge.box(this.A, System.Byte), Bridge.box(this.R, System.Byte), Bridge.box(this.G, System.Byte), Bridge.box(this.B, System.Byte));
                }
            },
            Name: {
                get: function () {
                    if ((this.state & System.Drawing.Color.StateNameValid) !== 0) {
                        return this.name;
                    }
                    if (!this.IsKnownColor) {
                        return System.Convert.toStringInBase(this.value, 16, 11);
                    }
                    var str = System.Drawing.KnownColorTable.KnownColorToName(this.knownColor);
                    if (str != null) {
                        return str;
                    }
                    return Bridge.toString(this.knownColor);
                }
            },
            Value: {
                get: function () {
                    if ((this.state & System.Drawing.Color.StateValueMask) !== 0) {
                        return this.value;
                    }
                    if (this.IsKnownColor) {
                        return System.Int64(System.Drawing.KnownColorTable.KnownColorToArgb(this.knownColor));
                    }
                    return System.Drawing.Color.NotDefinedValue;
                }
            }
        },
        ctors: {
            $ctor1: function (knownColor) {
                this.$initialize();
                this.value = System.Int64(0);
                this.state = System.Drawing.Color.StateKnownColorValid;
                this.name = null;
                this.knownColor = Bridge.Int.sxs(knownColor & 65535);
            },
            $ctor2: function (value, state, name, knownColor) {
                this.$initialize();
                this.value = value;
                this.state = state;
                this.name = name;
                this.knownColor = Bridge.Int.sxs(knownColor & 65535);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            componentToHex: function (value) {
                var x = value.toString(16);
                return ((x.length === 1 ? "0" : "") || "") + (x || "");
            },
            ToHtml: function () {
                if (this.IsKnownColor) {
                    return System.Drawing.Color.FromArgb(System.Drawing.KnownColorTable.KnownColorToArgb(this.knownColor)).ToHtml();
                } else {
                    if (this.A !== 255) {
                        return System.String.format("#{0}{1}{2}{3}", this.componentToHex(this.A), this.componentToHex(this.R), this.componentToHex(this.G), this.componentToHex(this.B));
                    } else {
                        return System.String.format("#{0}{1}{2}", this.componentToHex(this.R), this.componentToHex(this.G), this.componentToHex(this.B));
                    }
                }
            },
            GetBrightness: function () {
                var z = this.R / System.Drawing.Color.q;
                var x = this.G / System.Drawing.Color.q;
                var c = this.B / System.Drawing.Color.q;
                var v = z;
                var b = z;
                if (x > v) {
                    v = x;
                }
                if (c > v) {
                    v = c;
                }
                if (x < b) {
                    b = x;
                }
                if (c < b) {
                    b = c;
                }
                return ((v + b) / 2.0);
            },
            GetHue: function () {
                if ((this.R === this.G) && (this.G === this.B)) {
                    return 0.0;
                }
                var z = this.R / System.Drawing.Color.q;
                var x = this.G / System.Drawing.Color.q;
                var c = this.B / System.Drawing.Color.q;
                var v = 0.0;
                var b = z;
                var n = z;
                if (x > b) {
                    b = x;
                }
                if (c > b) {
                    b = c;
                }
                if (x < n) {
                    n = x;
                }
                if (c < n) {
                    n = c;
                }
                var num6 = b - n;
                if (z === b) {
                    v = (x - c) / num6;
                } else if (x === b) {
                    v = 2.0 + ((c - z) / num6);
                } else if (c === b) {
                    v = 4.0 + ((z - x) / num6);
                }
                v *= 60.0;
                if (v < 0.0) {
                    v += 360.0;
                }
                return v;
            },
            GetSaturation: function () {
                var z = this.R / System.Drawing.Color.q;
                var x = this.G / System.Drawing.Color.q;
                var c = this.B / System.Drawing.Color.q;
                var v = 0.0;
                var b = z;
                var n = z;
                if (x > b) {
                    b = x;
                }
                if (c > b) {
                    b = c;
                }
                if (x < n) {
                    n = x;
                }
                if (c < n) {
                    n = c;
                }
                if (b === n) {
                    return v;
                }
                var m = (b + n) / 2.0;
                if (m <= 0.5) {
                    return ((b - n) / (b + n));
                }
                return ((b - n) / ((2.0 - b) - n));
            },
            ToArgb: function () {
                return System.Int64.clip32(this.Value);
            },
            ToKnownColor: function () {
                return this.knownColor;
            },
            toString: function () {
                var builder = new System.Text.StringBuilder("", 32);
                builder.append(Bridge.Reflection.getTypeName(Bridge.getType(this)));
                builder.append(" [");
                if ((this.state & System.Drawing.Color.StateNameValid) !== 0) {
                    builder.append(this.Name);
                } else if ((this.state & System.Drawing.Color.StateKnownColorValid) !== 0) {
                    builder.append(this.Name);
                } else if ((this.state & System.Drawing.Color.StateValueMask) !== 0) {
                    builder.appendFormat("A={0}, R={1}, G={2}, B={3}", Bridge.box(this.A, System.Byte), Bridge.box(this.R, System.Byte), Bridge.box(this.G, System.Byte), Bridge.box(this.B, System.Byte));
                } else {
                    builder.append("Empty");
                }
                builder.append("]");
                return builder.toString();
            },
            equals: function (obj) {
                if (Bridge.is(obj, System.Drawing.Color)) {
                    var color = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj), System.Drawing.Color));
                    if (((this.value.equals(color.value)) && (this.state === color.state)) && (this.knownColor === color.knownColor)) {
                        return ((Bridge.referenceEquals(this.name, color.name)) || (((this.name != null) && (color.name != null)) && System.String.equals(this.name, this.name)));
                    }
                }
                return false;
            },
            getHashCode: function () {
                return ((Bridge.getHashCode(this.value) ^ Bridge.getHashCode(this.state)) ^ Bridge.getHashCode(this.knownColor));
            },
            $clone: function (to) {
                var s = to || new System.Drawing.Color();
                s.name = this.name;
                s.value = this.value;
                s.knownColor = this.knownColor;
                s.state = this.state;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.Font", {
        fields: {
            FamilyName: null,
            EmSize: 0
        },
        ctors: {
            $ctor1: function (familyName, emSize, style, unit, gdiCharSet) {
                System.Drawing.Font.ctor.call(this, familyName, emSize);

            },
            ctor: function (familyName, emSize) {
                this.$initialize();
                this.FamilyName = familyName;
                this.EmSize = emSize;
            }
        }
    });

    Bridge.define("System.Drawing.FontStyle", {
        $kind: "enum",
        statics: {
            fields: {
                Regular: 0,
                Bold: 1,
                Italic: 2,
                Underline: 4,
                Strikeout: 8
            }
        }
    });

    Bridge.define("System.Drawing.GraphicsUnit", {
        $kind: "enum",
        statics: {
            fields: {
                World: 0,
                Display: 1,
                Pixel: 2,
                Point: 3,
                Inch: 4,
                Document: 5,
                Millimeter: 6
            }
        }
    });

    Bridge.define("System.Drawing.KnownColor", {
        $kind: "enum",
        statics: {
            fields: {
                ActiveBorder: 1,
                ActiveCaption: 2,
                ActiveCaptionText: 3,
                AliceBlue: 28,
                AntiqueWhite: 29,
                AppWorkspace: 4,
                Aqua: 30,
                Aquamarine: 31,
                Azure: 32,
                Beige: 33,
                Bisque: 34,
                Black: 35,
                BlanchedAlmond: 36,
                Blue: 37,
                BlueViolet: 38,
                Brown: 39,
                BurlyWood: 40,
                ButtonFace: 168,
                ButtonHighlight: 169,
                ButtonShadow: 170,
                CadetBlue: 41,
                Chartreuse: 42,
                Chocolate: 43,
                Control: 5,
                ControlDark: 6,
                ControlDarkDark: 7,
                ControlLight: 8,
                ControlLightLight: 9,
                ControlText: 10,
                Coral: 44,
                CornflowerBlue: 45,
                Cornsilk: 46,
                Crimson: 47,
                Cyan: 48,
                DarkBlue: 49,
                DarkCyan: 50,
                DarkGoldenrod: 51,
                DarkGray: 52,
                DarkGreen: 53,
                DarkKhaki: 54,
                DarkMagenta: 55,
                DarkOliveGreen: 56,
                DarkOrange: 57,
                DarkOrchid: 58,
                DarkRed: 59,
                DarkSalmon: 60,
                DarkSeaGreen: 61,
                DarkSlateBlue: 62,
                DarkSlateGray: 63,
                DarkTurquoise: 64,
                DarkViolet: 65,
                DeepPink: 66,
                DeepSkyBlue: 67,
                Desktop: 11,
                DimGray: 68,
                DodgerBlue: 69,
                Firebrick: 70,
                FloralWhite: 71,
                ForestGreen: 72,
                Fuchsia: 73,
                Gainsboro: 74,
                GhostWhite: 75,
                Gold: 76,
                Goldenrod: 77,
                GradientActiveCaption: 171,
                GradientInactiveCaption: 172,
                Gray: 78,
                GrayText: 12,
                Green: 79,
                GreenYellow: 80,
                Highlight: 13,
                HighlightText: 14,
                Honeydew: 81,
                HotPink: 82,
                HotTrack: 15,
                InactiveBorder: 16,
                InactiveCaption: 17,
                InactiveCaptionText: 18,
                IndianRed: 83,
                Indigo: 84,
                Info: 19,
                InfoText: 20,
                Ivory: 85,
                Khaki: 86,
                Lavender: 87,
                LavenderBlush: 88,
                LawnGreen: 89,
                LemonChiffon: 90,
                LightBlue: 91,
                LightCoral: 92,
                LightCyan: 93,
                LightGoldenrodYellow: 94,
                LightGray: 95,
                LightGreen: 96,
                LightPink: 97,
                LightSalmon: 98,
                LightSeaGreen: 99,
                LightSkyBlue: 100,
                LightSlateGray: 101,
                LightSteelBlue: 102,
                LightYellow: 103,
                Lime: 104,
                LimeGreen: 105,
                Linen: 106,
                Magenta: 107,
                Maroon: 108,
                MediumAquamarine: 109,
                MediumBlue: 110,
                MediumOrchid: 111,
                MediumPurple: 112,
                MediumSeaGreen: 113,
                MediumSlateBlue: 114,
                MediumSpringGreen: 115,
                MediumTurquoise: 116,
                MediumVioletRed: 117,
                Menu: 21,
                MenuBar: 173,
                MenuHighlight: 174,
                MenuText: 22,
                MidnightBlue: 118,
                MintCream: 119,
                MistyRose: 120,
                Moccasin: 121,
                NavajoWhite: 122,
                Navy: 123,
                OldLace: 124,
                Olive: 125,
                OliveDrab: 126,
                Orange: 127,
                OrangeRed: 128,
                Orchid: 129,
                PaleGoldenrod: 130,
                PaleGreen: 131,
                PaleTurquoise: 132,
                PaleVioletRed: 133,
                PapayaWhip: 134,
                PeachPuff: 135,
                Peru: 136,
                Pink: 137,
                Plum: 138,
                PowderBlue: 139,
                Purple: 140,
                Red: 141,
                RosyBrown: 142,
                RoyalBlue: 143,
                SaddleBrown: 144,
                Salmon: 145,
                SandyBrown: 146,
                ScrollBar: 23,
                SeaGreen: 147,
                SeaShell: 148,
                Sienna: 149,
                Silver: 150,
                SkyBlue: 151,
                SlateBlue: 152,
                SlateGray: 153,
                Snow: 154,
                SpringGreen: 155,
                SteelBlue: 156,
                Tan: 157,
                Teal: 158,
                Thistle: 159,
                Tomato: 160,
                Transparent: 27,
                Turquoise: 161,
                Violet: 162,
                Wheat: 163,
                White: 164,
                WhiteSmoke: 165,
                Window: 24,
                WindowFrame: 25,
                WindowText: 26,
                Yellow: 166,
                YellowGreen: 167
            }
        }
    });

    Bridge.define("System.Drawing.KnownColorTable", {
        statics: {
            fields: {
                AlphaShift: 0,
                BlueShift: 0,
                colorNameTable: null,
                colorTable: null,
                GreenShift: 0,
                RedShift: 0,
                Win32BlueShift: 0,
                Win32GreenShift: 0,
                Win32RedShift: 0,
                _SysColors: null
            },
            ctors: {
                init: function () {
                    this.AlphaShift = 24;
                    this.BlueShift = 0;
                    this.GreenShift = 8;
                    this.RedShift = 16;
                    this.Win32BlueShift = 16;
                    this.Win32GreenShift = 8;
                    this.Win32RedShift = 0;
                    this._SysColors = System.Array.init([11842740, 13743257, 0, 11250603, 15790320, 16777215, 10526880, 15790320, 10526880, 6908265, 14935011, 16777215, 0, 0, 15389113, 15918295, 7171437, 16750899, 16777215, 13395456, 16578548, 14405055, 5525059, 14811135, 0, 15790320, 15790320, 16750899, 0, 13158600, 16777215, 6579300, 0], System.Int32);
                }
            },
            methods: {
                GetColorName: function (index) {
                    System.Drawing.KnownColorTable.EnsureColorNameTable();
                    return System.Drawing.KnownColorTable.colorNameTable[System.Array.index(index, System.Drawing.KnownColorTable.colorNameTable)];
                },
                ArgbToKnownColor: function (targetARGB) {
                    System.Drawing.KnownColorTable.EnsureColorTable();
                    for (var i = 0; i < System.Drawing.KnownColorTable.colorTable.length; i = (i + 1) | 0) {
                        var num2 = System.Drawing.KnownColorTable.colorTable[System.Array.index(i, System.Drawing.KnownColorTable.colorTable)];
                        if (num2 === targetARGB) {
                            var color = System.Drawing.Color.FromKnownColor(i);
                            if (!color.IsSystemColor) {
                                return color.$clone();
                            }
                        }
                    }
                    return System.Drawing.Color.FromArgb(targetARGB);
                },
                Encode: function (alpha, red, green, blue) {
                    return ((((red << 16) | (green << 8)) | blue) | (alpha << 24));
                },
                EnsureColorNameTable: function () {
                    if (System.Drawing.KnownColorTable.colorNameTable == null) {
                        System.Drawing.KnownColorTable.InitColorNameTable();
                    }
                },
                EnsureColorTable: function () {
                    if (System.Drawing.KnownColorTable.colorTable == null) {
                        System.Drawing.KnownColorTable.InitColorTable();
                    }
                },
                FromWin32Value: function (value) {
                    return System.Drawing.KnownColorTable.Encode(255, value & 255, (value >> 8) & 255, (value >> 16) & 255);
                },
                InitColorNameTable: function () {
                    var s = System.Array.init(175, null, System.String);
                    s[System.Array.index(1, s)] = "ActiveBorder";
                    s[System.Array.index(2, s)] = "ActiveCaption";
                    s[System.Array.index(3, s)] = "ActiveCaptionText";
                    s[System.Array.index(4, s)] = "AppWorkspace";
                    s[System.Array.index(168, s)] = "ButtonFace";
                    s[System.Array.index(169, s)] = "ButtonHighlight";
                    s[System.Array.index(170, s)] = "ButtonShadow";
                    s[System.Array.index(5, s)] = "Control";
                    s[System.Array.index(6, s)] = "ControlDark";
                    s[System.Array.index(7, s)] = "ControlDarkDark";
                    s[System.Array.index(8, s)] = "ControlLight";
                    s[System.Array.index(9, s)] = "ControlLightLight";
                    s[System.Array.index(10, s)] = "ControlText";
                    s[System.Array.index(11, s)] = "Desktop";
                    s[System.Array.index(171, s)] = "GradientActiveCaption";
                    s[System.Array.index(172, s)] = "GradientInactiveCaption";
                    s[System.Array.index(12, s)] = "GrayText";
                    s[System.Array.index(13, s)] = "Highlight";
                    s[System.Array.index(14, s)] = "HighlightText";
                    s[System.Array.index(15, s)] = "HotTrack";
                    s[System.Array.index(16, s)] = "InactiveBorder";
                    s[System.Array.index(17, s)] = "InactiveCaption";
                    s[System.Array.index(18, s)] = "InactiveCaptionText";
                    s[System.Array.index(19, s)] = "Info";
                    s[System.Array.index(20, s)] = "InfoText";
                    s[System.Array.index(21, s)] = "Menu";
                    s[System.Array.index(173, s)] = "MenuBar";
                    s[System.Array.index(174, s)] = "MenuHighlight";
                    s[System.Array.index(22, s)] = "MenuText";
                    s[System.Array.index(23, s)] = "ScrollBar";
                    s[System.Array.index(24, s)] = "Window";
                    s[System.Array.index(25, s)] = "WindowFrame";
                    s[System.Array.index(26, s)] = "WindowText";
                    s[System.Array.index(27, s)] = "Transparent";
                    s[System.Array.index(28, s)] = "AliceBlue";
                    s[System.Array.index(29, s)] = "AntiqueWhite";
                    s[System.Array.index(30, s)] = "Aqua";
                    s[System.Array.index(31, s)] = "Aquamarine";
                    s[System.Array.index(32, s)] = "Azure";
                    s[System.Array.index(33, s)] = "Beige";
                    s[System.Array.index(34, s)] = "Bisque";
                    s[System.Array.index(35, s)] = "Black";
                    s[System.Array.index(36, s)] = "BlanchedAlmond";
                    s[System.Array.index(37, s)] = "Blue";
                    s[System.Array.index(38, s)] = "BlueViolet";
                    s[System.Array.index(39, s)] = "Brown";
                    s[System.Array.index(40, s)] = "BurlyWood";
                    s[System.Array.index(41, s)] = "CadetBlue";
                    s[System.Array.index(42, s)] = "Chartreuse";
                    s[System.Array.index(43, s)] = "Chocolate";
                    s[System.Array.index(44, s)] = "Coral";
                    s[System.Array.index(45, s)] = "CornflowerBlue";
                    s[System.Array.index(46, s)] = "Cornsilk";
                    s[System.Array.index(47, s)] = "Crimson";
                    s[System.Array.index(48, s)] = "Cyan";
                    s[System.Array.index(49, s)] = "DarkBlue";
                    s[System.Array.index(50, s)] = "DarkCyan";
                    s[System.Array.index(51, s)] = "DarkGoldenrod";
                    s[System.Array.index(52, s)] = "DarkGray";
                    s[System.Array.index(53, s)] = "DarkGreen";
                    s[System.Array.index(54, s)] = "DarkKhaki";
                    s[System.Array.index(55, s)] = "DarkMagenta";
                    s[System.Array.index(56, s)] = "DarkOliveGreen";
                    s[System.Array.index(57, s)] = "DarkOrange";
                    s[System.Array.index(58, s)] = "DarkOrchid";
                    s[System.Array.index(59, s)] = "DarkRed";
                    s[System.Array.index(60, s)] = "DarkSalmon";
                    s[System.Array.index(61, s)] = "DarkSeaGreen";
                    s[System.Array.index(62, s)] = "DarkSlateBlue";
                    s[System.Array.index(63, s)] = "DarkSlateGray";
                    s[System.Array.index(64, s)] = "DarkTurquoise";
                    s[System.Array.index(65, s)] = "DarkViolet";
                    s[System.Array.index(66, s)] = "DeepPink";
                    s[System.Array.index(67, s)] = "DeepSkyBlue";
                    s[System.Array.index(68, s)] = "DimGray";
                    s[System.Array.index(69, s)] = "DodgerBlue";
                    s[System.Array.index(70, s)] = "Firebrick";
                    s[System.Array.index(71, s)] = "FloralWhite";
                    s[System.Array.index(72, s)] = "ForestGreen";
                    s[System.Array.index(73, s)] = "Fuchsia";
                    s[System.Array.index(74, s)] = "Gainsboro";
                    s[System.Array.index(75, s)] = "GhostWhite";
                    s[System.Array.index(76, s)] = "Gold";
                    s[System.Array.index(77, s)] = "Goldenrod";
                    s[System.Array.index(78, s)] = "Gray";
                    s[System.Array.index(79, s)] = "Green";
                    s[System.Array.index(80, s)] = "GreenYellow";
                    s[System.Array.index(81, s)] = "Honeydew";
                    s[System.Array.index(82, s)] = "HotPink";
                    s[System.Array.index(83, s)] = "IndianRed";
                    s[System.Array.index(84, s)] = "Indigo";
                    s[System.Array.index(85, s)] = "Ivory";
                    s[System.Array.index(86, s)] = "Khaki";
                    s[System.Array.index(87, s)] = "Lavender";
                    s[System.Array.index(88, s)] = "LavenderBlush";
                    s[System.Array.index(89, s)] = "LawnGreen";
                    s[System.Array.index(90, s)] = "LemonChiffon";
                    s[System.Array.index(91, s)] = "LightBlue";
                    s[System.Array.index(92, s)] = "LightCoral";
                    s[System.Array.index(93, s)] = "LightCyan";
                    s[System.Array.index(94, s)] = "LightGoldenrodYellow";
                    s[System.Array.index(95, s)] = "LightGray";
                    s[System.Array.index(96, s)] = "LightGreen";
                    s[System.Array.index(97, s)] = "LightPink";
                    s[System.Array.index(98, s)] = "LightSalmon";
                    s[System.Array.index(99, s)] = "LightSeaGreen";
                    s[System.Array.index(100, s)] = "LightSkyBlue";
                    s[System.Array.index(101, s)] = "LightSlateGray";
                    s[System.Array.index(102, s)] = "LightSteelBlue";
                    s[System.Array.index(103, s)] = "LightYellow";
                    s[System.Array.index(104, s)] = "Lime";
                    s[System.Array.index(105, s)] = "LimeGreen";
                    s[System.Array.index(106, s)] = "Linen";
                    s[System.Array.index(107, s)] = "Magenta";
                    s[System.Array.index(108, s)] = "Maroon";
                    s[System.Array.index(109, s)] = "MediumAquamarine";
                    s[System.Array.index(110, s)] = "MediumBlue";
                    s[System.Array.index(111, s)] = "MediumOrchid";
                    s[System.Array.index(112, s)] = "MediumPurple";
                    s[System.Array.index(113, s)] = "MediumSeaGreen";
                    s[System.Array.index(114, s)] = "MediumSlateBlue";
                    s[System.Array.index(115, s)] = "MediumSpringGreen";
                    s[System.Array.index(116, s)] = "MediumTurquoise";
                    s[System.Array.index(117, s)] = "MediumVioletRed";
                    s[System.Array.index(118, s)] = "MidnightBlue";
                    s[System.Array.index(119, s)] = "MintCream";
                    s[System.Array.index(120, s)] = "MistyRose";
                    s[System.Array.index(121, s)] = "Moccasin";
                    s[System.Array.index(122, s)] = "NavajoWhite";
                    s[System.Array.index(123, s)] = "Navy";
                    s[System.Array.index(124, s)] = "OldLace";
                    s[System.Array.index(125, s)] = "Olive";
                    s[System.Array.index(126, s)] = "OliveDrab";
                    s[System.Array.index(127, s)] = "Orange";
                    s[System.Array.index(128, s)] = "OrangeRed";
                    s[System.Array.index(129, s)] = "Orchid";
                    s[System.Array.index(130, s)] = "PaleGoldenrod";
                    s[System.Array.index(131, s)] = "PaleGreen";
                    s[System.Array.index(132, s)] = "PaleTurquoise";
                    s[System.Array.index(133, s)] = "PaleVioletRed";
                    s[System.Array.index(134, s)] = "PapayaWhip";
                    s[System.Array.index(135, s)] = "PeachPuff";
                    s[System.Array.index(136, s)] = "Peru";
                    s[System.Array.index(137, s)] = "Pink";
                    s[System.Array.index(138, s)] = "Plum";
                    s[System.Array.index(139, s)] = "PowderBlue";
                    s[System.Array.index(140, s)] = "Purple";
                    s[System.Array.index(141, s)] = "Red";
                    s[System.Array.index(142, s)] = "RosyBrown";
                    s[System.Array.index(143, s)] = "RoyalBlue";
                    s[System.Array.index(144, s)] = "SaddleBrown";
                    s[System.Array.index(145, s)] = "Salmon";
                    s[System.Array.index(146, s)] = "SandyBrown";
                    s[System.Array.index(147, s)] = "SeaGreen";
                    s[System.Array.index(148, s)] = "SeaShell";
                    s[System.Array.index(149, s)] = "Sienna";
                    s[System.Array.index(150, s)] = "Silver";
                    s[System.Array.index(151, s)] = "SkyBlue";
                    s[System.Array.index(152, s)] = "SlateBlue";
                    s[System.Array.index(153, s)] = "SlateGray";
                    s[System.Array.index(154, s)] = "Snow";
                    s[System.Array.index(155, s)] = "SpringGreen";
                    s[System.Array.index(156, s)] = "SteelBlue";
                    s[System.Array.index(157, s)] = "Tan";
                    s[System.Array.index(158, s)] = "Teal";
                    s[System.Array.index(159, s)] = "Thistle";
                    s[System.Array.index(160, s)] = "Tomato";
                    s[System.Array.index(161, s)] = "Turquoise";
                    s[System.Array.index(162, s)] = "Violet";
                    s[System.Array.index(163, s)] = "Wheat";
                    s[System.Array.index(164, s)] = "White";
                    s[System.Array.index(165, s)] = "WhiteSmoke";
                    s[System.Array.index(166, s)] = "Yellow";
                    s[System.Array.index(167, s)] = "YellowGreen";
                    System.Drawing.KnownColorTable.colorNameTable = s;
                },
                UpdateSystemColors: function () {
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(1, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(10);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(2, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(2);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(3, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(9);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(4, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(12);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(168, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(15);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(169, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(20);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(170, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(16);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(5, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(15);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(6, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(16);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(7, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(21);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(8, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(22);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(9, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(20);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(10, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(18);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(11, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(1);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(171, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(27);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(172, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(28);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(12, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(17);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(13, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(13);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(14, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(14);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(15, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(26);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(16, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(11);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(17, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(3);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(18, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(19);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(19, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(24);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(20, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(23);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(21, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(4);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(173, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(30);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(174, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(29);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(22, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(7);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(23, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(0);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(24, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(5);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(25, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(6);
                    System.Drawing.KnownColorTable.colorTable[System.Array.index(26, System.Drawing.KnownColorTable.colorTable)] = System.Drawing.KnownColorTable.SystemColorToArgb(8);
                },
                InitColorTable: function () {
                    var c = System.Array.init(175, 0, System.Int32);

                    c[System.Array.index(27, c)] = 16777215;
                    c[System.Array.index(28, c)] = -984833;
                    c[System.Array.index(29, c)] = -332841;
                    c[System.Array.index(30, c)] = -16711681;
                    c[System.Array.index(31, c)] = -8388652;
                    c[System.Array.index(32, c)] = -983041;
                    c[System.Array.index(33, c)] = -657956;
                    c[System.Array.index(34, c)] = -6972;
                    c[System.Array.index(35, c)] = -16777216;
                    c[System.Array.index(36, c)] = -5171;
                    c[System.Array.index(37, c)] = -16776961;
                    c[System.Array.index(38, c)] = -7722014;
                    c[System.Array.index(39, c)] = -5952982;
                    c[System.Array.index(40, c)] = -2180985;
                    c[System.Array.index(41, c)] = -10510688;
                    c[System.Array.index(42, c)] = -8388864;
                    c[System.Array.index(43, c)] = -2987746;
                    c[System.Array.index(44, c)] = -32944;
                    c[System.Array.index(45, c)] = -10185235;
                    c[System.Array.index(46, c)] = -1828;
                    c[System.Array.index(47, c)] = -2354116;
                    c[System.Array.index(48, c)] = -16711681;
                    c[System.Array.index(49, c)] = -16777077;
                    c[System.Array.index(50, c)] = -16741493;
                    c[System.Array.index(51, c)] = -4684277;
                    c[System.Array.index(52, c)] = -5658199;
                    c[System.Array.index(53, c)] = -16751616;
                    c[System.Array.index(54, c)] = -4343957;
                    c[System.Array.index(55, c)] = -7667573;
                    c[System.Array.index(56, c)] = -11179217;
                    c[System.Array.index(57, c)] = -29696;
                    c[System.Array.index(58, c)] = -6737204;
                    c[System.Array.index(59, c)] = -7667712;
                    c[System.Array.index(60, c)] = -1468806;
                    c[System.Array.index(61, c)] = -7357301;
                    c[System.Array.index(62, c)] = -12042869;
                    c[System.Array.index(63, c)] = -13676721;
                    c[System.Array.index(64, c)] = -16724271;
                    c[System.Array.index(65, c)] = -7077677;
                    c[System.Array.index(66, c)] = -60269;
                    c[System.Array.index(67, c)] = -16728065;
                    c[System.Array.index(68, c)] = -9868951;
                    c[System.Array.index(69, c)] = -14774017;
                    c[System.Array.index(70, c)] = -5103070;
                    c[System.Array.index(71, c)] = -1296;
                    c[System.Array.index(72, c)] = -14513374;
                    c[System.Array.index(73, c)] = -65281;
                    c[System.Array.index(74, c)] = -2302756;
                    c[System.Array.index(75, c)] = -460545;
                    c[System.Array.index(76, c)] = -10496;
                    c[System.Array.index(77, c)] = -2448096;
                    c[System.Array.index(78, c)] = -8355712;
                    c[System.Array.index(79, c)] = -16744448;
                    c[System.Array.index(80, c)] = -5374161;
                    c[System.Array.index(81, c)] = -983056;
                    c[System.Array.index(82, c)] = -38476;
                    c[System.Array.index(83, c)] = -3318692;
                    c[System.Array.index(84, c)] = -11861886;
                    c[System.Array.index(85, c)] = -16;
                    c[System.Array.index(86, c)] = -989556;
                    c[System.Array.index(87, c)] = -1644806;
                    c[System.Array.index(88, c)] = -3851;
                    c[System.Array.index(89, c)] = -8586240;
                    c[System.Array.index(90, c)] = -1331;
                    c[System.Array.index(91, c)] = -5383962;
                    c[System.Array.index(92, c)] = -1015680;
                    c[System.Array.index(93, c)] = -2031617;
                    c[System.Array.index(94, c)] = -329006;
                    c[System.Array.index(95, c)] = -2894893;
                    c[System.Array.index(96, c)] = -7278960;
                    c[System.Array.index(97, c)] = -18751;
                    c[System.Array.index(98, c)] = -24454;
                    c[System.Array.index(99, c)] = -14634326;
                    c[System.Array.index(100, c)] = -7876870;
                    c[System.Array.index(101, c)] = -8943463;
                    c[System.Array.index(102, c)] = -5192482;
                    c[System.Array.index(103, c)] = -32;
                    c[System.Array.index(104, c)] = -16711936;
                    c[System.Array.index(105, c)] = -13447886;
                    c[System.Array.index(106, c)] = -331546;
                    c[System.Array.index(107, c)] = -65281;
                    c[System.Array.index(108, c)] = -8388608;
                    c[System.Array.index(109, c)] = -10039894;
                    c[System.Array.index(110, c)] = -16777011;
                    c[System.Array.index(111, c)] = -4565549;
                    c[System.Array.index(112, c)] = -7114533;
                    c[System.Array.index(113, c)] = -12799119;
                    c[System.Array.index(114, c)] = -8689426;
                    c[System.Array.index(115, c)] = -16713062;
                    c[System.Array.index(116, c)] = -12004916;
                    c[System.Array.index(117, c)] = -3730043;
                    c[System.Array.index(118, c)] = -15132304;
                    c[System.Array.index(119, c)] = -655366;
                    c[System.Array.index(120, c)] = -6943;
                    c[System.Array.index(121, c)] = -6987;
                    c[System.Array.index(122, c)] = -8531;
                    c[System.Array.index(123, c)] = -16777088;
                    c[System.Array.index(124, c)] = -133658;
                    c[System.Array.index(125, c)] = -8355840;
                    c[System.Array.index(126, c)] = -9728477;
                    c[System.Array.index(127, c)] = -23296;
                    c[System.Array.index(128, c)] = -47872;
                    c[System.Array.index(129, c)] = -2461482;
                    c[System.Array.index(130, c)] = -1120086;
                    c[System.Array.index(131, c)] = -6751336;
                    c[System.Array.index(132, c)] = -5247250;
                    c[System.Array.index(133, c)] = -2396013;
                    c[System.Array.index(134, c)] = -4139;
                    c[System.Array.index(135, c)] = -9543;
                    c[System.Array.index(136, c)] = -3308225;
                    c[System.Array.index(137, c)] = -16181;
                    c[System.Array.index(138, c)] = -2252579;
                    c[System.Array.index(139, c)] = -5185306;
                    c[System.Array.index(140, c)] = -8388480;
                    c[System.Array.index(141, c)] = -65536;
                    c[System.Array.index(142, c)] = -4419697;
                    c[System.Array.index(143, c)] = -12490271;
                    c[System.Array.index(144, c)] = -7650029;
                    c[System.Array.index(145, c)] = -360334;
                    c[System.Array.index(146, c)] = -744352;
                    c[System.Array.index(147, c)] = -13726889;
                    c[System.Array.index(148, c)] = -2578;
                    c[System.Array.index(149, c)] = -6270419;
                    c[System.Array.index(150, c)] = -4144960;
                    c[System.Array.index(151, c)] = -7876885;
                    c[System.Array.index(152, c)] = -9807155;
                    c[System.Array.index(153, c)] = -9404272;
                    c[System.Array.index(154, c)] = -1286;
                    c[System.Array.index(155, c)] = -16711809;
                    c[System.Array.index(156, c)] = -12156236;
                    c[System.Array.index(157, c)] = -2968436;
                    c[System.Array.index(158, c)] = -16744320;
                    c[System.Array.index(159, c)] = -2572328;
                    c[System.Array.index(160, c)] = -40121;
                    c[System.Array.index(161, c)] = -12525360;
                    c[System.Array.index(162, c)] = -1146130;
                    c[System.Array.index(163, c)] = -663885;
                    c[System.Array.index(164, c)] = -1;
                    c[System.Array.index(165, c)] = -657931;
                    c[System.Array.index(166, c)] = -256;
                    c[System.Array.index(167, c)] = -6632142;
                    System.Drawing.KnownColorTable.colorTable = c;

                    System.Drawing.KnownColorTable.UpdateSystemColors();
                },
                KnownColorToArgb: function (color) {
                    System.Drawing.KnownColorTable.EnsureColorTable();
                    if (color <= System.Drawing.KnownColor.MenuHighlight) {
                        return System.Drawing.KnownColorTable.colorTable[System.Array.index(color, System.Drawing.KnownColorTable.colorTable)];
                    }
                    return 0;
                },
                KnownColorToName: function (color) {
                    System.Drawing.KnownColorTable.EnsureColorNameTable();
                    if (color <= System.Drawing.KnownColor.MenuHighlight) {
                        return System.Drawing.KnownColorTable.colorNameTable[System.Array.index(color, System.Drawing.KnownColorTable.colorNameTable)];
                    }
                    return null;
                },
                SystemColorToArgb: function (index) {
                    return System.Drawing.KnownColorTable.FromWin32Value(System.Drawing.KnownColorTable._SysColors[System.Array.index(index, System.Drawing.KnownColorTable._SysColors)]);
                }
            }
        }
    });

    Bridge.define("System.Drawing.Point", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Drawing.Point(); }
            }
        },
        fields: {
            X: 0,
            Y: 0
        },
        ctors: {
            $ctor1: function (x, y) {
                this.$initialize();
                this.X = x;
                this.Y = y;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            toString: function () {
                return System.String.format("X:{0}, Y:{1}", Bridge.box(this.X, System.Int32), Bridge.box(this.Y, System.Int32));
            },
            getHashCode: function () {
                var h = Bridge.addHash([1852403652, this.X, this.Y]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Drawing.Point)) {
                    return false;
                }
                return Bridge.equals(this.X, o.X) && Bridge.equals(this.Y, o.Y);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.Point();
                s.X = this.X;
                s.Y = this.Y;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.Size", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Drawing.Size();
                    this.Empty = new System.Drawing.Size.$ctor1(0, 0);
                }
            },
            methods: {
                getDefaultValue: function () { return new System.Drawing.Size(); }
            }
        },
        fields: {
            Width: 0,
            Height: 0
        },
        ctors: {
            $ctor1: function (width, height) {
                this.$initialize();
                this.Width = width;
                this.Height = height;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1702521171, this.Width, this.Height]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Drawing.Size)) {
                    return false;
                }
                return Bridge.equals(this.Width, o.Width) && Bridge.equals(this.Height, o.Height);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.Size();
                s.Width = this.Width;
                s.Height = this.Height;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.SizeF", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Drawing.SizeF(); }
            }
        },
        fields: {
            Width: 0,
            Height: 0
        },
        ctors: {
            $ctor1: function (width, height) {
                this.$initialize();
                this.Width = width;
                this.Height = height;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1702521241, this.Width, this.Height]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Drawing.SizeF)) {
                    return false;
                }
                return Bridge.equals(this.Width, o.Width) && Bridge.equals(this.Height, o.Height);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.SizeF();
                s.Width = this.Width;
                s.Height = this.Height;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.SystemColors", {
        statics: {
            props: {
                ActiveBorder: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ActiveBorder);
                    }
                },
                ActiveCaption: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ActiveCaption);
                    }
                },
                ActiveCaptionText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ActiveCaptionText);
                    }
                },
                AppWorkspace: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.AppWorkspace);
                    }
                },
                ButtonFace: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ButtonFace);
                    }
                },
                ButtonHighlight: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ButtonHighlight);
                    }
                },
                ButtonShadow: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ButtonShadow);
                    }
                },
                Control: {
                    get: function () {
                        return System.Drawing.Color.FromArgb$2(240, 240, 240);
                    }
                },
                ControlDark: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ControlDark);
                    }
                },
                ControlDarkDark: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ControlDarkDark);
                    }
                },
                ControlLight: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ControlLight);
                    }
                },
                ControlLightLight: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ControlLightLight);
                    }
                },
                ControlText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ControlText);
                    }
                },
                Desktop: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Desktop);
                    }
                },
                GradientActiveCaption: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.GradientActiveCaption);
                    }
                },
                GradientInactiveCaption: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.GradientInactiveCaption);
                    }
                },
                GrayText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.GrayText);
                    }
                },
                Highlight: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Highlight);
                    }
                },
                HighlightText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.HighlightText);
                    }
                },
                HotTrack: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.HotTrack);
                    }
                },
                InactiveBorder: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.InactiveBorder);
                    }
                },
                InactiveCaption: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.InactiveCaption);
                    }
                },
                InactiveCaptionText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.InactiveCaptionText);
                    }
                },
                Info: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Info);
                    }
                },
                InfoText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.InfoText);
                    }
                },
                Menu: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Menu);
                    }
                },
                MenuBar: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MenuBar);
                    }
                },
                MenuHighlight: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MenuHighlight);
                    }
                },
                MenuText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.MenuText);
                    }
                },
                ScrollBar: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.ScrollBar);
                    }
                },
                Window: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Window);
                    }
                },
                WindowFrame: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.WindowFrame);
                    }
                },
                WindowText: {
                    get: function () {
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.WindowText);
                    }
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.AutoScaleMode", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Font: 1,
                Dpi: 2,
                Inherit: 3
            }
        }
    });

    Bridge.define("System.Windows.Forms.Control", {
        statics: {
            fields: {
                ClickedOnControl: null
            },
            ctors: {
                ctor: function () {
                    window.onmousemove = function (ev) {
                        if (System.Windows.Forms.Control.ClickedOnControl != null) {
                            ev.stopPropagation();

                            System.Windows.Forms.Control.ClickedOnControl.OnMouseMove(System.Windows.Forms.MouseEventArgs.CreateFromMouseEvent(ev, System.Windows.Forms.Control.ClickedOnControl));
                        }
                        return null;
                    };

                    window.onmouseup = function (ev) {
                        if (System.Windows.Forms.Control.ClickedOnControl != null) {
                            ev.stopPropagation();

                            System.Windows.Forms.Control.ClickedOnControl.OnMouseUp(System.Windows.Forms.MouseEventArgs.CreateFromMouseEvent(ev, System.Windows.Forms.Control.ClickedOnControl));

                            System.Windows.Forms.Control.ClickedOnControl = null;
                        }
                        return null;
                    };

                }
            }
        },
        fields: {
            _location: null,
            _visible: false,
            _parent: null,
            _size: null,
            _tabStop: false,
            _tabIndex: 0,
            Text: null,
            _backColor: null,
            _enabled: false,
            _readonly: false,
            ForeColor: null,
            _tag: null,
            Controls: null,
            _font: null,
            _autoSize: false,
            _init: false,
            Element: null,
            Margin: null,
            Padding: null,
            layoutSuspended: false
        },
        events: {
            Load: null,
            Click: null,
            MouseDown: null,
            MouseMove: null,
            MouseUp: null
        },
        props: {
            Name: {
                get: function () {
                    return this.Element.getAttribute("Name");
                },
                set: function (value) {
                    this.Element.setAttribute("Name", value);
                }
            },
            Location: {
                get: function () {
                    return this._location.$clone();
                },
                set: function (value) {
                    this._location = value.$clone();

                    this.Element.style.left = this._location.X + "px";
                    this.Element.style.top = this._location.Y + "px";

                }
            },
            Visible: {
                get: function () {
                    return this._visible;
                },
                set: function (value) {
                    this._visible = value;
                    this.Element.style.visibility = this._visible ? "inherit" : "hidden";
                }
            },
            Parent: {
                get: function () {
                    return this._parent;
                }
            },
            Size: {
                get: function () {
                    return this._size.$clone();
                },
                set: function (value) {
                    this._size = value.$clone();
                    if (this._autoSize) {
                        this.Element.style.width = "auto";
                        this.Element.style.height = "auto";
                    } else {
                        this.Element.style.width = this._size.Width + "px";
                        this.Element.style.height = this._size.Height + "px";
                    }
                }
            },
            TabStop: {
                get: function () {
                    return this._tabStop;
                },
                set: function (value) {
                    this._tabStop = value;
                    this.TabIndex = this._tabIndex;
                }
            },
            TabIndex: {
                get: function () {
                    return this._tabIndex;
                },
                set: function (value) {
                    this._tabIndex = value;
                    if (this.TabStop) {
                        this.Element.tabIndex = value;
                    } else {
                        this.Element.removeAttribute("TabIndex");
                    }
                }
            },
            BackColor: {
                get: function () {
                    return this._backColor.$clone();
                },
                set: function (value) {
                    this._backColor = value.$clone();
                    this.Element.style.backgroundColor = this._backColor.ToHtml();
                }
            },
            Enabled: {
                get: function () {
                    return this._enabled;
                },
                set: function (value) {
                    this._enabled = value;
                    this.ApplyDisabled();
                }
            },
            ReadOnly: {
                get: function () {
                    return this._readonly;
                },
                set: function (value) {
                    this._readonly = value;
                    this.ApplyReadonly();
                }
            },
            /**
             * Use Tag as Class Name
             *
             * @instance
             * @public
             * @memberof System.Windows.Forms.Control
             * @function Tag
             * @type System.Object
             */
            Tag: {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                    if (Bridge.is(this._tag, System.String)) {
                        this.Element.className = (System.String.concat(this._tag, ""));
                    } else {
                        this.Element.className = "";
                    }
                    this.ApplyDisabled();
                }
            },
            Font: {
                get: function () {
                    return this._font;
                },
                set: function (value) {
                    this._font = value;
                    if (this._font == null) {
                        this.Element.style.fontSize = "inherit";
                        this.Element.style.fontFamily = "inherit";
                    } else {
                        this.Element.style.fontSize = (System.Single.format(this._font.EmSize) || "") + "pt";
                        this.Element.style.fontFamily = this._font.FamilyName;
                    }

                }
            },
            AutoSize: {
                get: function () {
                    return this._autoSize;
                },
                set: function (value) {
                    if (this._init) {
                        this._autoSize = value;

                        this.Size = this._size.$clone();
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._location = new System.Drawing.Point();
                this._size = new System.Drawing.Size();
                this._backColor = new System.Drawing.Color();
                this.ForeColor = new System.Drawing.Color();
                this.Margin = new System.Windows.Forms.Padding();
                this.Padding = new System.Windows.Forms.Padding();
                this._enabled = true;
                this._readonly = false;
                this.layoutSuspended = false;
            },
            ctor: function (element) {
                this.$initialize();
                this.Element = element;

                this.Controls = new System.Windows.Forms.ControlCollection(this);

                this.Element.style.position = "absolute";
                this.Element.style.boxSizing = "borderbox";

                this.Element.style.padding = "0";


                this.Element.style.fontSize = "inherit";
                this.Element.style.fontFamily = "inherit";

                this.Visible = true;

                this.TabStop = true;

                this.Element.onclick = Bridge.fn.bind(this, function (ev) {
                    this.OnClick({ });
                    return null;
                });

                this.Element.onmousedown = Bridge.fn.bind(this, function (ev) {
                    System.Windows.Forms.Control.ClickedOnControl = this;
                    ev.stopPropagation();

                    this.OnMouseDown(System.Windows.Forms.MouseEventArgs.CreateFromMouseEvent(ev, this));

                    return null;
                });

                this.Element.onmousemove = Bridge.fn.bind(this, function (ev) {
                    if (System.Windows.Forms.Control.ClickedOnControl == null) {
                        ev.stopPropagation();

                        this.OnMouseMove(System.Windows.Forms.MouseEventArgs.CreateFromMouseEvent(ev, this));
                    }

                    return null;
                });

                //Element.onmouseup = new HTMLElement.onmouseupFn((ev) => {                
                //    ev.stopPropagation();

                //    OnMouseUp(MouseEventArgs.CreateFromMouseEvent(ev, this));
                //    ClickedOnControl = null;

                //    return null;
                //});

                this._init = true;
            }
        },
        methods: {
            OnControlAdded: function (control) {

            },
            OnControlRemoved: function (control) {

            },
            GetForm: function () {
                if (this.Parent == null) {
                    return null;
                }

                if (Bridge.is(this.Parent, System.Windows.Forms.Form)) {
                    return this.Parent;
                } else {
                    return this.Parent.GetForm();
                }
            },
            ApplyDisabled: function (element) {
                if (element === void 0) { element = null; }
                if (element == null) {
                    element = this.Element;
                }
                if (this.Enabled) {
                    if (element.classList.contains("disabled")) {
                        element.classList.remove("disabled");
                        element.removeAttribute("disabled");
                    }
                } else {
                    if (!element.classList.contains("disabled")) {
                        element.classList.add("disabled");
                        element.setAttribute("disabled", "");
                    }
                }
            },
            ApplyReadonly: function (element) {
                if (element === void 0) { element = null; }
                if (element == null) {
                    element = this.Element;
                }
                if (this.ReadOnly) {
                    if (!element.classList.contains("readonly")) {
                        element.classList.add("readonly");
                        element.setAttribute("readonly", "");
                    }
                } else {
                    if (element.classList.contains("readonly")) {
                        element.classList.remove("readonly");
                        element.removeAttribute("readonly");
                    }
                }
            },
            OnClick: function (e) {
                if (!Bridge.staticEquals(this.Click, null)) {
                    this.Click(this, e);
                }
            },
            OnMouseDown: function (e) {
                if (!Bridge.staticEquals(this.MouseDown, null)) {
                    this.MouseDown(this, e);
                }
            },
            OnMouseMove: function (e) {
                if (!Bridge.staticEquals(this.MouseMove, null)) {
                    this.MouseMove(this, e);
                }
            },
            InvokeLoad: function () {
                this.OnLoad({ });
            },
            OnLoad: function (e) {
                if (!Bridge.staticEquals(this.Load, null)) {
                    this.Load(this, e);
                }
            },
            OnMouseUp: function (e) {
                if (!Bridge.staticEquals(this.MouseUp, null)) {
                    this.MouseUp(this, e);
                }
            },
            SuspendLayout: function () {
                this.layoutSuspended = true;
            },
            ResumeLayout: function (performLayout) {
                this.layoutSuspended = false;
                if (performLayout) {
                    this.PerformLayout();
                }
            },
            PerformLayout: function () {
                var $t;
                if (this.layoutSuspended) {
                    return;
                }

                $t = Bridge.getEnumerator(this.Controls);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        item.PerformLayout();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }}
        }
    });

    Bridge.define("System.Windows.Forms.DataGridViewColumn", {
        fields: {
            Element: null,
            DataPropertyName: null
        },
        props: {
            HeaderText: {
                get: function () {
                    return this.Element.textContent;
                },
                set: function (value) {
                    this.Element.textContent = value;
                }
            },
            Name: {
                get: function () {
                    return this.Element.getAttribute("Name");
                },
                set: function (value) {
                    this.Element.setAttribute("Name", value);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                this.Element = document.createElement("th");
            }
        }
    });

    Bridge.define("System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode", {
        $kind: "enum",
        statics: {
            fields: {
                EnableResizing: 0,
                DisableResizing: 1,
                AutoSize: 2
            }
        }
    });

    Bridge.define("System.Windows.Forms.DialogOption", {
        fields: {
            ResultEnum: 0,
            CallBack: null
        },
        ctors: {
            init: function () {
                this.ResultEnum = System.Windows.Forms.DialogResult.None;
            },
            ctor: function (resultEnum, callBack) {
                this.$initialize();
                this.ResultEnum = resultEnum;
                this.CallBack = callBack;
            }
        },
        methods: {
            InvokeIfResult: function (resultEnum) {
                if (resultEnum === this.ResultEnum && !Bridge.staticEquals(this.CallBack, null)) {
                    this.CallBack();
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.DialogResult", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                OK: 1,
                Cancel: 2,
                Abort: 3,
                Retry: 4,
                Ignore: 5,
                Yes: 6,
                No: 7
            }
        }
    });

    Bridge.define("System.Windows.Forms.DrawMode", {
        $kind: "enum",
        statics: {
            fields: {
                Normal: 0,
                OwnerDrawFixed: 1,
                OwnerDrawVariable: 2
            }
        }
    });

    Bridge.define("System.Windows.Forms.Form.FormCollection", {
        $kind: "nested class",
        fields: {
            FormOwner: null,
            VisibleForms: null
        },
        ctors: {
            init: function () {
                this.VisibleForms = new (System.Collections.Generic.List$1(System.Windows.Forms.Form)).ctor();
            },
            ctor: function (formOwner) {
                this.$initialize();
                this.FormOwner = formOwner;
            }
        }
    });

    Bridge.define("System.Windows.Forms.Form.FormMovementModes", {
        $kind: "nested enum",
        statics: {
            fields: {
                None: 0,
                Move: 1
            }
        }
    });

    Bridge.define("System.Windows.Forms.FormBorderStyle", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                FixedSingle: 1,
                Fixed3D: 2,
                FixedDialog: 3,
                Sizable: 4,
                FixedToolWindow: 5,
                SizableToolWindow: 6
            }
        }
    });

    Bridge.define("System.Windows.Forms.LinkLabel.Link", {
        $kind: "nested class"
    });

    Bridge.define("System.Windows.Forms.LinkLabelLinkClickedEventArgs", {
        fields: {
            Button: 0,
            Link: null
        },
        ctors: {
            ctor: function (link) {
                this.$initialize();

            },
            $ctor1: function (link, button) {
                this.$initialize();

            }
        }
    });

    Bridge.define("System.Windows.Forms.MouseButtons", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Left: 1048576,
                Right: 2097152,
                Middle: 4194304,
                XButton1: 8388608,
                XButton2: 16777216
            }
        },
        $flags: true
    });

    Bridge.define("System.Windows.Forms.MouseEventArgs", {
        statics: {
            fields: {
                IsEdge: false
            },
            ctors: {
                ctor: function () {
                    System.Windows.Forms.MouseEventArgs.IsEdge = System.String.indexOf(window.navigator.userAgent, "Edge") > -1;
                }
            },
            methods: {
                GetOffsetPoint: function (element) {
                    var top = 0;
                    var left = 0;
                    do {
                        var dym = element;
                        top += dym.offsetTop;
                        left += dym.offsetLeft;
                        element = dym.offsetParent;
                    } while (element != null);

                    return new System.Drawing.Point.$ctor1(Bridge.Int.clip32(left), Bridge.Int.clip32(top));
                },
                CreateFromMouseEvent: function (original, target) {
                    var $t;
                    // what we need to do is get the local x, y off from the target.

                    var mousePoint = new System.Drawing.Point();

                    if (Bridge.referenceEquals(original.currentTarget, target.Element)) {
                        if (Bridge.Browser.isIE || System.Windows.Forms.MouseEventArgs.IsEdge) {
                            var offset = System.Windows.Forms.MouseEventArgs.GetOffsetPoint(target.Element);
                            mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(original.clientX - offset.X), Bridge.Int.clip32(original.clientY - offset.Y));
                        } else {
                            mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(original.layerX), Bridge.Int.clip32(original.layerY));
                        }
                    } else {
                        var offset1 = System.Windows.Forms.MouseEventArgs.GetOffsetPoint(target.Element);
                        mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(original.x - offset1.X), Bridge.Int.clip32(original.y - offset1.Y));
                    }

                    //Console.Clear();
                    //Console.WriteLine(mousePoint.ToString());

                    var button = Bridge.Int.clip32(original.button);
                    return ($t = new System.Windows.Forms.MouseEventArgs(button === 1 ? System.Windows.Forms.MouseButtons.Left : button === 2 ? System.Windows.Forms.MouseButtons.Right : button === 4 ? System.Windows.Forms.MouseButtons.Middle : button === 8 ? System.Windows.Forms.MouseButtons.XButton2 : System.Windows.Forms.MouseButtons.XButton2, 1, mousePoint.X, mousePoint.Y, 0), $t.Original = original, $t);
                }
            }
        },
        fields: {
            Original: null,
            Button: 0,
            Clicks: 0,
            X: 0,
            Y: 0,
            Delta: 0,
            Location: null
        },
        ctors: {
            init: function () {
                this.Location = new System.Drawing.Point();
            },
            ctor: function (button, clicks, x, y, delta) {
                this.$initialize();
                this.Button = button;
                this.Clicks = clicks;
                this.X = x;
                this.Y = y;
                this.Delta = delta;
                this.Location = new System.Drawing.Point.$ctor1(this.X, this.Y);
            }
        }
    });

    Bridge.define("System.Windows.Forms.NewRowEventArgs", {
        fields: {
            Row: null
        }
    });

    Bridge.define("System.Windows.Forms.ObjectCollection", {
        inherits: [System.Collections.Generic.IList$1(System.Object),System.Collections.ICollection,System.Collections.IEnumerable],
        fields: {
            _owner: null,
            _controls: null
        },
        props: {
            Owner: {
                get: function () {
                    return this._owner;
                }
            },
            IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            SyncRoot: {
                get: function () {
                    throw new System.NotImplementedException();
                }
            },
            Count: {
                get: function () {
                    return this._controls.Count;
                }
            },
            IsReadOnly: {
                get: function () {
                    return false;
                }
            }
        },
        alias: [
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "getItem", "System$Collections$Generic$IList$1$System$Object$getItem",
            "setItem", "System$Collections$Generic$IList$1$System$Object$setItem",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Object$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$System$Object$IsReadOnly",
            "add", "System$Collections$Generic$ICollection$1$System$Object$add",
            "clear", "System$Collections$Generic$ICollection$1$System$Object$clear",
            "contains", "System$Collections$Generic$ICollection$1$System$Object$contains",
            "copyTo$1", "System$Collections$Generic$ICollection$1$System$Object$copyTo",
            "copyTo", "System$Collections$ICollection$copyTo",
            "getEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Object$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$System$Object$indexOf",
            "insert", "System$Collections$Generic$IList$1$System$Object$insert",
            "remove", "System$Collections$Generic$ICollection$1$System$Object$remove",
            "removeAt", "System$Collections$Generic$IList$1$System$Object$removeAt"
        ],
        ctors: {
            ctor: function (owner) {
                this.$initialize();
                this._owner = owner;
                this._controls = new (System.Collections.Generic.List$1(System.Object)).ctor();
            }
        },
        methods: {
            getItem: function (index) {
                return this._controls.getItem(index);
            },
            setItem: function (index, value) {
                this._controls.setItem(index, value);
            },
            add: function (item) {
                var $t;
                this._owner.Element.appendChild(($t = document.createElement("option"), $t.value = Bridge.toString(this._controls.Count), $t.textContent = (System.String.concat(item, "")), $t));
                this._controls.add(item);
            },
            AddRange: function (item) {
                var $t;
                if (item == null || item.length === 0) {
                    return;
                }
                var frag = document.createDocumentFragment();
                for (var i = 0; i < item.length; i = (i + 1) | 0) {
                    frag.appendChild(($t = document.createElement("option"), $t.value = Bridge.toString(this._controls.Count), $t.textContent = (System.String.concat(item[System.Array.index(i, item)], "")), $t));
                    this._controls.add(item[System.Array.index(i, item)]);
                }
                this._owner.Element.appendChild(frag);
            },
            clear: function () {
                			var len = _owner.Element.childNodes.length;
                			while(len--)
                			{
                				_owner.Element.removeChild(_owner.Element.lastChild);
                			};
                			
                this._controls.clear();
            },
            contains: function (item) {
                return this._controls.contains(item);
            },
            copyTo$1: function (array, arrayIndex) {
                this._controls.copyTo(array, arrayIndex);
            },
            copyTo: function (array, arrayIndex) {
                this._controls.copyTo(Bridge.cast(array, System.Array.type(System.Object)), arrayIndex);
            },
            getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                var $t;
                this._owner.Element.insertBefore(($t = document.createElement("option"), $t.value = Bridge.toString(this._controls.Count), $t.textContent = (System.String.concat(item, "")), $t), this._owner.Element.childNodes[index]);
                this._controls.insert(index, item);
            },
            remove: function (item) {
                this._owner.Element.removeChild(this._owner.Element.childNodes[this._controls.indexOf(item)]);
                return this._controls.remove(item);
            },
            removeAt: function (index) {
                this._owner.Element.removeChild(this._owner.Element.childNodes[index]);
                this._controls.removeAt(index);
            }
        }
    });

    Bridge.define("System.Windows.Forms.Padding", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Windows.Forms.Padding(); }
            }
        },
        fields: {
            Left: 0,
            Top: 0,
            Right: 0,
            Bottom: 0
        },
        ctors: {
            $ctor2: function (left, top, right, bottom) {
                this.$initialize();
                this.Left = left;
                this.Top = top;
                this.Right = right;
                this.Bottom = bottom;
            },
            $ctor1: function (all) {
                this.$initialize();
                this.Left = all;
                this.Top = all;
                this.Right = all;
                this.Bottom = all;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([1691078585, this.Left, this.Top, this.Right, this.Bottom]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Windows.Forms.Padding)) {
                    return false;
                }
                return Bridge.equals(this.Left, o.Left) && Bridge.equals(this.Top, o.Top) && Bridge.equals(this.Right, o.Right) && Bridge.equals(this.Bottom, o.Bottom);
            },
            $clone: function (to) {
                var s = to || new System.Windows.Forms.Padding();
                s.Left = this.Left;
                s.Top = this.Top;
                s.Right = this.Right;
                s.Bottom = this.Bottom;
                return s;
            }
        }
    });

    Bridge.define("System.Windows.Forms.WindowState", {
        $kind: "enum",
        statics: {
            fields: {
                Normal: 0,
                Minimized: 1,
                Maximized: 2
            }
        }
    });

    Bridge.define("System.ComponentModel.Container", {
        inherits: [System.ComponentModel.IContainer],
        alias: ["dispose", "System$IDisposable$dispose"],
        methods: {
            dispose: function () {

            }
        }
    });

    Bridge.define("System.Windows.Forms.ButtonBase", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            AutoSize: false,
            UseVisualStyleBackColor: false
        },
        props: {
            Text: {
                get: function () {
                    return Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text = value;
                    this.Element.textContent = value;
                }
            }
        },
        ctors: {
            ctor: function (element) {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, element);

            }
        }
    });

    Bridge.define("System.Windows.Forms.ComboBox", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            Items: null,
            FormattingEnabled: false,
            ItemHeight: 0,
            DrawMode: 0,
            MinimumSize: null
        },
        ctors: {
            init: function () {
                this.MinimumSize = new System.Drawing.Size();
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("select"));
                this.Items = new System.Windows.Forms.ObjectCollection(this);
            }
        }
    });

    Bridge.define("System.Windows.Forms.ContainerControl", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            AutoScaleDimensions: null,
            AutoScaleMode: 0
        },
        ctors: {
            init: function () {
                this.AutoScaleDimensions = new System.Drawing.SizeF();
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("div"));

            },
            $ctor1: function (element) {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, element);

            }
        }
    });

    /** @namespace System.Windows.Forms */

    /**
     * TODO - add controls via html....
     *
     * @public
     * @class System.Windows.Forms.ControlCollection
     * @implements  System.Collections.Generic.IList$1
     * @implements  System.Collections.ICollection
     * @implements  System.Collections.IEnumerable
     */
    Bridge.define("System.Windows.Forms.ControlCollection", {
        inherits: [System.Collections.Generic.IList$1(System.Windows.Forms.Control),System.Collections.ICollection,System.Collections.IEnumerable],
        fields: {
            _owner: null,
            _controls: null
        },
        props: {
            Owner: {
                get: function () {
                    return this._owner;
                }
            },
            Count: {
                get: function () {
                    return this._controls.Count;
                }
            },
            IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            SyncRoot: {
                get: function () {
                    throw new System.NotImplementedException();
                }
            }
        },
        alias: [
            "getItem", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$getItem",
            "setItem", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$setItem",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "add", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$add",
            "clear", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$clear",
            "contains", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$contains",
            "copyTo$1", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$copyTo",
            "copyTo", "System$Collections$ICollection$copyTo",
            "getEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Windows$Forms$Control$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$indexOf",
            "insert", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$insert",
            "remove", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$remove",
            "removeAt", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$removeAt"
        ],
        ctors: {
            ctor: function (owner) {
                this.$initialize();
                this._owner = owner;
                this._controls = new (System.Collections.Generic.List$1(System.Windows.Forms.Control)).ctor();
            }
        },
        methods: {
            getItem: function (index) {
                return this._controls.getItem(index);
            },
            setItem: function (index, value) {
                this._controls.setItem(index, value);
            },
            add: function (item) {
                this._owner.Element.appendChild(item.Element);
                item._parent = this.Owner;
                item.InvokeLoad();
                this._controls.add(item);
                this._owner.OnControlAdded(item);
            },
            AddRange: function (item) {
                if (item == null || item.length === 0) {
                    return;
                }
                var frag = document.createDocumentFragment();
                for (var i = 0; i < item.length; i = (i + 1) | 0) {
                    frag.appendChild(item[System.Array.index(i, item)].Element);
                    item[System.Array.index(i, item)]._parent = this.Owner;
                    item[System.Array.index(i, item)].InvokeLoad();
                    this._controls.add(item[System.Array.index(i, item)]);
                    this._owner.OnControlAdded(item[System.Array.index(i, item)]);
                }
                this._owner.Element.appendChild(frag);
            },
            clear: function () {
                			var len = _owner.Element.childNodes.length;
                			while(len--)
                			{
                				_owner.Element.removeChild(_owner.Element.lastChild);
                			};
                			
                this._controls.clear();
            },
            contains: function (item) {
                return this._controls.contains(item);
            },
            copyTo$1: function (array, arrayIndex) {
                this._controls.copyTo(array, arrayIndex);
            },
            copyTo: function (array, arrayIndex) {
                this._controls.copyTo(Bridge.cast(array, System.Array.type(System.Windows.Forms.Control)), arrayIndex);
            },
            getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                this._owner.Element.insertBefore(item.Element, this._owner.Element.childNodes[index]);
                this._controls.insert(index, item);
                this._owner.OnControlAdded(item);
            },
            remove: function (item) {
                this._owner.Element.removeChild(item.Element);

                this._owner.OnControlRemoved(item);

                return this._controls.remove(item);
            },
            removeAt: function (index) {
                this._owner.Element.removeChild(this._owner.Element.childNodes[index]);

                this._owner.OnControlRemoved(this._controls.getItem(index));

                this._controls.removeAt(index);
            }
        }
    });

    Bridge.define("System.Windows.Forms.DataGridView", {
        inherits: [System.Windows.Forms.Control,System.ComponentModel.ISupportInitialize],
        fields: {
            ColumnHeadersHeightSizeMode: 0,
            Columns: null,
            Rows: null,
            table: null,
            dataSource: null
        },
        props: {
            Tag: {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                    if (Bridge.is(this._tag, System.String)) {
                        var str = (System.String.concat(this._tag, ""));
                        if (System.String.contains(str,",")) {
                            var arry = System.String.split(str, [44].map(function(i) {{ return String.fromCharCode(i); }}));
                            this.Element.className = arry[System.Array.index(0, arry)];
                            if (arry.length >= 2) {
                                this.table.className = arry[System.Array.index(1, arry)];
                                if (arry.length >= 3) {
                                    this.Columns.header.className = arry[System.Array.index(2, arry)];
                                } else {
                                    this.Columns.header.className = "";
                                }
                            } else {
                                this.table.className = "";
                                this.Columns.header.className = "";
                            }
                        } else {
                            this.Element.className = str;
                            this.table.className = "";
                            this.Columns.header.className = "";
                        }
                    } else {
                        this.table.className = "";
                        this.Element.className = "";
                        this.Columns.header.className = "";
                    }
                }
            },
            DataSource: {
                get: function () {
                    return this.dataSource;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(value, this.dataSource)) {
                        if (this.dataSource != null) {
                            if (Bridge.is(this.dataSource, System.Data.DataTable)) {
                                var dt = Bridge.unbox(this.dataSource);

                                dt.removeNewRowEvent(Bridge.fn.cacheBind(this, this.OnNewRowEvent));
                            }
                        }

                        this.dataSource = value;

                        if (this.dataSource != null && Bridge.is(this.dataSource, System.Data.DataTable)) {
                            var dt1 = Bridge.unbox(this.dataSource);

                            dt1.addNewRowEvent(Bridge.fn.cacheBind(this, this.OnNewRowEvent));
                        }
                    }
                }
            }
        },
        alias: [
            "BeginInit", "System$ComponentModel$ISupportInitialize$BeginInit",
            "EndInit", "System$ComponentModel$ISupportInitialize$EndInit"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("div"));
                this.table = document.createElement("table");
                this.Element.appendChild(this.table);

                this.Element.style.overflow = "auto";

                this.Columns = new System.Windows.Forms.DataGridViewColumnCollection(this, this.table);
                this.Rows = new System.Windows.Forms.DataGridViewRowCollection(this, this.table);

                this.TabStop = false;

                this.Element.setAttribute("scope", "table");
            }
        },
        methods: {
            BeginInit: function () {

            },
            EndInit: function () {

            },
            OnNewRowEvent: function (sender, args) {
                this.Rows.add(args.Row);
            }
        }
    });

    /**
     * TODO - add controls via html....
     *
     * @public
     * @class System.Windows.Forms.DataGridViewColumnCollection
     * @implements  System.Collections.Generic.IList$1
     * @implements  System.Collections.ICollection
     * @implements  System.Collections.IEnumerable
     */
    Bridge.define("System.Windows.Forms.DataGridViewColumnCollection", {
        inherits: [System.Collections.Generic.IList$1(System.Windows.Forms.DataGridViewColumn),System.Collections.ICollection,System.Collections.IEnumerable],
        fields: {
            _owner: null,
            header: null,
            _controls: null
        },
        props: {
            Owner: {
                get: function () {
                    return this._owner;
                }
            },
            IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            SyncRoot: {
                get: function () {
                    throw new System.NotImplementedException();
                }
            },
            Count: {
                get: function () {
                    return this._controls.Count;
                }
            },
            IsReadOnly: {
                get: function () {
                    return false;
                }
            }
        },
        alias: [
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "getItem", "System$Collections$Generic$IList$1$System$Windows$Forms$DataGridViewColumn$getItem",
            "setItem", "System$Collections$Generic$IList$1$System$Windows$Forms$DataGridViewColumn$setItem",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$IsReadOnly",
            "add", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$add",
            "clear", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$clear",
            "contains", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$contains",
            "copyTo$1", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$copyTo",
            "copyTo", "System$Collections$ICollection$copyTo",
            "getEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Windows$Forms$DataGridViewColumn$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$System$Windows$Forms$DataGridViewColumn$indexOf",
            "insert", "System$Collections$Generic$IList$1$System$Windows$Forms$DataGridViewColumn$insert",
            "remove", "System$Collections$Generic$ICollection$1$System$Windows$Forms$DataGridViewColumn$remove",
            "removeAt", "System$Collections$Generic$IList$1$System$Windows$Forms$DataGridViewColumn$removeAt"
        ],
        ctors: {
            ctor: function (owner, table) {
                this.$initialize();
                this._owner = owner;
                this._controls = new (System.Collections.Generic.List$1(System.Windows.Forms.DataGridViewColumn)).ctor();

                this.header = table.createTHead();
                table.appendChild(this.header);
            }
        },
        methods: {
            getItem: function (index) {
                return this._controls.getItem(index);
            },
            setItem: function (index, value) {
                this._controls.setItem(index, value);
            },
            add: function (item) {

                this.header.appendChild(item.Element);
                this._controls.add(item);
            },
            AddRange: function (item) {
                if (item == null || item.length === 0) {
                    return;
                }
                var frag = document.createDocumentFragment();
                for (var i = 0; i < item.length; i = (i + 1) | 0) {
                    frag.appendChild(item[System.Array.index(i, item)].Element);
                    this._controls.add(item[System.Array.index(i, item)]);
                }
                this.header.appendChild(frag);
            },
            clear: function () {
                			var len = header.childNodes.length;
                			while(len--)
                			{
                				header.removeChild(header.lastChild);
                			};
                			
                this._controls.clear();
            },
            contains: function (item) {
                return this._controls.contains(item);
            },
            copyTo$1: function (array, arrayIndex) {
                this._controls.copyTo(array, arrayIndex);
            },
            copyTo: function (array, arrayIndex) {
                this._controls.copyTo(Bridge.cast(array, System.Array.type(System.Windows.Forms.DataGridViewColumn)), arrayIndex);
            },
            getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                this.header.insertBefore(item.Element, this.header.childNodes[index]);
                this._controls.insert(index, item);
            },
            remove: function (item) {
                this.header.removeChild(item.Element);
                return this._controls.remove(item);
            },
            removeAt: function (index) {
                this.header.removeChild(this.header.childNodes[index]);
                this._controls.removeAt(index);
            }
        }
    });

    /**
     * TODO - add controls via html....
     *
     * @public
     * @class System.Windows.Forms.DataGridViewRowCollection
     * @implements  System.Collections.Generic.IList$1
     * @implements  System.Collections.ICollection
     * @implements  System.Collections.IEnumerable
     */
    Bridge.define("System.Windows.Forms.DataGridViewRowCollection", {
        inherits: [System.Collections.Generic.IList$1(System.Data.DataRow),System.Collections.ICollection,System.Collections.IEnumerable],
        fields: {
            _owner: null,
            body: null,
            _controls: null
        },
        props: {
            Owner: {
                get: function () {
                    return this._owner;
                }
            },
            Count: {
                get: function () {
                    return this._controls.Count;
                }
            },
            IsReadOnly: {
                get: function () {
                    return false;
                }
            },
            IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            SyncRoot: {
                get: function () {
                    throw new System.NotImplementedException();
                }
            }
        },
        alias: [
            "getItem", "System$Collections$Generic$IList$1$System$Data$DataRow$getItem",
            "setItem", "System$Collections$Generic$IList$1$System$Data$DataRow$setItem",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Data$DataRow$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$System$Data$DataRow$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "add", "System$Collections$Generic$ICollection$1$System$Data$DataRow$add",
            "clear", "System$Collections$Generic$ICollection$1$System$Data$DataRow$clear",
            "contains", "System$Collections$Generic$ICollection$1$System$Data$DataRow$contains",
            "copyTo$1", "System$Collections$Generic$ICollection$1$System$Data$DataRow$copyTo",
            "copyTo", "System$Collections$ICollection$copyTo",
            "getEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Data$DataRow$getEnumerator", "System$Collections$Generic$IEnumerable$1$getEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$System$Data$DataRow$indexOf",
            "insert", "System$Collections$Generic$IList$1$System$Data$DataRow$insert",
            "remove", "System$Collections$Generic$ICollection$1$System$Data$DataRow$remove",
            "removeAt", "System$Collections$Generic$IList$1$System$Data$DataRow$removeAt"
        ],
        ctors: {
            ctor: function (owner, table) {
                this.$initialize();
                this._owner = owner;
                this._controls = new (System.Collections.Generic.List$1(System.Data.DataRow)).ctor();

                this.body = table.createTBody();
                table.appendChild(this.body);
            }
        },
        methods: {
            getItem: function (index) {
                return this._controls.getItem(index);
            },
            setItem: function (index, value) {
                this._controls.setItem(index, value);
            },
            add: function (item) {
                this.body.appendChild(item.Element);
                this._controls.add(item);
            },
            AddRange: function (item) {
                if (item == null || item.length === 0) {
                    return;
                }
                var frag = document.createDocumentFragment();
                for (var i = 0; i < item.length; i = (i + 1) | 0) {
                    frag.appendChild(item[System.Array.index(i, item)].Element);
                    this._controls.add(item[System.Array.index(i, item)]);
                }
                this.body.appendChild(frag);
            },
            clear: function () {
                			var len = body.childNodes.length;
                			while(len--)
                			{
                				body.removeChild(body.lastChild);
                			};
                			
                this._controls.clear();
            },
            contains: function (item) {
                return this._controls.contains(item);
            },
            copyTo$1: function (array, arrayIndex) {
                this._controls.copyTo(array, arrayIndex);
            },
            copyTo: function (array, arrayIndex) {
                this._controls.copyTo(Bridge.cast(array, System.Array.type(System.Data.DataRow)), arrayIndex);
            },
            getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            System$Collections$IEnumerable$getEnumerator: function () {
                return this._controls.getEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                this.body.insertBefore(item.Element, this.body.childNodes[index]);
                this._controls.insert(index, item);
            },
            remove: function (item) {
                this.body.removeChild(item.Element);
                return this._controls.remove(item);
            },
            removeAt: function (index) {
                this.body.removeChild(this.body.childNodes[index]);
                this._controls.removeAt(index);
            }
        }
    });

    Bridge.define("System.Windows.Forms.DataGridViewTextBoxColumn", {
        inherits: [System.Windows.Forms.DataGridViewColumn]
    });

    Bridge.define("System.Windows.Forms.GroupBox", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            legend: null,
            panel: null
        },
        props: {
            Text: {
                get: function () {
                    return this.legend.textContent;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text = value;
                    this.legend.textContent = value;
                }
            },
            Tag: {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                    if (Bridge.is(this._tag, System.String)) {
                        var str = (System.String.concat(this._tag, ""));
                        if (System.String.contains(str,",")) {
                            var arry = System.String.split(str, [44].map(function(i) {{ return String.fromCharCode(i); }}));
                            this.Element.className = arry[System.Array.index(0, arry)];
                            if (arry.length === 3) {
                                this.legend.className = arry[System.Array.index(1, arry)];
                                this.panel.Element.className = arry[System.Array.index(2, arry)];
                            } else {
                                this.legend.className = "";
                                this.panel.Element.className = "";
                            }
                        } else {
                            this.Element.className = str;
                            this.legend.className = "";
                            this.panel.Element.className = "";
                        }
                    } else {
                        this.Element.className = "";
                        this.legend.className = "";
                        this.panel.Element.className = "";
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("fieldset"));
                this.panel = new System.Windows.Forms.Panel();

                this.Element.setAttribute("scope", "groupbox");

                this.Element.appendChild((this.legend = document.createElement("legend")));

                this.legend.setAttribute("scope", "groupboxlegend");

                this.Element.appendChild(this.panel.Element);
                this.panel.Element.style.position = "relative";
                this.Controls._owner = this.panel;
            }
        }
    });

    Bridge.define("System.Windows.Forms.Label", {
        inherits: [System.Windows.Forms.Control],
        props: {
            Text: {
                get: function () {
                    return this.Element.textContent;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text = value;
                    this.Element.textContent = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("span"));
                this.TabStop = false;
                this.Element.setAttribute("scope", "label");
            }
        }
    });

    Bridge.define("System.Windows.Forms.LinkLabel", {
        inherits: [System.Windows.Forms.Control],
        events: {
            LinkClicked: null
        },
        props: {
            Text: {
                get: function () {
                    return this.Element.textContent;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text = value;
                    this.Element.textContent = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("a"));
                this.TabStop = false;
                //Element.As<HTMLAnchorElement>().Href = "#";
                this.Element.style.cursor = "pointer";
            }
        },
        methods: {
            OnClick: function (e) {
                System.Windows.Forms.Control.prototype.OnClick.call(this, e);

                if (!Bridge.staticEquals(this.LinkClicked, null)) {
                    this.LinkClicked(this, new System.Windows.Forms.LinkLabelLinkClickedEventArgs.ctor(null));
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.ListBox", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            Items: null,
            FormattingEnabled: false,
            ItemHeight: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("select"));
                this.Element.multiple = true;
                this.Items = new System.Windows.Forms.ObjectCollection(this);
            }
        }
    });

    Bridge.define("System.Windows.Forms.ProgressBar", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            progressBar: null,
            _value: 0
        },
        props: {
            ForeColor: {
                get: function () {
                    return Bridge.ensureBaseProperty(this, "ForeColor").$System$Windows$Forms$Control$ForeColor.$clone();
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "ForeColor").$System$Windows$Forms$Control$ForeColor = value.$clone();
                    if (this._init) {
                        this.progressBar.style.backgroundColor = value.ToHtml();
                    }
                }
            },
            Value: {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    if (value < 0) {
                        value = 0;
                    }
                    if (value > 100) {
                        value = 100;
                    }
                    this._value = value;
                    if (this._init) {
                        this.progressBar.style.width = this._value + "%";
                    }
                }
            },
            Tag: {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                    if (Bridge.is(this._tag, System.String)) {
                        var str = (System.String.concat(this._tag, ""));
                        if (System.String.contains(str,",")) {
                            var arry = System.String.split(str, [44].map(function(i) {{ return String.fromCharCode(i); }}));
                            this.Element.className = arry[System.Array.index(0, arry)];
                            if (arry.length === 2) {
                                this.progressBar.className = arry[System.Array.index(1, arry)];
                            } else {
                                this.progressBar.className = "";
                            }
                        } else {
                            this.Element.className = str;
                            this.progressBar.className = "";
                        }
                    } else {
                        this.Element.className = "";
                        this.progressBar.className = "";
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("div"));
                this.Element.appendChild((this.progressBar = document.createElement("div")));
                this.TabStop = false;
                this.Element.setAttribute("scope", "progress");
            }
        }
    });

    Bridge.define("System.Windows.Forms.TabControl", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            _selectedIndex: 0,
            LinkTag: null
        },
        props: {
            TabPages: {
                get: function () {
                    var $t;
                    var pages = new (System.Collections.Generic.List$1(System.Windows.Forms.TabPage)).ctor();
                    $t = Bridge.getEnumerator(this.Controls);
                    try {
                        while ($t.moveNext()) {
                            var control = $t.Current;
                            if (Bridge.is(control, System.Windows.Forms.TabPage)) {
                                pages.add(control);
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }return pages.toArray();
                }
            },
            SelectedIndex: {
                get: function () {
                    return this._selectedIndex;
                },
                set: function (value) {
                    if (this._selectedIndex !== value) {
                        this._selectedIndex = value;
                        this.PerformLayout();
                    }
                }
            },
            Tag: {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                    if (Bridge.is(this._tag, System.String)) {
                        var str = (System.String.concat(this._tag, ""));
                        if (System.String.contains(str,",")) {
                            var arry = System.String.split(str, [44].map(function(i) {{ return String.fromCharCode(i); }}));
                            this.Element.className = arry[System.Array.index(0, arry)];
                            if (arry.length === 2) {
                                this.LinkTag = arry[System.Array.index(1, arry)];
                            } else {
                                this.LinkTag = "";
                            }
                        } else {
                            this.Element.className = str;
                            this.LinkTag = "";
                        }
                    } else {
                        this.Element.className = "";
                        this.LinkTag = "";
                    }
                }
            }
        },
        ctors: {
            init: function () {
                this._selectedIndex = -1;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("ul"));
                this.Element.setAttribute("scope", "tabcontrol");
            }
        },
        methods: {
            OnControlAdded: function (control) {
                System.Windows.Forms.Control.prototype.OnControlAdded.call(this, control);

                if (Bridge.is(control, System.Windows.Forms.TabPage)) {
                    this.Controls.add(control.Header);

                    this.PerformLayout();
                }
            },
            OnControlRemoved: function (control) {
                System.Windows.Forms.Control.prototype.OnControlRemoved.call(this, control);

                if (Bridge.is(control, System.Windows.Forms.TabPage)) {
                    this.Controls.remove(control.Header);

                    this.PerformLayout();
                }
            },
            ResizeTabHeaderSize: function () {
                var $t;
                var i = 0;
                var x = 0;
                $t = Bridge.getEnumerator(this.TabPages);
                try {
                    while ($t.moveNext()) {
                        var page = $t.Current;
                        var div = new System.Windows.Forms.TabPageHeader();
                        div.Text = page.Text;
                        div.Element.className = page.Header.Element.className;
                        div.Element.style.visibility = "hidden";
                        document.body.appendChild(div.Element);

                        var rec = div.Element.getBoundingClientRect();

                        //page.Header.Location = new Drawing.Point((int)x, i == _selectedIndex ? 0 : 4);
                        page.Header.Element.style.left = System.Double.format(x) + "px";

                        document.body.removeChild(div.Element);

                        x += rec.width;

                        page.Element.style.height = "calc(100% - " + (((Bridge.Int.clip32(rec.height) - 1) | 0)) + "px)";
                        page.Element.style.top = (((Bridge.Int.clip32(rec.height) - 1) | 0)) + "px";
                        page.Element.style.left = "0";
                        page.Element.style.width = "100%";

                        i = (i + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }},
            PerformLayout: function () {
                var $t, $t1;
                if (this.layoutSuspended) {
                    return;
                }
                System.Windows.Forms.Control.prototype.PerformLayout.call(this);

                var i = 0;
                var activePage = null;

                $t = Bridge.getEnumerator(this.TabPages);
                try {
                    while ($t.moveNext()) {
                        var page = $t.Current;
                        if (i === 0) {
                            if (!page.Header.Element.classList.contains("first")) {
                                page.Header.Element.classList.add("first");
                            }
                        } else {
                            page.Header.Element.classList.remove("first");
                        }

                        if (!System.String.isNullOrWhiteSpace(this.LinkTag)) {
                            if (System.String.contains(this.LinkTag," ")) {
                                var tags = System.String.split(this.LinkTag, [32].map(function(i) {{ return String.fromCharCode(i); }}));
                                $t1 = Bridge.getEnumerator(tags);
                                try {
                                    while ($t1.moveNext()) {
                                        var item = $t1.Current;
                                        if (!System.String.isNullOrWhiteSpace(item)) {
                                            if (!page.Header.Element.classList.contains(item)) {
                                                page.Header.Element.classList.add(item);
                                            }
                                        }
                                    }
                                } finally {
                                    if (Bridge.is($t1, System.IDisposable)) {
                                        $t1.System$IDisposable$dispose();
                                    }
                                }
                            } else {
                                if (!page.Header.Element.classList.contains(this.LinkTag)) {
                                    page.Header.Element.classList.add(this.LinkTag);
                                }
                            }

                        }

                        if (this._selectedIndex === i) {
                            activePage = page;
                            if (!page.Header.Element.classList.contains("active")) {
                                page.Header.Element.classList.add("active");
                            }

                            if (!page.Element.classList.contains("active")) {
                                page.Element.classList.add("active");
                            }

                            page.Visible = true;
                            page.Size = new System.Drawing.Size.$ctor1(((this.Size.Width - 8) | 0), ((this.Size.Height - (26)) | 0));
                        } else {

                            this.Controls.remove(page.Header);
                            this.Controls.add(page.Header);

                            page.Element.classList.remove("active");

                            page.Header.Element.classList.remove("active");
                            page.Visible = false;
                        }
                        i = (i + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$dispose();
                    }
                }
                if (activePage != null) {
                    this.Controls.remove(activePage.Header);
                    this.Controls.add(activePage.Header);
                }

                this.ResizeTabHeaderSize();
            }
        }
    });

    Bridge.define("System.Windows.Forms.TabPageHeader", {
        inherits: [System.Windows.Forms.Control],
        props: {
            Text: {
                get: function () {
                    return this.Element.innerText;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this.Element.innerText, value)) {
                        this.Element.innerText = value;
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, document.createElement("a"));
                this.Element.setAttribute("scope", "tabpageheader");
                this.Element.style.padding = null;
            }
        }
    });

    Bridge.define("System.Windows.Forms.TextBox", {
        inherits: [System.Windows.Forms.Control],
        fields: {
            prevString: null,
            _useSystemPasswordChar: false
        },
        events: {
            TextChanged: null
        },
        props: {
            Text: {
                get: function () {
                    return this.Element.value;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text = value;
                    this.Element.value = value;
                }
            },
            UseSystemPasswordChar: {
                get: function () {
                    return this._useSystemPasswordChar;
                },
                set: function (value) {
                    this._useSystemPasswordChar = value;
                    if (this._useSystemPasswordChar) {
                        this.Element.type = "password";
                    } else {
                        this.Element.type = "text";
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, ($t = document.createElement("input"), $t.type = "text", $t));
                //TextChanged
                var workOutEvent = Bridge.fn.bind(this, function (ev) {
                    if (!Bridge.referenceEquals(this.Text, this.prevString)) {
                        this.prevString = this.Text;
                        this.OnTextChanged({ });
                    }

                    return null;
                });

                this.Element.onchange = workOutEvent;
                this.Element.onpaste = workOutEvent;
                this.Element.onkeydown = workOutEvent;
                this.Element.onkeyup = workOutEvent;
                this.Element.onblur = workOutEvent;
            }
        },
        methods: {
            OnTextChanged: function (e) {
                if (!Bridge.staticEquals(this.TextChanged, null)) {
                    this.TextChanged(this, e);
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.Button", {
        inherits: [System.Windows.Forms.ButtonBase],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.ButtonBase.ctor.call(this, document.createElement("button"));

            }
        }
    });

    Bridge.define("System.Windows.Forms.CheckBox", {
        inherits: [System.Windows.Forms.ButtonBase],
        statics: {
            fields: {
                checkboxToLabelId: 0
            }
        },
        fields: {
            checkBox: null,
            text: null
        },
        props: {
            Checked: {
                get: function () {
                    return this.checkBox.checked;
                },
                set: function (value) {
                    this.checkBox.checked = value;
                }
            },
            Text: {
                get: function () {
                    return this.text.textContent;
                },
                set: function (value) {
                    this.text.textContent = value;
                }
            },
            Tag: {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                    if (Bridge.is(this._tag, System.String)) {
                        var str = (System.String.concat(this._tag, ""));
                        if (System.String.contains(str,",")) {
                            var arry = System.String.split(str, [44].map(function(i) {{ return String.fromCharCode(i); }}));
                            this.Element.className = arry[System.Array.index(0, arry)];
                            if (arry.length === 3) {
                                this.checkBox.className = arry[System.Array.index(1, arry)];
                                this.text.className = arry[System.Array.index(2, arry)];
                            } else {
                                this.checkBox.className = "";
                                this.text.className = "";
                            }
                        } else {
                            this.Element.className = str;
                            this.checkBox.className = "";
                            this.text.className = "";
                        }
                    } else {
                        this.Element.className = "";
                        this.checkBox.className = "";
                        this.text.className = "";
                    }
                }
            },
            TabIndex: {
                get: function () {
                    return this._tabIndex;
                },
                set: function (value) {
                    if (this._init) {
                        this._tabIndex = value;
                        if (this.TabStop) {
                            this.checkBox.tabIndex = value;
                        } else {
                            this.checkBox.removeAttribute("TabIndex");
                        }
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                var $t, $t1;
                this.$initialize();
                System.Windows.Forms.ButtonBase.ctor.call(this, document.createElement("div"));
                var id = Bridge.identity(System.Windows.Forms.CheckBox.checkboxToLabelId, ($t = (System.Windows.Forms.CheckBox.checkboxToLabelId + 1) | 0, System.Windows.Forms.CheckBox.checkboxToLabelId = $t, $t));
                var ids = "__check" + (Bridge.toString(id) || "");



                this.Element.appendChild(((this.checkBox = ($t1 = document.createElement("input"), $t1.type = "checkbox", $t1.id = ids, $t1))));
                this.Element.appendChild((this.text = ($t1 = document.createElement("label"), $t1.htmlFor = ids, $t1)));

                this.checkBox.style.cursor = "pointer";
                this.text.style.cursor = "pointer";
            }
        }
    });

    Bridge.define("System.Windows.Forms.Form", {
        inherits: [System.Windows.Forms.ContainerControl],
        statics: {
            fields: {
                _formOverLay: null,
                _formCollections: null,
                _ActiveForm: null,
                _PrevActiveForm: null,
                ToClean: null,
                _minimizedForms: null
            },
            props: {
                ActiveForm: {
                    get: function () {
                        return System.Windows.Forms.Form._ActiveForm;
                    },
                    set: function (value) {
                        if (!Bridge.referenceEquals(System.Windows.Forms.Form._ActiveForm, value)) {
                            System.Windows.Forms.Form._PrevActiveForm = System.Windows.Forms.Form._ActiveForm;

                            if (System.Windows.Forms.Form._ActiveForm != null) {
                                //_ActiveForm.OnLostFocus();
                                if (System.Windows.Forms.Form._ActiveForm.Element != null) {
                                    //if (_ActiveForm.InDesign)
                                    //{
                                    //    _ActiveForm.BodyOverLay.style.visibility = "collapse";
                                    //    return;
                                    //}
                                    //_ActiveForm.BodyOverLay.style.visibility = "visible";
                                }
                            }
                            System.Windows.Forms.Form._ActiveForm = value;
                            if (System.Windows.Forms.Form._ActiveForm != null) {
                                //_ActiveForm.OnGotFocus();
                                if (System.Windows.Forms.Form._ActiveForm.Element != null) {
                                    //_ActiveForm.BodyOverLay.style.visibility = "collapse";
                                    System.Windows.Forms.Form._ActiveForm.BringToFront();
                                }
                            }
                            //if (_PrevActiveForm is FormPopup && ((_ActiveForm != null && !(_ActiveForm is FormPopup)) || _ActiveForm == null))
                            //{
                            //    CloseFormPopups();
                            //}
                        }
                    }
                }
            },
            ctors: {
                init: function () {
                    this._formCollections = new (System.Collections.Generic.List$1(System.Windows.Forms.Form.FormCollection)).ctor();
                    this.ToClean = new (System.Collections.Generic.List$1(System.Windows.Forms.Form)).ctor();
                    this._minimizedForms = new (System.Collections.Generic.List$1(System.Windows.Forms.Form)).ctor();
                },
                ctor: function () {
                    System.Windows.Forms.Form._formOverLay = document.createElement("div");

                    System.Windows.Forms.Form._formOverLay.style.height = "100%";
                    System.Windows.Forms.Form._formOverLay.style.width = "100%";
                    System.Windows.Forms.Form._formOverLay.style.opacity = "0.3";
                    System.Windows.Forms.Form._formOverLay.style.backgroundColor = "grey";
                    System.Windows.Forms.Form._formOverLay.style.position = "absolute";
                    System.Windows.Forms.Form._formOverLay.style.visibility = "visible";

                    System.Windows.Forms.Form._formOverLay.onmousedown = function (ev) {
                        if (document.activeElement != null) {
                            //FormPopup
                            document.activeElement.focus();
                            ev.preventDefault();
                        }
                        return null;
                    };

                    document.body.appendChild(System.Windows.Forms.Form._formOverLay);
                }
            },
            methods: {
                CalculateZOrder: function () {
                    System.Windows.Forms.Form.GetActiveFormCollection();

                    if (System.Windows.Forms.Form._formCollections == null) {
                        return;
                    }
                    System.Windows.Forms.Form._formCollections.remove(null);
                    var count = System.Windows.Forms.Form._formCollections.Count;
                    var zIndex = 1;

                    //var frag = Document.CreateDocumentFragment();

                    System.Windows.Forms.Form._formOverLay.style.opacity = count === 0 ? "" : count === 1 ? "0" : "0.4";

                    for (var x = 0; x < count; x = (x + 1) | 0) {
                        //if(Helper.NotDesktop)
                        //{
                        //    if(x == count - 1)
                        //    {
                        //        frag.AppendChild(FormOverLay);
                        //        zIndex = CalculateZOrder(FormCollections[x], zIndex, frag);
                        //    }
                        //}
                        //else
                        //{
                        //}
                        if (x === ((count - 1) | 0)) {
                            //frag.AppendChild(FormOverLay);
                            System.Windows.Forms.Form._formOverLay.style.zIndex = System.Convert.toString(Bridge.box(zIndex, System.Int32));
                            zIndex = (zIndex + 1) | 0;
                        }
                        zIndex = System.Windows.Forms.Form.CalculateZOrder$1(System.Windows.Forms.Form._formCollections.getItem(x), zIndex); // frag
                    }
                    //zIndex = CalculateZOrder(standAloneForms, zIndex); // frag

                    //WindowHolder.Empty();
                    //WindowHolder.AppendChild(frag);

                    if (System.Windows.Forms.Form.ActiveForm != null) {
                        System.Windows.Forms.Form.ActiveForm.Element.focus();
                    }
                },
                CalculateZOrder$1: function (formCollection, zIndex) {
                    var TopMostForms = new (System.Collections.Generic.List$1(System.Windows.Forms.Form)).ctor();

                    var VisibleForms = formCollection.VisibleForms;
                    if (VisibleForms != null) {
                        for (var i = 0; i < VisibleForms.Count; i = (i + 1) | 0) {
                            if (VisibleForms.getItem(i).Element == null) {
                                System.Windows.Forms.Form.ToClean.add(VisibleForms.getItem(i));
                            } else {
                                //if (VisibleForms[i].TopMost)
                                //    TopMostForms.Add(VisibleForms[i]);
                            }
                        }
                        for (var i1 = 0; i1 < System.Windows.Forms.Form.ToClean.Count; i1 = (i1 + 1) | 0) {
                            if (VisibleForms.contains(System.Windows.Forms.Form.ToClean.getItem(i1))) {
                                VisibleForms.remove(System.Windows.Forms.Form.ToClean.getItem(i1));
                                System.Windows.Forms.Form.ToClean.setItem(i1, null);
                            }
                        }

                        System.Windows.Forms.Form.ToClean.remove(null);

                        if (formCollection.FormOwner != null) {
                            //formCollection.FormOwner.ManagePlaceHolders();
                            formCollection.FormOwner.Element.style.zIndex = System.Convert.toString(Bridge.box(zIndex, System.Int32));
                            zIndex = (zIndex + 1) | 0;
                            //frag.AppendChild(formCollection.FormOwner);

                            //if(Helper.NotDesktop)
                            //{
                            //    if(VisibleForms.Count == 0)
                            //    {
                            //        formCollection.FormOwner.ManagePlaceHolders();
                            //        frag.AppendChild(formCollection.FormOwner);
                            //        return zIndex;
                            //    }
                            //}
                            //else
                            //{
                            //    formCollection.FormOwner.ManagePlaceHolders();
                            //    frag.AppendChild(formCollection.FormOwner);
                            //}
                        }

                        for (var i2 = 0; i2 < TopMostForms.Count; i2 = (i2 + 1) | 0) {
                            var form = TopMostForms.getItem(i2);
                            VisibleForms.remove(form);
                            VisibleForms.add(form);
                        }
                        var length = VisibleForms.Count;
                        for (var i3 = 0; i3 < length; i3 = (i3 + 1) | 0) {
                            if (VisibleForms.getItem(i3) != null && VisibleForms.getItem(i3).Element != null) {
                                //VisibleForms[i].ManagePlaceHolders();
                                VisibleForms.getItem(i3).Element.style.zIndex = System.Convert.toString(Bridge.box(zIndex, System.Int32));
                                zIndex = (zIndex + 1) | 0;
                                //frag.AppendChild(VisibleForms[i]);

                                //if(Helper.NotDesktop)
                                //{
                                //    if(length - 1 == i)
                                //    {
                                //        VisibleForms[i].ManagePlaceHolders();
                                //        frag.AppendChild(VisibleForms[i]);
                                //        return zIndex;
                                //    }
                                //}else
                                //{
                                //    VisibleForms[i].ManagePlaceHolders();
                                //    frag.AppendChild(VisibleForms[i]);
                                //}
                            }
                        }
                    }

                    return zIndex;
                },
                CalculateMinmizedFormsLocation: function () {
                    var $t, $t1;
                    if (System.Windows.Forms.Form._minimizedForms.Count > 0 && System.Windows.Forms.Form._minimizedForms.contains(null)) {
                        System.Windows.Forms.Form._minimizedForms.remove(null);
                    }
                    var RemoveList = new (System.Collections.Generic.List$1(System.Windows.Forms.Form)).ctor();
                    var count = 0;
                    var widthTotal = 0;
                    var y = 30;

                    var viewSize = document.body.getBoundingClientRect();

                    $t = Bridge.getEnumerator(System.Windows.Forms.Form._minimizedForms);
                    try {
                        while ($t.moveNext()) {
                            var item = $t.Current;
                            if (item.Element == null || item.WindowState !== System.Windows.Forms.WindowState.Minimized) {
                                RemoveList.add(item);
                            } else {
                                var ToIncrement = (3 + item.Size.Width) | 0;

                                if (widthTotal + ToIncrement > viewSize.width) {
                                    widthTotal = 0;
                                    count = 0;
                                    y = (y + 33) | 0;
                                }

                                //item.Location = new Vector2(widthTotal, "(100% - " + (y + 2) + "px)");
                                item.Element.style.left = System.String.format("{0}px", [Bridge.box(widthTotal, System.Single, System.Single.format, System.Single.getHashCode)]);
                                item.Element.style.top = "calc(100% - " + (((y + 2) | 0)) + "px)";

                                count = (count + 1) | 0;

                                widthTotal += ToIncrement;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$dispose();
                        }
                    }$t1 = Bridge.getEnumerator(RemoveList);
                    try {
                        while ($t1.moveNext()) {
                            var item1 = $t1.Current;
                            System.Windows.Forms.Form._minimizedForms.remove(item1);
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$dispose();
                        }
                    }},
                GetActiveFormCollection: function () {
                    for (var i = (System.Windows.Forms.Form._formCollections.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        var frmCol = System.Windows.Forms.Form._formCollections.getItem(i);
                        if (frmCol.FormOwner == null) {
                            for (var x = 0; x < frmCol.VisibleForms.Count; x = (x + 1) | 0) {
                                if (frmCol.VisibleForms.getItem(x) != null) {
                                    frmCol.VisibleForms.getItem(x).Close();
                                }
                            }
                            System.Windows.Forms.Form._formCollections.removeAt(i);
                        } else {
                            return frmCol;
                        }
                    }

                    return null;
                }
            }
        },
        fields: {
            _formTopBorder: 0,
            _formBottonBorder: 0,
            _formLeftBorder: 0,
            _formRightBorder: 0,
            _allowSizeChange: false,
            _allowMoveChange: false,
            _mouseDownOnBorder: false,
            _formMovementModes: 0,
            DialogResults: null,
            _isDialog: false,
            _inClose: false,
            _inDialogResult: false,
            _windowState: 0,
            DialogResult: 0,
            _prevX: 0,
            _prevY: 0,
            _prevFormX: 0,
            _prevFormY: 0,
            _controlBox: false,
            _formBorderStyle: 0,
            Text: null
        },
        props: {
            WindowState: {
                get: function () {
                    return this._windowState;
                },
                set: function (value) {
                    this._windowState = value;
                }
            },
            ControlBox: {
                get: function () {
                    return this._controlBox;
                },
                set: function (value) {
                    if (this._controlBox !== value) {
                        this._controlBox = value;
                        this._processWinFormView();
                    }
                }
            },
            FormBorderStyle: {
                get: function () {
                    return this._formBorderStyle;
                },
                set: function (value) {
                    if (this._formBorderStyle !== value) {
                        this._formBorderStyle = value;
                        this._processWinFormView();
                    }
                }
            },
            Font: {
                get: function () {
                    return Bridge.ensureBaseProperty(this, "Font").$System$Windows$Forms$Control$Font;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Font").$System$Windows$Forms$Control$Font = value;
                }
            },
            ClientSize: {
                get: function () {
                    return this.GetClientSize(this.Size.$clone());
                },
                set: function (value) {
                    this.Size = this.SetSize(value.$clone());
                }
            }
        },
        ctors: {
            init: function () {
                this._formTopBorder = 31;
                this._formBottonBorder = 1;
                this._formLeftBorder = 1;
                this._formRightBorder = 1;
                this._allowSizeChange = true;
                this._allowMoveChange = true;
                this._mouseDownOnBorder = false;
                this._formMovementModes = System.Windows.Forms.Form.FormMovementModes.None;
                this.DialogResults = new (System.Collections.Generic.List$1(System.Windows.Forms.DialogOption)).ctor();
                this._inDialogResult = false;
                this.DialogResult = System.Windows.Forms.DialogResult.None;
                this._controlBox = true;
            },
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.ContainerControl.ctor.call(this);
                this.Element.setAttribute("scope", "form");

                this.TabStop = false;

                this.Location = new System.Drawing.Point.$ctor1(0, 0);

                this._setBorderWidth();
            }
        },
        methods: {
            OnClosing: function () {

            },
            GetFormCollectionFromForm: function (form) {
                for (var i = 0; i < System.Windows.Forms.Form._formCollections.Count; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(this, System.Windows.Forms.Form._formCollections.getItem(i).FormOwner)) {
                        return System.Windows.Forms.Form._formCollections.getItem(i);
                    }
                    var visibleForms = System.Windows.Forms.Form._formCollections.getItem(i).VisibleForms;
                    for (var x = 0; x < visibleForms.Count; x = (x + 1) | 0) {
                        if (Bridge.referenceEquals(visibleForms.getItem(x), this)) {
                            return System.Windows.Forms.Form._formCollections.getItem(i);
                        }
                    }
                }

                return null;
            },
            Close: function () {
                if (this._isDialog && this._inDialogResult) {
                    return;
                }

                this._inClose = true;

                this.OnClosing();

                System.Windows.Forms.Form.ToClean.add(this);

                var ownerFormCollection = this.GetFormCollectionFromForm(this);

                if (ownerFormCollection != null) {
                    if (Bridge.referenceEquals(ownerFormCollection.FormOwner, this)) {
                        ownerFormCollection.FormOwner = null;
                        for (var i = 0; i < ownerFormCollection.VisibleForms.Count; i = (i + 1) | 0) {
                            if (Bridge.referenceEquals(ownerFormCollection.VisibleForms.getItem(i), this)) {
                                continue;
                            }
                            ownerFormCollection.VisibleForms.getItem(i).Close();
                        }
                        if (System.Windows.Forms.Form._formCollections.Count === 1) {
                            System.Windows.Forms.Form._formCollections = new (System.Collections.Generic.List$1(System.Windows.Forms.Form.FormCollection)).ctor();
                        }
                    } else {
                        ownerFormCollection.VisibleForms.remove(this);
                    }
                }

                if (this.Element != null) {
                    //if (!ForReuse)
                    //{
                    //    if (Settings.FormFadeDuration > 0)
                    //    {
                    //        Self.fadeOut(Settings.FormFadeDuration, closeAction);
                    //    }
                    //    else
                    //    {
                    //        closeAction();
                    //    }
                    //}
                    //else
                    //{
                    //    Content.style.visibility = "collapse";
                    //}
                    this.Element.style.visibility = "collapse";
                }

                System.Windows.Forms.Form.CalculateZOrder();

                System.Windows.Forms.Form.ActiveForm = System.Windows.Forms.Form._PrevActiveForm;
                if (this._isDialog) {
                    this._inDialogResult = true;
                    if (this.DialogResult !== System.Windows.Forms.DialogResult.None && this.DialogResults != null && this.DialogResults.Count > 0) {
                        for (var i1 = 0; i1 < this.DialogResults.Count; i1 = (i1 + 1) | 0) {
                            this.DialogResults.getItem(i1).InvokeIfResult(this.DialogResult);
                        }
                    }
                }

                this.OnFormClosed();

                this.OnClosed();

                if (this.WindowState === System.Windows.Forms.WindowState.Minimized) {
                    System.Windows.Forms.Form._minimizedForms.remove(this);
                    System.Windows.Forms.Form.CalculateMinmizedFormsLocation();
                }

                this._inClose = false;
            },
            OnFormClosed: function () {

            },
            OnClosed: function () {

            },
            BringToFront: function () {
                var activeCollect = System.Windows.Forms.Form.GetActiveFormCollection();
                if (activeCollect != null) {
                    if (Bridge.referenceEquals(activeCollect.FormOwner, this)) {
                        return;
                    }
                    var visibleForms = activeCollect.VisibleForms;
                    if (visibleForms != null && visibleForms.Count > 1) {
                        visibleForms.remove(this);
                        visibleForms.add(this);
                    }

                    System.Windows.Forms.Form.CalculateZOrder();
                }
            },
            Show: function () {
                if (this._isDialog) {
                    return;
                }
                if ((System.Windows.Forms.Form._formCollections == null || System.Windows.Forms.Form._formCollections.Count === 0)) {
                    this._showStartNewLevel();
                    return;
                }

                var activeCollect = System.Windows.Forms.Form.GetActiveFormCollection();
                var visbileForms = activeCollect.VisibleForms;

                if (!visbileForms.contains(this)) {
                    visbileForms.add(this);
                    this._showForm();

                    System.Windows.Forms.Form.CalculateZOrder();

                    this.OnShowed();

                    this.Resizing();

                    this.OnLoad({ });
                }

                System.Windows.Forms.Form.ActiveForm = this;
            },
            ShowDialog: function (dialogResults) {
                if (dialogResults === void 0) { dialogResults = []; }
                this._inDialogResult = false;

                this._isDialog = true;
                //if (StartPosition != FormStartPosition.Manual)
                //{
                //    if (!Helper.NotDesktop)
                //        StartPosition = FormStartPosition.Center;
                //}
                this._showStartNewLevel();

                if (dialogResults != null && dialogResults.length > 0) {
                    this.DialogResults.addRange(dialogResults);
                }
            },
            _showForm: function () {
                document.body.appendChild(this.Element);
            },
            _showStartNewLevel: function () {
                System.Windows.Forms.Form._formCollections.add(new System.Windows.Forms.Form.FormCollection(this));
                this._showForm();
                System.Windows.Forms.Form.CalculateZOrder();

                //if (StartPosition == FormStartPosition.Center)
                //{
                //    CentreForm();
                //}

                this.OnShowed();

                this.Resizing();

                System.Windows.Forms.Form.ActiveForm = this;

                this.Element.focus();

                this.OnLoad({ });
            },
            OnShowed: function () {

            },
            Resizing: function () {

            },
            OnMouseDown: function (e) {
                System.Windows.Forms.Form.ActiveForm = this;
                // work out area... of click.
                var size = this.Size.$clone();
                this._formMovementModes = System.Windows.Forms.Form.FormMovementModes.None;

                //if(e.X > 1 && e.X < )
                if (this._allowMoveChange) {
                    if (e.X > 1 && e.X <= ((size.Width - this._formRightBorder) | 0) && e.Y > 1 && e.Y <= this._formTopBorder) {
                        this._formMovementModes = System.Windows.Forms.Form.FormMovementModes.Move;
                        this._prevX = (this.Location.X - (((e.X + this.Location.X) | 0))) | 0;
                        this._prevY = (this.Location.Y - (((e.Y + this.Location.Y) | 0))) | 0;

                        this._prevFormX = this.Location.X;
                        this._prevFormY = this.Location.Y;

                        //clientRec.top - mousePos.Yf;
                    }
                }

                this._mouseDownOnBorder = true;

                System.Windows.Forms.ContainerControl.prototype.OnMouseDown.call(this, e);
            },
            OnMouseUp: function (e) {
                this._mouseDownOnBorder = false;
                System.Windows.Forms.ContainerControl.prototype.OnMouseUp.call(this, e);
            },
            OnMouseMove: function (e) {
                // is mouse down???
                if (this._mouseDownOnBorder) {
                    if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.Move) {
                        this.Location = new System.Drawing.Point.$ctor1((((((this.Location.X + e.X) | 0)) + this._prevX) | 0), (((((this.Location.Y + e.Y) | 0)) + this._prevY) | 0));
                        //var newX = ((mX = mousePos.Xf) + MovingForm.prev_px);
                        //var newY = ((mY = mousePos.Yf) + MovingForm.prev_py);
                    }
                    // we should do some action regarding this... etc move form, resize in direction.

                }
                System.Windows.Forms.ContainerControl.prototype.OnMouseMove.call(this, e);
            },
            _processWinFormView: function () {
                var clientSize = this.ClientSize.$clone();
                // need to allow for custom size per style - currently set as windows 10.
                switch (this._formBorderStyle) {
                    case System.Windows.Forms.FormBorderStyle.None: 
                        this._formTopBorder = 0;
                        this._formBottonBorder = 0;
                        this._formLeftBorder = 0;
                        this._formRightBorder = 0;
                        this._allowSizeChange = false;
                        break;
                    case System.Windows.Forms.FormBorderStyle.FixedSingle: 
                        this._allowSizeChange = false;
                        if (!this.ControlBox) {
                            this._formTopBorder = 1;
                        } else {
                            this._formTopBorder = 31;
                        }
                        this._formBottonBorder = 1;
                        this._formLeftBorder = 1;
                        this._formRightBorder = 1;
                        break;
                    case System.Windows.Forms.FormBorderStyle.Fixed3D: 
                        this._allowSizeChange = false;
                        if (!this.ControlBox) {
                            this._formTopBorder = 3;
                            this._formBottonBorder = 3;
                            this._formLeftBorder = 3;
                            this._formRightBorder = 3;
                        } else {
                            this._formTopBorder = 31;
                            this._formBottonBorder = 1;
                            this._formLeftBorder = 1;
                            this._formRightBorder = 1;
                        }
                        break;
                    case System.Windows.Forms.FormBorderStyle.FixedDialog: 
                        this._allowSizeChange = false;
                        if (!this.ControlBox) {
                            this._formTopBorder = 2;
                            this._formBottonBorder = 2;
                            this._formLeftBorder = 2;
                            this._formRightBorder = 2;
                        } else {
                            this._formTopBorder = 31;
                            this._formBottonBorder = 1;
                            this._formLeftBorder = 1;
                            this._formRightBorder = 1;
                        }
                        break;
                    case System.Windows.Forms.FormBorderStyle.Sizable: 
                        if (!this.ControlBox) {
                            this._formTopBorder = 8;
                        } else {
                            this._formTopBorder = 31;
                        }
                        this._formBottonBorder = 1;
                        this._formLeftBorder = 1;
                        this._formRightBorder = 1;
                        this._allowSizeChange = true;
                        break;
                    case System.Windows.Forms.FormBorderStyle.FixedToolWindow: 
                        if (!this.ControlBox) {
                            this._formTopBorder = 1;
                        } else {
                            this._formTopBorder = 31;
                        }
                        this._formBottonBorder = 0;
                        this._formLeftBorder = 0;
                        this._formRightBorder = 0;
                        this._allowSizeChange = false;
                        break;
                    case System.Windows.Forms.FormBorderStyle.SizableToolWindow: 
                        if (!this.ControlBox) {
                            this._formTopBorder = 8;
                        } else {
                            this._formTopBorder = 31;
                        }
                        this._formBottonBorder = 1;
                        this._formLeftBorder = 1;
                        this._formRightBorder = 1;
                        this._allowSizeChange = true;
                        break;
                    default: 
                        break;
                }

                this._setBorderWidth();

                this.ClientSize = clientSize.$clone();
            },
            _setBorderWidth: function () {
                this.Element.style.borderTopWidth = this._formTopBorder + "px";
                this.Element.style.borderBottomWidth = this._formBottonBorder + "px";
                this.Element.style.borderLeftWidth = this._formLeftBorder + "px";
                this.Element.style.borderRightWidth = this._formRightBorder + "px";
            },
            GetClientSize: function (size) {
                return new System.Drawing.Size.$ctor1(((size.Width - (((this._formLeftBorder + this._formRightBorder) | 0))) | 0), ((size.Height - (((this._formTopBorder + this._formBottonBorder) | 0))) | 0));
            },
            SetSize: function (clientSize) {
                return new System.Drawing.Size.$ctor1(((clientSize.Width + (((this._formLeftBorder + this._formRightBorder) | 0))) | 0), ((clientSize.Height + (((this._formTopBorder + this._formBottonBorder) | 0))) | 0));
            },
            Dispose: function (disposing) {

            }
        }
    });

    Bridge.define("System.Windows.Forms.Panel", {
        inherits: [System.Windows.Forms.ContainerControl],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.ContainerControl.ctor.call(this);
                this.TabStop = false;
            }
        }
    });

    Bridge.define("System.Windows.Forms.TabPage", {
        inherits: [System.Windows.Forms.Panel],
        fields: {
            Header: null,
            UseVisualStyleBackColor: false
        },
        props: {
            Text: {
                get: function () {
                    return this.Header.Text;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this.Header.Text, value)) {
                        this.Header.Text = value;
                        if (Bridge.is(this.Parent, System.Windows.Forms.TabControl)) {
                            this.Parent.ResizeTabHeaderSize();
                        }
                    }
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Panel.ctor.call(this);
                this.Header = new System.Windows.Forms.TabPageHeader();
                this.Header.addClick(Bridge.fn.cacheBind(this, this.Header_Click));
                this.Element.setAttribute("scope", "tabpage");
            }
        },
        methods: {
            Header_Click: function (sender, e) {
                if (Bridge.is(this.Parent, System.Windows.Forms.TabControl)) {
                    var pages = this.Parent.TabPages;
                    for (var i = 0; i < pages.length; i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(pages[System.Array.index(i, pages)], this)) {
                            this.Parent.SelectedIndex = i;
                            return;
                        }
                    }
                    this.Parent.SelectedIndex = -1;
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDbGFzc2ljRm9ybXMuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkRhdGEvRGF0YUNvbHVtbi5jcyIsIkRhdGEvRGF0YUNvbHVtbkNvbGxlY3Rpb24uY3MiLCJEYXRhL0RhdGFSb3cuY3MiLCJEYXRhL0RhdGFSb3dDb2xsZWN0aW9uLmNzIiwiRGF0YS9EYXRhVGFibGUuY3MiLCJEcmF3aW5nL0NvbG9yLmNzIiwiRHJhd2luZy9Gb250LmNzIiwiRHJhd2luZy9Qb2ludC5jcyIsIkRyYXdpbmcvU2l6ZS5jcyIsIkRyYXdpbmcvU2l6ZUYuY3MiLCJEcmF3aW5nL1N5c3RlbUNvbG9ycy5jcyIsIldpbmRvd3MvRm9ybXMvQ29udHJvbC5jcyIsIldpbmRvd3MvRm9ybXMvRGF0YUdyaWRWaWV3Q29sdW1uLmNzIiwiV2luZG93cy9Gb3Jtcy9EaWFsb2dSZXN1bHQuY3MiLCJXaW5kb3dzL0Zvcm1zL0Zvcm0uY3MiLCJXaW5kb3dzL0Zvcm1zL0xpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyLmNzIiwiV2luZG93cy9Gb3Jtcy9Nb3VzZUV2ZW50QXJncy5jcyIsIldpbmRvd3MvRm9ybXMvT2JqZWN0Q29sbGVjdGlvbi5jcyIsIldpbmRvd3MvRm9ybXMvUGFkZGluZy5jcyIsIldpbmRvd3MvRm9ybXMvQnV0dG9uQmFzZS5jcyIsIldpbmRvd3MvRm9ybXMvQ29tYm9Cb3guY3MiLCJXaW5kb3dzL0Zvcm1zL0NvbnRhaW5lckNvbnRyb2wuY3MiLCJXaW5kb3dzL0Zvcm1zL0NvbnRyb2xDb2xsZWN0aW9uLmNzIiwiV2luZG93cy9Gb3Jtcy9EYXRhR3JpZFZpZXcuY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0dyb3VwQm94LmNzIiwiV2luZG93cy9Gb3Jtcy9MYWJlbC5jcyIsIldpbmRvd3MvRm9ybXMvTGlua0xhYmVsLmNzIiwiV2luZG93cy9Gb3Jtcy9Qcm9ncmVzc0Jhci5jcyIsIldpbmRvd3MvRm9ybXMvVGFiQ29udHJvbC5jcyIsIldpbmRvd3MvRm9ybXMvVGFiUGFnZUhlYWRlci5jcyIsIldpbmRvd3MvRm9ybXMvVGV4dEJveC5jcyIsIldpbmRvd3MvRm9ybXMvQnV0dG9uLmNzIiwiV2luZG93cy9Gb3Jtcy9DaGVja0JveC5jcyIsIldpbmRvd3MvRm9ybXMvUGFuZWwuY3MiLCJXaW5kb3dzL0Zvcm1zL1RhYlBhZ2UuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVkwQkEsT0FBaUJBOztnQkFFL0JBLFlBQU9BO2dCQUNQQSxhQUFRQTs7Ozs7Ozs7Ozs7OztvQkNTVUEsT0FBT0E7Ozs7OzRCQUVDQTs7Z0JBRTFCQSxhQUFRQTtnQkFDUkEsZUFBVUEsS0FBSUE7Ozs7O3NDQWhCUUE7Z0JBRXRCQSxLQUFLQSxXQUFXQSxJQUFJQSxvQkFBZUE7b0JBRS9CQSxJQUFJQSw0Q0FBUUEsU0FBV0E7d0JBQ25CQSxPQUFPQTs7OztnQkFHZkEsT0FBT0E7OzJCQVlXQTtnQkFFbEJBLFdBQVdBLElBQUlBLHVCQUFXQSxZQUFPQTs7Z0JBRWpDQSxpQkFBWUE7O2dCQUVaQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs0QkMxQk1BOztnQkFFYkEsZUFBVUE7Z0JBQ1ZBLFlBQU9BLEtBQUlBLHlEQUFhQTtnQkFDeEJBLGVBQVVBOzs7OytCQUdTQTtnQkFDZkEsT0FBT0EsZUFBS0EsNEJBQXVCQTs7K0JBRHBCQTtnQkFHZkEsZUFBS0EsNEJBQXVCQSxhQUFlQTs7aUNBR2hDQTtnQkFDWEEsSUFBSUEsbUJBQW1CQSxjQUFjQTtvQkFDakNBLE9BQU9BOzs7Z0JBRVhBLE9BQU9BLGtCQUFLQTs7aUNBSkRBO2dCQU1YQSxJQUFJQTtvQkFDQUE7O2dCQUNKQSxJQUFJQSxjQUFjQTtvQkFDZEE7OztnQkFFSkEsSUFBSUEsY0FBY0E7b0JBRWRBLEtBQUtBLFFBQVFBLGlCQUFZQSxJQUFJQSx5QkFBaUJBO3dCQUUxQ0EsU0FBU0E7O3dCQUVUQSxJQUFJQSxNQUFLQTs0QkFFTEEsY0FBU0E7NEJBQ1RBLGVBQWVBLENBQUNBOzs0QkFFaEJBLHlCQUFrRUE7OzRCQUVsRUE7OzRCQUlBQSx5QkFBa0VBOzRCQUNsRUEsY0FBU0E7Ozs7b0JBTWpCQSxzQkFBaUJBLHlCQUF1REEsQ0FBQ0E7b0JBQ3pFQSxrQkFBS0EsYUFBZUE7Ozs7Ozs7Ozs7Ozs0QkNqRExBOztnQkFFdkJBLGFBQVFBO2dCQUNSQSxZQUFPQSxLQUFJQTs7OzsyQkFHQ0E7O2dCQUVaQSxjQUFTQTtnQkFDVEEsb0JBQWVBLFlBQU9BLFVBQUlBLGlEQUF3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDTmxFQSxlQUFVQSxJQUFJQSxpQ0FBcUJBO2dCQUNuQ0EsWUFBT0EsSUFBSUEsOEJBQWtCQTs7Ozs7Z0JBSzdCQSxTQUFTQSxJQUFJQSxvQkFBUUE7O2dCQUVyQkEsT0FBT0E7Ozs7O2dDQVVrQkEsUUFBZUE7Z0JBRXhDQSxJQUFHQSx1Q0FBZUE7b0JBRWRBLGlCQUFZQSxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNScEJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0Es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QUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQTs7O2dCQUtiQSxJQUFJQSxDQUFDQSxXQUFVQSxXQUFXQSxDQUFDQSxXQUFVQTtvQkFFakNBOztnQkFFSkEsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEE7Z0JBQ0FBLFFBQVVBO2dCQUNWQSxRQUFVQTtnQkFDVkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsV0FBYUEsSUFBSUE7Z0JBQ2pCQSxJQUFJQSxNQUFLQTtvQkFFTEEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0E7dUJBRWJBLElBQUlBLE1BQUtBO29CQUVWQSxJQUFJQSxNQUFLQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQTt1QkFFbkJBLElBQUlBLE1BQUtBO29CQUVWQSxJQUFJQSxNQUFLQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQTs7Z0JBRXhCQTtnQkFDQUEsSUFBSUE7b0JBRUFBOztnQkFFSkEsT0FBT0E7OztnQkFPUEEsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEE7Z0JBQ0FBLFFBQVVBO2dCQUNWQSxRQUFVQTtnQkFDVkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsTUFBS0E7b0JBRUxBLE9BQU9BOztnQkFFWEEsUUFBVUEsQ0FBQ0EsSUFBSUE7Z0JBQ2ZBLElBQUlBO29C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QTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUEsZ0RBQWlCQTs7O29CQUtqQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLGdIQUFrQkE7b0JBQ2xCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBOzs7b0JBTWpCQSxRQUFVQTs7b0JBRVZBO29CQUNBQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSxnQ0FBU0E7b0JBQ1RBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFTQTtvQkFDVEEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxn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QUNKQSxLQUFLQTt3QkFDREEsSUFBSUEsQ0FBQ0E7NEJBRURBOzs0QkFJQUE7O3dCQUVKQTt3QkFDQUE7d0JBQ0FBO3dCQUNBQTt3QkFDQUE7b0JBQ0pBLEtBQUtBO3dCQUNEQSxJQUFJQSxDQUFDQTs0QkFFREE7OzRCQUlBQTs7d0JBRUpBO3dCQUNBQTt3QkFDQUE7d0JBQ0FBO3dCQUNBQTtvQkFDSkE7d0JBQ0lBOzs7Z0JBR1JBOztnQkFFQUEsa0JBQWFBOzs7Z0JBS2JBLG9DQUErQkE7Z0JBQy9CQSx1Q0FBa0NBO2dCQUNsQ0EscUNBQWdDQTtnQkFDaENBLHNDQUFpQ0E7O3FDQU9WQTtnQkFFdkJBLE9BQU9BLElBQUlBLDJCQUFLQSxlQUFhQSxDQUFDQSx5QkFBa0JBLG9DQUFtQkEsZ0JBQWNBLENBQUNBLHdCQUFpQkE7OytCQUdsRkE7Z0JBRWpCQSxPQUFPQSxJQUFJQSwyQkFBS0EscUJBQW1CQSxDQUFDQSx5QkFBa0JBLG9DQUFtQkEsc0JBQW9CQSxDQUFDQSx3QkFBaUJBOzsrQkFHcEZBOzs7Ozs7Ozs7Ozs7Z0JxQm53QjNCQTs7Ozs7Ozs7Ozs7Ozs7b0JDNkJJQSxPQUFPQTs7O29CQUtQQSxJQUFHQSwwQ0FBZUE7d0JBRWRBLG1CQUFjQTt3QkFDZEEsSUFBR0E7NEJBRUNBOzs7Ozs7Ozs7O2dCQXBDWkEsY0FBU0EsSUFBSUE7Z0JBQ2JBLHFCQUFnQkE7Z0JBQ2hCQTs7OztvQ0FHc0JBLFFBQWVBO2dCQUVyQ0EsSUFBR0E7b0JBRUNBLFlBQVlBO29CQUNaQSxLQUFLQSxXQUFXQSxJQUFJQSxjQUFjQTt3QkFFOUJBLElBQUdBLGdEQUFNQSxHQUFOQSxTQUFZQTs0QkFFWEEsNEJBQXdDQTs0QkFDeENBOzs7b0JBR1JBLDRCQUF3Q0EiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhQ29sdW1uXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhVGFibGUgVGFibGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFDb2x1bW4oRGF0YVRhYmxlIHRhYmxlLCBzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBUYWJsZSA9IHRhYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRhdGFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFDb2x1bW5Db2xsZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFUYWJsZSBUYWJsZSB7Z2V0O3ByaXZhdGUgc2V0O31cclxuICAgICAgICBpbnRlcm5hbCBMaXN0PERhdGFDb2x1bW4+IENvbHVtbnM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgR2V0Q29sdW1uSW5kZXgoc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IENvbHVtbnMuQ291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKENvbHVtbnNbaV0uTmFtZSA9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IENvdW50IHtnZXR7cmV0dXJuIENvbHVtbnMuQ291bnQ7fX1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgRGF0YUNvbHVtbkNvbGxlY3Rpb24oRGF0YVRhYmxlIHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFibGUgPSB0YWJsZTtcclxuICAgICAgICAgICAgQ29sdW1ucyA9IG5ldyBMaXN0PERhdGFDb2x1bW4+KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERhdGFDb2x1bW4gQWRkKHN0cmluZyBjb2x1bW5OYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRGF0YUNvbHVtbihUYWJsZSwgY29sdW1uTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBDb2x1bW5zLkFkZChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YVJvd1xyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQgRWxlbWVudDsgICAgICAgIFxyXG4gICAgICAgIGludGVybmFsIExpc3Q8b2JqZWN0PiBkYXRhO1xyXG4gICAgICAgIHB1YmxpYyBEYXRhQ29sdW1uQ29sbGVjdGlvbiBDb2x1bW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIGludGVybmFsIERhdGFSb3coRGF0YUNvbHVtbkNvbGxlY3Rpb24gY29sdW1ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbHVtbnMgPSBjb2x1bW5zO1xyXG4gICAgICAgICAgICBkYXRhID0gbmV3IExpc3Q8b2JqZWN0PihDb2x1bW5zLkNvdW50KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgRWxlbWVudCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbmV3IG9iamVjdCB0aGlzW3N0cmluZyBjb2x1bW5OYW1lXSB7IGdldCB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tDb2x1bW5zLkdldENvbHVtbkluZGV4KGNvbHVtbk5hbWUpXTtcclxuICAgICAgICAgICAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tDb2x1bW5zLkdldENvbHVtbkluZGV4KGNvbHVtbk5hbWUpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb2JqZWN0IHRoaXNbaW50IGNvbHVtbkluZGV4XSB7IGdldCB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggPCAwIHx8IGNvbHVtbkluZGV4ID4gQ29sdW1ucy5Db3VudCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbY29sdW1uSW5kZXhdO1xyXG4gICAgICAgICAgICB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA+IENvbHVtbnMuQ291bnQgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggPiBkYXRhLkNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gZGF0YS5Db3VudDsgaSA8IGNvbHVtbkluZGV4ICsgMTsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRjID0gbmV3IFJldHlwZWQuZG9tLkhUTUxUYWJsZURhdGFDZWxsRWxlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gY29sdW1uSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRjLmlubmVyVGV4dCA9ICh2YWx1ZSArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50PihkYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQ+KGRjKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNoaWxkcmVuW2NvbHVtbkluZGV4XS5BczxSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oKS5pbm5lclRleHQgPSAodmFsdWUgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2NvbHVtbkluZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9ICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YVJvd0NvbGxlY3Rpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGF0YVRhYmxlIFRhYmxlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIGludGVybmFsIExpc3Q8RGF0YVJvdz4gcm93cztcclxuXHJcbiAgICAgICAgaW50ZXJuYWwgRGF0YVJvd0NvbGxlY3Rpb24oRGF0YVRhYmxlIHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFibGUgPSB0YWJsZTtcclxuICAgICAgICAgICAgcm93cyA9IG5ldyBMaXN0PERhdGFSb3c+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoRGF0YVJvdyBkcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvd3MuQWRkKGRyKTtcclxuICAgICAgICAgICAgVGFibGUuT25OZXdSb3coVGFibGUsIG5ldyBXaW5kb3dzLkZvcm1zLk5ld1Jvd0V2ZW50QXJncygpIHsgUm93ID0gZHIgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRhdGFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFUYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEYXRhQ29sdW1uQ29sbGVjdGlvbiBDb2x1bW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhUm93Q29sbGVjdGlvbiBSb3dzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YVRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENvbHVtbnMgPSBuZXcgRGF0YUNvbHVtbkNvbGxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgICAgIFJvd3MgPSBuZXcgRGF0YVJvd0NvbGxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBEYXRhUm93IE5ld1JvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHIgPSBuZXcgRGF0YVJvdyhDb2x1bW5zKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFjY2VwdENoYW5nZXMoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgTmV3Um93RXZlbnRIYW5kbGVyIE5ld1Jvd0V2ZW50O1xyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIE9uTmV3Um93KG9iamVjdCBzZW5kZXIsIE5ld1Jvd0V2ZW50QXJncyBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoTmV3Um93RXZlbnQgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgTmV3Um93RXZlbnQoc2VuZGVyLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRHJhd2luZ1xyXG57XHJcbiAgICBwdWJsaWMgc3RydWN0IENvbG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvciBFbXB0eTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzaG9ydCBTdGF0ZUtub3duQ29sb3JWYWxpZDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzaG9ydCBTdGF0ZUFSR0JWYWx1ZVZhbGlkO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNob3J0IFN0YXRlVmFsdWVNYXNrO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNob3J0IFN0YXRlTmFtZVZhbGlkO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxvbmcgTm90RGVmaW5lZFZhbHVlO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFSR0JBbHBoYVNoaWZ0ID0gMHgxODtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBBUkdCUmVkU2hpZnQgPSAweDEwO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFSR0JHcmVlblNoaWZ0ID0gODtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBBUkdCQmx1ZVNoaWZ0ID0gMDtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmluZyBuYW1lO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbG9uZyB2YWx1ZTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHNob3J0IGtub3duQ29sb3I7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzaG9ydCBzdGF0ZTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUcmFuc3BhcmVudFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5UcmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWxpY2VCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFsaWNlQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQW50aXF1ZVdoaXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFudGlxdWVXaGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXF1YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BcXVhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBcXVhbWFyaW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFxdWFtYXJpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEF6dXJlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkF6dXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCZWlnZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CZWlnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmlzcXVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJpc3F1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmxhY2tcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmxhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJsYW5jaGVkQWxtb25kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJsYW5jaGVkQWxtb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJsdWVWaW9sZXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmx1ZVZpb2xldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnJvd25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQnJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJ1cmx5V29vZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CdXJseVdvb2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENhZGV0Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5DYWRldEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENoYXJ0cmV1c2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ2hhcnRyZXVzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ2hvY29sYXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNob2NvbGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29yYWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29yYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvcm5mbG93ZXJCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvcm5mbG93ZXJCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb3Juc2lsa1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db3Juc2lsayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ3JpbXNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Dcmltc29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDeWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkN5YW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrQ3lhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrQ3lhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0dvbGRlbnJvZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrR29sZGVucm9kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrR3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0toYWtpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtLaGFraSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya01hZ2VudGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya01hZ2VudGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtPbGl2ZUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtPbGl2ZUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrT3JhbmdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtPcmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtPcmNoaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya09yY2hpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1JlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrUmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrU2FsbW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtTYWxtb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtTZWFHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrU2VhR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtTbGF0ZUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1NsYXRlQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1NsYXRlR3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrU2xhdGVHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrVHVycXVvaXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtUdXJxdW9pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtWaW9sZXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1Zpb2xldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGVlcFBpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGVlcFBpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERlZXBTa3lCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRlZXBTa3lCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEaW1HcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRpbUdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERvZGdlckJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRG9kZ2VyQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRmlyZWJyaWNrXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkZpcmVicmljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRmxvcmFsV2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRmxvcmFsV2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZvcmVzdEdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkZvcmVzdEdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGdWNoc2lhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkZ1Y2hzaWEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdhaW5zYm9yb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HYWluc2Jvcm8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdob3N0V2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR2hvc3RXaGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR29sZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Hb2xkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHb2xkZW5yb2RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR29sZGVucm9kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHcmVlblllbGxvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HcmVlblllbGxvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSG9uZXlkZXdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSG9uZXlkZXcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEhvdFBpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSG90UGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5kaWFuUmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluZGlhblJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5kaWdvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluZGlnbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSXZvcnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSXZvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEtoYWtpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLktoYWtpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMYXZlbmRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MYXZlbmRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGF2ZW5kZXJCbHVzaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MYXZlbmRlckJsdXNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMYXduR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGF3bkdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMZW1vbkNoaWZmb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGVtb25DaGlmZm9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodENvcmFsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0Q29yYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0Q3lhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodEN5YW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0R29sZGVucm9kWWVsbG93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0R29sZGVucm9kWWVsbG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodEdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0R3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0R3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodEdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0UGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFBpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U2FsbW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U2FsbW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFNlYUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U2VhR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U2t5Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFNreUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U2xhdGVHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U2xhdGVHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFN0ZWVsQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFN0ZWVsQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRZZWxsb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRZZWxsb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGltZUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpbWVHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGluZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGluZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1hZ2VudGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWFnZW50YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWFyb29uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1hcm9vbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtQXF1YW1hcmluZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1BcXVhbWFyaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1CbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bU9yY2hpZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1PcmNoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVB1cnBsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1QdXJwbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVNlYUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVNlYUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1TbGF0ZUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtU2xhdGVCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1TcHJpbmdHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1TcHJpbmdHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtVHVycXVvaXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVR1cnF1b2lzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtVmlvbGV0UmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVZpb2xldFJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWlkbmlnaHRCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1pZG5pZ2h0Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWludENyZWFtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1pbnRDcmVhbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWlzdHlSb3NlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1pc3R5Um9zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTW9jY2FzaW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTW9jY2FzaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE5hdmFqb1doaXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk5hdmFqb1doaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBOYXZ5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk5hdnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE9sZExhY2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuT2xkTGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT2xpdmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuT2xpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE9saXZlRHJhYlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PbGl2ZURyYWIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE9yYW5nZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PcmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE9yYW5nZVJlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PcmFuZ2VSZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE9yY2hpZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PcmNoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBhbGVHb2xkZW5yb2RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFsZUdvbGRlbnJvZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFsZUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBhbGVHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFsZVR1cnF1b2lzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYWxlVHVycXVvaXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYWxlVmlvbGV0UmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBhbGVWaW9sZXRSZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBhcGF5YVdoaXBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFwYXlhV2hpcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGVhY2hQdWZmXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBlYWNoUHVmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGVydVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QZXJ1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQaW5rXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBsdW1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGx1bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUG93ZGVyQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Qb3dkZXJCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQdXJwbGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUHVycGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBSb3N5QnJvd25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUm9zeUJyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBSb3lhbEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUm95YWxCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTYWRkbGVCcm93blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TYWRkbGVCcm93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2FsbW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNhbG1vbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2FuZHlCcm93blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TYW5keUJyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTZWFHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TZWFHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2VhU2hlbGxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2VhU2hlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNpZW5uYVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TaWVubmEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNpbHZlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TaWx2ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNreUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2t5Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2xhdGVCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNsYXRlQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2xhdGVHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNsYXRlR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU25vd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Tbm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTcHJpbmdHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TcHJpbmdHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU3RlZWxCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlN0ZWVsQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVGFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVGVhbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5UZWFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUaGlzdGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRoaXN0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRvbWF0b1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ub21hdG8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFR1cnF1b2lzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5UdXJxdW9pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFZpb2xldFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5WaW9sZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFdoZWF0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldoZWF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2hpdGVTbW9rZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaGl0ZVNtb2tlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBZZWxsb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuWWVsbG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBZZWxsb3dHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5ZZWxsb3dHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGludGVybmFsIENvbG9yKEtub3duQ29sb3Iga25vd25Db2xvcilcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAwTDtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlS25vd25Db2xvclZhbGlkO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmtub3duQ29sb3IgPSAoc2hvcnQpa25vd25Db2xvcjsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQ29sb3IobG9uZyB2YWx1ZSwgc2hvcnQgc3RhdGUsIHN0cmluZyBuYW1lLCBLbm93bkNvbG9yIGtub3duQ29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5rbm93bkNvbG9yID0gKHNob3J0KWtub3duQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnl0ZSBSXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChieXRlKSgodGhpcy5WYWx1ZSA+PiAweDEwKSAmIDB4ZmZMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ5dGUgR1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYnl0ZSkoKHRoaXMuVmFsdWUgPj4gOCkgJiAweGZmTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBieXRlIEJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGJ5dGUpKHRoaXMuVmFsdWUgJiAweGZmTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBieXRlIEFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGJ5dGUpKCh0aGlzLlZhbHVlID4+IDB4MTgpICYgMHhmZkwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc0tub3duQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCh0aGlzLnN0YXRlICYgU3RhdGVLbm93bkNvbG9yVmFsaWQpID4gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzRW1wdHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzTmFtZWRDb2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlTmFtZVZhbGlkKSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLklzS25vd25Db2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc1N5c3RlbUNvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLklzS25vd25Db2xvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rbm93bkNvbG9yID4gMHgxYSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMua25vd25Db2xvciA+IDB4YTcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW1wbGljaXQgb3BlcmF0b3Igc3RyaW5nKENvbG9yIGNvbG9yKSAgLy8gaW1wbGljaXQgZGlnaXQgdG8gYnl0ZSBjb252ZXJzaW9uIG9wZXJhdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3IuVG9IdG1sKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGltcGxpY2l0IG9wZXJhdG9yIENvbG9yKHN0cmluZyBoZXhWYWx1ZSkgIC8vIGltcGxpY2l0IGRpZ2l0IHRvIGJ5dGUgY29udmVyc2lvbiBvcGVyYXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvbG9yLkZyb21IZXgoaGV4VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgTmFtZUFuZEFSR0JWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwie3tOYW1lPXswfSwgQVJHQj0oezF9LCB7Mn0sIHszfSwgezR9KX19XCIsIHRoaXMuTmFtZSwgdGhpcy5BLCB0aGlzLlIsIHRoaXMuRywgdGhpcy5CKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVOYW1lVmFsaWQpICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5Jc0tub3duQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENvbnZlcnQuVG9TdHJpbmcodGhpcy52YWx1ZSwgMHgxMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgc3RyID0gS25vd25Db2xvclRhYmxlLktub3duQ29sb3JUb05hbWUoKEtub3duQ29sb3IpdGhpcy5rbm93bkNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMua25vd25Db2xvci5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGxvbmcgVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZVZhbHVlTWFzaykgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLklzS25vd25Db2xvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGxvbmcpS25vd25Db2xvclRhYmxlLktub3duQ29sb3JUb0FyZ2IoKEtub3duQ29sb3IpdGhpcy5rbm93bkNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBOb3REZWZpbmVkVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgQ2hlY2tCeXRlKGludCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgodmFsdWUgPCAwKSB8fCAodmFsdWUgPiAweGZmKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50RXhjZXB0aW9uKFwiSW52YWxpZEV4MkJvdW5kQXJndW1lbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxvbmcgTWFrZUFyZ2IoYnl0ZSBhbHBoYSwgYnl0ZSByZWQsIGJ5dGUgZ3JlZW4sIGJ5dGUgYmx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYWxwaGEgPDwgMjQpIHwgKHJlZCA8PCAxNikgfCAoZ3JlZW4gPDwgOCkgfCBibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGcm9tQXJnYihpbnQgYXJnYilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoYXJnYiAmICgobG9uZykweGZmZmZmZmZmTCksIFN0YXRlQVJHQlZhbHVlVmFsaWQsIG51bGwsIChLbm93bkNvbG9yKTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGcm9tQXJnYihpbnQgYWxwaGEsIGludCByZWQsIGludCBncmVlbiwgaW50IGJsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoYWxwaGEpO1xyXG4gICAgICAgICAgICBDaGVja0J5dGUocmVkKTtcclxuICAgICAgICAgICAgQ2hlY2tCeXRlKGdyZWVuKTtcclxuICAgICAgICAgICAgQ2hlY2tCeXRlKGJsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1ha2VBcmdiKChieXRlKWFscGhhLCAoYnl0ZSlyZWQsIChieXRlKWdyZWVuLCAoYnl0ZSlibHVlKSwgU3RhdGVBUkdCVmFsdWVWYWxpZCwgbnVsbCwgKEtub3duQ29sb3IpMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCBhbHBoYSwgQ29sb3IgYmFzZUNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2hlY2tCeXRlKGFscGhhKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihNYWtlQXJnYigoYnl0ZSlhbHBoYSwgYmFzZUNvbG9yLlIsIGJhc2VDb2xvci5HLCBiYXNlQ29sb3IuQiksIFN0YXRlQVJHQlZhbHVlVmFsaWQsIG51bGwsIChLbm93bkNvbG9yKTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGcm9tQXJnYihpbnQgcmVkLCBpbnQgZ3JlZW4sIGludCBibHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZyb21BcmdiKDB4ZmYsIHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIElzRW51bVZhbGlkKEVudW0gZW51bVZhbHVlLCBpbnQgdmFsdWUsIGludCBtaW5WYWx1ZSwgaW50IG1heFZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgodmFsdWUgPj0gbWluVmFsdWUpICYmICh2YWx1ZSA8PSBtYXhWYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGcm9tS25vd25Db2xvcihLbm93bkNvbG9yIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIGNvbXBvbmVudFRvSGV4KGJ5dGUgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgeCA9IHZhbHVlLlRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgcmV0dXJuICh4Lkxlbmd0aCA9PSAxID8gXCIwXCIgOiBcIlwiKSArIHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIFRvSHRtbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihJc0tub3duQ29sb3IpXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29sb3IuRnJvbUFyZ2IoS25vd25Db2xvclRhYmxlLktub3duQ29sb3JUb0FyZ2IoKEtub3duQ29sb3Ipa25vd25Db2xvcikpLlRvSHRtbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKEEgIT0gMjU1KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiI3swfXsxfXsyfXszfVwiLCBjb21wb25lbnRUb0hleChBKSwgY29tcG9uZW50VG9IZXgoUiksIGNvbXBvbmVudFRvSGV4KEcpLCBjb21wb25lbnRUb0hleChCKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCIjezB9ezF9ezJ9XCIsIGNvbXBvbmVudFRvSGV4KFIpLCBjb21wb25lbnRUb0hleChHKSwgY29tcG9uZW50VG9IZXgoQikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21IZXgoc3RyaW5nIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLlN0YXJ0c1dpdGgoXCIjXCIpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZyb21IZXgodmFsdWUuU3Vic3RyaW5nKDEpKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29sb3IuRnJvbUFyZ2IoU2NyaXB0LlBhcnNlSW50KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBHZXRCcmlnaHRuZXNzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0IHogPSBSIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgeCA9IEcgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCBjID0gQiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHYgPSB6O1xyXG4gICAgICAgICAgICBmbG9hdCBiID0gejtcclxuICAgICAgICAgICAgaWYgKHggPiB2KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA+IHYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4IDwgYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPCBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKCh2ICsgYikgLyAyZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZmxvYXQgR2V0SHVlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5SID09IHRoaXMuRykgJiYgKHRoaXMuRyA9PSB0aGlzLkIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxvYXQgeiA9IFIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB4ID0gRyAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IGMgPSBCIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgdiA9IDBmO1xyXG4gICAgICAgICAgICBmbG9hdCBiID0gejtcclxuICAgICAgICAgICAgZmxvYXQgbiA9IHo7XHJcbiAgICAgICAgICAgIGlmICh4ID4gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPiBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA8IG4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG4gPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjIDwgbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxvYXQgbnVtNiA9IGIgLSBuO1xyXG4gICAgICAgICAgICBpZiAoeiA9PSBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0gKHggLSBjKSAvIG51bTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoeCA9PSBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0gMmYgKyAoKGMgLSB6KSAvIG51bTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT0gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IDRmICsgKCh6IC0geCkgLyBudW02KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2ICo9IDYwZjtcclxuICAgICAgICAgICAgaWYgKHYgPCAwZilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiArPSAzNjBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgZmxvYXQgcSA9IDI1NWY7XHJcblxyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBHZXRTYXR1cmF0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZsb2F0IHogPSBSIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgeCA9IEcgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCBjID0gQiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHYgPSAwZjtcclxuICAgICAgICAgICAgZmxvYXQgYiA9IHo7XHJcbiAgICAgICAgICAgIGZsb2F0IG4gPSB6O1xyXG4gICAgICAgICAgICBpZiAoeCA+IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjID4gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPCBuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA8IG4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG4gPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09IG4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsb2F0IG0gPSAoYiArIG4pIC8gMmY7XHJcbiAgICAgICAgICAgIGlmIChtIDw9IDAuNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoYiAtIG4pIC8gKGIgKyBuKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgoYiAtIG4pIC8gKCgyZiAtIGIpIC0gbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBUb0FyZ2IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChpbnQpdGhpcy5WYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBLbm93bkNvbG9yIFRvS25vd25Db2xvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKEtub3duQ29sb3IpdGhpcy5rbm93bkNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTdHJpbmdCdWlsZGVyIGJ1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcigweDIwKTtcclxuICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQoYmFzZS5HZXRUeXBlKCkuTmFtZSk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKFwiIFtcIik7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlTmFtZVZhbGlkKSAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLkFwcGVuZCh0aGlzLk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVLbm93bkNvbG9yVmFsaWQpICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKHRoaXMuTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZVZhbHVlTWFzaykgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5BcHBlbmRGb3JtYXQoXCJBPXswfSwgUj17MX0sIEc9ezJ9LCBCPXszfVwiLCBBLCBSLCBHLCBCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKFwiRW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQoXCJdXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlci5Ub1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIG9wZXJhdG9yID09KENvbG9yIGxlZnQsIENvbG9yIHJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCgobGVmdC52YWx1ZSAhPSByaWdodC52YWx1ZSkgfHwgKGxlZnQuc3RhdGUgIT0gcmlnaHQuc3RhdGUpKSB8fCAobGVmdC5rbm93bkNvbG9yICE9IHJpZ2h0Lmtub3duQ29sb3IpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgobGVmdC5uYW1lID09IHJpZ2h0Lm5hbWUpIHx8ICgoKGxlZnQubmFtZSAhPSBudWxsKSAmJiAocmlnaHQubmFtZSAhPSBudWxsKSkgJiYgbGVmdC5uYW1lLkVxdWFscyhyaWdodC5uYW1lKSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIG9wZXJhdG9yICE9KENvbG9yIGxlZnQsIENvbG9yIHJpZ2h0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICEobGVmdCA9PSByaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBFcXVhbHMob2JqZWN0IG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvYmogaXMgQ29sb3IpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvbG9yIGNvbG9yID0gKENvbG9yKW9iajtcclxuICAgICAgICAgICAgICAgIGlmICgoKHRoaXMudmFsdWUgPT0gY29sb3IudmFsdWUpICYmICh0aGlzLnN0YXRlID09IGNvbG9yLnN0YXRlKSkgJiYgKHRoaXMua25vd25Db2xvciA9PSBjb2xvci5rbm93bkNvbG9yKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCh0aGlzLm5hbWUgPT0gY29sb3IubmFtZSkgfHwgKCgodGhpcy5uYW1lICE9IG51bGwpICYmIChjb2xvci5uYW1lICE9IG51bGwpKSAmJiB0aGlzLm5hbWUuRXF1YWxzKHRoaXMubmFtZSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IEdldEhhc2hDb2RlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKHRoaXMudmFsdWUuR2V0SGFzaENvZGUoKSBeIHRoaXMuc3RhdGUuR2V0SGFzaENvZGUoKSkgXiB0aGlzLmtub3duQ29sb3IuR2V0SGFzaENvZGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgQ29sb3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW1wdHkgPSBuZXcgQ29sb3IoKTtcclxuICAgICAgICAgICAgU3RhdGVLbm93bkNvbG9yVmFsaWQgPSAxO1xyXG4gICAgICAgICAgICBTdGF0ZUFSR0JWYWx1ZVZhbGlkID0gMjtcclxuICAgICAgICAgICAgU3RhdGVWYWx1ZU1hc2sgPSBTdGF0ZUFSR0JWYWx1ZVZhbGlkO1xyXG4gICAgICAgICAgICBTdGF0ZU5hbWVWYWxpZCA9IDg7XHJcbiAgICAgICAgICAgIE5vdERlZmluZWRWYWx1ZSA9IDBMO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBLbm93bkNvbG9yXHJcbiAgICB7XHJcbiAgICAgICAgQWN0aXZlQm9yZGVyID0gMSxcclxuICAgICAgICBBY3RpdmVDYXB0aW9uID0gMixcclxuICAgICAgICBBY3RpdmVDYXB0aW9uVGV4dCA9IDMsXHJcbiAgICAgICAgQWxpY2VCbHVlID0gMHgxYyxcclxuICAgICAgICBBbnRpcXVlV2hpdGUgPSAweDFkLFxyXG4gICAgICAgIEFwcFdvcmtzcGFjZSA9IDQsXHJcbiAgICAgICAgQXF1YSA9IDMwLFxyXG4gICAgICAgIEFxdWFtYXJpbmUgPSAweDFmLFxyXG4gICAgICAgIEF6dXJlID0gMHgyMCxcclxuICAgICAgICBCZWlnZSA9IDB4MjEsXHJcbiAgICAgICAgQmlzcXVlID0gMHgyMixcclxuICAgICAgICBCbGFjayA9IDB4MjMsXHJcbiAgICAgICAgQmxhbmNoZWRBbG1vbmQgPSAweDI0LFxyXG4gICAgICAgIEJsdWUgPSAweDI1LFxyXG4gICAgICAgIEJsdWVWaW9sZXQgPSAweDI2LFxyXG4gICAgICAgIEJyb3duID0gMHgyNyxcclxuICAgICAgICBCdXJseVdvb2QgPSA0MCxcclxuICAgICAgICBCdXR0b25GYWNlID0gMHhhOCxcclxuICAgICAgICBCdXR0b25IaWdobGlnaHQgPSAweGE5LFxyXG4gICAgICAgIEJ1dHRvblNoYWRvdyA9IDE3MCxcclxuICAgICAgICBDYWRldEJsdWUgPSAweDI5LFxyXG4gICAgICAgIENoYXJ0cmV1c2UgPSAweDJhLFxyXG4gICAgICAgIENob2NvbGF0ZSA9IDB4MmIsXHJcbiAgICAgICAgQ29udHJvbCA9IDUsXHJcbiAgICAgICAgQ29udHJvbERhcmsgPSA2LFxyXG4gICAgICAgIENvbnRyb2xEYXJrRGFyayA9IDcsXHJcbiAgICAgICAgQ29udHJvbExpZ2h0ID0gOCxcclxuICAgICAgICBDb250cm9sTGlnaHRMaWdodCA9IDksXHJcbiAgICAgICAgQ29udHJvbFRleHQgPSAxMCxcclxuICAgICAgICBDb3JhbCA9IDB4MmMsXHJcbiAgICAgICAgQ29ybmZsb3dlckJsdWUgPSAweDJkLFxyXG4gICAgICAgIENvcm5zaWxrID0gMHgyZSxcclxuICAgICAgICBDcmltc29uID0gMHgyZixcclxuICAgICAgICBDeWFuID0gMHgzMCxcclxuICAgICAgICBEYXJrQmx1ZSA9IDB4MzEsXHJcbiAgICAgICAgRGFya0N5YW4gPSA1MCxcclxuICAgICAgICBEYXJrR29sZGVucm9kID0gMHgzMyxcclxuICAgICAgICBEYXJrR3JheSA9IDB4MzQsXHJcbiAgICAgICAgRGFya0dyZWVuID0gMHgzNSxcclxuICAgICAgICBEYXJrS2hha2kgPSAweDM2LFxyXG4gICAgICAgIERhcmtNYWdlbnRhID0gMHgzNyxcclxuICAgICAgICBEYXJrT2xpdmVHcmVlbiA9IDB4MzgsXHJcbiAgICAgICAgRGFya09yYW5nZSA9IDB4MzksXHJcbiAgICAgICAgRGFya09yY2hpZCA9IDB4M2EsXHJcbiAgICAgICAgRGFya1JlZCA9IDB4M2IsXHJcbiAgICAgICAgRGFya1NhbG1vbiA9IDYwLFxyXG4gICAgICAgIERhcmtTZWFHcmVlbiA9IDB4M2QsXHJcbiAgICAgICAgRGFya1NsYXRlQmx1ZSA9IDB4M2UsXHJcbiAgICAgICAgRGFya1NsYXRlR3JheSA9IDB4M2YsXHJcbiAgICAgICAgRGFya1R1cnF1b2lzZSA9IDB4NDAsXHJcbiAgICAgICAgRGFya1Zpb2xldCA9IDB4NDEsXHJcbiAgICAgICAgRGVlcFBpbmsgPSAweDQyLFxyXG4gICAgICAgIERlZXBTa3lCbHVlID0gMHg0MyxcclxuICAgICAgICBEZXNrdG9wID0gMTEsXHJcbiAgICAgICAgRGltR3JheSA9IDB4NDQsXHJcbiAgICAgICAgRG9kZ2VyQmx1ZSA9IDB4NDUsXHJcbiAgICAgICAgRmlyZWJyaWNrID0gNzAsXHJcbiAgICAgICAgRmxvcmFsV2hpdGUgPSAweDQ3LFxyXG4gICAgICAgIEZvcmVzdEdyZWVuID0gMHg0OCxcclxuICAgICAgICBGdWNoc2lhID0gMHg0OSxcclxuICAgICAgICBHYWluc2Jvcm8gPSAweDRhLFxyXG4gICAgICAgIEdob3N0V2hpdGUgPSAweDRiLFxyXG4gICAgICAgIEdvbGQgPSAweDRjLFxyXG4gICAgICAgIEdvbGRlbnJvZCA9IDB4NGQsXHJcbiAgICAgICAgR3JhZGllbnRBY3RpdmVDYXB0aW9uID0gMHhhYixcclxuICAgICAgICBHcmFkaWVudEluYWN0aXZlQ2FwdGlvbiA9IDB4YWMsXHJcbiAgICAgICAgR3JheSA9IDB4NGUsXHJcbiAgICAgICAgR3JheVRleHQgPSAxMixcclxuICAgICAgICBHcmVlbiA9IDB4NGYsXHJcbiAgICAgICAgR3JlZW5ZZWxsb3cgPSA4MCxcclxuICAgICAgICBIaWdobGlnaHQgPSAxMyxcclxuICAgICAgICBIaWdobGlnaHRUZXh0ID0gMTQsXHJcbiAgICAgICAgSG9uZXlkZXcgPSAweDUxLFxyXG4gICAgICAgIEhvdFBpbmsgPSAweDUyLFxyXG4gICAgICAgIEhvdFRyYWNrID0gMTUsXHJcbiAgICAgICAgSW5hY3RpdmVCb3JkZXIgPSAweDEwLFxyXG4gICAgICAgIEluYWN0aXZlQ2FwdGlvbiA9IDB4MTEsXHJcbiAgICAgICAgSW5hY3RpdmVDYXB0aW9uVGV4dCA9IDB4MTIsXHJcbiAgICAgICAgSW5kaWFuUmVkID0gMHg1MyxcclxuICAgICAgICBJbmRpZ28gPSAweDU0LFxyXG4gICAgICAgIEluZm8gPSAweDEzLFxyXG4gICAgICAgIEluZm9UZXh0ID0gMjAsXHJcbiAgICAgICAgSXZvcnkgPSAweDU1LFxyXG4gICAgICAgIEtoYWtpID0gMHg1NixcclxuICAgICAgICBMYXZlbmRlciA9IDB4NTcsXHJcbiAgICAgICAgTGF2ZW5kZXJCbHVzaCA9IDB4NTgsXHJcbiAgICAgICAgTGF3bkdyZWVuID0gMHg1OSxcclxuICAgICAgICBMZW1vbkNoaWZmb24gPSA5MCxcclxuICAgICAgICBMaWdodEJsdWUgPSAweDViLFxyXG4gICAgICAgIExpZ2h0Q29yYWwgPSAweDVjLFxyXG4gICAgICAgIExpZ2h0Q3lhbiA9IDB4NWQsXHJcbiAgICAgICAgTGlnaHRHb2xkZW5yb2RZZWxsb3cgPSAweDVlLFxyXG4gICAgICAgIExpZ2h0R3JheSA9IDB4NWYsXHJcbiAgICAgICAgTGlnaHRHcmVlbiA9IDB4NjAsXHJcbiAgICAgICAgTGlnaHRQaW5rID0gMHg2MSxcclxuICAgICAgICBMaWdodFNhbG1vbiA9IDB4NjIsXHJcbiAgICAgICAgTGlnaHRTZWFHcmVlbiA9IDB4NjMsXHJcbiAgICAgICAgTGlnaHRTa3lCbHVlID0gMTAwLFxyXG4gICAgICAgIExpZ2h0U2xhdGVHcmF5ID0gMHg2NSxcclxuICAgICAgICBMaWdodFN0ZWVsQmx1ZSA9IDB4NjYsXHJcbiAgICAgICAgTGlnaHRZZWxsb3cgPSAweDY3LFxyXG4gICAgICAgIExpbWUgPSAweDY4LFxyXG4gICAgICAgIExpbWVHcmVlbiA9IDB4NjksXHJcbiAgICAgICAgTGluZW4gPSAweDZhLFxyXG4gICAgICAgIE1hZ2VudGEgPSAweDZiLFxyXG4gICAgICAgIE1hcm9vbiA9IDB4NmMsXHJcbiAgICAgICAgTWVkaXVtQXF1YW1hcmluZSA9IDB4NmQsXHJcbiAgICAgICAgTWVkaXVtQmx1ZSA9IDExMCxcclxuICAgICAgICBNZWRpdW1PcmNoaWQgPSAweDZmLFxyXG4gICAgICAgIE1lZGl1bVB1cnBsZSA9IDB4NzAsXHJcbiAgICAgICAgTWVkaXVtU2VhR3JlZW4gPSAweDcxLFxyXG4gICAgICAgIE1lZGl1bVNsYXRlQmx1ZSA9IDB4NzIsXHJcbiAgICAgICAgTWVkaXVtU3ByaW5nR3JlZW4gPSAweDczLFxyXG4gICAgICAgIE1lZGl1bVR1cnF1b2lzZSA9IDB4NzQsXHJcbiAgICAgICAgTWVkaXVtVmlvbGV0UmVkID0gMHg3NSxcclxuICAgICAgICBNZW51ID0gMHgxNSxcclxuICAgICAgICBNZW51QmFyID0gMHhhZCxcclxuICAgICAgICBNZW51SGlnaGxpZ2h0ID0gMHhhZSxcclxuICAgICAgICBNZW51VGV4dCA9IDB4MTYsXHJcbiAgICAgICAgTWlkbmlnaHRCbHVlID0gMHg3NixcclxuICAgICAgICBNaW50Q3JlYW0gPSAweDc3LFxyXG4gICAgICAgIE1pc3R5Um9zZSA9IDEyMCxcclxuICAgICAgICBNb2NjYXNpbiA9IDB4NzksXHJcbiAgICAgICAgTmF2YWpvV2hpdGUgPSAweDdhLFxyXG4gICAgICAgIE5hdnkgPSAweDdiLFxyXG4gICAgICAgIE9sZExhY2UgPSAweDdjLFxyXG4gICAgICAgIE9saXZlID0gMHg3ZCxcclxuICAgICAgICBPbGl2ZURyYWIgPSAweDdlLFxyXG4gICAgICAgIE9yYW5nZSA9IDB4N2YsXHJcbiAgICAgICAgT3JhbmdlUmVkID0gMHg4MCxcclxuICAgICAgICBPcmNoaWQgPSAweDgxLFxyXG4gICAgICAgIFBhbGVHb2xkZW5yb2QgPSAxMzAsXHJcbiAgICAgICAgUGFsZUdyZWVuID0gMHg4MyxcclxuICAgICAgICBQYWxlVHVycXVvaXNlID0gMHg4NCxcclxuICAgICAgICBQYWxlVmlvbGV0UmVkID0gMHg4NSxcclxuICAgICAgICBQYXBheWFXaGlwID0gMHg4NixcclxuICAgICAgICBQZWFjaFB1ZmYgPSAweDg3LFxyXG4gICAgICAgIFBlcnUgPSAweDg4LFxyXG4gICAgICAgIFBpbmsgPSAweDg5LFxyXG4gICAgICAgIFBsdW0gPSAweDhhLFxyXG4gICAgICAgIFBvd2RlckJsdWUgPSAweDhiLFxyXG4gICAgICAgIFB1cnBsZSA9IDE0MCxcclxuICAgICAgICBSZWQgPSAweDhkLFxyXG4gICAgICAgIFJvc3lCcm93biA9IDB4OGUsXHJcbiAgICAgICAgUm95YWxCbHVlID0gMHg4ZixcclxuICAgICAgICBTYWRkbGVCcm93biA9IDB4OTAsXHJcbiAgICAgICAgU2FsbW9uID0gMHg5MSxcclxuICAgICAgICBTYW5keUJyb3duID0gMHg5MixcclxuICAgICAgICBTY3JvbGxCYXIgPSAweDE3LFxyXG4gICAgICAgIFNlYUdyZWVuID0gMHg5MyxcclxuICAgICAgICBTZWFTaGVsbCA9IDB4OTQsXHJcbiAgICAgICAgU2llbm5hID0gMHg5NSxcclxuICAgICAgICBTaWx2ZXIgPSAxNTAsXHJcbiAgICAgICAgU2t5Qmx1ZSA9IDB4OTcsXHJcbiAgICAgICAgU2xhdGVCbHVlID0gMHg5OCxcclxuICAgICAgICBTbGF0ZUdyYXkgPSAweDk5LFxyXG4gICAgICAgIFNub3cgPSAweDlhLFxyXG4gICAgICAgIFNwcmluZ0dyZWVuID0gMHg5YixcclxuICAgICAgICBTdGVlbEJsdWUgPSAweDljLFxyXG4gICAgICAgIFRhbiA9IDB4OWQsXHJcbiAgICAgICAgVGVhbCA9IDB4OWUsXHJcbiAgICAgICAgVGhpc3RsZSA9IDB4OWYsXHJcbiAgICAgICAgVG9tYXRvID0gMTYwLFxyXG4gICAgICAgIFRyYW5zcGFyZW50ID0gMHgxYixcclxuICAgICAgICBUdXJxdW9pc2UgPSAweGExLFxyXG4gICAgICAgIFZpb2xldCA9IDB4YTIsXHJcbiAgICAgICAgV2hlYXQgPSAweGEzLFxyXG4gICAgICAgIFdoaXRlID0gMHhhNCxcclxuICAgICAgICBXaGl0ZVNtb2tlID0gMHhhNSxcclxuICAgICAgICBXaW5kb3cgPSAweDE4LFxyXG4gICAgICAgIFdpbmRvd0ZyYW1lID0gMHgxOSxcclxuICAgICAgICBXaW5kb3dUZXh0ID0gMHgxYSxcclxuICAgICAgICBZZWxsb3cgPSAweGE2LFxyXG4gICAgICAgIFllbGxvd0dyZWVuID0gMHhhN1xyXG4gICAgfVxyXG5cclxuICAgIGludGVybmFsIHN0YXRpYyBjbGFzcyBLbm93bkNvbG9yVGFibGVcclxuICAgIHtcclxuICAgICAgICAvLyBGaWVsZHNcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBBbHBoYVNoaWZ0ID0gMHgxODtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQmx1ZVNoaWZ0ID0gMDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzdHJpbmdbXSBjb2xvck5hbWVUYWJsZTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnRbXSBjb2xvclRhYmxlO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEdyZWVuU2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IFJlZFNoaWZ0ID0gMHgxMDtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBXaW4zMkJsdWVTaGlmdCA9IDB4MTA7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgV2luMzJHcmVlblNoaWZ0ID0gODtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBXaW4zMlJlZFNoaWZ0ID0gMDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmcgR2V0Q29sb3JOYW1lKGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuc3VyZUNvbG9yTmFtZVRhYmxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvck5hbWVUYWJsZVtpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNZXRob2RzXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBcmdiVG9Lbm93bkNvbG9yKGludCB0YXJnZXRBUkdCKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlQ29sb3JUYWJsZSgpO1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGNvbG9yVGFibGUuTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGludCBudW0yID0gY29sb3JUYWJsZVtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChudW0yID09IHRhcmdldEFSR0IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3IgY29sb3IgPSBDb2xvci5Gcm9tS25vd25Db2xvcigoS25vd25Db2xvcilpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbG9yLklzU3lzdGVtQ29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBDb2xvci5Gcm9tQXJnYih0YXJnZXRBUkdCKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBFbmNvZGUoaW50IGFscGhhLCBpbnQgcmVkLCBpbnQgZ3JlZW4sIGludCBibHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoKChyZWQgPDwgMHgxMCkgfCAoZ3JlZW4gPDwgOCkpIHwgYmx1ZSkgfCAoYWxwaGEgPDwgMHgxOCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBFbnN1cmVDb2xvck5hbWVUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY29sb3JOYW1lVGFibGUgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSW5pdENvbG9yTmFtZVRhYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgRW5zdXJlQ29sb3JUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY29sb3JUYWJsZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJbml0Q29sb3JUYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgRnJvbVdpbjMyVmFsdWUoaW50IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVuY29kZSgweGZmLCB2YWx1ZSAmIDB4ZmYsICh2YWx1ZSA+PiA4KSAmIDB4ZmYsICh2YWx1ZSA+PiAweDEwKSAmIDB4ZmYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBJbml0Q29sb3JOYW1lVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyaW5nW10gcyA9IG5ldyBzdHJpbmdbMHhhZl07XHJcbiAgICAgICAgICAgIHNbMV0gPSBcIkFjdGl2ZUJvcmRlclwiO1xyXG4gICAgICAgICAgICBzWzJdID0gXCJBY3RpdmVDYXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHNbM10gPSBcIkFjdGl2ZUNhcHRpb25UZXh0XCI7XHJcbiAgICAgICAgICAgIHNbNF0gPSBcIkFwcFdvcmtzcGFjZVwiO1xyXG4gICAgICAgICAgICBzWzB4YThdID0gXCJCdXR0b25GYWNlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhOV0gPSBcIkJ1dHRvbkhpZ2hsaWdodFwiO1xyXG4gICAgICAgICAgICBzWzE3MF0gPSBcIkJ1dHRvblNoYWRvd1wiO1xyXG4gICAgICAgICAgICBzWzVdID0gXCJDb250cm9sXCI7XHJcbiAgICAgICAgICAgIHNbNl0gPSBcIkNvbnRyb2xEYXJrXCI7XHJcbiAgICAgICAgICAgIHNbN10gPSBcIkNvbnRyb2xEYXJrRGFya1wiO1xyXG4gICAgICAgICAgICBzWzhdID0gXCJDb250cm9sTGlnaHRcIjtcclxuICAgICAgICAgICAgc1s5XSA9IFwiQ29udHJvbExpZ2h0TGlnaHRcIjtcclxuICAgICAgICAgICAgc1sxMF0gPSBcIkNvbnRyb2xUZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMTFdID0gXCJEZXNrdG9wXCI7XHJcbiAgICAgICAgICAgIHNbMHhhYl0gPSBcIkdyYWRpZW50QWN0aXZlQ2FwdGlvblwiO1xyXG4gICAgICAgICAgICBzWzB4YWNdID0gXCJHcmFkaWVudEluYWN0aXZlQ2FwdGlvblwiO1xyXG4gICAgICAgICAgICBzWzEyXSA9IFwiR3JheVRleHRcIjtcclxuICAgICAgICAgICAgc1sxM10gPSBcIkhpZ2hsaWdodFwiO1xyXG4gICAgICAgICAgICBzWzE0XSA9IFwiSGlnaGxpZ2h0VGV4dFwiO1xyXG4gICAgICAgICAgICBzWzE1XSA9IFwiSG90VHJhY2tcIjtcclxuICAgICAgICAgICAgc1sweDEwXSA9IFwiSW5hY3RpdmVCb3JkZXJcIjtcclxuICAgICAgICAgICAgc1sweDExXSA9IFwiSW5hY3RpdmVDYXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHgxMl0gPSBcIkluYWN0aXZlQ2FwdGlvblRleHRcIjtcclxuICAgICAgICAgICAgc1sweDEzXSA9IFwiSW5mb1wiO1xyXG4gICAgICAgICAgICBzWzIwXSA9IFwiSW5mb1RleHRcIjtcclxuICAgICAgICAgICAgc1sweDE1XSA9IFwiTWVudVwiO1xyXG4gICAgICAgICAgICBzWzB4YWRdID0gXCJNZW51QmFyXCI7XHJcbiAgICAgICAgICAgIHNbMHhhZV0gPSBcIk1lbnVIaWdobGlnaHRcIjtcclxuICAgICAgICAgICAgc1sweDE2XSA9IFwiTWVudVRleHRcIjtcclxuICAgICAgICAgICAgc1sweDE3XSA9IFwiU2Nyb2xsQmFyXCI7XHJcbiAgICAgICAgICAgIHNbMHgxOF0gPSBcIldpbmRvd1wiO1xyXG4gICAgICAgICAgICBzWzB4MTldID0gXCJXaW5kb3dGcmFtZVwiO1xyXG4gICAgICAgICAgICBzWzB4MWFdID0gXCJXaW5kb3dUZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMHgxYl0gPSBcIlRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIHNbMHgxY10gPSBcIkFsaWNlQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MWRdID0gXCJBbnRpcXVlV2hpdGVcIjtcclxuICAgICAgICAgICAgc1szMF0gPSBcIkFxdWFcIjtcclxuICAgICAgICAgICAgc1sweDFmXSA9IFwiQXF1YW1hcmluZVwiO1xyXG4gICAgICAgICAgICBzWzB4MjBdID0gXCJBenVyZVwiO1xyXG4gICAgICAgICAgICBzWzB4MjFdID0gXCJCZWlnZVwiO1xyXG4gICAgICAgICAgICBzWzB4MjJdID0gXCJCaXNxdWVcIjtcclxuICAgICAgICAgICAgc1sweDIzXSA9IFwiQmxhY2tcIjtcclxuICAgICAgICAgICAgc1sweDI0XSA9IFwiQmxhbmNoZWRBbG1vbmRcIjtcclxuICAgICAgICAgICAgc1sweDI1XSA9IFwiQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MjZdID0gXCJCbHVlVmlvbGV0XCI7XHJcbiAgICAgICAgICAgIHNbMHgyN10gPSBcIkJyb3duXCI7XHJcbiAgICAgICAgICAgIHNbNDBdID0gXCJCdXJseVdvb2RcIjtcclxuICAgICAgICAgICAgc1sweDI5XSA9IFwiQ2FkZXRCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyYV0gPSBcIkNoYXJ0cmV1c2VcIjtcclxuICAgICAgICAgICAgc1sweDJiXSA9IFwiQ2hvY29sYXRlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyY10gPSBcIkNvcmFsXCI7XHJcbiAgICAgICAgICAgIHNbMHgyZF0gPSBcIkNvcm5mbG93ZXJCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyZV0gPSBcIkNvcm5zaWxrXCI7XHJcbiAgICAgICAgICAgIHNbMHgyZl0gPSBcIkNyaW1zb25cIjtcclxuICAgICAgICAgICAgc1sweDMwXSA9IFwiQ3lhblwiO1xyXG4gICAgICAgICAgICBzWzB4MzFdID0gXCJEYXJrQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzUwXSA9IFwiRGFya0N5YW5cIjtcclxuICAgICAgICAgICAgc1sweDMzXSA9IFwiRGFya0dvbGRlbnJvZFwiO1xyXG4gICAgICAgICAgICBzWzB4MzRdID0gXCJEYXJrR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4MzVdID0gXCJEYXJrR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDM2XSA9IFwiRGFya0toYWtpXCI7XHJcbiAgICAgICAgICAgIHNbMHgzN10gPSBcIkRhcmtNYWdlbnRhXCI7XHJcbiAgICAgICAgICAgIHNbMHgzOF0gPSBcIkRhcmtPbGl2ZUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzOV0gPSBcIkRhcmtPcmFuZ2VcIjtcclxuICAgICAgICAgICAgc1sweDNhXSA9IFwiRGFya09yY2hpZFwiO1xyXG4gICAgICAgICAgICBzWzB4M2JdID0gXCJEYXJrUmVkXCI7XHJcbiAgICAgICAgICAgIHNbNjBdID0gXCJEYXJrU2FsbW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHgzZF0gPSBcIkRhcmtTZWFHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4M2VdID0gXCJEYXJrU2xhdGVCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgzZl0gPSBcIkRhcmtTbGF0ZUdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDQwXSA9IFwiRGFya1R1cnF1b2lzZVwiO1xyXG4gICAgICAgICAgICBzWzB4NDFdID0gXCJEYXJrVmlvbGV0XCI7XHJcbiAgICAgICAgICAgIHNbMHg0Ml0gPSBcIkRlZXBQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg0M10gPSBcIkRlZXBTa3lCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg0NF0gPSBcIkRpbUdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDQ1XSA9IFwiRG9kZ2VyQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzcwXSA9IFwiRmlyZWJyaWNrXCI7XHJcbiAgICAgICAgICAgIHNbMHg0N10gPSBcIkZsb3JhbFdoaXRlXCI7XHJcbiAgICAgICAgICAgIHNbMHg0OF0gPSBcIkZvcmVzdEdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg0OV0gPSBcIkZ1Y2hzaWFcIjtcclxuICAgICAgICAgICAgc1sweDRhXSA9IFwiR2FpbnNib3JvXCI7XHJcbiAgICAgICAgICAgIHNbMHg0Yl0gPSBcIkdob3N0V2hpdGVcIjtcclxuICAgICAgICAgICAgc1sweDRjXSA9IFwiR29sZFwiO1xyXG4gICAgICAgICAgICBzWzB4NGRdID0gXCJHb2xkZW5yb2RcIjtcclxuICAgICAgICAgICAgc1sweDRlXSA9IFwiR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NGZdID0gXCJHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzgwXSA9IFwiR3JlZW5ZZWxsb3dcIjtcclxuICAgICAgICAgICAgc1sweDUxXSA9IFwiSG9uZXlkZXdcIjtcclxuICAgICAgICAgICAgc1sweDUyXSA9IFwiSG90UGlua1wiO1xyXG4gICAgICAgICAgICBzWzB4NTNdID0gXCJJbmRpYW5SZWRcIjtcclxuICAgICAgICAgICAgc1sweDU0XSA9IFwiSW5kaWdvXCI7XHJcbiAgICAgICAgICAgIHNbMHg1NV0gPSBcIkl2b3J5XCI7XHJcbiAgICAgICAgICAgIHNbMHg1Nl0gPSBcIktoYWtpXCI7XHJcbiAgICAgICAgICAgIHNbMHg1N10gPSBcIkxhdmVuZGVyXCI7XHJcbiAgICAgICAgICAgIHNbMHg1OF0gPSBcIkxhdmVuZGVyQmx1c2hcIjtcclxuICAgICAgICAgICAgc1sweDU5XSA9IFwiTGF3bkdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbOTBdID0gXCJMZW1vbkNoaWZmb25cIjtcclxuICAgICAgICAgICAgc1sweDViXSA9IFwiTGlnaHRCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg1Y10gPSBcIkxpZ2h0Q29yYWxcIjtcclxuICAgICAgICAgICAgc1sweDVkXSA9IFwiTGlnaHRDeWFuXCI7XHJcbiAgICAgICAgICAgIHNbMHg1ZV0gPSBcIkxpZ2h0R29sZGVucm9kWWVsbG93XCI7XHJcbiAgICAgICAgICAgIHNbMHg1Zl0gPSBcIkxpZ2h0R3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NjBdID0gXCJMaWdodEdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg2MV0gPSBcIkxpZ2h0UGlua1wiO1xyXG4gICAgICAgICAgICBzWzB4NjJdID0gXCJMaWdodFNhbG1vblwiO1xyXG4gICAgICAgICAgICBzWzB4NjNdID0gXCJMaWdodFNlYUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMTAwXSA9IFwiTGlnaHRTa3lCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg2NV0gPSBcIkxpZ2h0U2xhdGVHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg2Nl0gPSBcIkxpZ2h0U3RlZWxCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg2N10gPSBcIkxpZ2h0WWVsbG93XCI7XHJcbiAgICAgICAgICAgIHNbMHg2OF0gPSBcIkxpbWVcIjtcclxuICAgICAgICAgICAgc1sweDY5XSA9IFwiTGltZUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg2YV0gPSBcIkxpbmVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg2Yl0gPSBcIk1hZ2VudGFcIjtcclxuICAgICAgICAgICAgc1sweDZjXSA9IFwiTWFyb29uXCI7XHJcbiAgICAgICAgICAgIHNbMHg2ZF0gPSBcIk1lZGl1bUFxdWFtYXJpbmVcIjtcclxuICAgICAgICAgICAgc1sxMTBdID0gXCJNZWRpdW1CbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg2Zl0gPSBcIk1lZGl1bU9yY2hpZFwiO1xyXG4gICAgICAgICAgICBzWzB4NzBdID0gXCJNZWRpdW1QdXJwbGVcIjtcclxuICAgICAgICAgICAgc1sweDcxXSA9IFwiTWVkaXVtU2VhR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDcyXSA9IFwiTWVkaXVtU2xhdGVCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3M10gPSBcIk1lZGl1bVNwcmluZ0dyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg3NF0gPSBcIk1lZGl1bVR1cnF1b2lzZVwiO1xyXG4gICAgICAgICAgICBzWzB4NzVdID0gXCJNZWRpdW1WaW9sZXRSZWRcIjtcclxuICAgICAgICAgICAgc1sweDc2XSA9IFwiTWlkbmlnaHRCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3N10gPSBcIk1pbnRDcmVhbVwiO1xyXG4gICAgICAgICAgICBzWzEyMF0gPSBcIk1pc3R5Um9zZVwiO1xyXG4gICAgICAgICAgICBzWzB4NzldID0gXCJNb2NjYXNpblwiO1xyXG4gICAgICAgICAgICBzWzB4N2FdID0gXCJOYXZham9XaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4N2JdID0gXCJOYXZ5XCI7XHJcbiAgICAgICAgICAgIHNbMHg3Y10gPSBcIk9sZExhY2VcIjtcclxuICAgICAgICAgICAgc1sweDdkXSA9IFwiT2xpdmVcIjtcclxuICAgICAgICAgICAgc1sweDdlXSA9IFwiT2xpdmVEcmFiXCI7XHJcbiAgICAgICAgICAgIHNbMHg3Zl0gPSBcIk9yYW5nZVwiO1xyXG4gICAgICAgICAgICBzWzB4ODBdID0gXCJPcmFuZ2VSZWRcIjtcclxuICAgICAgICAgICAgc1sweDgxXSA9IFwiT3JjaGlkXCI7XHJcbiAgICAgICAgICAgIHNbMTMwXSA9IFwiUGFsZUdvbGRlbnJvZFwiO1xyXG4gICAgICAgICAgICBzWzB4ODNdID0gXCJQYWxlR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDg0XSA9IFwiUGFsZVR1cnF1b2lzZVwiO1xyXG4gICAgICAgICAgICBzWzB4ODVdID0gXCJQYWxlVmlvbGV0UmVkXCI7XHJcbiAgICAgICAgICAgIHNbMHg4Nl0gPSBcIlBhcGF5YVdoaXBcIjtcclxuICAgICAgICAgICAgc1sweDg3XSA9IFwiUGVhY2hQdWZmXCI7XHJcbiAgICAgICAgICAgIHNbMHg4OF0gPSBcIlBlcnVcIjtcclxuICAgICAgICAgICAgc1sweDg5XSA9IFwiUGlua1wiO1xyXG4gICAgICAgICAgICBzWzB4OGFdID0gXCJQbHVtXCI7XHJcbiAgICAgICAgICAgIHNbMHg4Yl0gPSBcIlBvd2RlckJsdWVcIjtcclxuICAgICAgICAgICAgc1sxNDBdID0gXCJQdXJwbGVcIjtcclxuICAgICAgICAgICAgc1sweDhkXSA9IFwiUmVkXCI7XHJcbiAgICAgICAgICAgIHNbMHg4ZV0gPSBcIlJvc3lCcm93blwiO1xyXG4gICAgICAgICAgICBzWzB4OGZdID0gXCJSb3lhbEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDkwXSA9IFwiU2FkZGxlQnJvd25cIjtcclxuICAgICAgICAgICAgc1sweDkxXSA9IFwiU2FsbW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHg5Ml0gPSBcIlNhbmR5QnJvd25cIjtcclxuICAgICAgICAgICAgc1sweDkzXSA9IFwiU2VhR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDk0XSA9IFwiU2VhU2hlbGxcIjtcclxuICAgICAgICAgICAgc1sweDk1XSA9IFwiU2llbm5hXCI7XHJcbiAgICAgICAgICAgIHNbMTUwXSA9IFwiU2lsdmVyXCI7XHJcbiAgICAgICAgICAgIHNbMHg5N10gPSBcIlNreUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDk4XSA9IFwiU2xhdGVCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg5OV0gPSBcIlNsYXRlR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4OWFdID0gXCJTbm93XCI7XHJcbiAgICAgICAgICAgIHNbMHg5Yl0gPSBcIlNwcmluZ0dyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg5Y10gPSBcIlN0ZWVsQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4OWRdID0gXCJUYW5cIjtcclxuICAgICAgICAgICAgc1sweDllXSA9IFwiVGVhbFwiO1xyXG4gICAgICAgICAgICBzWzB4OWZdID0gXCJUaGlzdGxlXCI7XHJcbiAgICAgICAgICAgIHNbMTYwXSA9IFwiVG9tYXRvXCI7XHJcbiAgICAgICAgICAgIHNbMHhhMV0gPSBcIlR1cnF1b2lzZVwiO1xyXG4gICAgICAgICAgICBzWzB4YTJdID0gXCJWaW9sZXRcIjtcclxuICAgICAgICAgICAgc1sweGEzXSA9IFwiV2hlYXRcIjtcclxuICAgICAgICAgICAgc1sweGE0XSA9IFwiV2hpdGVcIjtcclxuICAgICAgICAgICAgc1sweGE1XSA9IFwiV2hpdGVTbW9rZVwiO1xyXG4gICAgICAgICAgICBzWzB4YTZdID0gXCJZZWxsb3dcIjtcclxuICAgICAgICAgICAgc1sweGE3XSA9IFwiWWVsbG93R3JlZW5cIjtcclxuICAgICAgICAgICAgY29sb3JOYW1lVGFibGUgPSBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBVcGRhdGVTeXN0ZW1Db2xvcnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDEwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDIpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzNdID0gU3lzdGVtQ29sb3JUb0FyZ2IoOSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbNF0gPSBTeXN0ZW1Db2xvclRvQXJnYigxMik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTY4XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDE1KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNjldID0gU3lzdGVtQ29sb3JUb0FyZ2IoMjApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3MF0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDEwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs1XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDE1KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs2XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzddID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxNSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbOF0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDE2KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs5XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDIwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxMF0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDEyKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxMV0gPSBTeXN0ZW1Db2xvclRvQXJnYigxKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzFdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxYik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTcyXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MWMpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzEyXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTEpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzEzXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDEzKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNF0gPSBTeXN0ZW1Db2xvclRvQXJnYigxNCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTVdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxYSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTZdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTEpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDMpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE4XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTMpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE5XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTgpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzIwXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTcpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzIxXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDQpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3M10gPSBTeXN0ZW1Db2xvclRvQXJnYigzMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTc0XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MWQpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzIyXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDcpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzIzXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzI0XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDUpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzI1XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDYpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzI2XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgSW5pdENvbG9yVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW50W10gYyA9IG5ldyBpbnRbMHhhZl07XHJcblxyXG4gICAgICAgICAgICBjWzB4MWJdID0gMHhmZmZmZmY7XHJcbiAgICAgICAgICAgIGNbMHgxY10gPSAtOTg0ODMzO1xyXG4gICAgICAgICAgICBjWzB4MWRdID0gLTMzMjg0MTtcclxuICAgICAgICAgICAgY1szMF0gPSAtMTY3MTE2ODE7XHJcbiAgICAgICAgICAgIGNbMHgxZl0gPSAtODM4ODY1MjtcclxuICAgICAgICAgICAgY1sweDIwXSA9IC05ODMwNDE7XHJcbiAgICAgICAgICAgIGNbMHgyMV0gPSAtNjU3OTU2O1xyXG4gICAgICAgICAgICBjWzB4MjJdID0gLTY5NzI7XHJcbiAgICAgICAgICAgIGNbMHgyM10gPSAtMTY3NzcyMTY7XHJcbiAgICAgICAgICAgIGNbMHgyNF0gPSAtNTE3MTtcclxuICAgICAgICAgICAgY1sweDI1XSA9IC0xNjc3Njk2MTtcclxuICAgICAgICAgICAgY1sweDI2XSA9IC03NzIyMDE0O1xyXG4gICAgICAgICAgICBjWzB4MjddID0gLTU5NTI5ODI7XHJcbiAgICAgICAgICAgIGNbNDBdID0gLTIxODA5ODU7XHJcbiAgICAgICAgICAgIGNbMHgyOV0gPSAtMTA1MTA2ODg7XHJcbiAgICAgICAgICAgIGNbMHgyYV0gPSAtODM4ODg2NDtcclxuICAgICAgICAgICAgY1sweDJiXSA9IC0yOTg3NzQ2O1xyXG4gICAgICAgICAgICBjWzB4MmNdID0gLTMyOTQ0O1xyXG4gICAgICAgICAgICBjWzB4MmRdID0gLTEwMTg1MjM1O1xyXG4gICAgICAgICAgICBjWzB4MmVdID0gLTE4Mjg7XHJcbiAgICAgICAgICAgIGNbMHgyZl0gPSAtMjM1NDExNjtcclxuICAgICAgICAgICAgY1sweDMwXSA9IC0xNjcxMTY4MTtcclxuICAgICAgICAgICAgY1sweDMxXSA9IC0xNjc3NzA3NztcclxuICAgICAgICAgICAgY1s1MF0gPSAtMTY3NDE0OTM7XHJcbiAgICAgICAgICAgIGNbMHgzM10gPSAtNDY4NDI3NztcclxuICAgICAgICAgICAgY1sweDM0XSA9IC01NjU4MTk5O1xyXG4gICAgICAgICAgICBjWzB4MzVdID0gLTE2NzUxNjE2O1xyXG4gICAgICAgICAgICBjWzB4MzZdID0gLTQzNDM5NTc7XHJcbiAgICAgICAgICAgIGNbMHgzN10gPSAtNzY2NzU3MztcclxuICAgICAgICAgICAgY1sweDM4XSA9IC0xMTE3OTIxNztcclxuICAgICAgICAgICAgY1sweDM5XSA9IC0yOTY5NjtcclxuICAgICAgICAgICAgY1sweDNhXSA9IC02NzM3MjA0O1xyXG4gICAgICAgICAgICBjWzB4M2JdID0gLTc2Njc3MTI7XHJcbiAgICAgICAgICAgIGNbNjBdID0gLTE0Njg4MDY7XHJcbiAgICAgICAgICAgIGNbMHgzZF0gPSAtNzM1NzMwMTtcclxuICAgICAgICAgICAgY1sweDNlXSA9IC0xMjA0Mjg2OTtcclxuICAgICAgICAgICAgY1sweDNmXSA9IC0xMzY3NjcyMTtcclxuICAgICAgICAgICAgY1sweDQwXSA9IC0xNjcyNDI3MTtcclxuICAgICAgICAgICAgY1sweDQxXSA9IC03MDc3Njc3O1xyXG4gICAgICAgICAgICBjWzB4NDJdID0gLTYwMjY5O1xyXG4gICAgICAgICAgICBjWzB4NDNdID0gLTE2NzI4MDY1O1xyXG4gICAgICAgICAgICBjWzB4NDRdID0gLTk4Njg5NTE7XHJcbiAgICAgICAgICAgIGNbMHg0NV0gPSAtMTQ3NzQwMTc7XHJcbiAgICAgICAgICAgIGNbNzBdID0gLTUxMDMwNzA7XHJcbiAgICAgICAgICAgIGNbMHg0N10gPSAtMTI5NjtcclxuICAgICAgICAgICAgY1sweDQ4XSA9IC0xNDUxMzM3NDtcclxuICAgICAgICAgICAgY1sweDQ5XSA9IC02NTI4MTtcclxuICAgICAgICAgICAgY1sweDRhXSA9IC0yMzAyNzU2O1xyXG4gICAgICAgICAgICBjWzB4NGJdID0gLTQ2MDU0NTtcclxuICAgICAgICAgICAgY1sweDRjXSA9IC0xMDQ5NjtcclxuICAgICAgICAgICAgY1sweDRkXSA9IC0yNDQ4MDk2O1xyXG4gICAgICAgICAgICBjWzB4NGVdID0gLTgzNTU3MTI7XHJcbiAgICAgICAgICAgIGNbMHg0Zl0gPSAtMTY3NDQ0NDg7XHJcbiAgICAgICAgICAgIGNbODBdID0gLTUzNzQxNjE7XHJcbiAgICAgICAgICAgIGNbMHg1MV0gPSAtOTgzMDU2O1xyXG4gICAgICAgICAgICBjWzB4NTJdID0gLTM4NDc2O1xyXG4gICAgICAgICAgICBjWzB4NTNdID0gLTMzMTg2OTI7XHJcbiAgICAgICAgICAgIGNbMHg1NF0gPSAtMTE4NjE4ODY7XHJcbiAgICAgICAgICAgIGNbMHg1NV0gPSAtMTY7XHJcbiAgICAgICAgICAgIGNbMHg1Nl0gPSAtOTg5NTU2O1xyXG4gICAgICAgICAgICBjWzB4NTddID0gLTE2NDQ4MDY7XHJcbiAgICAgICAgICAgIGNbMHg1OF0gPSAtMzg1MTtcclxuICAgICAgICAgICAgY1sweDU5XSA9IC04NTg2MjQwO1xyXG4gICAgICAgICAgICBjWzkwXSA9IC0xMzMxO1xyXG4gICAgICAgICAgICBjWzB4NWJdID0gLTUzODM5NjI7XHJcbiAgICAgICAgICAgIGNbMHg1Y10gPSAtMTAxNTY4MDtcclxuICAgICAgICAgICAgY1sweDVkXSA9IC0yMDMxNjE3O1xyXG4gICAgICAgICAgICBjWzB4NWVdID0gLTMyOTAwNjtcclxuICAgICAgICAgICAgY1sweDVmXSA9IC0yODk0ODkzO1xyXG4gICAgICAgICAgICBjWzB4NjBdID0gLTcyNzg5NjA7XHJcbiAgICAgICAgICAgIGNbMHg2MV0gPSAtMTg3NTE7XHJcbiAgICAgICAgICAgIGNbMHg2Ml0gPSAtMjQ0NTQ7XHJcbiAgICAgICAgICAgIGNbMHg2M10gPSAtMTQ2MzQzMjY7XHJcbiAgICAgICAgICAgIGNbMTAwXSA9IC03ODc2ODcwO1xyXG4gICAgICAgICAgICBjWzB4NjVdID0gLTg5NDM0NjM7XHJcbiAgICAgICAgICAgIGNbMHg2Nl0gPSAtNTE5MjQ4MjtcclxuICAgICAgICAgICAgY1sweDY3XSA9IC0zMjtcclxuICAgICAgICAgICAgY1sweDY4XSA9IC0xNjcxMTkzNjtcclxuICAgICAgICAgICAgY1sweDY5XSA9IC0xMzQ0Nzg4NjtcclxuICAgICAgICAgICAgY1sweDZhXSA9IC0zMzE1NDY7XHJcbiAgICAgICAgICAgIGNbMHg2Yl0gPSAtNjUyODE7XHJcbiAgICAgICAgICAgIGNbMHg2Y10gPSAtODM4ODYwODtcclxuICAgICAgICAgICAgY1sweDZkXSA9IC0xMDAzOTg5NDtcclxuICAgICAgICAgICAgY1sxMTBdID0gLTE2Nzc3MDExO1xyXG4gICAgICAgICAgICBjWzB4NmZdID0gLTQ1NjU1NDk7XHJcbiAgICAgICAgICAgIGNbMHg3MF0gPSAtNzExNDUzMztcclxuICAgICAgICAgICAgY1sweDcxXSA9IC0xMjc5OTExOTtcclxuICAgICAgICAgICAgY1sweDcyXSA9IC04Njg5NDI2O1xyXG4gICAgICAgICAgICBjWzB4NzNdID0gLTE2NzEzMDYyO1xyXG4gICAgICAgICAgICBjWzB4NzRdID0gLTEyMDA0OTE2O1xyXG4gICAgICAgICAgICBjWzB4NzVdID0gLTM3MzAwNDM7XHJcbiAgICAgICAgICAgIGNbMHg3Nl0gPSAtMTUxMzIzMDQ7XHJcbiAgICAgICAgICAgIGNbMHg3N10gPSAtNjU1MzY2O1xyXG4gICAgICAgICAgICBjWzEyMF0gPSAtNjk0MztcclxuICAgICAgICAgICAgY1sweDc5XSA9IC02OTg3O1xyXG4gICAgICAgICAgICBjWzB4N2FdID0gLTg1MzE7XHJcbiAgICAgICAgICAgIGNbMHg3Yl0gPSAtMTY3NzcwODg7XHJcbiAgICAgICAgICAgIGNbMHg3Y10gPSAtMTMzNjU4O1xyXG4gICAgICAgICAgICBjWzB4N2RdID0gLTgzNTU4NDA7XHJcbiAgICAgICAgICAgIGNbMHg3ZV0gPSAtOTcyODQ3NztcclxuICAgICAgICAgICAgY1sweDdmXSA9IC0yMzI5NjtcclxuICAgICAgICAgICAgY1sweDgwXSA9IC00Nzg3MjtcclxuICAgICAgICAgICAgY1sweDgxXSA9IC0yNDYxNDgyO1xyXG4gICAgICAgICAgICBjWzEzMF0gPSAtMTEyMDA4NjtcclxuICAgICAgICAgICAgY1sweDgzXSA9IC02NzUxMzM2O1xyXG4gICAgICAgICAgICBjWzB4ODRdID0gLTUyNDcyNTA7XHJcbiAgICAgICAgICAgIGNbMHg4NV0gPSAtMjM5NjAxMztcclxuICAgICAgICAgICAgY1sweDg2XSA9IC00MTM5O1xyXG4gICAgICAgICAgICBjWzB4ODddID0gLTk1NDM7XHJcbiAgICAgICAgICAgIGNbMHg4OF0gPSAtMzMwODIyNTtcclxuICAgICAgICAgICAgY1sweDg5XSA9IC0xNjE4MTtcclxuICAgICAgICAgICAgY1sweDhhXSA9IC0yMjUyNTc5O1xyXG4gICAgICAgICAgICBjWzB4OGJdID0gLTUxODUzMDY7XHJcbiAgICAgICAgICAgIGNbMTQwXSA9IC04Mzg4NDgwO1xyXG4gICAgICAgICAgICBjWzB4OGRdID0gLTY1NTM2O1xyXG4gICAgICAgICAgICBjWzB4OGVdID0gLTQ0MTk2OTc7XHJcbiAgICAgICAgICAgIGNbMHg4Zl0gPSAtMTI0OTAyNzE7XHJcbiAgICAgICAgICAgIGNbMHg5MF0gPSAtNzY1MDAyOTtcclxuICAgICAgICAgICAgY1sweDkxXSA9IC0zNjAzMzQ7XHJcbiAgICAgICAgICAgIGNbMHg5Ml0gPSAtNzQ0MzUyO1xyXG4gICAgICAgICAgICBjWzB4OTNdID0gLTEzNzI2ODg5O1xyXG4gICAgICAgICAgICBjWzB4OTRdID0gLTI1Nzg7XHJcbiAgICAgICAgICAgIGNbMHg5NV0gPSAtNjI3MDQxOTtcclxuICAgICAgICAgICAgY1sxNTBdID0gLTQxNDQ5NjA7XHJcbiAgICAgICAgICAgIGNbMHg5N10gPSAtNzg3Njg4NTtcclxuICAgICAgICAgICAgY1sweDk4XSA9IC05ODA3MTU1O1xyXG4gICAgICAgICAgICBjWzB4OTldID0gLTk0MDQyNzI7XHJcbiAgICAgICAgICAgIGNbMHg5YV0gPSAtMTI4NjtcclxuICAgICAgICAgICAgY1sweDliXSA9IC0xNjcxMTgwOTtcclxuICAgICAgICAgICAgY1sweDljXSA9IC0xMjE1NjIzNjtcclxuICAgICAgICAgICAgY1sweDlkXSA9IC0yOTY4NDM2O1xyXG4gICAgICAgICAgICBjWzB4OWVdID0gLTE2NzQ0MzIwO1xyXG4gICAgICAgICAgICBjWzB4OWZdID0gLTI1NzIzMjg7XHJcbiAgICAgICAgICAgIGNbMTYwXSA9IC00MDEyMTtcclxuICAgICAgICAgICAgY1sweGExXSA9IC0xMjUyNTM2MDtcclxuICAgICAgICAgICAgY1sweGEyXSA9IC0xMTQ2MTMwO1xyXG4gICAgICAgICAgICBjWzB4YTNdID0gLTY2Mzg4NTtcclxuICAgICAgICAgICAgY1sweGE0XSA9IC0xO1xyXG4gICAgICAgICAgICBjWzB4YTVdID0gLTY1NzkzMTtcclxuICAgICAgICAgICAgY1sweGE2XSA9IC0yNTY7XHJcbiAgICAgICAgICAgIGNbMHhhN10gPSAtNjYzMjE0MjtcclxuICAgICAgICAgICAgY29sb3JUYWJsZSA9IGM7XHJcblxyXG4gICAgICAgICAgICBVcGRhdGVTeXN0ZW1Db2xvcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW50IEtub3duQ29sb3JUb0FyZ2IoS25vd25Db2xvciBjb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuc3VyZUNvbG9yVGFibGUoKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yIDw9IEtub3duQ29sb3IuTWVudUhpZ2hsaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVGFibGVbKGludCljb2xvcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBLbm93bkNvbG9yVG9OYW1lKEtub3duQ29sb3IgY29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVDb2xvck5hbWVUYWJsZSgpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IgPD0gS25vd25Db2xvci5NZW51SGlnaGxpZ2h0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JOYW1lVGFibGVbKGludCljb2xvcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnRbXSBfU3lzQ29sb3JzID0gbmV3IGludFtdIFxyXG4gICAgICAgICAgICB7MTE4NDI3NDAsXHJcbiAgICAgICAgICAgIDEzNzQzMjU3LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxMTI1MDYwMyxcclxuICAgICAgICAgICAgMTU3OTAzMjAsXHJcbiAgICAgICAgICAgIDE2Nzc3MjE1LFxyXG4gICAgICAgICAgICAxMDUyNjg4MCxcclxuICAgICAgICAgICAgMTU3OTAzMjAsXHJcbiAgICAgICAgICAgIDEwNTI2ODgwLFxyXG4gICAgICAgICAgICA2OTA4MjY1LFxyXG4gICAgICAgICAgICAxNDkzNTAxMSxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDE1Mzg5MTEzLFxyXG4gICAgICAgICAgICAxNTkxODI5NSxcclxuICAgICAgICAgICAgNzE3MTQzNyxcclxuICAgICAgICAgICAgMTY3NTA4OTksXHJcbiAgICAgICAgICAgIDE2Nzc3MjE1LFxyXG4gICAgICAgICAgICAxMzM5NTQ1NixcclxuICAgICAgICAgICAgMTY1Nzg1NDgsXHJcbiAgICAgICAgICAgIDE0NDA1MDU1LFxyXG4gICAgICAgICAgICA1NTI1MDU5LFxyXG4gICAgICAgICAgICAxNDgxMTEzNSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMTU3OTAzMjAsXHJcbiAgICAgICAgICAgIDE1NzkwMzIwLFxyXG4gICAgICAgICAgICAxNjc1MDg5OSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMTMxNTg2MDAsXHJcbiAgICAgICAgICAgIDE2Nzc3MjE1LFxyXG4gICAgICAgICAgICA2NTc5MzAwLFxyXG4gICAgICAgICAgICAwfTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IFN5c3RlbUNvbG9yVG9BcmdiKGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBGcm9tV2luMzJWYWx1ZShfU3lzQ29sb3JzW2luZGV4XSk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEZvbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZhbWlseU5hbWUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIGZsb2F0IEVtU2l6ZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIEZvbnQoc3RyaW5nIGZhbWlseU5hbWUsIGZsb2F0IGVtU2l6ZSwgRm9udFN0eWxlIHN0eWxlLCBHcmFwaGljc1VuaXQgdW5pdCwgYnl0ZSBnZGlDaGFyU2V0KSA6IHRoaXMoZmFtaWx5TmFtZSwgZW1TaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm9udChzdHJpbmcgZmFtaWx5TmFtZSwgZmxvYXQgZW1TaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRmFtaWx5TmFtZSA9IGZhbWlseU5hbWU7XHJcbiAgICAgICAgICAgIEVtU2l6ZSA9IGVtU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRHJhd2luZ1xyXG57XHJcbiAgICBwdWJsaWMgc3RydWN0IFBvaW50XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGludCBYO1xyXG4gICAgICAgIHB1YmxpYyBpbnQgWTtcclxuICAgICAgICBwdWJsaWMgUG9pbnQoaW50IHgsIGludCB5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgWCA9IHg7XHJcbiAgICAgICAgICAgIFkgPSB5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUb1N0cmluZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIlg6ezB9LCBZOnsxfVwiLFgsWSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgU2l6ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgV2lkdGg7XHJcbiAgICAgICAgcHVibGljIGludCBIZWlnaHQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2l6ZSBFbXB0eSA9IG5ldyBTaXplKDAsIDApO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2l6ZShpbnQgd2lkdGgsIGludCBoZWlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgU2l6ZUZcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZmxvYXQgV2lkdGg7XHJcbiAgICAgICAgcHVibGljIGZsb2F0IEhlaWdodDtcclxuXHJcbiAgICAgICAgcHVibGljIFNpemVGKGZsb2F0IHdpZHRoLCBmbG9hdCBoZWlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTeXN0ZW1Db2xvcnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFjdGl2ZUJvcmRlciB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BY3RpdmVCb3JkZXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWN0aXZlQ2FwdGlvbiB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BY3RpdmVDYXB0aW9uKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFjdGl2ZUNhcHRpb25UZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFjdGl2ZUNhcHRpb25UZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFwcFdvcmtzcGFjZSB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BcHBXb3Jrc3BhY2UpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnV0dG9uRmFjZSB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CdXR0b25GYWNlKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJ1dHRvbkhpZ2hsaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CdXR0b25IaWdobGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnV0dG9uU2hhZG93IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1dHRvblNoYWRvdyk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sIHtnZXR7cmV0dXJuIENvbG9yLkZyb21BcmdiKDI0MCwgMjQwLCAyNDApO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbERhcmsge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbERhcmspO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbERhcmtEYXJrIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2xEYXJrRGFyayk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sTGlnaHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbExpZ2h0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2xMaWdodExpZ2h0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2xMaWdodExpZ2h0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2xUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2xUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERlc2t0b3Age2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGVza3RvcCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHcmFkaWVudEFjdGl2ZUNhcHRpb24ge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JhZGllbnRBY3RpdmVDYXB0aW9uKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYWRpZW50SW5hY3RpdmVDYXB0aW9uIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyYWRpZW50SW5hY3RpdmVDYXB0aW9uKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYXlUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyYXlUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEhpZ2hsaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5IaWdobGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSGlnaGxpZ2h0VGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5IaWdobGlnaHRUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEhvdFRyYWNrIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhvdFRyYWNrKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluYWN0aXZlQm9yZGVyIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluYWN0aXZlQm9yZGVyKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluYWN0aXZlQ2FwdGlvbiB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5hY3RpdmVDYXB0aW9uVGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmFjdGl2ZUNhcHRpb25UZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluZm8ge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5mbyk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmZvVGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmZvVGV4dCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZW51IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lbnUpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVudUJhciB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZW51QmFyKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lbnVIaWdobGlnaHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVudUhpZ2hsaWdodCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZW51VGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZW51VGV4dCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTY3JvbGxCYXIge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2Nyb2xsQmFyKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFdpbmRvdyB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaW5kb3cpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2luZG93RnJhbWUge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuV2luZG93RnJhbWUpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2luZG93VGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaW5kb3dUZXh0KTt9fVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQgeyByZXR1cm4gRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJOYW1lXCIpOyB9IHNldCB7IEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiTmFtZVwiLCB2YWx1ZSk7IH0gfVxyXG4gICAgICAgIHByaXZhdGUgUG9pbnQgX2xvY2F0aW9uO1xyXG4gICAgICAgIHB1YmxpYyBQb2ludCBMb2NhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9sb2NhdGlvbjsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2xvY2F0aW9uID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5sZWZ0ID0gX2xvY2F0aW9uLlggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLnRvcCA9IF9sb2NhdGlvbi5ZICsgXCJweFwiO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgdmlydHVhbCB2b2lkIE9uQ29udHJvbEFkZGVkKENvbnRyb2wgY29udHJvbClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgdmlydHVhbCB2b2lkIE9uQ29udHJvbFJlbW92ZWQoQ29udHJvbCBjb250cm9sKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX3Zpc2libGU7XHJcbiAgICAgICAgcHVibGljIGJvb2wgVmlzaWJsZSB7IGdldCB7IHJldHVybiBfdmlzaWJsZTsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3Zpc2libGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IF92aXNpYmxlID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIGludGVybmFsIENvbnRyb2wgX3BhcmVudDtcclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2wgUGFyZW50IHsgZ2V0IHsgcmV0dXJuIF9wYXJlbnQ7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm9ybSBHZXRGb3JtKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlBhcmVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLlBhcmVudCBpcyBGb3JtKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJlbnQuQXM8Rm9ybT4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmVudC5HZXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgU2l6ZSBfc2l6ZTtcclxuICAgICAgICBwdWJsaWMgU2l6ZSBTaXplIHsgZ2V0IHsgcmV0dXJuIF9zaXplOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfc2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX2F1dG9TaXplKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUud2lkdGggPSBfc2l6ZS5XaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmhlaWdodCA9IF9zaXplLkhlaWdodCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX3RhYlN0b3A7XHJcbiAgICAgICAgcHVibGljIGJvb2wgVGFiU3RvcCB7IGdldCB7IHJldHVybiBfdGFiU3RvcDsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3RhYlN0b3AgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIFRhYkluZGV4ID0gX3RhYkluZGV4O1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGludCBfdGFiSW5kZXg7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgaW50IFRhYkluZGV4IHsgZ2V0IHsgcmV0dXJuIF90YWJJbmRleDsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3RhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihUYWJTdG9wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQudGFiSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcIlRhYkluZGV4XCIpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVGV4dCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgQ29sb3IgX2JhY2tDb2xvcjtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2xvciBCYWNrQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfYmFja0NvbG9yOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfYmFja0NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IF9iYWNrQ29sb3IuVG9IdG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBFbmFibGVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2VuYWJsZWQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9lbmFibGVkID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBBcHBseURpc2FibGVkKCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX3JlYWRvbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBSZWFkT25seVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9yZWFkb25seTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3JlYWRvbmx5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBBcHBseVJlYWRvbmx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIEFwcGx5RGlzYWJsZWQoUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQgZWxlbWVudCA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihlbGVtZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBFbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKEVuYWJsZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2xvciBGb3JlQ29sb3IgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBcHBseVJlYWRvbmx5KFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFJlYWRPbmx5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZG9ubHlcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZG9ubHlcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9iamVjdCBfdGFnO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVzZSBUYWcgYXMgQ2xhc3MgTmFtZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF90YWcgaXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBcHBseURpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sQ29sbGVjdGlvbiBDb250cm9scyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwcml2YXRlIEZvbnQgX2ZvbnQ7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRm9udCBGb250IHsgZ2V0IHsgcmV0dXJuIF9mb250OyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfZm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX2ZvbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IF9mb250LkVtU2l6ZS5Ub1N0cmluZygpICsgXCJwdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IF9mb250LkZhbWlseU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2F1dG9TaXplO1xyXG4gICAgICAgIHByb3RlY3RlZCBib29sIF9pbml0O1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgQXV0b1NpemUgeyBnZXQgeyByZXR1cm4gX2F1dG9TaXplOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfYXV0b1NpemUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2l6ZSA9IF9zaXplO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IEVsZW1lbnQ7XHJcbiAgICAgICAgaW50ZXJuYWwgc3RhdGljIENvbnRyb2wgQ2xpY2tlZE9uQ29udHJvbDtcclxuXHJcbiAgICAgICAgc3RhdGljIENvbnRyb2woKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmV0eXBlZC5kb20ud2luZG93IC5vbm1vdXNlbW92ZSA9IG5ldyBSZXR5cGVkLmRvbS5XaW5kb3cub25tb3VzZW1vdmVGbigoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChDbGlja2VkT25Db250cm9sICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENsaWNrZWRPbkNvbnRyb2wuT25Nb3VzZU1vdmUoTW91c2VFdmVudEFyZ3MuQ3JlYXRlRnJvbU1vdXNlRXZlbnQoZXYsIENsaWNrZWRPbkNvbnRyb2wpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJldHlwZWQuZG9tLndpbmRvdyAub25tb3VzZXVwID0gbmV3IFJldHlwZWQuZG9tLldpbmRvdy5vbm1vdXNldXBGbigoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChDbGlja2VkT25Db250cm9sICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENsaWNrZWRPbkNvbnRyb2wuT25Nb3VzZVVwKE1vdXNlRXZlbnRBcmdzLkNyZWF0ZUZyb21Nb3VzZUV2ZW50KGV2LCBDbGlja2VkT25Db250cm9sKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENsaWNrZWRPbkNvbnRyb2wgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW50ZXJuYWwgQ29udHJvbChSZXR5cGVkLmRvbS5IVE1MRWxlbWVudCBlbGVtZW50KVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgRWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBDb250cm9scyA9IG5ldyBDb250cm9sQ29sbGVjdGlvbih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXJib3hcIjtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcImluaGVyaXRcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJpbmhlcml0XCI7XHJcblxyXG4gICAgICAgICAgICBWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5vbmNsaWNrID0gbmV3IFJldHlwZWQuZG9tLkhUTUxFbGVtZW50Lm9uY2xpY2tGbigoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE9uQ2xpY2soRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQub25tb3VzZWRvd24gPSBuZXcgUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQub25tb3VzZWRvd25GbigoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgIENsaWNrZWRPbkNvbnRyb2wgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgT25Nb3VzZURvd24oTW91c2VFdmVudEFyZ3MuQ3JlYXRlRnJvbU1vdXNlRXZlbnQoZXYsIHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5vbm1vdXNlbW92ZSA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbm1vdXNlbW92ZUZuKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoQ2xpY2tlZE9uQ29udHJvbCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPbk1vdXNlTW92ZShNb3VzZUV2ZW50QXJncy5DcmVhdGVGcm9tTW91c2VFdmVudChldiwgdGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vRWxlbWVudC5vbm1vdXNldXAgPSBuZXcgSFRNTEVsZW1lbnQub25tb3VzZXVwRm4oKGV2KSA9PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIE9uTW91c2VVcChNb3VzZUV2ZW50QXJncy5DcmVhdGVGcm9tTW91c2VFdmVudChldiwgdGhpcykpO1xyXG4gICAgICAgICAgICAvLyAgICBDbGlja2VkT25Db250cm9sID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgX2luaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkNsaWNrKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKENsaWNrICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBDbGljayh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Nb3VzZURvd24oTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChNb3VzZURvd24gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIE1vdXNlRG93bih0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Nb3VzZU1vdmUoTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChNb3VzZU1vdmUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIE1vdXNlTW92ZSh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGludGVybmFsIHZvaWQgSW52b2tlTG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPbkxvYWQoRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Mb2FkKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKExvYWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIExvYWQodGhpcywgZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgRXZlbnRIYW5kbGVyIExvYWQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Nb3VzZVVwKE1vdXNlRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoTW91c2VVcCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgTW91c2VVcCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nIE1hcmdpbiB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIFBhZGRpbmcgUGFkZGluZyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudCBFdmVudEhhbmRsZXIgQ2xpY2s7XHJcbiAgICAgICAgcHVibGljIGV2ZW50IE1vdXNlRXZlbnRIYW5kbGVyIE1vdXNlRG93bjtcclxuICAgICAgICBwdWJsaWMgZXZlbnQgTW91c2VFdmVudEhhbmRsZXIgTW91c2VNb3ZlO1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBNb3VzZUV2ZW50SGFuZGxlciBNb3VzZVVwO1xyXG4gICAgICAgIHByb3RlY3RlZCBib29sIGxheW91dFN1c3BlbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTdXNwZW5kTGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxheW91dFN1c3BlbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlc3VtZUxheW91dChib29sIHBlcmZvcm1MYXlvdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYXlvdXRTdXNwZW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYocGVyZm9ybUxheW91dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGVyZm9ybUxheW91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgUGVyZm9ybUxheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobGF5b3V0U3VzcGVuZGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBpdGVtIGluIENvbnRyb2xzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLlBlcmZvcm1MYXlvdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlld0NvbHVtblxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50IEVsZW1lbnQ7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBIZWFkZXJUZXh0IHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIEVsZW1lbnQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0IHsgcmV0dXJuIEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiTmFtZVwiKTsgfSBzZXQgeyBFbGVtZW50LnNldEF0dHJpYnV0ZShcIk5hbWVcIiwgdmFsdWUpOyB9IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIERhdGFQcm9wZXJ0eU5hbWUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3Q29sdW1uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgZW51bSBEaWFsb2dSZXN1bHRcclxuICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIE5vdGhpbmcgaXMgcmV0dXJuZWQgZnJvbSB0aGUgZGlhbG9nIGJveC4gVGhpcyBtZWFucyB0aGF0IHRoZSBtb2RhbCBkaWFsb2cgY29udGludWVzXHJcbiAgICAgICAgICAgIC8vICAgICBydW5uaW5nLlxyXG4gICAgICAgICAgICBOb25lID0gMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBPSyAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBPSykuXHJcbiAgICAgICAgICAgIE9LID0gMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBDYW5jZWwgKHVzdWFsbHkgc2VudCBmcm9tIGEgYnV0dG9uIGxhYmVsZWQgQ2FuY2VsKS5cclxuICAgICAgICAgICAgQ2FuY2VsID0gMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBBYm9ydCAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBBYm9ydCkuXHJcbiAgICAgICAgICAgIEFib3J0ID0gMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBSZXRyeSAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBSZXRyeSkuXHJcbiAgICAgICAgICAgIFJldHJ5ID0gNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBJZ25vcmUgKHVzdWFsbHkgc2VudCBmcm9tIGEgYnV0dG9uIGxhYmVsZWQgSWdub3JlKS5cclxuICAgICAgICAgICAgSWdub3JlID0gNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBZZXMgKHVzdWFsbHkgc2VudCBmcm9tIGEgYnV0dG9uIGxhYmVsZWQgWWVzKS5cclxuICAgICAgICAgICAgWWVzID0gNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBObyAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBObykuXHJcbiAgICAgICAgICAgIE5vID0gN1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBEaWFsb2dPcHRpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGlhbG9nUmVzdWx0IFJlc3VsdEVudW0gPSBEaWFsb2dSZXN1bHQuTm9uZTtcclxuICAgICAgICBwdWJsaWMgQWN0aW9uIENhbGxCYWNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIERpYWxvZ09wdGlvbihEaWFsb2dSZXN1bHQgcmVzdWx0RW51bSwgQWN0aW9uIGNhbGxCYWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVzdWx0RW51bSA9IHJlc3VsdEVudW07XHJcbiAgICAgICAgICAgIENhbGxCYWNrID0gY2FsbEJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnZva2VJZlJlc3VsdChEaWFsb2dSZXN1bHQgcmVzdWx0RW51bSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRFbnVtID09IFJlc3VsdEVudW0gJiYgQ2FsbEJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIENhbGxCYWNrLkludm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBGb3JtIDogQ29udGFpbmVyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgaW50IF9mb3JtVG9wQm9yZGVyID0gMzE7XHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAxO1xyXG4gICAgICAgIHByaXZhdGUgaW50IF9mb3JtTGVmdEJvcmRlciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX2Zvcm1SaWdodEJvcmRlciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9hbGxvd1NpemVDaGFuZ2UgPSB0cnVlOyAvLyBub3QgeWV0IGltcGxlbWVudGVkLlxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfYWxsb3dNb3ZlQ2hhbmdlID0gdHJ1ZTsgLy8gbm90IHlldCBpbXBsZW1lbnRlZC5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX21vdXNlRG93bk9uQm9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBGb3JtTW92ZW1lbnRNb2RlcyBfZm9ybU1vdmVtZW50TW9kZXMgPSBGb3JtTW92ZW1lbnRNb2Rlcy5Ob25lO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQgX2Zvcm1PdmVyTGF5ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBzdGF0aWMgRm9ybSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZm9ybU92ZXJMYXkgPSBuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS5vcGFjaXR5ID0gXCIwLjNcIjtcclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JleVwiO1xyXG4gICAgICAgICAgICBfZm9ybU92ZXJMYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcblxyXG4gICAgICAgICAgICBfZm9ybU92ZXJMYXkub25tb3VzZWRvd24gPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKFJldHlwZWQuZG9tLmRvY3VtZW50IC5hY3RpdmVFbGVtZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Gb3JtUG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5hY3RpdmVFbGVtZW50LkFzPFJldHlwZWQuZG9tLkhUTUxFbGVtZW50PigpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQ+KF9mb3JtT3ZlckxheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aGF0IHdlIG5lZWQgdG8gZG8gaXMgc3VwcG9ydCBtb2RhbHMgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBMaXN0PEZvcm1Db2xsZWN0aW9uPiBfZm9ybUNvbGxlY3Rpb25zID0gbmV3IExpc3Q8Rm9ybUNvbGxlY3Rpb24+KCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY2xhc3MgRm9ybUNvbGxlY3Rpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHB1YmxpYyBGb3JtIEZvcm1Pd25lcjtcclxuICAgICAgICAgICAgcHVibGljIExpc3Q8Rm9ybT4gVmlzaWJsZUZvcm1zID0gbmV3IExpc3Q8Rm9ybT4oKTtcclxuXHJcbiAgICAgICAgICAgIHB1YmxpYyBGb3JtQ29sbGVjdGlvbihGb3JtIGZvcm1Pd25lcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRm9ybU93bmVyID0gZm9ybU93bmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZvcm0gX0FjdGl2ZUZvcm07XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRm9ybSBfUHJldkFjdGl2ZUZvcm07XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRm9ybSBBY3RpdmVGb3JtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX0FjdGl2ZUZvcm07IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChfQWN0aXZlRm9ybSAhPSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfUHJldkFjdGl2ZUZvcm0gPSBfQWN0aXZlRm9ybTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9BY3RpdmVGb3JtICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL19BY3RpdmVGb3JtLk9uTG9zdEZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfQWN0aXZlRm9ybS5FbGVtZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKF9BY3RpdmVGb3JtLkluRGVzaWduKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBfQWN0aXZlRm9ybS5Cb2R5T3ZlckxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL19BY3RpdmVGb3JtLkJvZHlPdmVyTGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfQWN0aXZlRm9ybSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfQWN0aXZlRm9ybSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9fQWN0aXZlRm9ybS5PbkdvdEZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfQWN0aXZlRm9ybS5FbGVtZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vX0FjdGl2ZUZvcm0uQm9keU92ZXJMYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9BY3RpdmVGb3JtLkJyaW5nVG9Gcm9udCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKF9QcmV2QWN0aXZlRm9ybSBpcyBGb3JtUG9wdXAgJiYgKChfQWN0aXZlRm9ybSAhPSBudWxsICYmICEoX0FjdGl2ZUZvcm0gaXMgRm9ybVBvcHVwKSkgfHwgX0FjdGl2ZUZvcm0gPT0gbnVsbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgQ2xvc2VGb3JtUG9wdXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25DbG9zaW5nKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIExpc3Q8RGlhbG9nT3B0aW9uPiBEaWFsb2dSZXN1bHRzID0gbmV3IExpc3Q8RGlhbG9nT3B0aW9uPigpO1xyXG5cclxuICAgICAgICBwcml2YXRlIEZvcm1Db2xsZWN0aW9uIEdldEZvcm1Db2xsZWN0aW9uRnJvbUZvcm0oRm9ybSBmb3JtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBfZm9ybUNvbGxlY3Rpb25zLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09IF9mb3JtQ29sbGVjdGlvbnNbaV0uRm9ybU93bmVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybUNvbGxlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpc2libGVGb3JtcyA9IF9mb3JtQ29sbGVjdGlvbnNbaV0uVmlzaWJsZUZvcm1zO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbnQgeCA9IDA7IHggPCB2aXNpYmxlRm9ybXMuQ291bnQ7IHgrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZUZvcm1zW3hdID09IHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfZm9ybUNvbGxlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfaXNEaWFsb2c7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9pbkNsb3NlO1xyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfaW5EaWFsb2dSZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBXaW5kb3dTdGF0ZSBfd2luZG93U3RhdGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBXaW5kb3dTdGF0ZSBXaW5kb3dTdGF0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF93aW5kb3dTdGF0ZTsgfVxyXG4gICAgICAgICAgICBzZXQgeyBfd2luZG93U3RhdGUgPSB2YWx1ZTsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIENhbGN1bGF0ZVpPcmRlcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBHZXRBY3RpdmVGb3JtQ29sbGVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF9mb3JtQ29sbGVjdGlvbnMgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2Zvcm1Db2xsZWN0aW9ucy5SZW1vdmUobnVsbCk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IF9mb3JtQ29sbGVjdGlvbnMuQ291bnQ7XHJcbiAgICAgICAgICAgIGludCB6SW5kZXggPSAxO1xyXG5cclxuICAgICAgICAgICAgLy92YXIgZnJhZyA9IERvY3VtZW50LkNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS5vcGFjaXR5ID0gY291bnQgPT0gMCA/IFwiXCIgOiBjb3VudCA9PSAxID8gXCIwXCIgOiBcIjAuNFwiO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpbnQgeCA9IDA7IHggPCBjb3VudDsgeCsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2lmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZih4ID09IGNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgIC8vICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBmcmFnLkFwcGVuZENoaWxkKEZvcm1PdmVyTGF5KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB6SW5kZXggPSBDYWxjdWxhdGVaT3JkZXIoRm9ybUNvbGxlY3Rpb25zW3hdLCB6SW5kZXgsIGZyYWcpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAvL2Vsc2VcclxuICAgICAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICBpZiAoeCA9PSBjb3VudCAtIDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9mcmFnLkFwcGVuZENoaWxkKEZvcm1PdmVyTGF5KTtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybU92ZXJMYXkuc3R5bGUuekluZGV4ID0gQ29udmVydC5Ub1N0cmluZyh6SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgekluZGV4ID0gQ2FsY3VsYXRlWk9yZGVyKF9mb3JtQ29sbGVjdGlvbnNbeF0sIHpJbmRleCk7IC8vIGZyYWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3pJbmRleCA9IENhbGN1bGF0ZVpPcmRlcihzdGFuZEFsb25lRm9ybXMsIHpJbmRleCk7IC8vIGZyYWdcclxuXHJcbiAgICAgICAgICAgIC8vV2luZG93SG9sZGVyLkVtcHR5KCk7XHJcbiAgICAgICAgICAgIC8vV2luZG93SG9sZGVyLkFwcGVuZENoaWxkKGZyYWcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKEFjdGl2ZUZvcm0gIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQWN0aXZlRm9ybS5FbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgTGlzdDxGb3JtPiBUb0NsZWFuID0gbmV3IExpc3Q8Rm9ybT4oKTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgQ2FsY3VsYXRlWk9yZGVyKEZvcm1Db2xsZWN0aW9uIGZvcm1Db2xsZWN0aW9uLCBpbnQgekluZGV4KSAvLyAsIERvY3VtZW50RnJhZ21lbnQgZnJhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGlzdDxGb3JtPiBUb3BNb3N0Rm9ybXMgPSBuZXcgTGlzdDxGb3JtPigpO1xyXG5cclxuICAgICAgICAgICAgdmFyIFZpc2libGVGb3JtcyA9IGZvcm1Db2xsZWN0aW9uLlZpc2libGVGb3JtcztcclxuICAgICAgICAgICAgaWYgKFZpc2libGVGb3JtcyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IFZpc2libGVGb3Jtcy5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChWaXNpYmxlRm9ybXNbaV0uRWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9DbGVhbi5BZGQoVmlzaWJsZUZvcm1zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoVmlzaWJsZUZvcm1zW2ldLlRvcE1vc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFRvcE1vc3RGb3Jtcy5BZGQoVmlzaWJsZUZvcm1zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IFRvQ2xlYW4uQ291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVmlzaWJsZUZvcm1zLkNvbnRhaW5zKFRvQ2xlYW5baV0pKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzaWJsZUZvcm1zLlJlbW92ZShUb0NsZWFuW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9DbGVhbltpXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFRvQ2xlYW4uUmVtb3ZlKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChmb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2Zvcm1Db2xsZWN0aW9uLkZvcm1Pd25lci5NYW5hZ2VQbGFjZUhvbGRlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIuRWxlbWVudC5zdHlsZS56SW5kZXggPSBDb252ZXJ0LlRvU3RyaW5nKHpJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9mcmFnLkFwcGVuZENoaWxkKGZvcm1Db2xsZWN0aW9uLkZvcm1Pd25lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgaWYoVmlzaWJsZUZvcm1zLkNvdW50ID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBmb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIuTWFuYWdlUGxhY2VIb2xkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGZyYWcuQXBwZW5kQ2hpbGQoZm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgcmV0dXJuIHpJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgZm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyLk1hbmFnZVBsYWNlSG9sZGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGZyYWcuQXBwZW5kQ2hpbGQoZm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IFRvcE1vc3RGb3Jtcy5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtID0gVG9wTW9zdEZvcm1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpc2libGVGb3Jtcy5SZW1vdmUoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmlzaWJsZUZvcm1zLkFkZChmb3JtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGludCBsZW5ndGggPSBWaXNpYmxlRm9ybXMuQ291bnQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChWaXNpYmxlRm9ybXNbaV0gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaXNpYmxlRm9ybXNbaV0uRWxlbWVudCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9WaXNpYmxlRm9ybXNbaV0uTWFuYWdlUGxhY2VIb2xkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc2libGVGb3Jtc1tpXS5FbGVtZW50LnN0eWxlLnpJbmRleCA9IENvbnZlcnQuVG9TdHJpbmcoekluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZnJhZy5BcHBlbmRDaGlsZChWaXNpYmxlRm9ybXNbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGlmKGxlbmd0aCAtIDEgPT0gaSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgVmlzaWJsZUZvcm1zW2ldLk1hbmFnZVBsYWNlSG9sZGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgZnJhZy5BcHBlbmRDaGlsZChWaXNpYmxlRm9ybXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgcmV0dXJuIHpJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31lbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBWaXNpYmxlRm9ybXNbaV0uTWFuYWdlUGxhY2VIb2xkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGZyYWcuQXBwZW5kQ2hpbGQoVmlzaWJsZUZvcm1zW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gekluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgRGlhbG9nUmVzdWx0IERpYWxvZ1Jlc3VsdCA9IERpYWxvZ1Jlc3VsdC5Ob25lO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsb3NlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfaXNEaWFsb2cgJiYgX2luRGlhbG9nUmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgX2luQ2xvc2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgT25DbG9zaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBUb0NsZWFuLkFkZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvd25lckZvcm1Db2xsZWN0aW9uID0gR2V0Rm9ybUNvbGxlY3Rpb25Gcm9tRm9ybSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvd25lckZvcm1Db2xsZWN0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChvd25lckZvcm1Db2xsZWN0aW9uLkZvcm1Pd25lciA9PSB0aGlzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyRm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IG93bmVyRm9ybUNvbGxlY3Rpb24uVmlzaWJsZUZvcm1zLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3duZXJGb3JtQ29sbGVjdGlvbi5WaXNpYmxlRm9ybXNbaV0gPT0gdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lckZvcm1Db2xsZWN0aW9uLlZpc2libGVGb3Jtc1tpXS5DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX2Zvcm1Db2xsZWN0aW9ucy5Db3VudCA9PSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Db2xsZWN0aW9ucyA9IG5ldyBMaXN0PEZvcm1Db2xsZWN0aW9uPigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lckZvcm1Db2xsZWN0aW9uLlZpc2libGVGb3Jtcy5SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChFbGVtZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgKCFGb3JSZXVzZSlcclxuICAgICAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAgICAgLy8gICAgaWYgKFNldHRpbmdzLkZvcm1GYWRlRHVyYXRpb24gPiAwKVxyXG4gICAgICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIFNlbGYuZmFkZU91dChTZXR0aW5ncy5Gb3JtRmFkZUR1cmF0aW9uLCBjbG9zZUFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgY2xvc2VBY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgLy9lbHNlXHJcbiAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgIC8vICAgIENvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBDYWxjdWxhdGVaT3JkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIEFjdGl2ZUZvcm0gPSBfUHJldkFjdGl2ZUZvcm07XHJcbiAgICAgICAgICAgIGlmIChfaXNEaWFsb2cpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9pbkRpYWxvZ1Jlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoRGlhbG9nUmVzdWx0ICE9IERpYWxvZ1Jlc3VsdC5Ob25lICYmXHJcbiAgICAgICAgICAgICAgICBEaWFsb2dSZXN1bHRzICE9IG51bGwgJiYgRGlhbG9nUmVzdWx0cy5Db3VudCA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBEaWFsb2dSZXN1bHRzLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2dSZXN1bHRzW2ldLkludm9rZUlmUmVzdWx0KERpYWxvZ1Jlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBPbkZvcm1DbG9zZWQoKTtcclxuXHJcbiAgICAgICAgICAgIE9uQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoV2luZG93U3RhdGUgPT0gV2luZG93U3RhdGUuTWluaW1pemVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbWluaW1pemVkRm9ybXMuUmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgQ2FsY3VsYXRlTWlubWl6ZWRGb3Jtc0xvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF9pbkNsb3NlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIENhbGN1bGF0ZU1pbm1pemVkRm9ybXNMb2NhdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX21pbmltaXplZEZvcm1zLkNvdW50ID4gMCAmJiBfbWluaW1pemVkRm9ybXMuQ29udGFpbnMobnVsbCkpXHJcbiAgICAgICAgICAgICAgICBfbWluaW1pemVkRm9ybXMuUmVtb3ZlKG51bGwpO1xyXG4gICAgICAgICAgICB2YXIgUmVtb3ZlTGlzdCA9IG5ldyBMaXN0PEZvcm0+KCk7XHJcbiAgICAgICAgICAgIGludCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZsb2F0IHdpZHRoVG90YWwgPSAwO1xyXG4gICAgICAgICAgICBpbnQgeSA9IDMwO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZpZXdTaXplID0gUmV0eXBlZC5kb20uZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBpdGVtIGluIF9taW5pbWl6ZWRGb3JtcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uRWxlbWVudCA9PSBudWxsIHx8IGl0ZW0uV2luZG93U3RhdGUgIT0gV2luZG93U3RhdGUuTWluaW1pemVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZUxpc3QuQWRkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUb0luY3JlbWVudCA9IDMgKyBpdGVtLlNpemUuV2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aFRvdGFsICsgVG9JbmNyZW1lbnQgPiB2aWV3U2l6ZS53aWR0aClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoVG90YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKz0gMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2l0ZW0uTG9jYXRpb24gPSBuZXcgVmVjdG9yMih3aWR0aFRvdGFsLCBcIigxMDAlIC0gXCIgKyAoeSArIDIpICsgXCJweClcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5FbGVtZW50LnN0eWxlLmxlZnQgPSBzdHJpbmcuRm9ybWF0KFwiezB9cHhcIix3aWR0aFRvdGFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkVsZW1lbnQuc3R5bGUudG9wID0gXCJjYWxjKDEwMCUgLSBcIiArICh5ICsgMikgKyBcInB4KVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aFRvdGFsICs9IFRvSW5jcmVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBpdGVtIGluIFJlbW92ZUxpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9taW5pbWl6ZWRGb3Jtcy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIExpc3Q8Rm9ybT4gX21pbmltaXplZEZvcm1zID0gbmV3IExpc3Q8Rm9ybT4oKTtcclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uRm9ybUNsb3NlZCgpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25DbG9zZWQoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGb3JtQ29sbGVjdGlvbiBHZXRBY3RpdmVGb3JtQ29sbGVjdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gX2Zvcm1Db2xsZWN0aW9ucy5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJtQ29sID0gX2Zvcm1Db2xsZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChmcm1Db2wuRm9ybU93bmVyID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgeCA9IDA7IHggPCBmcm1Db2wuVmlzaWJsZUZvcm1zLkNvdW50OyB4KyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJtQ29sLlZpc2libGVGb3Jtc1t4XSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm1Db2wuVmlzaWJsZUZvcm1zW3hdLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1Db2xsZWN0aW9ucy5SZW1vdmVBdChpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJtQ29sO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJyaW5nVG9Gcm9udCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlQ29sbGVjdCA9IEdldEFjdGl2ZUZvcm1Db2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVDb2xsZWN0ICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVDb2xsZWN0LkZvcm1Pd25lciA9PSB0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHZhciB2aXNpYmxlRm9ybXMgPSBhY3RpdmVDb2xsZWN0LlZpc2libGVGb3JtcztcclxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlRm9ybXMgIT0gbnVsbCAmJiB2aXNpYmxlRm9ybXMuQ291bnQgPiAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVGb3Jtcy5SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUZvcm1zLkFkZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdGVaT3JkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2hvdygpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoX2lzRGlhbG9nKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoKF9mb3JtQ29sbGVjdGlvbnMgPT0gbnVsbCB8fCBfZm9ybUNvbGxlY3Rpb25zLkNvdW50ID09IDApKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfc2hvd1N0YXJ0TmV3TGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUNvbGxlY3QgPSBHZXRBY3RpdmVGb3JtQ29sbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgdmlzYmlsZUZvcm1zID0gYWN0aXZlQ29sbGVjdC5WaXNpYmxlRm9ybXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZpc2JpbGVGb3Jtcy5Db250YWlucyh0aGlzKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmlzYmlsZUZvcm1zLkFkZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdGVaT3JkZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPblNob3dlZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFJlc2l6aW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgT25Mb2FkKEV2ZW50QXJncy5FbXB0eSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEFjdGl2ZUZvcm0gPSB0aGlzOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2hvd0RpYWxvZyhwYXJhbXMgRGlhbG9nT3B0aW9uW10gZGlhbG9nUmVzdWx0cylcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9pbkRpYWxvZ1Jlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgX2lzRGlhbG9nID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9pZiAoU3RhcnRQb3NpdGlvbiAhPSBGb3JtU3RhcnRQb3NpdGlvbi5NYW51YWwpXHJcbiAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAvLyAgICBpZiAoIUhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgU3RhcnRQb3NpdGlvbiA9IEZvcm1TdGFydFBvc2l0aW9uLkNlbnRlcjtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIF9zaG93U3RhcnROZXdMZXZlbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpYWxvZ1Jlc3VsdHMgIT0gbnVsbCAmJiBkaWFsb2dSZXN1bHRzLkxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERpYWxvZ1Jlc3VsdHMuQWRkUmFuZ2UoZGlhbG9nUmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBfc2hvd0Zvcm0oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmV0eXBlZC5kb20uZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50Pih0aGlzLkVsZW1lbnQpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIF9zaG93U3RhcnROZXdMZXZlbCgpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfZm9ybUNvbGxlY3Rpb25zLkFkZChuZXcgRm9ybUNvbGxlY3Rpb24odGhpcykpO1xyXG4gICAgICAgICAgICBfc2hvd0Zvcm0oKTtcclxuICAgICAgICAgICAgQ2FsY3VsYXRlWk9yZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIChTdGFydFBvc2l0aW9uID09IEZvcm1TdGFydFBvc2l0aW9uLkNlbnRlcilcclxuICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgIC8vICAgIENlbnRyZUZvcm0oKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICBPblNob3dlZCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgUmVzaXppbmcoKTtcclxuXHJcbiAgICAgICAgICAgIEFjdGl2ZUZvcm0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgT25Mb2FkKEV2ZW50QXJncy5FbXB0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uU2hvd2VkKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgUmVzaXppbmcoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGludCBfcHJldlg7XHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX3ByZXZZO1xyXG5cclxuICAgICAgICBwcml2YXRlIGludCBfcHJldkZvcm1YO1xyXG4gICAgICAgIHByaXZhdGUgaW50IF9wcmV2Rm9ybVk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb3JtKCkgOiBiYXNlKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJmb3JtXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5Mb2NhdGlvbiA9IG5ldyBQb2ludCgwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIF9zZXRCb3JkZXJXaWR0aCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250cm9sQm94ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29udHJvbEJveFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9jb250cm9sQm94OyB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZihfY29udHJvbEJveCAhPSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfY29udHJvbEJveCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzV2luRm9ybVZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgRm9ybUJvcmRlclN0eWxlIF9mb3JtQm9yZGVyU3R5bGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb3JtQm9yZGVyU3R5bGUgRm9ybUJvcmRlclN0eWxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2Zvcm1Cb3JkZXJTdHlsZTsgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgaWYoX2Zvcm1Cb3JkZXJTdHlsZSAhPSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUJvcmRlclN0eWxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3NXaW5Gb3JtVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHByaXZhdGUgZW51bSBGb3JtTW92ZW1lbnRNb2Rlc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTm9uZSxcclxuICAgICAgICAgICAgTW92ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25Nb3VzZURvd24oTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFjdGl2ZUZvcm0gPSB0aGlzO1xyXG4gICAgICAgICAgICAvLyB3b3JrIG91dCBhcmVhLi4uIG9mIGNsaWNrLlxyXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IFNpemU7XHJcbiAgICAgICAgICAgIF9mb3JtTW92ZW1lbnRNb2RlcyA9IEZvcm1Nb3ZlbWVudE1vZGVzLk5vbmU7XHJcblxyXG4gICAgICAgICAgICAvL2lmKGUuWCA+IDEgJiYgZS5YIDwgKVxyXG4gICAgICAgICAgICBpZiAoX2FsbG93TW92ZUNoYW5nZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuWCA+IDEgJiYgZS5YIDw9IHNpemUuV2lkdGggLSBfZm9ybVJpZ2h0Qm9yZGVyICYmIGUuWSA+IDEgJiYgZS5ZIDw9IF9mb3JtVG9wQm9yZGVyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtTW92ZW1lbnRNb2RlcyA9IEZvcm1Nb3ZlbWVudE1vZGVzLk1vdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgX3ByZXZYID0gTG9jYXRpb24uWCAtIChlLlggKyBMb2NhdGlvbi5YKTtcclxuICAgICAgICAgICAgICAgICAgICBfcHJldlkgPSBMb2NhdGlvbi5ZIC0gKGUuWSArIExvY2F0aW9uLlkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfcHJldkZvcm1YID0gTG9jYXRpb24uWDtcclxuICAgICAgICAgICAgICAgICAgICBfcHJldkZvcm1ZID0gTG9jYXRpb24uWTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jbGllbnRSZWMudG9wIC0gbW91c2VQb3MuWWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF9tb3VzZURvd25PbkJvcmRlciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBiYXNlLk9uTW91c2VEb3duKGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uTW91c2VVcChNb3VzZUV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX21vdXNlRG93bk9uQm9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhc2UuT25Nb3VzZVVwKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25Nb3VzZU1vdmUoTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlzIG1vdXNlIGRvd24/Pz9cclxuICAgICAgICAgICAgaWYoX21vdXNlRG93bk9uQm9yZGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihfZm9ybU1vdmVtZW50TW9kZXMgPT0gRm9ybU1vdmVtZW50TW9kZXMuTW92ZSlcclxuICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uID0gbmV3IFBvaW50KChMb2NhdGlvbi5YICsgZS5YKSArIF9wcmV2WCwgKExvY2F0aW9uLlkgKyBlLlkpICsgX3ByZXZZKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBuZXdYID0gKChtWCA9IG1vdXNlUG9zLlhmKSArIE1vdmluZ0Zvcm0ucHJldl9weCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgbmV3WSA9ICgobVkgPSBtb3VzZVBvcy5ZZikgKyBNb3ZpbmdGb3JtLnByZXZfcHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGRvIHNvbWUgYWN0aW9uIHJlZ2FyZGluZyB0aGlzLi4uIGV0YyBtb3ZlIGZvcm0sIHJlc2l6ZSBpbiBkaXJlY3Rpb24uXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuT25Nb3VzZU1vdmUoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgX3Byb2Nlc3NXaW5Gb3JtVmlldygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2xpZW50U2l6ZSA9IENsaWVudFNpemU7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gYWxsb3cgZm9yIGN1c3RvbSBzaXplIHBlciBzdHlsZSAtIGN1cnJlbnRseSBzZXQgYXMgd2luZG93cyAxMC5cclxuICAgICAgICAgICAgc3dpdGNoIChfZm9ybUJvcmRlclN0eWxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1Cb3JkZXJTdHlsZS5Ob25lOlxyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUJvdHRvbkJvcmRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfYWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGb3JtQm9yZGVyU3R5bGUuRml4ZWRTaW5nbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2FsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29udHJvbEJveClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAzMTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtTGVmdEJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1Cb3JkZXJTdHlsZS5GaXhlZDNEOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNvbnRyb2xCb3gpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGb3JtQm9yZGVyU3R5bGUuRml4ZWREaWFsb2c6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9hbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNvbnRyb2xCb3gpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRm9ybUJvcmRlclN0eWxlLlNpemFibGU6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIUNvbnRyb2xCb3gpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtUmlnaHRCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hbGxvd1NpemVDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGb3JtQm9yZGVyU3R5bGUuRml4ZWRUb29sV2luZG93OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29udHJvbEJveClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAzMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtTGVmdEJvcmRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGb3JtQm9yZGVyU3R5bGUuU2l6YWJsZVRvb2xXaW5kb3c6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDb250cm9sQm94KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDMxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUJvdHRvbkJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBfYWxsb3dTaXplQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF9zZXRCb3JkZXJXaWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgQ2xpZW50U2l6ZSA9IGNsaWVudFNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgX3NldEJvcmRlcldpZHRoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm9yZGVyVG9wV2lkdGggPSBfZm9ybVRvcEJvcmRlciArIFwicHhcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IF9mb3JtQm90dG9uQm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmJvcmRlckxlZnRXaWR0aCA9IF9mb3JtTGVmdEJvcmRlciArIFwicHhcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoID0gX2Zvcm1SaWdodEJvcmRlciArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEZvbnQgRm9udCB7IGdldCB7IHJldHVybiBiYXNlLkZvbnQ7IH0gc2V0IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYXNlLkZvbnQgPSB2YWx1ZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIFNpemUgR2V0Q2xpZW50U2l6ZShTaXplIHNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpemUoc2l6ZS5XaWR0aCAtIChfZm9ybUxlZnRCb3JkZXIgKyBfZm9ybVJpZ2h0Qm9yZGVyKSwgc2l6ZS5IZWlnaHQgLSAoX2Zvcm1Ub3BCb3JkZXIgKyBfZm9ybUJvdHRvbkJvcmRlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBTaXplIFNldFNpemUoU2l6ZSBjbGllbnRTaXplKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTaXplKGNsaWVudFNpemUuV2lkdGggKyAoX2Zvcm1MZWZ0Qm9yZGVyICsgX2Zvcm1SaWdodEJvcmRlciksIGNsaWVudFNpemUuSGVpZ2h0ICsgKF9mb3JtVG9wQm9yZGVyICsgX2Zvcm1Cb3R0b25Cb3JkZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgRGlzcG9zZShib29sIGRpc3Bvc2luZylcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBTaXplIENsaWVudFNpemUgeyBnZXQgeyByZXR1cm4gR2V0Q2xpZW50U2l6ZShTaXplKTsgfSBzZXQgeyBTaXplID0gU2V0U2l6ZSh2YWx1ZSk7IH0gfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dCB7IGdldDsgc2V0OyB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGRlbGVnYXRlIHZvaWQgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEhhbmRsZXIob2JqZWN0IHNlbmRlciwgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MgZSk7XHJcbiAgICAvL1xyXG4gICAgLy8gU3VtbWFyeTpcclxuICAgIC8vICAgICBQcm92aWRlcyBkYXRhIGZvciB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLkxpbmtDbGlja2VkIGV2ZW50LiAgICBcclxuICAgIHB1YmxpYyBjbGFzcyBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyA6IEV2ZW50QXJnc1xyXG4gICAge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzXHJcbiAgICAgICAgLy8gICAgIGNsYXNzIHdpdGggdGhlIHNwZWNpZmllZCBsaW5rLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUGFyYW1ldGVyczpcclxuICAgICAgICAvLyAgIGxpbms6XHJcbiAgICAgICAgLy8gICAgIFRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWwuTGluayB0aGF0IHdhcyBjbGlja2VkLlxyXG4gICAgICAgIHB1YmxpYyBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyhMaW5rTGFiZWwuTGluayBsaW5rKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzXHJcbiAgICAgICAgLy8gICAgIGNsYXNzIHdpdGggdGhlIHNwZWNpZmllZCBsaW5rIGFuZCB0aGUgc3BlY2lmaWVkIG1vdXNlIGJ1dHRvbi5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFBhcmFtZXRlcnM6XHJcbiAgICAgICAgLy8gICBsaW5rOlxyXG4gICAgICAgIC8vICAgICBUaGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLkxpbmsgdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgYnV0dG9uOlxyXG4gICAgICAgIC8vICAgICBPbmUgb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLk1vdXNlQnV0dG9ucyB2YWx1ZXMuXHJcbiAgICAgICAgcHVibGljIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzKExpbmtMYWJlbC5MaW5rIGxpbmssIE1vdXNlQnV0dG9ucyBidXR0b24pXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyB0aGUgbW91c2UgYnV0dG9uIHRoYXQgY2F1c2VzIHRoZSBsaW5rIHRvIGJlIGNsaWNrZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSZXR1cm5zOlxyXG4gICAgICAgIC8vICAgICBPbmUgb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLk1vdXNlQnV0dG9ucyB2YWx1ZXMuXHJcbiAgICAgICAgcHVibGljIE1vdXNlQnV0dG9ucyBCdXR0b24geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBHZXRzIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWwuTGluayB0aGF0IHdhcyBjbGlja2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgQSBsaW5rIG9uIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWwuXHJcbiAgICAgICAgcHVibGljIExpbmtMYWJlbC5MaW5rIExpbmsgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vXHJcbiAgICAvLyBTdW1tYXJ5OlxyXG4gICAgLy8gICAgIFByb3ZpZGVzIGRhdGEgZm9yIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Db250cm9sLk1vdXNlVXAsIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkNvbnRyb2wuTW91c2VEb3duLFxyXG4gICAgLy8gICAgIGFuZCBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Db250cm9sLk1vdXNlTW92ZSBldmVudHMuXHJcbiAgICBwdWJsaWMgY2xhc3MgTW91c2VFdmVudEFyZ3MgOiBFdmVudEFyZ3NcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUmV0eXBlZC5kb20uTW91c2VFdmVudCBPcmlnaW5hbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgUG9pbnQgR2V0T2Zmc2V0UG9pbnQoUmV0eXBlZC5kb20uRWxlbWVudCBlbGVtZW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZG91YmxlIHRvcCA9IDA7XHJcbiAgICAgICAgICAgIGRvdWJsZSBsZWZ0ID0gMDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZHluYW1pYyBkeW0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdG9wICs9IGR5bS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IGR5bS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGR5bS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsZW1lbnQgIT0gbnVsbCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvaW50KChpbnQpbGVmdCwgKGludCl0b3ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgYm9vbCBJc0VkZ2U7XHJcbiAgICAgICAgc3RhdGljIE1vdXNlRXZlbnRBcmdzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElzRWRnZSA9IFJldHlwZWQuZG9tLndpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LkluZGV4T2YoXCJFZGdlXCIpID4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIE1vdXNlRXZlbnRBcmdzIENyZWF0ZUZyb21Nb3VzZUV2ZW50KFJldHlwZWQuZG9tLk1vdXNlRXZlbnQgb3JpZ2luYWwsIENvbnRyb2wgdGFyZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gd2hhdCB3ZSBuZWVkIHRvIGRvIGlzIGdldCB0aGUgbG9jYWwgeCwgeSBvZmYgZnJvbSB0aGUgdGFyZ2V0LlxyXG5cclxuICAgICAgICAgICAgUG9pbnQgbW91c2VQb2ludDtcclxuXHJcbiAgICAgICAgICAgIGlmKG9yaWdpbmFsLmN1cnJlbnRUYXJnZXQgPT0gdGFyZ2V0LkVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKEJyb3dzZXIuSXNJRSB8fCBJc0VkZ2UpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IEdldE9mZnNldFBvaW50KHRhcmdldC5FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBtb3VzZVBvaW50ID0gbmV3IFBvaW50KChpbnQpKG9yaWdpbmFsLmNsaWVudFggLSBvZmZzZXQuWCksIChpbnQpKG9yaWdpbmFsLmNsaWVudFkgLSBvZmZzZXQuWSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlUG9pbnQgPSBuZXcgUG9pbnQoKGludClvcmlnaW5hbC5sYXllclgsIChpbnQpb3JpZ2luYWwubGF5ZXJZKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gR2V0T2Zmc2V0UG9pbnQodGFyZ2V0LkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgbW91c2VQb2ludCA9IG5ldyBQb2ludCgoaW50KShvcmlnaW5hbC54IC0gb2Zmc2V0LlgpLCAoaW50KShvcmlnaW5hbC55IC0gb2Zmc2V0LlkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9Db25zb2xlLkNsZWFyKCk7XHJcbiAgICAgICAgICAgIC8vQ29uc29sZS5Xcml0ZUxpbmUobW91c2VQb2ludC5Ub1N0cmluZygpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBidXR0b24gPSAoaW50KW9yaWdpbmFsLmJ1dHRvbjtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3VzZUV2ZW50QXJncyhcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiA9PSAxID8gTW91c2VCdXR0b25zLkxlZnQgOlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uID09IDIgPyBNb3VzZUJ1dHRvbnMuUmlnaHQgOlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uID09IDQgPyBNb3VzZUJ1dHRvbnMuTWlkZGxlIDpcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiA9PSA4ID8gTW91c2VCdXR0b25zLlhCdXR0b24yIDpcclxuICAgICAgICAgICAgICAgIE1vdXNlQnV0dG9ucy5YQnV0dG9uMixcclxuICAgICAgICAgICAgICAgIDEsIG1vdXNlUG9pbnQuWCwgbW91c2VQb2ludC5ZLCAwKVxyXG4gICAgICAgICAgICB7IE9yaWdpbmFsID0gb3JpZ2luYWwgfTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLk1vdXNlRXZlbnRBcmdzIGNsYXNzLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUGFyYW1ldGVyczpcclxuICAgICAgICAvLyAgIGJ1dHRvbjpcclxuICAgICAgICAvLyAgICAgT25lIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Nb3VzZUJ1dHRvbnMgdmFsdWVzIHRoYXQgaW5kaWNhdGUgd2hpY2ggbW91c2VcclxuICAgICAgICAvLyAgICAgYnV0dG9uIHdhcyBwcmVzc2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICBjbGlja3M6XHJcbiAgICAgICAgLy8gICAgIFRoZSBudW1iZXIgb2YgdGltZXMgYSBtb3VzZSBidXR0b24gd2FzIHByZXNzZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgIHg6XHJcbiAgICAgICAgLy8gICAgIFRoZSB4LWNvb3JkaW5hdGUgb2YgYSBtb3VzZSBjbGljaywgaW4gcGl4ZWxzLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICB5OlxyXG4gICAgICAgIC8vICAgICBUaGUgeS1jb29yZGluYXRlIG9mIGEgbW91c2UgY2xpY2ssIGluIHBpeGVscy5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgZGVsdGE6XHJcbiAgICAgICAgLy8gICAgIEEgc2lnbmVkIGNvdW50IG9mIHRoZSBudW1iZXIgb2YgZGV0ZW50cyB0aGUgd2hlZWwgaGFzIHJvdGF0ZWQuXHJcbiAgICAgICAgcHVibGljIE1vdXNlRXZlbnRBcmdzKE1vdXNlQnV0dG9ucyBidXR0b24sIGludCBjbGlja3MsIGludCB4LCBpbnQgeSwgaW50IGRlbHRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5CdXR0b24gPSBidXR0b247XHJcbiAgICAgICAgICAgIHRoaXMuQ2xpY2tzID0gY2xpY2tzO1xyXG4gICAgICAgICAgICB0aGlzLlggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLlkgPSB5O1xyXG4gICAgICAgICAgICB0aGlzLkRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgICAgIHRoaXMuTG9jYXRpb24gPSBuZXcgUG9pbnQoWCwgWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgd2hpY2ggbW91c2UgYnV0dG9uIHdhcyBwcmVzc2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgT25lIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Nb3VzZUJ1dHRvbnMgdmFsdWVzLlxyXG4gICAgICAgIHB1YmxpYyBNb3VzZUJ1dHRvbnMgQnV0dG9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBtb3VzZSBidXR0b24gd2FzIHByZXNzZWQgYW5kIHJlbGVhc2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgQW4gU3lzdGVtLkludDMyIHRoYXQgY29udGFpbnMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbW91c2UgYnV0dG9uIHdhcyBwcmVzc2VkXHJcbiAgICAgICAgLy8gICAgIGFuZCByZWxlYXNlZC5cclxuICAgICAgICBwdWJsaWMgaW50IENsaWNrcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgbW91c2UgZHVyaW5nIHRoZSBnZW5lcmF0aW5nIG1vdXNlIGV2ZW50LlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgVGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgbW91c2UsIGluIHBpeGVscy5cclxuICAgICAgICBwdWJsaWMgaW50IFggeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBHZXRzIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIG1vdXNlIGR1cmluZyB0aGUgZ2VuZXJhdGluZyBtb3VzZSBldmVudC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFJldHVybnM6XHJcbiAgICAgICAgLy8gICAgIFRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIG1vdXNlLCBpbiBwaXhlbHMuXHJcbiAgICAgICAgcHVibGljIGludCBZIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyBhIHNpZ25lZCBjb3VudCBvZiB0aGUgbnVtYmVyIG9mIGRldGVudHMgdGhlIG1vdXNlIHdoZWVsIGhhcyByb3RhdGVkLCBtdWx0aXBsaWVkXHJcbiAgICAgICAgLy8gICAgIGJ5IHRoZSBXSEVFTF9ERUxUQSBjb25zdGFudC4gQSBkZXRlbnQgaXMgb25lIG5vdGNoIG9mIHRoZSBtb3VzZSB3aGVlbC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFJldHVybnM6XHJcbiAgICAgICAgLy8gICAgIEEgc2lnbmVkIGNvdW50IG9mIHRoZSBudW1iZXIgb2YgZGV0ZW50cyB0aGUgbW91c2Ugd2hlZWwgaGFzIHJvdGF0ZWQsIG11bHRpcGxpZWRcclxuICAgICAgICAvLyAgICAgYnkgdGhlIFdIRUVMX0RFTFRBIGNvbnN0YW50LlxyXG4gICAgICAgIHB1YmxpYyBpbnQgRGVsdGEgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBHZXRzIHRoZSBsb2NhdGlvbiBvZiB0aGUgbW91c2UgZHVyaW5nIHRoZSBnZW5lcmF0aW5nIG1vdXNlIGV2ZW50LlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgQSBTeXN0ZW0uRHJhd2luZy5Qb2ludCB0aGF0IGNvbnRhaW5zIHRoZSB4LSBhbmQgeS0gbW91c2UgY29vcmRpbmF0ZXMsIGluIHBpeGVscyxcclxuICAgICAgICAvLyAgICAgcmVsYXRpdmUgdG8gdGhlIHVwcGVyLWxlZnQgY29ybmVyIG9mIHRoZSBmb3JtLlxyXG4gICAgICAgIHB1YmxpYyBQb2ludCBMb2NhdGlvbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICAvL1xyXG4gICAgLy8gU3VtbWFyeTpcclxuICAgIC8vICAgICBSZXByZXNlbnRzIHRoZSBjb2xsZWN0aW9uIG9mIGl0ZW1zIGluIGEgU3lzdGVtLldpbmRvd3MuRm9ybXMuQ29tYm9Cb3guXHJcbiAgICBwdWJsaWMgY2xhc3MgT2JqZWN0Q29sbGVjdGlvbiA6IElMaXN0PG9iamVjdD4sIElDb2xsZWN0aW9uLCBJRW51bWVyYWJsZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgQ29udHJvbCBfb3duZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBPYmplY3RDb2xsZWN0aW9uKENvbnRyb2wgb3duZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgX2NvbnRyb2xzID0gbmV3IExpc3Q8b2JqZWN0PigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2wgT3duZXIgeyBnZXQgeyByZXR1cm4gX293bmVyOyB9IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc1N5bmNocm9uaXplZCB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgU3luY1Jvb3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIExpc3Q8b2JqZWN0PiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgdGhpc1tpbnQgaW5kZXhdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IENvdW50IHsgZ2V0IHsgcmV0dXJuIF9jb250cm9scy5Db3VudDsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQob2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50PihuZXcgUmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQoKSB7IHZhbHVlID0gX2NvbnRyb2xzLkNvdW50LlRvU3RyaW5nKCksIHRleHRDb250ZW50ID0gKGl0ZW0gKyBcIlwiKSB9ICk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShvYmplY3RbXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQ+KG5ldyBSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudCgpIHsgdmFsdWUgPSBfY29udHJvbHMuQ291bnQuVG9TdHJpbmcoKSwgdGV4dENvbnRlbnQgPSAoaXRlbVtpXSArIFwiXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUobGVuLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZChfb3duZXIuRWxlbWVudC5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhvYmplY3RbXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChvYmplY3RbXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8b2JqZWN0PiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgb2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5pbnNlcnRCZWZvcmU8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudD4obmV3IFJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50KCkgeyB2YWx1ZSA9IF9jb250cm9scy5Db3VudC5Ub1N0cmluZygpLCB0ZXh0Q29udGVudCA9IChpdGVtICsgXCJcIikgfSwgX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuSW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFJlbW92ZShvYmplY3QgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tfY29udHJvbHMuSW5kZXhPZihpdGVtKV0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLlJlbW92ZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZUF0KGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgUGFkZGluZ1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgTGVmdCwgVG9wLCBSaWdodCwgQm90dG9tO1xyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nKGludCBsZWZ0LCBpbnQgdG9wLCBpbnQgcmlnaHQsIGludCBib3R0b20pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMZWZ0ID0gbGVmdDsgVG9wID0gdG9wOyBSaWdodCA9IHJpZ2h0OyBCb3R0b20gPSBib3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUGFkZGluZyhpbnQgYWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGVmdCA9IGFsbDsgVG9wID0gYWxsOyBSaWdodCA9IGFsbDsgQm90dG9tID0gYWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbkJhc2UgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIEJ1dHRvbkJhc2UoUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQgZWxlbWVudCkgOiBiYXNlKGVsZW1lbnQpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgQXV0b1NpemUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dCB7IGdldCB7IHJldHVybiBiYXNlLlRleHQ7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBVc2VWaXN1YWxTdHlsZUJhY2tDb2xvciB7IGdldDsgc2V0OyB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb21ib0JveCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ29tYm9Cb3goKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxTZWxlY3RFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJdGVtcyA9IG5ldyBPYmplY3RDb2xsZWN0aW9uKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgT2JqZWN0Q29sbGVjdGlvbiBJdGVtcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEZvcm1hdHRpbmdFbmFibGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgSXRlbUhlaWdodCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERyYXdNb2RlIERyYXdNb2RlIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTaXplIE1pbmltdW1TaXplIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgTGlzdEJveCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlzdEJveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTFNlbGVjdEVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTFNlbGVjdEVsZW1lbnQ+KCkubXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBJdGVtcyA9IG5ldyBPYmplY3RDb2xsZWN0aW9uKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgT2JqZWN0Q29sbGVjdGlvbiBJdGVtcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEZvcm1hdHRpbmdFbmFibGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgSXRlbUhlaWdodCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udGFpbmVyQ29udHJvbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU2l6ZUYgQXV0b1NjYWxlRGltZW5zaW9ucyB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIEF1dG9TY2FsZU1vZGUgQXV0b1NjYWxlTW9kZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250YWluZXJDb250cm9sKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udGFpbmVyQ29udHJvbChSZXR5cGVkLmRvbS5IVE1MRWxlbWVudCBlbGVtZW50KSA6IGJhc2UoZWxlbWVudClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gVE9ETyAtIGFkZCBjb250cm9scyB2aWEgaHRtbC4uLi5cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udHJvbENvbGxlY3Rpb24gOiBJTGlzdDxDb250cm9sPiwgSUNvbGxlY3Rpb24sIElFbnVtZXJhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgQ29udHJvbCBfb3duZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sQ29sbGVjdGlvbihDb250cm9sIG93bmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PENvbnRyb2w+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbCBPd25lciB7IGdldCB7IHJldHVybiBfb3duZXI7IH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIExpc3Q8Q29udHJvbD4gX2NvbnRyb2xzO1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbCB0aGlzW2ludCBpbmRleF0geyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF9jb250cm9sc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQgeyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzLkNvdW50OyAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG4gICAgICAgIHB1YmxpYyBib29sIElzU3luY2hyb25pemVkIHsgZ2V0IHsgcmV0dXJuIGZhbHNlOyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iamVjdCBTeW5jUm9vdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgaXRlbS5fcGFyZW50ID0gT3duZXI7XHJcbiAgICAgICAgICAgIGl0ZW0uSW52b2tlTG9hZCgpO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW0pO1xyXG4gICAgICAgICAgICBfb3duZXIuT25Db250cm9sQWRkZWQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShDb250cm9sW10gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbS5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGZyYWcgPSBSZXR5cGVkLmRvbS5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgaXRlbS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtW2ldLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtpXS5fcGFyZW50ID0gT3duZXI7XHJcbiAgICAgICAgICAgICAgICBpdGVtW2ldLkludm9rZUxvYWQoKTtcclxuICAgICAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbVtpXSk7XHJcbiAgICAgICAgICAgICAgICBfb3duZXIuT25Db250cm9sQWRkZWQoaXRlbVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Eb2N1bWVudEZyYWdtZW50PihmcmFnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8qQFxyXG5cdFx0XHR2YXIgbGVuID0gX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlKGxlbi0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0X293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQoX293bmVyLkVsZW1lbnQubGFzdENoaWxkKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Ki9cclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBDb250YWlucyhDb250cm9sIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkNvbnRhaW5zKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKENvbnRyb2xbXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChDb250cm9sW10pYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElFbnVtZXJhdG9yPENvbnRyb2w+IEdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IEluZGV4T2YoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQuaW5zZXJ0QmVmb3JlPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCwgX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuSW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgICAgICAgICAgX293bmVyLk9uQ29udHJvbEFkZGVkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgUmVtb3ZlKENvbnRyb2wgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBfb3duZXIuT25Db250cm9sUmVtb3ZlZChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuUmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVtb3ZlQXQoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBfb3duZXIuT25Db250cm9sUmVtb3ZlZChfY29udHJvbHNbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIF9jb250cm9scy5SZW1vdmVBdChpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJRW51bWVyYXRvciBJRW51bWVyYWJsZS5HZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlldyA6IENvbnRyb2wsIElTdXBwb3J0SW5pdGlhbGl6ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUgQ29sdW1uSGVhZGVyc0hlaWdodFNpemVNb2RlIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3Q29sdW1uQ29sbGVjdGlvbiBDb2x1bW5zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uIFJvd3MgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZUVsZW1lbnQgdGFibGU7XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlldygpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhYmxlID0gbmV3IFJldHlwZWQuZG9tLkhUTUxUYWJsZUVsZW1lbnQoKTtcclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZUVsZW1lbnQ+KHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuXHJcbiAgICAgICAgICAgIENvbHVtbnMgPSBuZXcgRGF0YUdyaWRWaWV3Q29sdW1uQ29sbGVjdGlvbih0aGlzLCB0YWJsZSk7XHJcbiAgICAgICAgICAgIFJvd3MgPSBuZXcgRGF0YUdyaWRWaWV3Um93Q29sbGVjdGlvbih0aGlzLCB0YWJsZSk7XHJcblxyXG4gICAgICAgICAgICBUYWJTdG9wID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwidGFibGVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBCZWdpbkluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBFbmRJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5Db250YWlucyhcIixcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyeSA9IHN0ci5TcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJ5Lkxlbmd0aCA+PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc05hbWUgPSBhcnJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID49IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gYXJyeVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW5zLmhlYWRlci5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbnMuaGVhZGVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBzdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbnMuaGVhZGVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbHVtbnMuaGVhZGVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBPbk5ld1Jvd0V2ZW50KG9iamVjdCBzZW5kZXIsIE5ld1Jvd0V2ZW50QXJncyBhcmdzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUm93cy5BZGQoYXJncy5Sb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBvYmplY3QgZGF0YVNvdXJjZTtcclxuICAgICAgICBwdWJsaWMgb2JqZWN0IERhdGFTb3VyY2UgeyBnZXQgeyByZXR1cm4gZGF0YVNvdXJjZTsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgIT0gZGF0YVNvdXJjZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhU291cmNlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhU291cmNlIGlzIERhdGFUYWJsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR0ID0gZGF0YVNvdXJjZS5BczxEYXRhVGFibGU+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHQuTmV3Um93RXZlbnQgLT0gT25OZXdSb3dFdmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVNvdXJjZSAhPSBudWxsICYmIGRhdGFTb3VyY2UgaXMgRGF0YVRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGR0ID0gZGF0YVNvdXJjZS5BczxEYXRhVGFibGU+KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdC5OZXdSb3dFdmVudCArPSBPbk5ld1Jvd0V2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uIDogSUxpc3Q8RGF0YUdyaWRWaWV3Q29sdW1uPiwgSUNvbGxlY3Rpb24sIElFbnVtZXJhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgRGF0YUdyaWRWaWV3IF9vd25lcjtcclxuICAgICAgICBpbnRlcm5hbCBSZXR5cGVkLmRvbS5IVE1MVGFibGVTZWN0aW9uRWxlbWVudCBoZWFkZXI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uKERhdGFHcmlkVmlldyBvd25lciwgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCB0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lciA9IG93bmVyO1xyXG4gICAgICAgICAgICBfY29udHJvbHMgPSBuZXcgTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+KCk7ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBoZWFkZXIgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PihoZWFkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlldyBPd25lciB7IGdldCB7IHJldHVybiBfb3duZXI7IH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIExpc3Q8RGF0YUdyaWRWaWV3Q29sdW1uPiBfY29udHJvbHM7XHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNTeW5jaHJvbml6ZWQgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFN5bmNSb290XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbiB0aGlzW2ludCBpbmRleF0geyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF9jb250cm9sc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQgeyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzLkNvdW50OyAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShEYXRhR3JpZFZpZXdDb2x1bW5bXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW1baV0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBoZWFkZXIuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlKGxlbi0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRlci5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKERhdGFHcmlkVmlld0NvbHVtbiBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhEYXRhR3JpZFZpZXdDb2x1bW5bXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChEYXRhR3JpZFZpZXdDb2x1bW5bXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8RGF0YUdyaWRWaWV3Q29sdW1uPiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKERhdGFHcmlkVmlld0NvbHVtbiBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIuaW5zZXJ0QmVmb3JlPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCwgaGVhZGVyLmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihoZWFkZXIuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uIDogSUxpc3Q8RGF0YVJvdz4sIElDb2xsZWN0aW9uLCBJRW51bWVyYWJsZVxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIERhdGFHcmlkVmlldyBfb3duZXI7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQgYm9keTtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24oRGF0YUdyaWRWaWV3IG93bmVyLCBSZXR5cGVkLmRvbS5IVE1MVGFibGVFbGVtZW50IHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PERhdGFSb3c+KCk7XHJcblxyXG4gICAgICAgICAgICBib2R5ID0gdGFibGUuY3JlYXRlVEJvZHkoKTtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVTZWN0aW9uRWxlbWVudD4oYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3IE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxEYXRhUm93PiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhUm93IHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNTeW5jaHJvbml6ZWQgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFN5bmNSb290XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkUmFuZ2UoRGF0YVJvd1tdIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uTGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBmcmFnID0gUmV0eXBlZC5kb20uZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGl0ZW0uTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50PihpdGVtW2ldLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uRG9jdW1lbnRGcmFnbWVudD4oZnJhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKkBcclxuXHRcdFx0dmFyIGxlbiA9IGJvZHkuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlKGxlbi0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ym9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7XHJcblx0XHRcdH07XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIF9jb250cm9scy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29udGFpbnMoRGF0YVJvdyBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhEYXRhUm93W10gYXJyYXksIGludCBhcnJheUluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNvcHlUbyhhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb3B5VG8oQXJyYXkgYXJyYXksIGludCBhcnJheUluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNvcHlUbygoRGF0YVJvd1tdKWFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJRW51bWVyYXRvcjxEYXRhUm93PiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuSW5kZXhPZihpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluc2VydChpbnQgaW5kZXgsIERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudD4oaXRlbS5FbGVtZW50LCBib2R5LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoRGF0YVJvdyBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQ+KGl0ZW0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuUmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVtb3ZlQXQoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLk5vZGU+KGJvZHkuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBHcm91cEJveCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIFJldHlwZWQuZG9tLkhUTUxMZWdlbmRFbGVtZW50IGxlZ2VuZDtcclxuICAgICAgICBwcml2YXRlIFBhbmVsIHBhbmVsO1xyXG4gICAgICAgIHB1YmxpYyBHcm91cEJveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTEZpZWxkU2V0RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFuZWwgPSBuZXcgUGFuZWwoKTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJncm91cGJveFwiKTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MTGVnZW5kRWxlbWVudD4obGVnZW5kID0gbmV3IFJldHlwZWQuZG9tLkhUTUxMZWdlbmRFbGVtZW50KCkpO1xyXG5cclxuICAgICAgICAgICAgbGVnZW5kLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwiZ3JvdXBib3hsZWdlbmRcIik7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KHBhbmVsLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICBwYW5lbC5FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgICAgICBDb250cm9scy5fb3duZXIgPSBwYW5lbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIGxlZ2VuZC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5Db250YWlucyhcIixcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyeSA9IHN0ci5TcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJ5Lkxlbmd0aCA9PSAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQuY2xhc3NOYW1lID0gYXJyeVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLkVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWwuRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWwuRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFuZWwuRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgTGFiZWwgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExhYmVsKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MU3BhbkVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImxhYmVsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gRWxlbWVudC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBMaW5rTGFiZWwgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpbmtMYWJlbCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTEFuY2hvckVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9FbGVtZW50LkFzPEhUTUxBbmNob3JFbGVtZW50PigpLkhyZWYgPSBcIiNcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIEVsZW1lbnQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkNsaWNrKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PbkNsaWNrKGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKExpbmtDbGlja2VkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBMaW5rQ2xpY2tlZCh0aGlzLCBuZXcgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MobnVsbCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV2ZW50IExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyIExpbmtDbGlja2VkO1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xhc3MgTGlua1xyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyZXNzQmFyIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50IHByb2dyZXNzQmFyO1xyXG4gICAgICAgIHB1YmxpYyBQcm9ncmVzc0JhcigpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudD4ocHJvZ3Jlc3NCYXIgPSBuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInByb2dyZXNzXCIpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgQ29sb3IgRm9yZUNvbG9yIHsgZ2V0IHsgcmV0dXJuIGJhc2UuRm9yZUNvbG9yOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLkZvcmVDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX2luaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWUuVG9IdG1sKCk7XHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIGludCBfdmFsdWU7XHJcbiAgICAgICAgcHVibGljIGludCBWYWx1ZSB7IGdldCB7IHJldHVybiBfdmFsdWU7IH0gIHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMClcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDEwMDtcclxuICAgICAgICAgICAgICAgIF92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX2luaXQpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBfdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBvYmplY3QgVGFnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3RhZzsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3RhZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90YWcgaXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAoX3RhZyArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHIuQ29udGFpbnMoXCIsXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycnkgPSBzdHIuU3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBhcnJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyeS5MZW5ndGggPT0gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gYXJyeVsxXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBcIlwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUYWJDb250cm9sIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBUYWJDb250cm9sKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MVUxpc3RFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwidGFiY29udHJvbFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGludGVybmFsIG92ZXJyaWRlIHZvaWQgT25Db250cm9sQWRkZWQoQ29udHJvbCBjb250cm9sKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PbkNvbnRyb2xBZGRlZChjb250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbnRyb2wgaXMgVGFiUGFnZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29udHJvbHMuQWRkKGNvbnRyb2wuQXM8VGFiUGFnZT4oKS5IZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIFBlcmZvcm1MYXlvdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgb3ZlcnJpZGUgdm9pZCBPbkNvbnRyb2xSZW1vdmVkKENvbnRyb2wgY29udHJvbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuT25Db250cm9sUmVtb3ZlZChjb250cm9sKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250cm9sIGlzIFRhYlBhZ2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvbnRyb2xzLlJlbW92ZShjb250cm9sLkFzPFRhYlBhZ2U+KCkuSGVhZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBQZXJmb3JtTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYWJQYWdlW10gVGFiUGFnZXMgeyBnZXQge1xyXG4gICAgICAgICAgICAgICAgTGlzdDxUYWJQYWdlPiBwYWdlcyA9IG5ldyBMaXN0PFRhYlBhZ2U+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3JlYWNoICh2YXIgY29udHJvbCBpbiBDb250cm9scylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbCBpcyBUYWJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXMuQWRkKGNvbnRyb2wuQXM8VGFiUGFnZT4oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VzLlRvQXJyYXkoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCB2b2lkIFJlc2l6ZVRhYkhlYWRlclNpemUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW50IGkgPSAwO1xyXG4gICAgICAgICAgICBkb3VibGUgeCA9IDA7XHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBwYWdlIGluIFRhYlBhZ2VzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gbmV3IFRhYlBhZ2VIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIGRpdi5UZXh0ID0gcGFnZS5UZXh0O1xyXG4gICAgICAgICAgICAgICAgZGl2LkVsZW1lbnQuY2xhc3NOYW1lID0gcGFnZS5IZWFkZXIuRWxlbWVudC5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICBkaXYuRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oZGl2LkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjID0gZGl2LkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9wYWdlLkhlYWRlci5Mb2NhdGlvbiA9IG5ldyBEcmF3aW5nLlBvaW50KChpbnQpeCwgaSA9PSBfc2VsZWN0ZWRJbmRleCA/IDAgOiA0KTtcclxuICAgICAgICAgICAgICAgIHBhZ2UuSGVhZGVyLkVsZW1lbnQuc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgUmV0eXBlZC5kb20uZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihkaXYuRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgeCArPSByZWMud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFnZS5FbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiY2FsYygxMDAlIC0gXCIgKyAoKGludClyZWMuaGVpZ2h0IC0gMSkgKyBcInB4KVwiO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5FbGVtZW50LnN0eWxlLnRvcCA9ICgoaW50KXJlYy5oZWlnaHQgLSAxKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHBhZ2UuRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdlLkVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgUGVyZm9ybUxheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihsYXlvdXRTdXNwZW5kZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLlBlcmZvcm1MYXlvdXQoKTtcclxuXHJcbiAgICAgICAgICAgIGludCBpID0gMDtcclxuICAgICAgICAgICAgVGFiUGFnZSBhY3RpdmVQYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBwYWdlIGluIFRhYlBhZ2VzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZpcnN0XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmaXJzdFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmaXJzdFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIXN0cmluZy5Jc051bGxPcldoaXRlU3BhY2UoTGlua1RhZykpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoTGlua1RhZy5Db250YWlucyhcIiBcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdbXSB0YWdzID0gTGlua1RhZy5TcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlYWNoICh2YXIgaXRlbSBpbiB0YWdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighc3RyaW5nLklzTnVsbE9yV2hpdGVTcGFjZShpdGVtKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFnZS5IZWFkZXIuRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoTGlua1RhZykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5hZGQoTGlua1RhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfc2VsZWN0ZWRJbmRleCA9PSBpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZS5IZWFkZXIuRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2UuRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UuRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYWdlLlZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuU2l6ZSA9IG5ldyBEcmF3aW5nLlNpemUodGhpcy5TaXplLldpZHRoIC0gOCwgdGhpcy5TaXplLkhlaWdodCAtICgyMiArIDQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ29udHJvbHMuUmVtb3ZlKHBhZ2UuSGVhZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBDb250cm9scy5BZGQocGFnZS5IZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYWdlLkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5IZWFkZXIuRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlUGFnZSAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb250cm9scy5SZW1vdmUoYWN0aXZlUGFnZS5IZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgQ29udHJvbHMuQWRkKGFjdGl2ZVBhZ2UuSGVhZGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgUmVzaXplVGFiSGVhZGVyU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX3NlbGVjdGVkSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgcHVibGljIGludCBTZWxlY3RlZEluZGV4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3NlbGVjdGVkSW5kZXg7IH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmKF9zZWxlY3RlZEluZGV4ICE9IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF9zZWxlY3RlZEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgUGVyZm9ybUxheW91dCgpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgTGlua1RhZztcclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5Db250YWlucyhcIixcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyeSA9IHN0ci5TcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJ5Lkxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rVGFnID0gYXJyeVsxXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rVGFnID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGlua1RhZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBMaW5rVGFnID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUYWJQYWdlSGVhZGVyIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIC8vbGlcclxuICAgICAgICBwdWJsaWMgVGFiUGFnZUhlYWRlcigpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTEFuY2hvckVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJ0YWJwYWdlaGVhZGVyXCIpO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoRWxlbWVudC5pbm5lclRleHQgIT0gdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgVGV4dEJveCA6IENvbnRyb2xcclxuICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBUZXh0Qm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50KCkgeyB0eXBlID0gXCJ0ZXh0XCIgfSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vVGV4dENoYW5nZWRcclxuICAgICAgICAgICAgRnVuYzxSZXR5cGVkLmRvbS5FdmVudCwgb2JqZWN0PiB3b3JrT3V0RXZlbnQgPSAoZXYpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKFRleHQgIT0gcHJldlN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RyaW5nID0gVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBPblRleHRDaGFuZ2VkKEV2ZW50QXJncy5FbXB0eSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5vbmNoYW5nZSA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbmNoYW5nZUZuKHdvcmtPdXRFdmVudCk7XHJcbiAgICAgICAgICAgIEVsZW1lbnQub25wYXN0ZSA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbnBhc3RlRm4od29ya091dEV2ZW50KTtcclxuICAgICAgICAgICAgRWxlbWVudC5vbmtleWRvd24gPSBuZXcgUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQub25rZXlkb3duRm4od29ya091dEV2ZW50KTtcclxuICAgICAgICAgICAgRWxlbWVudC5vbmtleXVwID0gbmV3IFJldHlwZWQuZG9tLkhUTUxFbGVtZW50Lm9ua2V5dXBGbih3b3JrT3V0RXZlbnQpO1xyXG4gICAgICAgICAgICBFbGVtZW50Lm9uYmx1ciA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbmJsdXJGbih3b3JrT3V0RXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIHN0cmluZyBwcmV2U3RyaW5nO1xyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dCB7IGdldCB7IHJldHVybiBFbGVtZW50LkFzPFJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQ+KCkudmFsdWU7IH0gc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudD4oKS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX3VzZVN5c3RlbVBhc3N3b3JkQ2hhcjtcclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgVXNlU3lzdGVtUGFzc3dvcmRDaGFyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3VzZVN5c3RlbVBhc3N3b3JkQ2hhcjsgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3VzZVN5c3RlbVBhc3N3b3JkQ2hhciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX3VzZVN5c3RlbVBhc3N3b3JkQ2hhcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudD4oKS50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50PigpLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25UZXh0Q2hhbmdlZChFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChUZXh0Q2hhbmdlZCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgVGV4dENoYW5nZWQodGhpcywgZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgRXZlbnRIYW5kbGVyIFRleHRDaGFuZ2VkO1xyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnV0dG9uIDogQnV0dG9uQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBCdXR0b24oKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxCdXR0b25FbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENoZWNrQm94IDogQnV0dG9uQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgUmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudCBjaGVja0JveDtcclxuICAgICAgICBwcml2YXRlIFJldHlwZWQuZG9tLkhUTUxMYWJlbEVsZW1lbnQgdGV4dDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgY2hlY2tib3hUb0xhYmVsSWQ7XHJcbiAgICAgICAgcHVibGljIENoZWNrQm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gY2hlY2tib3hUb0xhYmVsSWQrKztcclxuICAgICAgICAgICAgdmFyIGlkcyA9IFwiX19jaGVja1wiICsgaWQuVG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQ+KChjaGVja0JveCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50KCkgeyB0eXBlID0gXCJjaGVja2JveFwiLCBpZCA9IGlkcyB9KSk7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MTGFiZWxFbGVtZW50Pih0ZXh0ID0gbmV3IFJldHlwZWQuZG9tLkhUTUxMYWJlbEVsZW1lbnQoKSB7IGh0bWxGb3IgPSBpZHMgfSk7XHJcblxyXG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgdGV4dC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENoZWNrZWQgeyBnZXQgeyByZXR1cm4gY2hlY2tCb3guQGNoZWNrZWQ7IH0gc2V0IHsgY2hlY2tCb3guQGNoZWNrZWQgPSB2YWx1ZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIHRleHQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJyeS5MZW5ndGggPT0gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NOYW1lID0gYXJyeVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gYXJyeVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IFRhYkluZGV4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3RhYkluZGV4OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGFiSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFiU3RvcClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LnRhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LnJlbW92ZUF0dHJpYnV0ZShcIlRhYkluZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQYW5lbCA6IENvbnRhaW5lckNvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFuZWwoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgVGFiUGFnZSA6IFBhbmVsXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgVGFiUGFnZUhlYWRlciBIZWFkZXI7XHJcbiAgICAgICAgcHVibGljIGJvb2wgVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgVGFiUGFnZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBIZWFkZXIgPSBuZXcgVGFiUGFnZUhlYWRlcigpO1xyXG4gICAgICAgICAgICBIZWFkZXIuQ2xpY2sgKz0gSGVhZGVyX0NsaWNrO1xyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwidGFicGFnZVwiKTsgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgIFxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgSGVhZGVyX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoUGFyZW50IGlzIFRhYkNvbnRyb2wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYWdlcyA9IFBhcmVudC5BczxUYWJDb250cm9sPigpLlRhYlBhZ2VzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBwYWdlcy5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwYWdlc1tpXSA9PSB0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFyZW50LkFzPFRhYkNvbnRyb2w+KCkuU2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBQYXJlbnQuQXM8VGFiQ29udHJvbD4oKS5TZWxlY3RlZEluZGV4ID0gLTE7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSGVhZGVyLlRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihIZWFkZXIuVGV4dCAhPSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBIZWFkZXIuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKFBhcmVudCBpcyBUYWJDb250cm9sKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFyZW50LkFzPFRhYkNvbnRyb2w+KCkuUmVzaXplVGFiSGVhZGVyU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
