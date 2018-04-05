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
                    System.Windows.Forms.Form._formOverLay.style.top = "0";
                    System.Windows.Forms.Form._formOverLay.style.left = "0";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDbGFzc2ljRm9ybXMuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIkRhdGEvRGF0YUNvbHVtbi5jcyIsIkRhdGEvRGF0YUNvbHVtbkNvbGxlY3Rpb24uY3MiLCJEYXRhL0RhdGFSb3cuY3MiLCJEYXRhL0RhdGFSb3dDb2xsZWN0aW9uLmNzIiwiRGF0YS9EYXRhVGFibGUuY3MiLCJEcmF3aW5nL0NvbG9yLmNzIiwiRHJhd2luZy9Gb250LmNzIiwiRHJhd2luZy9Qb2ludC5jcyIsIkRyYXdpbmcvU2l6ZS5jcyIsIkRyYXdpbmcvU2l6ZUYuY3MiLCJEcmF3aW5nL1N5c3RlbUNvbG9ycy5jcyIsIldpbmRvd3MvRm9ybXMvQ29udHJvbC5jcyIsIldpbmRvd3MvRm9ybXMvRGF0YUdyaWRWaWV3Q29sdW1uLmNzIiwiV2luZG93cy9Gb3Jtcy9EaWFsb2dSZXN1bHQuY3MiLCJXaW5kb3dzL0Zvcm1zL0Zvcm0uY3MiLCJXaW5kb3dzL0Zvcm1zL0xpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyLmNzIiwiV2luZG93cy9Gb3Jtcy9Nb3VzZUV2ZW50QXJncy5jcyIsIldpbmRvd3MvRm9ybXMvT2JqZWN0Q29sbGVjdGlvbi5jcyIsIldpbmRvd3MvRm9ybXMvUGFkZGluZy5jcyIsIldpbmRvd3MvRm9ybXMvQnV0dG9uQmFzZS5jcyIsIldpbmRvd3MvRm9ybXMvQ29tYm9Cb3guY3MiLCJXaW5kb3dzL0Zvcm1zL0NvbnRhaW5lckNvbnRyb2wuY3MiLCJXaW5kb3dzL0Zvcm1zL0NvbnRyb2xDb2xsZWN0aW9uLmNzIiwiV2luZG93cy9Gb3Jtcy9EYXRhR3JpZFZpZXcuY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0dyb3VwQm94LmNzIiwiV2luZG93cy9Gb3Jtcy9MYWJlbC5jcyIsIldpbmRvd3MvRm9ybXMvTGlua0xhYmVsLmNzIiwiV2luZG93cy9Gb3Jtcy9Qcm9ncmVzc0Jhci5jcyIsIldpbmRvd3MvRm9ybXMvVGFiQ29udHJvbC5jcyIsIldpbmRvd3MvRm9ybXMvVGFiUGFnZUhlYWRlci5jcyIsIldpbmRvd3MvRm9ybXMvVGV4dEJveC5jcyIsIldpbmRvd3MvRm9ybXMvQnV0dG9uLmNzIiwiV2luZG93cy9Gb3Jtcy9DaGVja0JveC5jcyIsIldpbmRvd3MvRm9ybXMvUGFuZWwuY3MiLCJXaW5kb3dzL0Zvcm1zL1RhYlBhZ2UuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQVkwQkEsT0FBaUJBOztnQkFFL0JBLFlBQU9BO2dCQUNQQSxhQUFRQTs7Ozs7Ozs7Ozs7OztvQkNTVUEsT0FBT0E7Ozs7OzRCQUVDQTs7Z0JBRTFCQSxhQUFRQTtnQkFDUkEsZUFBVUEsS0FBSUE7Ozs7O3NDQWhCUUE7Z0JBRXRCQSxLQUFLQSxXQUFXQSxJQUFJQSxvQkFBZUE7b0JBRS9CQSxJQUFJQSw0Q0FBUUEsU0FBV0E7d0JBQ25CQSxPQUFPQTs7OztnQkFHZkEsT0FBT0E7OzJCQVlXQTtnQkFFbEJBLFdBQVdBLElBQUlBLHVCQUFXQSxZQUFPQTs7Z0JBRWpDQSxpQkFBWUE7O2dCQUVaQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs0QkMxQk1BOztnQkFFYkEsZUFBVUE7Z0JBQ1ZBLFlBQU9BLEtBQUlBLHlEQUFhQTtnQkFDeEJBLGVBQVVBOzs7OytCQUdTQTtnQkFDZkEsT0FBT0EsZUFBS0EsNEJBQXVCQTs7K0JBRHBCQTtnQkFHZkEsZUFBS0EsNEJBQXVCQSxhQUFlQTs7aUNBR2hDQTtnQkFDWEEsSUFBSUEsbUJBQW1CQSxjQUFjQTtvQkFDakNBLE9BQU9BOzs7Z0JBRVhBLE9BQU9BLGtCQUFLQTs7aUNBSkRBO2dCQU1YQSxJQUFJQTtvQkFDQUE7O2dCQUNKQSxJQUFJQSxjQUFjQTtvQkFDZEE7OztnQkFFSkEsSUFBSUEsY0FBY0E7b0JBRWRBLEtBQUtBLFFBQVFBLGlCQUFZQSxJQUFJQSx5QkFBaUJBO3dCQUUxQ0EsU0FBU0E7O3dCQUVUQSxJQUFJQSxNQUFLQTs0QkFFTEEsY0FBU0E7NEJBQ1RBLGVBQWVBLENBQUNBOzs0QkFFaEJBLHlCQUFrRUE7OzRCQUVsRUE7OzRCQUlBQSx5QkFBa0VBOzRCQUNsRUEsY0FBU0E7Ozs7b0JBTWpCQSxzQkFBaUJBLHlCQUF1REEsQ0FBQ0E7b0JBQ3pFQSxrQkFBS0EsYUFBZUE7Ozs7Ozs7Ozs7Ozs0QkNqRExBOztnQkFFdkJBLGFBQVFBO2dCQUNSQSxZQUFPQSxLQUFJQTs7OzsyQkFHQ0E7O2dCQUVaQSxjQUFTQTtnQkFDVEEsb0JBQWVBLFlBQU9BLFVBQUlBLGlEQUF3Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDTmxFQSxlQUFVQSxJQUFJQSxpQ0FBcUJBO2dCQUNuQ0EsWUFBT0EsSUFBSUEsOEJBQWtCQTs7Ozs7Z0JBSzdCQSxTQUFTQSxJQUFJQSxvQkFBUUE7O2dCQUVyQkEsT0FBT0E7Ozs7O2dDQVVrQkEsUUFBZUE7Z0JBRXhDQSxJQUFHQSx1Q0FBZUE7b0JBRWRBLGlCQUFZQSxRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNScEJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozs7Ozs7Ozs7OztvQkFnYXJCQSw2QkFBUUEsSUFBSUE7b0JBQ1pBO29CQUNBQTtvQkFDQUEsc0NBQWlCQTtvQkFDakJBO29CQUNBQTs7OztxQ0E5UTBCQTtvQkFFMUJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBO3dCQUVoQkEsTUFBTUEsSUFBSUE7OztvQ0FJV0EsT0FBWUEsS0FBVUEsT0FBWUE7b0JBRTNEQSxPQUFPQSxjQUFDQSxlQUFlQSxDQUFDQSxhQUFhQSxDQUFDQSxjQUFjQTs7b0NBRzNCQTtvQkFFekJBLE9BQU9BLElBQUlBLDRCQUFNQSx1QkFBT0EsQ0FBQ0Esd0JBQW9CQSwwQ0FBcUJBLE1BQU1BOztzQ0FHL0NBLE9BQVdBLEtBQVNBLE9BQVdBO29CQUV4REEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSxPQUFPQSxJQUFJQSw0QkFBTUEsOEJBQVNBLENBQU1BLGNBQU9BLENBQU1BLFlBQUtBLENBQU1BLGNBQU9BLENBQU1BLGNBQU9BLDBDQUFxQkEsTUFBTUE7O3NDQUc5RUEsT0FBV0E7b0JBRXBDQSwrQkFBVUE7b0JBQ1ZBLE9BQU9BLElBQUlBLDRCQUFNQSw4QkFBU0EsQ0FBTUEsY0FBT0EsYUFBYUEsYUFBYUEsY0FBY0EsMENBQXFCQSxNQUFNQTs7c0NBR2pGQSxLQUFTQSxPQUFXQTtvQkFFN0NBLE9BQU9BLHFDQUFlQSxLQUFLQSxPQUFPQTs7dUNBR1BBLFdBQWdCQSxPQUFXQSxVQUFjQTtvQkFFcEVBLE9BQU9BLENBQUNBLENBQUNBLFNBQVNBLGFBQWFBLENBQUNBLFNBQVNBOzswQ0FHVkE7b0JBRS9CQSxPQUFPQSxJQUFJQSw0QkFBTUE7O21DQTRCT0E7b0JBRXhCQSxJQUFJQTt3QkFDQUEsT0FBT0EsNkJBQVFBOzt3QkFHZkEsT0FBT0EsOEJBQWVBLFNBQWdCQTs7O3lDQXRJUEE7b0JBRW5DQSxPQUFPQTs7dUNBRzJCQTtvQkFFbENBLE9BQU9BLDZCQUFjQTs7dUNBdVJNQSxNQUFZQTtvQkFFdkNBLElBQUlBLENBQUNBLENBQUNBLGNBQWNBLGlCQUFnQkEsQ0FBQ0EsZUFBY0EsaUJBQWlCQSxDQUFDQSxvQkFBbUJBO3dCQUVwRkE7O29CQUVKQSxPQUFPQSxDQUFDQSxDQUFDQSxrQ0FBYUEsZ0JBQWVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLFNBQVNBLENBQUNBLGNBQWNBLFVBQVVBLGdDQUFpQkE7O3lDQUc3RUEsTUFBWUE7b0JBRXZDQSxPQUFPQSxDQUFDQSxDQUFDQSxnREFBUUE7Ozs7Ozs7Ozs7Ozs7O29CQWpYYkEsT0FBT0Esb0JBQU1BLEFBQUNBLENBQUNBOzs7OztvQkFRZkEsT0FBT0Esb0JBQU1BLEFBQUNBLENBQUNBOzs7OztvQkFRZkEsT0FBT0Esb0JBQU1BLEFBQUNBOzs7OztvQkFRZEEsT0FBT0Esb0JBQU1BLEFBQUNBLENBQUNBOzs7OztvQkFRZkEsT0FBT0EsQ0FBQ0EsQ0FBQ0EsYUFBYUE7Ozs7O29CQVF0QkEsT0FBT0EsQ0FBQ0E7Ozs7O29CQVFSQSxJQUFJQSxDQUFDQSxhQUFhQTt3QkFFZEEsT0FBT0E7O29CQUVYQTs7Ozs7b0JBUUFBLElBQUlBLENBQUNBO3dCQUVEQTs7b0JBRUpBLElBQUlBO3dCQUVBQSxPQUFPQSxDQUFDQTs7b0JBRVpBOzs7OztvQkFrQkFBLE9BQU9BLGdFQUF5REEsV0FBV0EsaUNBQVFBLGlDQUFRQSxpQ0FBUUE7Ozs7O29CQVFuR0EsSUFBSUEsQ0FBQ0EsYUFBYUE7d0JBRWRBLE9BQU9BOztvQkFFWEEsSUFBSUEsQ0FBQ0E7d0JBRURBLE9BQU9BLDhCQUFpQkE7O29CQUU1QkEsVUFBYUEsZ0RBQWlDQSxBQUFZQTtvQkFDMURBLElBQUlBLE9BQU9BO3dCQUVQQSxPQUFPQTs7b0JBRVhBLE9BQU9BOzs7OztvQkFRUEEsSUFBSUEsQ0FBQ0EsYUFBYUE7d0JBRWRBLE9BQU9BOztvQkFFWEEsSUFBSUE7d0JBRUFBLE9BQU9BLEFBQU1BLDZEQUFpQ0EsQUFBWUE7O29CQUU5REEsT0FBT0E7Ozs7OzhCQS9JQUE7O2dCQUVYQTtnQkFDQUEsYUFBYUE7Z0JBQ2JBLFlBQVlBO2dCQUNaQSxrQkFBa0JBLGVBQU9BOzs4QkFHZkEsT0FBWUEsT0FBYUEsTUFBYUE7O2dCQUVoREEsYUFBYUE7Z0JBQ2JBLGFBQWFBO2dCQUNiQSxZQUFZQTtnQkFDWkEsa0JBQWtCQSxlQUFPQTs7Ozs7OztzQ0FzTEFBO2dCQUV6QkEsUUFBUUE7Z0JBQ1JBLE9BQU9BLEVBQUNBLHFDQUE0QkE7OztnQkFLcENBLElBQUdBO29CQUVDQSxPQUFPQSw4QkFBZUEsZ0RBQWlDQSxBQUFZQTs7b0JBSW5FQSxJQUFJQTt3QkFFQUEsT0FBT0Esc0NBQStCQSxvQkFBZUEsU0FBSUEsb0JBQWVBLFNBQUlBLG9CQUFlQSxTQUFJQSxvQkFBZUE7O3dCQUk5R0EsT0FBT0EsbUNBQTRCQSxvQkFBZUEsU0FBSUEsb0JBQWVBLFNBQUlBLG9CQUFlQTs7Ozs7Z0JBaUJoR0EsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEEsUUFBVUE7Z0JBQ1ZBLFFBQVVBO2dCQUNWQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQTs7O2dCQUtiQSxJQUFJQSxDQUFDQSxXQUFVQSxXQUFXQSxDQUFDQSxXQUFVQTtvQkFFakNBOztnQkFFSkEsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEE7Z0JBQ0FBLFFBQVVBO2dCQUNWQSxRQUFVQTtnQkFDVkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsV0FBYUEsSUFBSUE7Z0JBQ2pCQSxJQUFJQSxNQUFLQTtvQkFFTEEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0E7dUJBRWJBLElBQUlBLE1BQUtBO29CQUVWQSxJQUFJQSxNQUFLQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQTt1QkFFbkJBLElBQUlBLE1BQUtBO29CQUVWQSxJQUFJQSxNQUFLQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQTs7Z0JBRXhCQTtnQkFDQUEsSUFBSUE7b0JBRUFBOztnQkFFSkEsT0FBT0E7OztnQkFPUEEsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEE7Z0JBQ0FBLFFBQVVBO2dCQUNWQSxRQUFVQTtnQkFDVkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsTUFBS0E7b0JBRUxBLE9BQU9BOztnQkFFWEEsUUFBVUEsQ0FBQ0EsSUFBSUE7Z0JBQ2ZBLElBQUlBO29CQUVBQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxJQUFJQTs7Z0JBRTNCQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxNQUFLQSxLQUFLQTs7O2dCQUs5QkEsT0FBT0Esb0JBQUtBOzs7Z0JBS1pBLE9BQU9BLEFBQVlBOzs7Z0JBS25CQSxjQUF3QkE7Z0JBQ3hCQSxlQUFlQTtnQkFDZkE7Z0JBQ0FBLElBQUlBLENBQUNBLGFBQWFBO29CQUVkQSxlQUFlQTt1QkFFZEEsSUFBSUEsQ0FBQ0EsYUFBYUE7b0JBRW5CQSxlQUFlQTt1QkFFZEEsSUFBSUEsQ0FBQ0EsYUFBYUE7b0JBRW5CQSxtREFBbURBLGlDQUFHQSxpQ0FBR0EsaUNBQUdBOztvQkFJNURBOztnQkFFSkE7Z0JBQ0FBLE9BQU9BOzs4QkFpQmlCQTtnQkFFeEJBLElBQUlBO29CQUVBQSxZQUFjQSxxQ0FBT0E7b0JBQ3JCQSxJQUFJQSxDQUFDQSxDQUFDQSxrQkFBY0EsaUJBQWdCQSxDQUFDQSxlQUFjQSxpQkFBaUJBLENBQUNBLG9CQUFtQkE7d0JBRXBGQSxPQUFPQSxDQUFDQSxDQUFDQSxrQ0FBYUEsZ0JBQWVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLFNBQVNBLENBQUNBLGNBQWNBLFVBQVVBLGdDQUFpQkE7OztnQkFHaEhBOzs7Z0JBS0FBLE9BQU9BLENBQUNBLENBQUNBLGlDQUEyQkEsa0NBQTRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkM1Z0R4REEsWUFBbUJBLFFBQWNBLE9BQWlCQSxNQUFtQkE7b0RBQXdCQSxZQUFZQTs7OzRCQUt6R0EsWUFBbUJBOztnQkFFM0JBLGtCQUFhQTtnQkFDYkEsY0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NEeW9FcUJBOzs7O3dDQXZiQUE7b0JBRTlCQTtvQkFDQUEsT0FBT0EsaUVBQWVBLE9BQWZBOzs0Q0FJMEJBO29CQUVqQ0E7b0JBQ0FBLEtBQUtBLFdBQVdBLElBQUlBLGtEQUFtQkE7d0JBRW5DQSxXQUFXQSw2REFBV0EsR0FBWEE7d0JBQ1hBLElBQUlBLFNBQVFBOzRCQUVSQSxZQUFjQSxvQ0FBcUJBLEFBQVlBOzRCQUMvQ0EsSUFBSUEsQ0FBQ0E7Z0NBRURBLE9BQU9BOzs7O29CQUluQkEsT0FBT0EsOEJBQWVBOztrQ0FHQUEsT0FBV0EsS0FBU0EsT0FBV0E7b0JBRXJEQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFlQSxDQUFDQSxlQUFlQSxRQUFRQSxDQUFDQTs7O29CQUtuREEsSUFBSUEsaURBQWtCQTt3QkFFbEJBOzs7O29CQU1KQSxJQUFJQSw2Q0FBY0E7d0JBRWRBOzs7MENBSTBCQTtvQkFFOUJBLE9BQU9BLDJDQUFhQSxhQUFjQSxDQUFDQSxtQkFBb0JBLENBQUNBOzs7b0JBS3hEQSxRQUFhQTtvQkFDYkE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUEsZ0RBQWlCQTs7O29CQUtqQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLGdIQUFrQkE7b0JBQ2xCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBOzs7b0JBTWpCQSxRQUFVQTs7b0JBRVZBO29CQUNBQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSxnQ0FBU0E7b0JBQ1RBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFTQTtvQkFDVEEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxn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QUE7b0JBQ0pBLEtBQUtBO3dCQUNEQSxJQUFJQSxDQUFDQTs0QkFFREE7OzRCQUlBQTs7d0JBRUpBO3dCQUNBQTt3QkFDQUE7d0JBQ0FBO3dCQUNBQTtvQkFDSkEsS0FBS0E7d0JBQ0RBLElBQUlBLENBQUNBOzRCQUVEQTs7NEJBSUFBOzt3QkFFSkE7d0JBQ0FBO3dCQUNBQTt3QkFDQUE7d0JBQ0FBO29CQUNKQTt3QkFDSUE7OztnQkFHUkE7O2dCQUVBQSxrQkFBYUE7OztnQkFLYkEsb0NBQStCQTtnQkFDL0JBLHVDQUFrQ0E7Z0JBQ2xDQSxxQ0FBZ0NBO2dCQUNoQ0Esc0NBQWlDQTs7cUNBT1ZBO2dCQUV2QkEsT0FBT0EsSUFBSUEsMkJBQUtBLGVBQWFBLENBQUNBLHlCQUFrQkEsb0NBQW1CQSxnQkFBY0EsQ0FBQ0Esd0JBQWlCQTs7K0JBR2xGQTtnQkFFakJBLE9BQU9BLElBQUlBLDJCQUFLQSxxQkFBbUJBLENBQUNBLHlCQUFrQkEsb0NBQW1CQSxzQkFBb0JBLENBQUNBLHdCQUFpQkE7OytCQUdwRkE7Ozs7Ozs7Ozs7OztnQnFCcndCM0JBOzs7Ozs7Ozs7Ozs7OztvQkM2QklBLE9BQU9BOzs7b0JBS1BBLElBQUdBLDBDQUFlQTt3QkFFZEEsbUJBQWNBO3dCQUNkQSxJQUFHQTs0QkFFQ0E7Ozs7Ozs7Ozs7Z0JBcENaQSxjQUFTQSxJQUFJQTtnQkFDYkEscUJBQWdCQTtnQkFDaEJBOzs7O29DQUdzQkEsUUFBZUE7Z0JBRXJDQSxJQUFHQTtvQkFFQ0EsWUFBWUE7b0JBQ1pBLEtBQUtBLFdBQVdBLElBQUlBLGNBQWNBO3dCQUU5QkEsSUFBR0EsZ0RBQU1BLEdBQU5BLFNBQVlBOzRCQUVYQSw0QkFBd0NBOzRCQUN4Q0E7OztvQkFHUkEsNEJBQXdDQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRhdGFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFDb2x1bW5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFUYWJsZSBUYWJsZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRGF0YUNvbHVtbihEYXRhVGFibGUgdGFibGUsIHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIFRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUNvbHVtbkNvbGxlY3Rpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGF0YVRhYmxlIFRhYmxlIHtnZXQ7cHJpdmF0ZSBzZXQ7fVxyXG4gICAgICAgIGludGVybmFsIExpc3Q8RGF0YUNvbHVtbj4gQ29sdW1ucztcclxuXHJcbiAgICAgICAgcHVibGljIGludCBHZXRDb2x1bW5JbmRleChzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgQ29sdW1ucy5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ29sdW1uc1tpXS5OYW1lID09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQge2dldHtyZXR1cm4gQ29sdW1ucy5Db3VudDt9fVxyXG5cclxuICAgICAgICBpbnRlcm5hbCBEYXRhQ29sdW1uQ29sbGVjdGlvbihEYXRhVGFibGUgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJsZSA9IHRhYmxlO1xyXG4gICAgICAgICAgICBDb2x1bW5zID0gbmV3IExpc3Q8RGF0YUNvbHVtbj4oKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUNvbHVtbiBBZGQoc3RyaW5nIGNvbHVtbk5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBEYXRhQ29sdW1uKFRhYmxlLCBjb2x1bW5OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIENvbHVtbnMuQWRkKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhUm93XHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudCBFbGVtZW50OyAgICAgICAgXHJcbiAgICAgICAgaW50ZXJuYWwgTGlzdDxvYmplY3Q+IGRhdGE7XHJcbiAgICAgICAgcHVibGljIERhdGFDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgaW50ZXJuYWwgRGF0YVJvdyhEYXRhQ29sdW1uQ29sbGVjdGlvbiBjb2x1bW5zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgTGlzdDxvYmplY3Q+KENvbHVtbnMuQ291bnQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBFbGVtZW50ID0gbmV3IFJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBuZXcgb2JqZWN0IHRoaXNbc3RyaW5nIGNvbHVtbk5hbWVdIHsgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW0NvbHVtbnMuR2V0Q29sdW1uSW5kZXgoY29sdW1uTmFtZSldO1xyXG4gICAgICAgICAgICB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW0NvbHVtbnMuR2V0Q29sdW1uSW5kZXgoY29sdW1uTmFtZSldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgdGhpc1tpbnQgY29sdW1uSW5kZXhdIHsgZ2V0IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA8IDAgfHwgY29sdW1uSW5kZXggPiBDb2x1bW5zLkNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtjb2x1bW5JbmRleF07XHJcbiAgICAgICAgICAgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ID4gQ29sdW1ucy5Db3VudCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA+IGRhdGEuQ291bnQgLSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSBkYXRhLkNvdW50OyBpIDwgY29sdW1uSW5kZXggKyAxOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGMgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBjb2x1bW5JbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGMuaW5uZXJUZXh0ID0gKHZhbHVlICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQ+KGRjKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZURhdGFDZWxsRWxlbWVudD4oZGMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2hpbGRyZW5bY29sdW1uSW5kZXhdLkFzPFJldHlwZWQuZG9tLkhUTUxFbGVtZW50PigpLmlubmVyVGV4dCA9ICh2YWx1ZSArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbY29sdW1uSW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhUm93Q29sbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEYXRhVGFibGUgVGFibGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgaW50ZXJuYWwgTGlzdDxEYXRhUm93PiByb3dzO1xyXG5cclxuICAgICAgICBpbnRlcm5hbCBEYXRhUm93Q29sbGVjdGlvbihEYXRhVGFibGUgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJsZSA9IHRhYmxlO1xyXG4gICAgICAgICAgICByb3dzID0gbmV3IExpc3Q8RGF0YVJvdz4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChEYXRhUm93IGRyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm93cy5BZGQoZHIpO1xyXG4gICAgICAgICAgICBUYWJsZS5Pbk5ld1JvdyhUYWJsZSwgbmV3IFdpbmRvd3MuRm9ybXMuTmV3Um93RXZlbnRBcmdzKCkgeyBSb3cgPSBkciB9KTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YVRhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFSb3dDb2xsZWN0aW9uIFJvd3MgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29sdW1ucyA9IG5ldyBEYXRhQ29sdW1uQ29sbGVjdGlvbih0aGlzKTtcclxuICAgICAgICAgICAgUm93cyA9IG5ldyBEYXRhUm93Q29sbGVjdGlvbih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERhdGFSb3cgTmV3Um93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkciA9IG5ldyBEYXRhUm93KENvbHVtbnMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWNjZXB0Q2hhbmdlcygpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudCBOZXdSb3dFdmVudEhhbmRsZXIgTmV3Um93RXZlbnQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgT25OZXdSb3cob2JqZWN0IHNlbmRlciwgTmV3Um93RXZlbnRBcmdzIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihOZXdSb3dFdmVudCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOZXdSb3dFdmVudChzZW5kZXIsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgQ29sb3JcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvbG9yIEVtcHR5O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNob3J0IFN0YXRlS25vd25Db2xvclZhbGlkO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNob3J0IFN0YXRlQVJHQlZhbHVlVmFsaWQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc2hvcnQgU3RhdGVWYWx1ZU1hc2s7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc2hvcnQgU3RhdGVOYW1lVmFsaWQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbG9uZyBOb3REZWZpbmVkVmFsdWU7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQVJHQkFscGhhU2hpZnQgPSAweDE4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFSR0JSZWRTaGlmdCA9IDB4MTA7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQVJHQkdyZWVuU2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFSR0JCbHVlU2hpZnQgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc3RyaW5nIG5hbWU7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBsb25nIHZhbHVlO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc2hvcnQga25vd25Db2xvcjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHNob3J0IHN0YXRlO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRyYW5zcGFyZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBbGljZUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQWxpY2VCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBbnRpcXVlV2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQW50aXF1ZVdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBcXVhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFxdWEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFxdWFtYXJpbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQXF1YW1hcmluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXp1cmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQXp1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJlaWdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJlaWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCaXNxdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmlzcXVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCbGFja1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmxhbmNoZWRBbG1vbmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmxhbmNoZWRBbG1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmx1ZVZpb2xldFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CbHVlVmlvbGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCcm93blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ccm93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnVybHlXb29kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1cmx5V29vZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ2FkZXRCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNhZGV0Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ2hhcnRyZXVzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5DaGFydHJldXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDaG9jb2xhdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ2hvY29sYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb3JhbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db3JhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29ybmZsb3dlckJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29ybmZsb3dlckJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvcm5zaWxrXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvcm5zaWxrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDcmltc29uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNyaW1zb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEN5YW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ3lhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0JsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0JsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtDeWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtDeWFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrR29sZGVucm9kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtHb2xkZW5yb2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrS2hha2lcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0toYWtpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrTWFnZW50YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrTWFnZW50YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya09saXZlR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya09saXZlR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtPcmFuZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya09yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya09yY2hpZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrT3JjaGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrUmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtSZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtTYWxtb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1NhbG1vbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1NlYUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtTZWFHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1NsYXRlQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrU2xhdGVCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrU2xhdGVHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtTbGF0ZUdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtUdXJxdW9pc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1R1cnF1b2lzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1Zpb2xldFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrVmlvbGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEZWVwUGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EZWVwUGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGVlcFNreUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGVlcFNreUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERpbUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGltR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRG9kZ2VyQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Eb2RnZXJCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGaXJlYnJpY2tcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRmlyZWJyaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGbG9yYWxXaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5GbG9yYWxXaGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRm9yZXN0R3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRm9yZXN0R3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZ1Y2hzaWFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRnVjaHNpYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR2FpbnNib3JvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdhaW5zYm9ybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR2hvc3RXaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HaG9zdFdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHb2xkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdvbGRlbnJvZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Hb2xkZW5yb2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyZWVuWWVsbG93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyZWVuWWVsbG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBIb25leWRld1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ib25leWRldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSG90UGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ib3RQaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmRpYW5SZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5kaWFuUmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmRpZ29cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5kaWdvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJdm9yeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Jdm9yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgS2hha2lcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuS2hha2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExhdmVuZGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxhdmVuZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMYXZlbmRlckJsdXNoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxhdmVuZGVyQmx1c2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExhd25HcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MYXduR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExlbW9uQ2hpZmZvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MZW1vbkNoaWZmb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0Q29yYWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRDb3JhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRDeWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0Q3lhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRHb2xkZW5yb2RZZWxsb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRHb2xkZW5yb2RZZWxsb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0R3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0R3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRQaW5rXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0UGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTYWxtb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTYWxtb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U2VhR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTZWFHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTa3lCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U2t5Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTbGF0ZUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTbGF0ZUdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U3RlZWxCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U3RlZWxCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFllbGxvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFllbGxvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGltZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaW1lR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGltZUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaW5lblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaW5lbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWFnZW50YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NYWdlbnRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNYXJvb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWFyb29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1BcXVhbWFyaW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bUFxdWFtYXJpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtT3JjaGlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bU9yY2hpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtUHVycGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVB1cnBsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtU2VhR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtU2VhR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVNsYXRlQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1TbGF0ZUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVNwcmluZ0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVNwcmluZ0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1UdXJxdW9pc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtVHVycXVvaXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1WaW9sZXRSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtVmlvbGV0UmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNaWRuaWdodEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWlkbmlnaHRCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNaW50Q3JlYW1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWludENyZWFtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNaXN0eVJvc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWlzdHlSb3NlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNb2NjYXNpblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Nb2NjYXNpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTmF2YWpvV2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTmF2YWpvV2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE5hdnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTmF2eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT2xkTGFjZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PbGRMYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPbGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PbGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT2xpdmVEcmFiXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9saXZlRHJhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT3JhbmdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT3JhbmdlUmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9yYW5nZVJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT3JjaGlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9yY2hpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFsZUdvbGRlbnJvZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYWxlR29sZGVucm9kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYWxlR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFsZUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYWxlVHVycXVvaXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBhbGVUdXJxdW9pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBhbGVWaW9sZXRSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFsZVZpb2xldFJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFwYXlhV2hpcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYXBheWFXaGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQZWFjaFB1ZmZcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGVhY2hQdWZmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQZXJ1XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBlcnUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGx1bVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QbHVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQb3dkZXJCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBvd2RlckJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFB1cnBsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QdXJwbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFJlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5SZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFJvc3lCcm93blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Sb3N5QnJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFJveWFsQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Sb3lhbEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNhZGRsZUJyb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNhZGRsZUJyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTYWxtb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2FsbW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTYW5keUJyb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNhbmR5QnJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNlYUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNlYUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTZWFTaGVsbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TZWFTaGVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2llbm5hXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNpZW5uYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2lsdmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNpbHZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2t5Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ta3lCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTbGF0ZUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2xhdGVCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTbGF0ZUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2xhdGVHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTbm93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNub3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNwcmluZ0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNwcmluZ0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTdGVlbEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU3RlZWxCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVGFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUZWFsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRlYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRoaXN0bGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVGhpc3RsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVG9tYXRvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRvbWF0byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVHVycXVvaXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlR1cnF1b2lzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVmlvbGV0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlZpb2xldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2hlYXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuV2hlYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFdoaXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaGl0ZVNtb2tlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldoaXRlU21va2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFllbGxvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5ZZWxsb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFllbGxvd0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlllbGxvd0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgQ29sb3IoS25vd25Db2xvciBrbm93bkNvbG9yKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDBMO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVLbm93bkNvbG9yVmFsaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMua25vd25Db2xvciA9IChzaG9ydClrbm93bkNvbG9yOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDb2xvcihsb25nIHZhbHVlLCBzaG9ydCBzdGF0ZSwgc3RyaW5nIG5hbWUsIEtub3duQ29sb3Iga25vd25Db2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmtub3duQ29sb3IgPSAoc2hvcnQpa25vd25Db2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBieXRlIFJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGJ5dGUpKCh0aGlzLlZhbHVlID4+IDB4MTApICYgMHhmZkwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnl0ZSBHXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChieXRlKSgodGhpcy5WYWx1ZSA+PiA4KSAmIDB4ZmZMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ5dGUgQlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYnl0ZSkodGhpcy5WYWx1ZSAmIDB4ZmZMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ5dGUgQVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYnl0ZSkoKHRoaXMuVmFsdWUgPj4gMHgxOCkgJiAweGZmTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzS25vd25Db2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKHRoaXMuc3RhdGUgJiBTdGF0ZUtub3duQ29sb3JWYWxpZCkgPiAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNFbXB0eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNOYW1lZENvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVOYW1lVmFsaWQpID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSXNLbm93bkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzU3lzdGVtQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuSXNLbm93bkNvbG9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtub3duQ29sb3IgPiAweDFhKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5rbm93bkNvbG9yID4gMHhhNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbXBsaWNpdCBvcGVyYXRvciBzdHJpbmcoQ29sb3IgY29sb3IpICAvLyBpbXBsaWNpdCBkaWdpdCB0byBieXRlIGNvbnZlcnNpb24gb3BlcmF0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5Ub0h0bWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW1wbGljaXQgb3BlcmF0b3IgQ29sb3Ioc3RyaW5nIGhleFZhbHVlKSAgLy8gaW1wbGljaXQgZGlnaXQgdG8gYnl0ZSBjb252ZXJzaW9uIG9wZXJhdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29sb3IuRnJvbUhleChoZXhWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0cmluZyBOYW1lQW5kQVJHQlZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJ7e05hbWU9ezB9LCBBUkdCPSh7MX0sIHsyfSwgezN9LCB7NH0pfX1cIiwgdGhpcy5OYW1lLCB0aGlzLkEsIHRoaXMuUiwgdGhpcy5HLCB0aGlzLkIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZU5hbWVWYWxpZCkgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLklzS25vd25Db2xvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ29udmVydC5Ub1N0cmluZyh0aGlzLnZhbHVlLCAweDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0cmluZyBzdHIgPSBLbm93bkNvbG9yVGFibGUuS25vd25Db2xvclRvTmFtZSgoS25vd25Db2xvcil0aGlzLmtub3duQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5rbm93bkNvbG9yLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbG9uZyBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlVmFsdWVNYXNrKSAhPSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSXNLbm93bkNvbG9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobG9uZylLbm93bkNvbG9yVGFibGUuS25vd25Db2xvclRvQXJnYigoS25vd25Db2xvcil0aGlzLmtub3duQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vdERlZmluZWRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDaGVja0J5dGUoaW50IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCh2YWx1ZSA8IDApIHx8ICh2YWx1ZSA+IDB4ZmYpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRFeGNlcHRpb24oXCJJbnZhbGlkRXgyQm91bmRBcmd1bWVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbG9uZyBNYWtlQXJnYihieXRlIGFscGhhLCBieXRlIHJlZCwgYnl0ZSBncmVlbiwgYnl0ZSBibHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhbHBoYSA8PCAyNCkgfCAocmVkIDw8IDE2KSB8IChncmVlbiA8PCA4KSB8IGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCBhcmdiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihhcmdiICYgKChsb25nKTB4ZmZmZmZmZmZMKSwgU3RhdGVBUkdCVmFsdWVWYWxpZCwgbnVsbCwgKEtub3duQ29sb3IpMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCBhbHBoYSwgaW50IHJlZCwgaW50IGdyZWVuLCBpbnQgYmx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShhbHBoYSk7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShyZWQpO1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoZ3JlZW4pO1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoYmx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoTWFrZUFyZ2IoKGJ5dGUpYWxwaGEsIChieXRlKXJlZCwgKGJ5dGUpZ3JlZW4sIChieXRlKWJsdWUpLCBTdGF0ZUFSR0JWYWx1ZVZhbGlkLCBudWxsLCAoS25vd25Db2xvcikwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUFyZ2IoaW50IGFscGhhLCBDb2xvciBiYXNlQ29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoYWxwaGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1ha2VBcmdiKChieXRlKWFscGhhLCBiYXNlQ29sb3IuUiwgYmFzZUNvbG9yLkcsIGJhc2VDb2xvci5CKSwgU3RhdGVBUkdCVmFsdWVWYWxpZCwgbnVsbCwgKEtub3duQ29sb3IpMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCByZWQsIGludCBncmVlbiwgaW50IGJsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRnJvbUFyZ2IoMHhmZiwgcmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgSXNFbnVtVmFsaWQoRW51bSBlbnVtVmFsdWUsIGludCB2YWx1ZSwgaW50IG1pblZhbHVlLCBpbnQgbWF4VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCh2YWx1ZSA+PSBtaW5WYWx1ZSkgJiYgKHZhbHVlIDw9IG1heFZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21Lbm93bkNvbG9yKEtub3duQ29sb3IgY29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgY29tcG9uZW50VG9IZXgoYnl0ZSB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdmFsdWUuVG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHguTGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVG9IdG1sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElzS25vd25Db2xvcilcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBDb2xvci5Gcm9tQXJnYihLbm93bkNvbG9yVGFibGUuS25vd25Db2xvclRvQXJnYigoS25vd25Db2xvcilrbm93bkNvbG9yKSkuVG9IdG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQSAhPSAyNTUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCIjezB9ezF9ezJ9ezN9XCIsIGNvbXBvbmVudFRvSGV4KEEpLCBjb21wb25lbnRUb0hleChSKSwgY29tcG9uZW50VG9IZXgoRyksIGNvbXBvbmVudFRvSGV4KEIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIiN7MH17MX17Mn1cIiwgY29tcG9uZW50VG9IZXgoUiksIGNvbXBvbmVudFRvSGV4KEcpLCBjb21wb25lbnRUb0hleChCKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUhleChzdHJpbmcgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuU3RhcnRzV2l0aChcIiNcIikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRnJvbUhleCh2YWx1ZS5TdWJzdHJpbmcoMSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBDb2xvci5Gcm9tQXJnYihTY3JpcHQuUGFyc2VJbnQodmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZsb2F0IEdldEJyaWdodG5lc3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQgeiA9IFIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB4ID0gRyAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IGMgPSBCIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgdiA9IHo7XHJcbiAgICAgICAgICAgIGZsb2F0IGIgPSB6O1xyXG4gICAgICAgICAgICBpZiAoeCA+IHYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjID4gdilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPCBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA8IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKHYgKyBiKSAvIDJmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBHZXRIdWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLlIgPT0gdGhpcy5HKSAmJiAodGhpcy5HID09IHRoaXMuQikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbG9hdCB6ID0gUiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHggPSBHIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgYyA9IEIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB2ID0gMGY7XHJcbiAgICAgICAgICAgIGZsb2F0IGIgPSB6O1xyXG4gICAgICAgICAgICBmbG9hdCBuID0gejtcclxuICAgICAgICAgICAgaWYgKHggPiBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA+IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4IDwgbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPCBuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbG9hdCBudW02ID0gYiAtIG47XHJcbiAgICAgICAgICAgIGlmICh6ID09IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSAoeCAtIGMpIC8gbnVtNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh4ID09IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSAyZiArICgoYyAtIHopIC8gbnVtNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PSBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0gNGYgKyAoKHogLSB4KSAvIG51bTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHYgKj0gNjBmO1xyXG4gICAgICAgICAgICBpZiAodiA8IDBmKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ICs9IDM2MGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBmbG9hdCBxID0gMjU1ZjtcclxuXHJcbiAgICAgICAgcHVibGljIGZsb2F0IEdldFNhdHVyYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQgeiA9IFIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB4ID0gRyAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IGMgPSBCIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgdiA9IDBmO1xyXG4gICAgICAgICAgICBmbG9hdCBiID0gejtcclxuICAgICAgICAgICAgZmxvYXQgbiA9IHo7XHJcbiAgICAgICAgICAgIGlmICh4ID4gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPiBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA8IG4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG4gPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjIDwgbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIgPT0gbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxvYXQgbSA9IChiICsgbikgLyAyZjtcclxuICAgICAgICAgICAgaWYgKG0gPD0gMC41KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChiIC0gbikgLyAoYiArIG4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKChiIC0gbikgLyAoKDJmIC0gYikgLSBuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFRvQXJnYigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGludCl0aGlzLlZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEtub3duQ29sb3IgVG9Lbm93bkNvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoS25vd25Db2xvcil0aGlzLmtub3duQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0cmluZ0J1aWxkZXIgYnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKDB4MjApO1xyXG4gICAgICAgICAgICBidWlsZGVyLkFwcGVuZChiYXNlLkdldFR5cGUoKS5OYW1lKTtcclxuICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQoXCIgW1wiKTtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVOYW1lVmFsaWQpICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKHRoaXMuTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZUtub3duQ29sb3JWYWxpZCkgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQodGhpcy5OYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlVmFsdWVNYXNrKSAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLkFwcGVuZEZvcm1hdChcIkE9ezB9LCBSPXsxfSwgRz17Mn0sIEI9ezN9XCIsIEEsIFIsIEcsIEIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQoXCJFbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZGVyLkFwcGVuZChcIl1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgb3BlcmF0b3IgPT0oQ29sb3IgbGVmdCwgQ29sb3IgcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoKChsZWZ0LnZhbHVlICE9IHJpZ2h0LnZhbHVlKSB8fCAobGVmdC5zdGF0ZSAhPSByaWdodC5zdGF0ZSkpIHx8IChsZWZ0Lmtub3duQ29sb3IgIT0gcmlnaHQua25vd25Db2xvcikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKChsZWZ0Lm5hbWUgPT0gcmlnaHQubmFtZSkgfHwgKCgobGVmdC5uYW1lICE9IG51bGwpICYmIChyaWdodC5uYW1lICE9IG51bGwpKSAmJiBsZWZ0Lm5hbWUuRXF1YWxzKHJpZ2h0Lm5hbWUpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgb3BlcmF0b3IgIT0oQ29sb3IgbGVmdCwgQ29sb3IgcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gIShsZWZ0ID09IHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIEVxdWFscyhvYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG9iaiBpcyBDb2xvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29sb3IgY29sb3IgPSAoQ29sb3Ipb2JqO1xyXG4gICAgICAgICAgICAgICAgaWYgKCgodGhpcy52YWx1ZSA9PSBjb2xvci52YWx1ZSkgJiYgKHRoaXMuc3RhdGUgPT0gY29sb3Iuc3RhdGUpKSAmJiAodGhpcy5rbm93bkNvbG9yID09IGNvbG9yLmtub3duQ29sb3IpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHRoaXMubmFtZSA9PSBjb2xvci5uYW1lKSB8fCAoKCh0aGlzLm5hbWUgIT0gbnVsbCkgJiYgKGNvbG9yLm5hbWUgIT0gbnVsbCkpICYmIHRoaXMubmFtZS5FcXVhbHModGhpcy5uYW1lKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBpbnQgR2V0SGFzaENvZGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgodGhpcy52YWx1ZS5HZXRIYXNoQ29kZSgpIF4gdGhpcy5zdGF0ZS5HZXRIYXNoQ29kZSgpKSBeIHRoaXMua25vd25Db2xvci5HZXRIYXNoQ29kZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBDb2xvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbXB0eSA9IG5ldyBDb2xvcigpO1xyXG4gICAgICAgICAgICBTdGF0ZUtub3duQ29sb3JWYWxpZCA9IDE7XHJcbiAgICAgICAgICAgIFN0YXRlQVJHQlZhbHVlVmFsaWQgPSAyO1xyXG4gICAgICAgICAgICBTdGF0ZVZhbHVlTWFzayA9IFN0YXRlQVJHQlZhbHVlVmFsaWQ7XHJcbiAgICAgICAgICAgIFN0YXRlTmFtZVZhbGlkID0gODtcclxuICAgICAgICAgICAgTm90RGVmaW5lZFZhbHVlID0gMEw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIEtub3duQ29sb3JcclxuICAgIHtcclxuICAgICAgICBBY3RpdmVCb3JkZXIgPSAxLFxyXG4gICAgICAgIEFjdGl2ZUNhcHRpb24gPSAyLFxyXG4gICAgICAgIEFjdGl2ZUNhcHRpb25UZXh0ID0gMyxcclxuICAgICAgICBBbGljZUJsdWUgPSAweDFjLFxyXG4gICAgICAgIEFudGlxdWVXaGl0ZSA9IDB4MWQsXHJcbiAgICAgICAgQXBwV29ya3NwYWNlID0gNCxcclxuICAgICAgICBBcXVhID0gMzAsXHJcbiAgICAgICAgQXF1YW1hcmluZSA9IDB4MWYsXHJcbiAgICAgICAgQXp1cmUgPSAweDIwLFxyXG4gICAgICAgIEJlaWdlID0gMHgyMSxcclxuICAgICAgICBCaXNxdWUgPSAweDIyLFxyXG4gICAgICAgIEJsYWNrID0gMHgyMyxcclxuICAgICAgICBCbGFuY2hlZEFsbW9uZCA9IDB4MjQsXHJcbiAgICAgICAgQmx1ZSA9IDB4MjUsXHJcbiAgICAgICAgQmx1ZVZpb2xldCA9IDB4MjYsXHJcbiAgICAgICAgQnJvd24gPSAweDI3LFxyXG4gICAgICAgIEJ1cmx5V29vZCA9IDQwLFxyXG4gICAgICAgIEJ1dHRvbkZhY2UgPSAweGE4LFxyXG4gICAgICAgIEJ1dHRvbkhpZ2hsaWdodCA9IDB4YTksXHJcbiAgICAgICAgQnV0dG9uU2hhZG93ID0gMTcwLFxyXG4gICAgICAgIENhZGV0Qmx1ZSA9IDB4MjksXHJcbiAgICAgICAgQ2hhcnRyZXVzZSA9IDB4MmEsXHJcbiAgICAgICAgQ2hvY29sYXRlID0gMHgyYixcclxuICAgICAgICBDb250cm9sID0gNSxcclxuICAgICAgICBDb250cm9sRGFyayA9IDYsXHJcbiAgICAgICAgQ29udHJvbERhcmtEYXJrID0gNyxcclxuICAgICAgICBDb250cm9sTGlnaHQgPSA4LFxyXG4gICAgICAgIENvbnRyb2xMaWdodExpZ2h0ID0gOSxcclxuICAgICAgICBDb250cm9sVGV4dCA9IDEwLFxyXG4gICAgICAgIENvcmFsID0gMHgyYyxcclxuICAgICAgICBDb3JuZmxvd2VyQmx1ZSA9IDB4MmQsXHJcbiAgICAgICAgQ29ybnNpbGsgPSAweDJlLFxyXG4gICAgICAgIENyaW1zb24gPSAweDJmLFxyXG4gICAgICAgIEN5YW4gPSAweDMwLFxyXG4gICAgICAgIERhcmtCbHVlID0gMHgzMSxcclxuICAgICAgICBEYXJrQ3lhbiA9IDUwLFxyXG4gICAgICAgIERhcmtHb2xkZW5yb2QgPSAweDMzLFxyXG4gICAgICAgIERhcmtHcmF5ID0gMHgzNCxcclxuICAgICAgICBEYXJrR3JlZW4gPSAweDM1LFxyXG4gICAgICAgIERhcmtLaGFraSA9IDB4MzYsXHJcbiAgICAgICAgRGFya01hZ2VudGEgPSAweDM3LFxyXG4gICAgICAgIERhcmtPbGl2ZUdyZWVuID0gMHgzOCxcclxuICAgICAgICBEYXJrT3JhbmdlID0gMHgzOSxcclxuICAgICAgICBEYXJrT3JjaGlkID0gMHgzYSxcclxuICAgICAgICBEYXJrUmVkID0gMHgzYixcclxuICAgICAgICBEYXJrU2FsbW9uID0gNjAsXHJcbiAgICAgICAgRGFya1NlYUdyZWVuID0gMHgzZCxcclxuICAgICAgICBEYXJrU2xhdGVCbHVlID0gMHgzZSxcclxuICAgICAgICBEYXJrU2xhdGVHcmF5ID0gMHgzZixcclxuICAgICAgICBEYXJrVHVycXVvaXNlID0gMHg0MCxcclxuICAgICAgICBEYXJrVmlvbGV0ID0gMHg0MSxcclxuICAgICAgICBEZWVwUGluayA9IDB4NDIsXHJcbiAgICAgICAgRGVlcFNreUJsdWUgPSAweDQzLFxyXG4gICAgICAgIERlc2t0b3AgPSAxMSxcclxuICAgICAgICBEaW1HcmF5ID0gMHg0NCxcclxuICAgICAgICBEb2RnZXJCbHVlID0gMHg0NSxcclxuICAgICAgICBGaXJlYnJpY2sgPSA3MCxcclxuICAgICAgICBGbG9yYWxXaGl0ZSA9IDB4NDcsXHJcbiAgICAgICAgRm9yZXN0R3JlZW4gPSAweDQ4LFxyXG4gICAgICAgIEZ1Y2hzaWEgPSAweDQ5LFxyXG4gICAgICAgIEdhaW5zYm9ybyA9IDB4NGEsXHJcbiAgICAgICAgR2hvc3RXaGl0ZSA9IDB4NGIsXHJcbiAgICAgICAgR29sZCA9IDB4NGMsXHJcbiAgICAgICAgR29sZGVucm9kID0gMHg0ZCxcclxuICAgICAgICBHcmFkaWVudEFjdGl2ZUNhcHRpb24gPSAweGFiLFxyXG4gICAgICAgIEdyYWRpZW50SW5hY3RpdmVDYXB0aW9uID0gMHhhYyxcclxuICAgICAgICBHcmF5ID0gMHg0ZSxcclxuICAgICAgICBHcmF5VGV4dCA9IDEyLFxyXG4gICAgICAgIEdyZWVuID0gMHg0ZixcclxuICAgICAgICBHcmVlblllbGxvdyA9IDgwLFxyXG4gICAgICAgIEhpZ2hsaWdodCA9IDEzLFxyXG4gICAgICAgIEhpZ2hsaWdodFRleHQgPSAxNCxcclxuICAgICAgICBIb25leWRldyA9IDB4NTEsXHJcbiAgICAgICAgSG90UGluayA9IDB4NTIsXHJcbiAgICAgICAgSG90VHJhY2sgPSAxNSxcclxuICAgICAgICBJbmFjdGl2ZUJvcmRlciA9IDB4MTAsXHJcbiAgICAgICAgSW5hY3RpdmVDYXB0aW9uID0gMHgxMSxcclxuICAgICAgICBJbmFjdGl2ZUNhcHRpb25UZXh0ID0gMHgxMixcclxuICAgICAgICBJbmRpYW5SZWQgPSAweDUzLFxyXG4gICAgICAgIEluZGlnbyA9IDB4NTQsXHJcbiAgICAgICAgSW5mbyA9IDB4MTMsXHJcbiAgICAgICAgSW5mb1RleHQgPSAyMCxcclxuICAgICAgICBJdm9yeSA9IDB4NTUsXHJcbiAgICAgICAgS2hha2kgPSAweDU2LFxyXG4gICAgICAgIExhdmVuZGVyID0gMHg1NyxcclxuICAgICAgICBMYXZlbmRlckJsdXNoID0gMHg1OCxcclxuICAgICAgICBMYXduR3JlZW4gPSAweDU5LFxyXG4gICAgICAgIExlbW9uQ2hpZmZvbiA9IDkwLFxyXG4gICAgICAgIExpZ2h0Qmx1ZSA9IDB4NWIsXHJcbiAgICAgICAgTGlnaHRDb3JhbCA9IDB4NWMsXHJcbiAgICAgICAgTGlnaHRDeWFuID0gMHg1ZCxcclxuICAgICAgICBMaWdodEdvbGRlbnJvZFllbGxvdyA9IDB4NWUsXHJcbiAgICAgICAgTGlnaHRHcmF5ID0gMHg1ZixcclxuICAgICAgICBMaWdodEdyZWVuID0gMHg2MCxcclxuICAgICAgICBMaWdodFBpbmsgPSAweDYxLFxyXG4gICAgICAgIExpZ2h0U2FsbW9uID0gMHg2MixcclxuICAgICAgICBMaWdodFNlYUdyZWVuID0gMHg2MyxcclxuICAgICAgICBMaWdodFNreUJsdWUgPSAxMDAsXHJcbiAgICAgICAgTGlnaHRTbGF0ZUdyYXkgPSAweDY1LFxyXG4gICAgICAgIExpZ2h0U3RlZWxCbHVlID0gMHg2NixcclxuICAgICAgICBMaWdodFllbGxvdyA9IDB4NjcsXHJcbiAgICAgICAgTGltZSA9IDB4NjgsXHJcbiAgICAgICAgTGltZUdyZWVuID0gMHg2OSxcclxuICAgICAgICBMaW5lbiA9IDB4NmEsXHJcbiAgICAgICAgTWFnZW50YSA9IDB4NmIsXHJcbiAgICAgICAgTWFyb29uID0gMHg2YyxcclxuICAgICAgICBNZWRpdW1BcXVhbWFyaW5lID0gMHg2ZCxcclxuICAgICAgICBNZWRpdW1CbHVlID0gMTEwLFxyXG4gICAgICAgIE1lZGl1bU9yY2hpZCA9IDB4NmYsXHJcbiAgICAgICAgTWVkaXVtUHVycGxlID0gMHg3MCxcclxuICAgICAgICBNZWRpdW1TZWFHcmVlbiA9IDB4NzEsXHJcbiAgICAgICAgTWVkaXVtU2xhdGVCbHVlID0gMHg3MixcclxuICAgICAgICBNZWRpdW1TcHJpbmdHcmVlbiA9IDB4NzMsXHJcbiAgICAgICAgTWVkaXVtVHVycXVvaXNlID0gMHg3NCxcclxuICAgICAgICBNZWRpdW1WaW9sZXRSZWQgPSAweDc1LFxyXG4gICAgICAgIE1lbnUgPSAweDE1LFxyXG4gICAgICAgIE1lbnVCYXIgPSAweGFkLFxyXG4gICAgICAgIE1lbnVIaWdobGlnaHQgPSAweGFlLFxyXG4gICAgICAgIE1lbnVUZXh0ID0gMHgxNixcclxuICAgICAgICBNaWRuaWdodEJsdWUgPSAweDc2LFxyXG4gICAgICAgIE1pbnRDcmVhbSA9IDB4NzcsXHJcbiAgICAgICAgTWlzdHlSb3NlID0gMTIwLFxyXG4gICAgICAgIE1vY2Nhc2luID0gMHg3OSxcclxuICAgICAgICBOYXZham9XaGl0ZSA9IDB4N2EsXHJcbiAgICAgICAgTmF2eSA9IDB4N2IsXHJcbiAgICAgICAgT2xkTGFjZSA9IDB4N2MsXHJcbiAgICAgICAgT2xpdmUgPSAweDdkLFxyXG4gICAgICAgIE9saXZlRHJhYiA9IDB4N2UsXHJcbiAgICAgICAgT3JhbmdlID0gMHg3ZixcclxuICAgICAgICBPcmFuZ2VSZWQgPSAweDgwLFxyXG4gICAgICAgIE9yY2hpZCA9IDB4ODEsXHJcbiAgICAgICAgUGFsZUdvbGRlbnJvZCA9IDEzMCxcclxuICAgICAgICBQYWxlR3JlZW4gPSAweDgzLFxyXG4gICAgICAgIFBhbGVUdXJxdW9pc2UgPSAweDg0LFxyXG4gICAgICAgIFBhbGVWaW9sZXRSZWQgPSAweDg1LFxyXG4gICAgICAgIFBhcGF5YVdoaXAgPSAweDg2LFxyXG4gICAgICAgIFBlYWNoUHVmZiA9IDB4ODcsXHJcbiAgICAgICAgUGVydSA9IDB4ODgsXHJcbiAgICAgICAgUGluayA9IDB4ODksXHJcbiAgICAgICAgUGx1bSA9IDB4OGEsXHJcbiAgICAgICAgUG93ZGVyQmx1ZSA9IDB4OGIsXHJcbiAgICAgICAgUHVycGxlID0gMTQwLFxyXG4gICAgICAgIFJlZCA9IDB4OGQsXHJcbiAgICAgICAgUm9zeUJyb3duID0gMHg4ZSxcclxuICAgICAgICBSb3lhbEJsdWUgPSAweDhmLFxyXG4gICAgICAgIFNhZGRsZUJyb3duID0gMHg5MCxcclxuICAgICAgICBTYWxtb24gPSAweDkxLFxyXG4gICAgICAgIFNhbmR5QnJvd24gPSAweDkyLFxyXG4gICAgICAgIFNjcm9sbEJhciA9IDB4MTcsXHJcbiAgICAgICAgU2VhR3JlZW4gPSAweDkzLFxyXG4gICAgICAgIFNlYVNoZWxsID0gMHg5NCxcclxuICAgICAgICBTaWVubmEgPSAweDk1LFxyXG4gICAgICAgIFNpbHZlciA9IDE1MCxcclxuICAgICAgICBTa3lCbHVlID0gMHg5NyxcclxuICAgICAgICBTbGF0ZUJsdWUgPSAweDk4LFxyXG4gICAgICAgIFNsYXRlR3JheSA9IDB4OTksXHJcbiAgICAgICAgU25vdyA9IDB4OWEsXHJcbiAgICAgICAgU3ByaW5nR3JlZW4gPSAweDliLFxyXG4gICAgICAgIFN0ZWVsQmx1ZSA9IDB4OWMsXHJcbiAgICAgICAgVGFuID0gMHg5ZCxcclxuICAgICAgICBUZWFsID0gMHg5ZSxcclxuICAgICAgICBUaGlzdGxlID0gMHg5ZixcclxuICAgICAgICBUb21hdG8gPSAxNjAsXHJcbiAgICAgICAgVHJhbnNwYXJlbnQgPSAweDFiLFxyXG4gICAgICAgIFR1cnF1b2lzZSA9IDB4YTEsXHJcbiAgICAgICAgVmlvbGV0ID0gMHhhMixcclxuICAgICAgICBXaGVhdCA9IDB4YTMsXHJcbiAgICAgICAgV2hpdGUgPSAweGE0LFxyXG4gICAgICAgIFdoaXRlU21va2UgPSAweGE1LFxyXG4gICAgICAgIFdpbmRvdyA9IDB4MTgsXHJcbiAgICAgICAgV2luZG93RnJhbWUgPSAweDE5LFxyXG4gICAgICAgIFdpbmRvd1RleHQgPSAweDFhLFxyXG4gICAgICAgIFllbGxvdyA9IDB4YTYsXHJcbiAgICAgICAgWWVsbG93R3JlZW4gPSAweGE3XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJuYWwgc3RhdGljIGNsYXNzIEtub3duQ29sb3JUYWJsZVxyXG4gICAge1xyXG4gICAgICAgIC8vIEZpZWxkc1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFscGhhU2hpZnQgPSAweDE4O1xyXG5cclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBCbHVlU2hpZnQgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHN0cmluZ1tdIGNvbG9yTmFtZVRhYmxlO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludFtdIGNvbG9yVGFibGU7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgR3JlZW5TaGlmdCA9IDg7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgUmVkU2hpZnQgPSAweDEwO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IFdpbjMyQmx1ZVNoaWZ0ID0gMHgxMDtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBXaW4zMkdyZWVuU2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IFdpbjMyUmVkU2hpZnQgPSAwO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBHZXRDb2xvck5hbWUoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlQ29sb3JOYW1lVGFibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yTmFtZVRhYmxlW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ldGhvZHNcclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFyZ2JUb0tub3duQ29sb3IoaW50IHRhcmdldEFSR0IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVDb2xvclRhYmxlKCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgY29sb3JUYWJsZS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW50IG51bTIgPSBjb2xvclRhYmxlW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bTIgPT0gdGFyZ2V0QVJHQilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb2xvciBjb2xvciA9IENvbG9yLkZyb21Lbm93bkNvbG9yKChLbm93bkNvbG9yKWkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sb3IuSXNTeXN0ZW1Db2xvcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIENvbG9yLkZyb21BcmdiKHRhcmdldEFSR0IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IEVuY29kZShpbnQgYWxwaGEsIGludCByZWQsIGludCBncmVlbiwgaW50IGJsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCgoKHJlZCA8PCAweDEwKSB8IChncmVlbiA8PCA4KSkgfCBibHVlKSB8IChhbHBoYSA8PCAweDE4KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIEVuc3VyZUNvbG9yTmFtZVRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvck5hbWVUYWJsZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJbml0Q29sb3JOYW1lVGFibGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBFbnN1cmVDb2xvclRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvclRhYmxlID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEluaXRDb2xvclRhYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBGcm9tV2luMzJWYWx1ZShpbnQgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRW5jb2RlKDB4ZmYsIHZhbHVlICYgMHhmZiwgKHZhbHVlID4+IDgpICYgMHhmZiwgKHZhbHVlID4+IDB4MTApICYgMHhmZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIEluaXRDb2xvck5hbWVUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBzID0gbmV3IHN0cmluZ1sweGFmXTtcclxuICAgICAgICAgICAgc1sxXSA9IFwiQWN0aXZlQm9yZGVyXCI7XHJcbiAgICAgICAgICAgIHNbMl0gPSBcIkFjdGl2ZUNhcHRpb25cIjtcclxuICAgICAgICAgICAgc1szXSA9IFwiQWN0aXZlQ2FwdGlvblRleHRcIjtcclxuICAgICAgICAgICAgc1s0XSA9IFwiQXBwV29ya3NwYWNlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhOF0gPSBcIkJ1dHRvbkZhY2VcIjtcclxuICAgICAgICAgICAgc1sweGE5XSA9IFwiQnV0dG9uSGlnaGxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbMTcwXSA9IFwiQnV0dG9uU2hhZG93XCI7XHJcbiAgICAgICAgICAgIHNbNV0gPSBcIkNvbnRyb2xcIjtcclxuICAgICAgICAgICAgc1s2XSA9IFwiQ29udHJvbERhcmtcIjtcclxuICAgICAgICAgICAgc1s3XSA9IFwiQ29udHJvbERhcmtEYXJrXCI7XHJcbiAgICAgICAgICAgIHNbOF0gPSBcIkNvbnRyb2xMaWdodFwiO1xyXG4gICAgICAgICAgICBzWzldID0gXCJDb250cm9sTGlnaHRMaWdodFwiO1xyXG4gICAgICAgICAgICBzWzEwXSA9IFwiQ29udHJvbFRleHRcIjtcclxuICAgICAgICAgICAgc1sxMV0gPSBcIkRlc2t0b3BcIjtcclxuICAgICAgICAgICAgc1sweGFiXSA9IFwiR3JhZGllbnRBY3RpdmVDYXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHhhY10gPSBcIkdyYWRpZW50SW5hY3RpdmVDYXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHNbMTJdID0gXCJHcmF5VGV4dFwiO1xyXG4gICAgICAgICAgICBzWzEzXSA9IFwiSGlnaGxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbMTRdID0gXCJIaWdobGlnaHRUZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMTVdID0gXCJIb3RUcmFja1wiO1xyXG4gICAgICAgICAgICBzWzB4MTBdID0gXCJJbmFjdGl2ZUJvcmRlclwiO1xyXG4gICAgICAgICAgICBzWzB4MTFdID0gXCJJbmFjdGl2ZUNhcHRpb25cIjtcclxuICAgICAgICAgICAgc1sweDEyXSA9IFwiSW5hY3RpdmVDYXB0aW9uVGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MTNdID0gXCJJbmZvXCI7XHJcbiAgICAgICAgICAgIHNbMjBdID0gXCJJbmZvVGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MTVdID0gXCJNZW51XCI7XHJcbiAgICAgICAgICAgIHNbMHhhZF0gPSBcIk1lbnVCYXJcIjtcclxuICAgICAgICAgICAgc1sweGFlXSA9IFwiTWVudUhpZ2hsaWdodFwiO1xyXG4gICAgICAgICAgICBzWzB4MTZdID0gXCJNZW51VGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MTddID0gXCJTY3JvbGxCYXJcIjtcclxuICAgICAgICAgICAgc1sweDE4XSA9IFwiV2luZG93XCI7XHJcbiAgICAgICAgICAgIHNbMHgxOV0gPSBcIldpbmRvd0ZyYW1lXCI7XHJcbiAgICAgICAgICAgIHNbMHgxYV0gPSBcIldpbmRvd1RleHRcIjtcclxuICAgICAgICAgICAgc1sweDFiXSA9IFwiVHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgc1sweDFjXSA9IFwiQWxpY2VCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgxZF0gPSBcIkFudGlxdWVXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzMwXSA9IFwiQXF1YVwiO1xyXG4gICAgICAgICAgICBzWzB4MWZdID0gXCJBcXVhbWFyaW5lXCI7XHJcbiAgICAgICAgICAgIHNbMHgyMF0gPSBcIkF6dXJlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyMV0gPSBcIkJlaWdlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyMl0gPSBcIkJpc3F1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MjNdID0gXCJCbGFja1wiO1xyXG4gICAgICAgICAgICBzWzB4MjRdID0gXCJCbGFuY2hlZEFsbW9uZFwiO1xyXG4gICAgICAgICAgICBzWzB4MjVdID0gXCJCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyNl0gPSBcIkJsdWVWaW9sZXRcIjtcclxuICAgICAgICAgICAgc1sweDI3XSA9IFwiQnJvd25cIjtcclxuICAgICAgICAgICAgc1s0MF0gPSBcIkJ1cmx5V29vZFwiO1xyXG4gICAgICAgICAgICBzWzB4MjldID0gXCJDYWRldEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDJhXSA9IFwiQ2hhcnRyZXVzZVwiO1xyXG4gICAgICAgICAgICBzWzB4MmJdID0gXCJDaG9jb2xhdGVcIjtcclxuICAgICAgICAgICAgc1sweDJjXSA9IFwiQ29yYWxcIjtcclxuICAgICAgICAgICAgc1sweDJkXSA9IFwiQ29ybmZsb3dlckJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDJlXSA9IFwiQ29ybnNpbGtcIjtcclxuICAgICAgICAgICAgc1sweDJmXSA9IFwiQ3JpbXNvblwiO1xyXG4gICAgICAgICAgICBzWzB4MzBdID0gXCJDeWFuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzMV0gPSBcIkRhcmtCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbNTBdID0gXCJEYXJrQ3lhblwiO1xyXG4gICAgICAgICAgICBzWzB4MzNdID0gXCJEYXJrR29sZGVucm9kXCI7XHJcbiAgICAgICAgICAgIHNbMHgzNF0gPSBcIkRhcmtHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHgzNV0gPSBcIkRhcmtHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4MzZdID0gXCJEYXJrS2hha2lcIjtcclxuICAgICAgICAgICAgc1sweDM3XSA9IFwiRGFya01hZ2VudGFcIjtcclxuICAgICAgICAgICAgc1sweDM4XSA9IFwiRGFya09saXZlR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDM5XSA9IFwiRGFya09yYW5nZVwiO1xyXG4gICAgICAgICAgICBzWzB4M2FdID0gXCJEYXJrT3JjaGlkXCI7XHJcbiAgICAgICAgICAgIHNbMHgzYl0gPSBcIkRhcmtSZWRcIjtcclxuICAgICAgICAgICAgc1s2MF0gPSBcIkRhcmtTYWxtb25cIjtcclxuICAgICAgICAgICAgc1sweDNkXSA9IFwiRGFya1NlYUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzZV0gPSBcIkRhcmtTbGF0ZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDNmXSA9IFwiRGFya1NsYXRlR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NDBdID0gXCJEYXJrVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg0MV0gPSBcIkRhcmtWaW9sZXRcIjtcclxuICAgICAgICAgICAgc1sweDQyXSA9IFwiRGVlcFBpbmtcIjtcclxuICAgICAgICAgICAgc1sweDQzXSA9IFwiRGVlcFNreUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDQ0XSA9IFwiRGltR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NDVdID0gXCJEb2RnZXJCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbNzBdID0gXCJGaXJlYnJpY2tcIjtcclxuICAgICAgICAgICAgc1sweDQ3XSA9IFwiRmxvcmFsV2hpdGVcIjtcclxuICAgICAgICAgICAgc1sweDQ4XSA9IFwiRm9yZXN0R3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDQ5XSA9IFwiRnVjaHNpYVwiO1xyXG4gICAgICAgICAgICBzWzB4NGFdID0gXCJHYWluc2Jvcm9cIjtcclxuICAgICAgICAgICAgc1sweDRiXSA9IFwiR2hvc3RXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NGNdID0gXCJHb2xkXCI7XHJcbiAgICAgICAgICAgIHNbMHg0ZF0gPSBcIkdvbGRlbnJvZFwiO1xyXG4gICAgICAgICAgICBzWzB4NGVdID0gXCJHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg0Zl0gPSBcIkdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbODBdID0gXCJHcmVlblllbGxvd1wiO1xyXG4gICAgICAgICAgICBzWzB4NTFdID0gXCJIb25leWRld1wiO1xyXG4gICAgICAgICAgICBzWzB4NTJdID0gXCJIb3RQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg1M10gPSBcIkluZGlhblJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4NTRdID0gXCJJbmRpZ29cIjtcclxuICAgICAgICAgICAgc1sweDU1XSA9IFwiSXZvcnlcIjtcclxuICAgICAgICAgICAgc1sweDU2XSA9IFwiS2hha2lcIjtcclxuICAgICAgICAgICAgc1sweDU3XSA9IFwiTGF2ZW5kZXJcIjtcclxuICAgICAgICAgICAgc1sweDU4XSA9IFwiTGF2ZW5kZXJCbHVzaFwiO1xyXG4gICAgICAgICAgICBzWzB4NTldID0gXCJMYXduR3JlZW5cIjtcclxuICAgICAgICAgICAgc1s5MF0gPSBcIkxlbW9uQ2hpZmZvblwiO1xyXG4gICAgICAgICAgICBzWzB4NWJdID0gXCJMaWdodEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDVjXSA9IFwiTGlnaHRDb3JhbFwiO1xyXG4gICAgICAgICAgICBzWzB4NWRdID0gXCJMaWdodEN5YW5cIjtcclxuICAgICAgICAgICAgc1sweDVlXSA9IFwiTGlnaHRHb2xkZW5yb2RZZWxsb3dcIjtcclxuICAgICAgICAgICAgc1sweDVmXSA9IFwiTGlnaHRHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg2MF0gPSBcIkxpZ2h0R3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDYxXSA9IFwiTGlnaHRQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg2Ml0gPSBcIkxpZ2h0U2FsbW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHg2M10gPSBcIkxpZ2h0U2VhR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sxMDBdID0gXCJMaWdodFNreUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDY1XSA9IFwiTGlnaHRTbGF0ZUdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDY2XSA9IFwiTGlnaHRTdGVlbEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDY3XSA9IFwiTGlnaHRZZWxsb3dcIjtcclxuICAgICAgICAgICAgc1sweDY4XSA9IFwiTGltZVwiO1xyXG4gICAgICAgICAgICBzWzB4NjldID0gXCJMaW1lR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDZhXSA9IFwiTGluZW5cIjtcclxuICAgICAgICAgICAgc1sweDZiXSA9IFwiTWFnZW50YVwiO1xyXG4gICAgICAgICAgICBzWzB4NmNdID0gXCJNYXJvb25cIjtcclxuICAgICAgICAgICAgc1sweDZkXSA9IFwiTWVkaXVtQXF1YW1hcmluZVwiO1xyXG4gICAgICAgICAgICBzWzExMF0gPSBcIk1lZGl1bUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDZmXSA9IFwiTWVkaXVtT3JjaGlkXCI7XHJcbiAgICAgICAgICAgIHNbMHg3MF0gPSBcIk1lZGl1bVB1cnBsZVwiO1xyXG4gICAgICAgICAgICBzWzB4NzFdID0gXCJNZWRpdW1TZWFHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4NzJdID0gXCJNZWRpdW1TbGF0ZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDczXSA9IFwiTWVkaXVtU3ByaW5nR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDc0XSA9IFwiTWVkaXVtVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3NV0gPSBcIk1lZGl1bVZpb2xldFJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4NzZdID0gXCJNaWRuaWdodEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDc3XSA9IFwiTWludENyZWFtXCI7XHJcbiAgICAgICAgICAgIHNbMTIwXSA9IFwiTWlzdHlSb3NlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3OV0gPSBcIk1vY2Nhc2luXCI7XHJcbiAgICAgICAgICAgIHNbMHg3YV0gPSBcIk5hdmFqb1doaXRlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3Yl0gPSBcIk5hdnlcIjtcclxuICAgICAgICAgICAgc1sweDdjXSA9IFwiT2xkTGFjZVwiO1xyXG4gICAgICAgICAgICBzWzB4N2RdID0gXCJPbGl2ZVwiO1xyXG4gICAgICAgICAgICBzWzB4N2VdID0gXCJPbGl2ZURyYWJcIjtcclxuICAgICAgICAgICAgc1sweDdmXSA9IFwiT3JhbmdlXCI7XHJcbiAgICAgICAgICAgIHNbMHg4MF0gPSBcIk9yYW5nZVJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4ODFdID0gXCJPcmNoaWRcIjtcclxuICAgICAgICAgICAgc1sxMzBdID0gXCJQYWxlR29sZGVucm9kXCI7XHJcbiAgICAgICAgICAgIHNbMHg4M10gPSBcIlBhbGVHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4ODRdID0gXCJQYWxlVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg4NV0gPSBcIlBhbGVWaW9sZXRSZWRcIjtcclxuICAgICAgICAgICAgc1sweDg2XSA9IFwiUGFwYXlhV2hpcFwiO1xyXG4gICAgICAgICAgICBzWzB4ODddID0gXCJQZWFjaFB1ZmZcIjtcclxuICAgICAgICAgICAgc1sweDg4XSA9IFwiUGVydVwiO1xyXG4gICAgICAgICAgICBzWzB4ODldID0gXCJQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg4YV0gPSBcIlBsdW1cIjtcclxuICAgICAgICAgICAgc1sweDhiXSA9IFwiUG93ZGVyQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzE0MF0gPSBcIlB1cnBsZVwiO1xyXG4gICAgICAgICAgICBzWzB4OGRdID0gXCJSZWRcIjtcclxuICAgICAgICAgICAgc1sweDhlXSA9IFwiUm9zeUJyb3duXCI7XHJcbiAgICAgICAgICAgIHNbMHg4Zl0gPSBcIlJveWFsQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4OTBdID0gXCJTYWRkbGVCcm93blwiO1xyXG4gICAgICAgICAgICBzWzB4OTFdID0gXCJTYWxtb25cIjtcclxuICAgICAgICAgICAgc1sweDkyXSA9IFwiU2FuZHlCcm93blwiO1xyXG4gICAgICAgICAgICBzWzB4OTNdID0gXCJTZWFHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4OTRdID0gXCJTZWFTaGVsbFwiO1xyXG4gICAgICAgICAgICBzWzB4OTVdID0gXCJTaWVubmFcIjtcclxuICAgICAgICAgICAgc1sxNTBdID0gXCJTaWx2ZXJcIjtcclxuICAgICAgICAgICAgc1sweDk3XSA9IFwiU2t5Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4OThdID0gXCJTbGF0ZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDk5XSA9IFwiU2xhdGVHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg5YV0gPSBcIlNub3dcIjtcclxuICAgICAgICAgICAgc1sweDliXSA9IFwiU3ByaW5nR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDljXSA9IFwiU3RlZWxCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg5ZF0gPSBcIlRhblwiO1xyXG4gICAgICAgICAgICBzWzB4OWVdID0gXCJUZWFsXCI7XHJcbiAgICAgICAgICAgIHNbMHg5Zl0gPSBcIlRoaXN0bGVcIjtcclxuICAgICAgICAgICAgc1sxNjBdID0gXCJUb21hdG9cIjtcclxuICAgICAgICAgICAgc1sweGExXSA9IFwiVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhMl0gPSBcIlZpb2xldFwiO1xyXG4gICAgICAgICAgICBzWzB4YTNdID0gXCJXaGVhdFwiO1xyXG4gICAgICAgICAgICBzWzB4YTRdID0gXCJXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4YTVdID0gXCJXaGl0ZVNtb2tlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhNl0gPSBcIlllbGxvd1wiO1xyXG4gICAgICAgICAgICBzWzB4YTddID0gXCJZZWxsb3dHcmVlblwiO1xyXG4gICAgICAgICAgICBjb2xvck5hbWVUYWJsZSA9IHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIFVwZGF0ZVN5c3RlbUNvbG9ycygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzFdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbM10gPSBTeXN0ZW1Db2xvclRvQXJnYig5KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs0XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDEyKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNjhdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTUpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE2OV0gPSBTeXN0ZW1Db2xvclRvQXJnYigyMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTcwXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzVdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTUpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzZdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbN10gPSBTeXN0ZW1Db2xvclRvQXJnYigweDE1KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs4XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTYpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzldID0gU3lzdGVtQ29sb3JUb0FyZ2IoMjApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzEwXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTIpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzExXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDEpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3MV0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDFiKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxYyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTNdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTMpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE0XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDE0KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNV0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDFhKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNl0gPSBTeXN0ZW1Db2xvclRvQXJnYigxMSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTddID0gU3lzdGVtQ29sb3JUb0FyZ2IoMyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMThdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTldID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxOCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjBdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxNyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjFdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTczXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDMwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzRdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxZCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjNdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjRdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjVdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjZdID0gU3lzdGVtQ29sb3JUb0FyZ2IoOCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBJbml0Q29sb3JUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnRbXSBjID0gbmV3IGludFsweGFmXTtcclxuXHJcbiAgICAgICAgICAgIGNbMHgxYl0gPSAweGZmZmZmZjtcclxuICAgICAgICAgICAgY1sweDFjXSA9IC05ODQ4MzM7XHJcbiAgICAgICAgICAgIGNbMHgxZF0gPSAtMzMyODQxO1xyXG4gICAgICAgICAgICBjWzMwXSA9IC0xNjcxMTY4MTtcclxuICAgICAgICAgICAgY1sweDFmXSA9IC04Mzg4NjUyO1xyXG4gICAgICAgICAgICBjWzB4MjBdID0gLTk4MzA0MTtcclxuICAgICAgICAgICAgY1sweDIxXSA9IC02NTc5NTY7XHJcbiAgICAgICAgICAgIGNbMHgyMl0gPSAtNjk3MjtcclxuICAgICAgICAgICAgY1sweDIzXSA9IC0xNjc3NzIxNjtcclxuICAgICAgICAgICAgY1sweDI0XSA9IC01MTcxO1xyXG4gICAgICAgICAgICBjWzB4MjVdID0gLTE2Nzc2OTYxO1xyXG4gICAgICAgICAgICBjWzB4MjZdID0gLTc3MjIwMTQ7XHJcbiAgICAgICAgICAgIGNbMHgyN10gPSAtNTk1Mjk4MjtcclxuICAgICAgICAgICAgY1s0MF0gPSAtMjE4MDk4NTtcclxuICAgICAgICAgICAgY1sweDI5XSA9IC0xMDUxMDY4ODtcclxuICAgICAgICAgICAgY1sweDJhXSA9IC04Mzg4ODY0O1xyXG4gICAgICAgICAgICBjWzB4MmJdID0gLTI5ODc3NDY7XHJcbiAgICAgICAgICAgIGNbMHgyY10gPSAtMzI5NDQ7XHJcbiAgICAgICAgICAgIGNbMHgyZF0gPSAtMTAxODUyMzU7XHJcbiAgICAgICAgICAgIGNbMHgyZV0gPSAtMTgyODtcclxuICAgICAgICAgICAgY1sweDJmXSA9IC0yMzU0MTE2O1xyXG4gICAgICAgICAgICBjWzB4MzBdID0gLTE2NzExNjgxO1xyXG4gICAgICAgICAgICBjWzB4MzFdID0gLTE2Nzc3MDc3O1xyXG4gICAgICAgICAgICBjWzUwXSA9IC0xNjc0MTQ5MztcclxuICAgICAgICAgICAgY1sweDMzXSA9IC00Njg0Mjc3O1xyXG4gICAgICAgICAgICBjWzB4MzRdID0gLTU2NTgxOTk7XHJcbiAgICAgICAgICAgIGNbMHgzNV0gPSAtMTY3NTE2MTY7XHJcbiAgICAgICAgICAgIGNbMHgzNl0gPSAtNDM0Mzk1NztcclxuICAgICAgICAgICAgY1sweDM3XSA9IC03NjY3NTczO1xyXG4gICAgICAgICAgICBjWzB4MzhdID0gLTExMTc5MjE3O1xyXG4gICAgICAgICAgICBjWzB4MzldID0gLTI5Njk2O1xyXG4gICAgICAgICAgICBjWzB4M2FdID0gLTY3MzcyMDQ7XHJcbiAgICAgICAgICAgIGNbMHgzYl0gPSAtNzY2NzcxMjtcclxuICAgICAgICAgICAgY1s2MF0gPSAtMTQ2ODgwNjtcclxuICAgICAgICAgICAgY1sweDNkXSA9IC03MzU3MzAxO1xyXG4gICAgICAgICAgICBjWzB4M2VdID0gLTEyMDQyODY5O1xyXG4gICAgICAgICAgICBjWzB4M2ZdID0gLTEzNjc2NzIxO1xyXG4gICAgICAgICAgICBjWzB4NDBdID0gLTE2NzI0MjcxO1xyXG4gICAgICAgICAgICBjWzB4NDFdID0gLTcwNzc2Nzc7XHJcbiAgICAgICAgICAgIGNbMHg0Ml0gPSAtNjAyNjk7XHJcbiAgICAgICAgICAgIGNbMHg0M10gPSAtMTY3MjgwNjU7XHJcbiAgICAgICAgICAgIGNbMHg0NF0gPSAtOTg2ODk1MTtcclxuICAgICAgICAgICAgY1sweDQ1XSA9IC0xNDc3NDAxNztcclxuICAgICAgICAgICAgY1s3MF0gPSAtNTEwMzA3MDtcclxuICAgICAgICAgICAgY1sweDQ3XSA9IC0xMjk2O1xyXG4gICAgICAgICAgICBjWzB4NDhdID0gLTE0NTEzMzc0O1xyXG4gICAgICAgICAgICBjWzB4NDldID0gLTY1MjgxO1xyXG4gICAgICAgICAgICBjWzB4NGFdID0gLTIzMDI3NTY7XHJcbiAgICAgICAgICAgIGNbMHg0Yl0gPSAtNDYwNTQ1O1xyXG4gICAgICAgICAgICBjWzB4NGNdID0gLTEwNDk2O1xyXG4gICAgICAgICAgICBjWzB4NGRdID0gLTI0NDgwOTY7XHJcbiAgICAgICAgICAgIGNbMHg0ZV0gPSAtODM1NTcxMjtcclxuICAgICAgICAgICAgY1sweDRmXSA9IC0xNjc0NDQ0ODtcclxuICAgICAgICAgICAgY1s4MF0gPSAtNTM3NDE2MTtcclxuICAgICAgICAgICAgY1sweDUxXSA9IC05ODMwNTY7XHJcbiAgICAgICAgICAgIGNbMHg1Ml0gPSAtMzg0NzY7XHJcbiAgICAgICAgICAgIGNbMHg1M10gPSAtMzMxODY5MjtcclxuICAgICAgICAgICAgY1sweDU0XSA9IC0xMTg2MTg4NjtcclxuICAgICAgICAgICAgY1sweDU1XSA9IC0xNjtcclxuICAgICAgICAgICAgY1sweDU2XSA9IC05ODk1NTY7XHJcbiAgICAgICAgICAgIGNbMHg1N10gPSAtMTY0NDgwNjtcclxuICAgICAgICAgICAgY1sweDU4XSA9IC0zODUxO1xyXG4gICAgICAgICAgICBjWzB4NTldID0gLTg1ODYyNDA7XHJcbiAgICAgICAgICAgIGNbOTBdID0gLTEzMzE7XHJcbiAgICAgICAgICAgIGNbMHg1Yl0gPSAtNTM4Mzk2MjtcclxuICAgICAgICAgICAgY1sweDVjXSA9IC0xMDE1NjgwO1xyXG4gICAgICAgICAgICBjWzB4NWRdID0gLTIwMzE2MTc7XHJcbiAgICAgICAgICAgIGNbMHg1ZV0gPSAtMzI5MDA2O1xyXG4gICAgICAgICAgICBjWzB4NWZdID0gLTI4OTQ4OTM7XHJcbiAgICAgICAgICAgIGNbMHg2MF0gPSAtNzI3ODk2MDtcclxuICAgICAgICAgICAgY1sweDYxXSA9IC0xODc1MTtcclxuICAgICAgICAgICAgY1sweDYyXSA9IC0yNDQ1NDtcclxuICAgICAgICAgICAgY1sweDYzXSA9IC0xNDYzNDMyNjtcclxuICAgICAgICAgICAgY1sxMDBdID0gLTc4NzY4NzA7XHJcbiAgICAgICAgICAgIGNbMHg2NV0gPSAtODk0MzQ2MztcclxuICAgICAgICAgICAgY1sweDY2XSA9IC01MTkyNDgyO1xyXG4gICAgICAgICAgICBjWzB4NjddID0gLTMyO1xyXG4gICAgICAgICAgICBjWzB4NjhdID0gLTE2NzExOTM2O1xyXG4gICAgICAgICAgICBjWzB4NjldID0gLTEzNDQ3ODg2O1xyXG4gICAgICAgICAgICBjWzB4NmFdID0gLTMzMTU0NjtcclxuICAgICAgICAgICAgY1sweDZiXSA9IC02NTI4MTtcclxuICAgICAgICAgICAgY1sweDZjXSA9IC04Mzg4NjA4O1xyXG4gICAgICAgICAgICBjWzB4NmRdID0gLTEwMDM5ODk0O1xyXG4gICAgICAgICAgICBjWzExMF0gPSAtMTY3NzcwMTE7XHJcbiAgICAgICAgICAgIGNbMHg2Zl0gPSAtNDU2NTU0OTtcclxuICAgICAgICAgICAgY1sweDcwXSA9IC03MTE0NTMzO1xyXG4gICAgICAgICAgICBjWzB4NzFdID0gLTEyNzk5MTE5O1xyXG4gICAgICAgICAgICBjWzB4NzJdID0gLTg2ODk0MjY7XHJcbiAgICAgICAgICAgIGNbMHg3M10gPSAtMTY3MTMwNjI7XHJcbiAgICAgICAgICAgIGNbMHg3NF0gPSAtMTIwMDQ5MTY7XHJcbiAgICAgICAgICAgIGNbMHg3NV0gPSAtMzczMDA0MztcclxuICAgICAgICAgICAgY1sweDc2XSA9IC0xNTEzMjMwNDtcclxuICAgICAgICAgICAgY1sweDc3XSA9IC02NTUzNjY7XHJcbiAgICAgICAgICAgIGNbMTIwXSA9IC02OTQzO1xyXG4gICAgICAgICAgICBjWzB4NzldID0gLTY5ODc7XHJcbiAgICAgICAgICAgIGNbMHg3YV0gPSAtODUzMTtcclxuICAgICAgICAgICAgY1sweDdiXSA9IC0xNjc3NzA4ODtcclxuICAgICAgICAgICAgY1sweDdjXSA9IC0xMzM2NTg7XHJcbiAgICAgICAgICAgIGNbMHg3ZF0gPSAtODM1NTg0MDtcclxuICAgICAgICAgICAgY1sweDdlXSA9IC05NzI4NDc3O1xyXG4gICAgICAgICAgICBjWzB4N2ZdID0gLTIzMjk2O1xyXG4gICAgICAgICAgICBjWzB4ODBdID0gLTQ3ODcyO1xyXG4gICAgICAgICAgICBjWzB4ODFdID0gLTI0NjE0ODI7XHJcbiAgICAgICAgICAgIGNbMTMwXSA9IC0xMTIwMDg2O1xyXG4gICAgICAgICAgICBjWzB4ODNdID0gLTY3NTEzMzY7XHJcbiAgICAgICAgICAgIGNbMHg4NF0gPSAtNTI0NzI1MDtcclxuICAgICAgICAgICAgY1sweDg1XSA9IC0yMzk2MDEzO1xyXG4gICAgICAgICAgICBjWzB4ODZdID0gLTQxMzk7XHJcbiAgICAgICAgICAgIGNbMHg4N10gPSAtOTU0MztcclxuICAgICAgICAgICAgY1sweDg4XSA9IC0zMzA4MjI1O1xyXG4gICAgICAgICAgICBjWzB4ODldID0gLTE2MTgxO1xyXG4gICAgICAgICAgICBjWzB4OGFdID0gLTIyNTI1Nzk7XHJcbiAgICAgICAgICAgIGNbMHg4Yl0gPSAtNTE4NTMwNjtcclxuICAgICAgICAgICAgY1sxNDBdID0gLTgzODg0ODA7XHJcbiAgICAgICAgICAgIGNbMHg4ZF0gPSAtNjU1MzY7XHJcbiAgICAgICAgICAgIGNbMHg4ZV0gPSAtNDQxOTY5NztcclxuICAgICAgICAgICAgY1sweDhmXSA9IC0xMjQ5MDI3MTtcclxuICAgICAgICAgICAgY1sweDkwXSA9IC03NjUwMDI5O1xyXG4gICAgICAgICAgICBjWzB4OTFdID0gLTM2MDMzNDtcclxuICAgICAgICAgICAgY1sweDkyXSA9IC03NDQzNTI7XHJcbiAgICAgICAgICAgIGNbMHg5M10gPSAtMTM3MjY4ODk7XHJcbiAgICAgICAgICAgIGNbMHg5NF0gPSAtMjU3ODtcclxuICAgICAgICAgICAgY1sweDk1XSA9IC02MjcwNDE5O1xyXG4gICAgICAgICAgICBjWzE1MF0gPSAtNDE0NDk2MDtcclxuICAgICAgICAgICAgY1sweDk3XSA9IC03ODc2ODg1O1xyXG4gICAgICAgICAgICBjWzB4OThdID0gLTk4MDcxNTU7XHJcbiAgICAgICAgICAgIGNbMHg5OV0gPSAtOTQwNDI3MjtcclxuICAgICAgICAgICAgY1sweDlhXSA9IC0xMjg2O1xyXG4gICAgICAgICAgICBjWzB4OWJdID0gLTE2NzExODA5O1xyXG4gICAgICAgICAgICBjWzB4OWNdID0gLTEyMTU2MjM2O1xyXG4gICAgICAgICAgICBjWzB4OWRdID0gLTI5Njg0MzY7XHJcbiAgICAgICAgICAgIGNbMHg5ZV0gPSAtMTY3NDQzMjA7XHJcbiAgICAgICAgICAgIGNbMHg5Zl0gPSAtMjU3MjMyODtcclxuICAgICAgICAgICAgY1sxNjBdID0gLTQwMTIxO1xyXG4gICAgICAgICAgICBjWzB4YTFdID0gLTEyNTI1MzYwO1xyXG4gICAgICAgICAgICBjWzB4YTJdID0gLTExNDYxMzA7XHJcbiAgICAgICAgICAgIGNbMHhhM10gPSAtNjYzODg1O1xyXG4gICAgICAgICAgICBjWzB4YTRdID0gLTE7XHJcbiAgICAgICAgICAgIGNbMHhhNV0gPSAtNjU3OTMxO1xyXG4gICAgICAgICAgICBjWzB4YTZdID0gLTI1NjtcclxuICAgICAgICAgICAgY1sweGE3XSA9IC02NjMyMTQyO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlID0gYztcclxuXHJcbiAgICAgICAgICAgIFVwZGF0ZVN5c3RlbUNvbG9ycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbnQgS25vd25Db2xvclRvQXJnYihLbm93bkNvbG9yIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlQ29sb3JUYWJsZSgpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IgPD0gS25vd25Db2xvci5NZW51SGlnaGxpZ2h0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUYWJsZVsoaW50KWNvbG9yXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIEtub3duQ29sb3JUb05hbWUoS25vd25Db2xvciBjb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuc3VyZUNvbG9yTmFtZVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA8PSBLbm93bkNvbG9yLk1lbnVIaWdobGlnaHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvck5hbWVUYWJsZVsoaW50KWNvbG9yXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludFtdIF9TeXNDb2xvcnMgPSBuZXcgaW50W10gXHJcbiAgICAgICAgICAgIHsxMTg0Mjc0MCxcclxuICAgICAgICAgICAgMTM3NDMyNTcsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDExMjUwNjAzLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDEwNTI2ODgwLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTA1MjY4ODAsXHJcbiAgICAgICAgICAgIDY5MDgyNjUsXHJcbiAgICAgICAgICAgIDE0OTM1MDExLFxyXG4gICAgICAgICAgICAxNjc3NzIxNSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMTUzODkxMTMsXHJcbiAgICAgICAgICAgIDE1OTE4Mjk1LFxyXG4gICAgICAgICAgICA3MTcxNDM3LFxyXG4gICAgICAgICAgICAxNjc1MDg5OSxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDEzMzk1NDU2LFxyXG4gICAgICAgICAgICAxNjU3ODU0OCxcclxuICAgICAgICAgICAgMTQ0MDUwNTUsXHJcbiAgICAgICAgICAgIDU1MjUwNTksXHJcbiAgICAgICAgICAgIDE0ODExMTM1LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTU3OTAzMjAsXHJcbiAgICAgICAgICAgIDE2NzUwODk5LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxMzE1ODYwMCxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDY1NzkzMDAsXHJcbiAgICAgICAgICAgIDB9O1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgU3lzdGVtQ29sb3JUb0FyZ2IoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZyb21XaW4zMlZhbHVlKF9TeXNDb2xvcnNbaW5kZXhdKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRHJhd2luZ1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRm9udFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRmFtaWx5TmFtZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgZmxvYXQgRW1TaXplIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm9udChzdHJpbmcgZmFtaWx5TmFtZSwgZmxvYXQgZW1TaXplLCBGb250U3R5bGUgc3R5bGUsIEdyYXBoaWNzVW5pdCB1bml0LCBieXRlIGdkaUNoYXJTZXQpIDogdGhpcyhmYW1pbHlOYW1lLCBlbVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb250KHN0cmluZyBmYW1pbHlOYW1lLCBmbG9hdCBlbVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGYW1pbHlOYW1lID0gZmFtaWx5TmFtZTtcclxuICAgICAgICAgICAgRW1TaXplID0gZW1TaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgUG9pbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgaW50IFg7XHJcbiAgICAgICAgcHVibGljIGludCBZO1xyXG4gICAgICAgIHB1YmxpYyBQb2ludChpbnQgeCwgaW50IHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBYID0geDtcclxuICAgICAgICAgICAgWSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiWDp7MH0sIFk6ezF9XCIsWCxZKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBTaXplXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGludCBXaWR0aDtcclxuICAgICAgICBwdWJsaWMgaW50IEhlaWdodDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTaXplIEVtcHR5ID0gbmV3IFNpemUoMCwgMCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTaXplKGludCB3aWR0aCwgaW50IGhlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBTaXplRlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBXaWR0aDtcclxuICAgICAgICBwdWJsaWMgZmxvYXQgSGVpZ2h0O1xyXG5cclxuICAgICAgICBwdWJsaWMgU2l6ZUYoZmxvYXQgd2lkdGgsIGZsb2F0IGhlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRHJhd2luZ1xyXG57XHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFN5c3RlbUNvbG9yc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWN0aXZlQm9yZGVyIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFjdGl2ZUJvcmRlcik7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBY3RpdmVDYXB0aW9uIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWN0aXZlQ2FwdGlvblRleHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQWN0aXZlQ2FwdGlvblRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXBwV29ya3NwYWNlIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFwcFdvcmtzcGFjZSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCdXR0b25GYWNlIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1dHRvbkZhY2UpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnV0dG9uSGlnaGxpZ2h0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1dHRvbkhpZ2hsaWdodCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCdXR0b25TaGFkb3cge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQnV0dG9uU2hhZG93KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2wge2dldHtyZXR1cm4gQ29sb3IuRnJvbUFyZ2IoMjQwLCAyNDAsIDI0MCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sRGFyayB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db250cm9sRGFyayk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sRGFya0Rhcmsge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbERhcmtEYXJrKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2xMaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db250cm9sTGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbExpZ2h0TGlnaHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbExpZ2h0TGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbFRleHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbFRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGVza3RvcCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EZXNrdG9wKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYWRpZW50QWN0aXZlQ2FwdGlvbiB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HcmFkaWVudEFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JhZGllbnRJbmFjdGl2ZUNhcHRpb24ge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JhZGllbnRJbmFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JheVRleHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JheVRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSGlnaGxpZ2h0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhpZ2hsaWdodCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBIaWdobGlnaHRUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhpZ2hsaWdodFRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSG90VHJhY2sge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSG90VHJhY2spO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5hY3RpdmVCb3JkZXIge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5hY3RpdmVCb3JkZXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5hY3RpdmVDYXB0aW9uIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluYWN0aXZlQ2FwdGlvbik7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmFjdGl2ZUNhcHRpb25UZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluYWN0aXZlQ2FwdGlvblRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5mbyB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmZvKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluZm9UZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluZm9UZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lbnUge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVudSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZW51QmFyIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lbnVCYXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVudUhpZ2hsaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZW51SGlnaGxpZ2h0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lbnVUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lbnVUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNjcm9sbEJhciB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TY3JvbGxCYXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2luZG93IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldpbmRvdyk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaW5kb3dGcmFtZSB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaW5kb3dGcmFtZSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaW5kb3dUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldpbmRvd1RleHQpO319XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldCB7IHJldHVybiBFbGVtZW50LmdldEF0dHJpYnV0ZShcIk5hbWVcIik7IH0gc2V0IHsgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJOYW1lXCIsIHZhbHVlKTsgfSB9XHJcbiAgICAgICAgcHJpdmF0ZSBQb2ludCBfbG9jYXRpb247XHJcbiAgICAgICAgcHVibGljIFBvaW50IExvY2F0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2xvY2F0aW9uOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbG9jYXRpb24gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmxlZnQgPSBfbG9jYXRpb24uWCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUudG9wID0gX2xvY2F0aW9uLlkgKyBcInB4XCI7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCB2aXJ0dWFsIHZvaWQgT25Db250cm9sQWRkZWQoQ29udHJvbCBjb250cm9sKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCB2aXJ0dWFsIHZvaWQgT25Db250cm9sUmVtb3ZlZChDb250cm9sIGNvbnRyb2wpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfdmlzaWJsZTtcclxuICAgICAgICBwdWJsaWMgYm9vbCBWaXNpYmxlIHsgZ2V0IHsgcmV0dXJuIF92aXNpYmxlOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gX3Zpc2libGUgPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCI7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgQ29udHJvbCBfcGFyZW50O1xyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbCBQYXJlbnQgeyBnZXQgeyByZXR1cm4gX3BhcmVudDsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb3JtIEdldEZvcm0oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuUGFyZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuUGFyZW50IGlzIEZvcm0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlBhcmVudC5BczxGb3JtPigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyZW50LkdldEZvcm0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBTaXplIF9zaXplO1xyXG4gICAgICAgIHB1YmxpYyBTaXplIFNpemUgeyBnZXQgeyByZXR1cm4gX3NpemU7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF9zaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfYXV0b1NpemUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS53aWR0aCA9IF9zaXplLldpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gX3NpemUuSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfdGFiU3RvcDtcclxuICAgICAgICBwdWJsaWMgYm9vbCBUYWJTdG9wIHsgZ2V0IHsgcmV0dXJuIF90YWJTdG9wOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfdGFiU3RvcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgVGFiSW5kZXggPSBfdGFiSW5kZXg7XHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgaW50IF90YWJJbmRleDtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgVGFiSW5kZXggeyBnZXQgeyByZXR1cm4gX3RhYkluZGV4OyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfdGFiSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKFRhYlN0b3ApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC50YWJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiVGFiSW5kZXhcIik7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHN0cmluZyBUZXh0IHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDb2xvciBfYmFja0NvbG9yO1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbG9yIEJhY2tDb2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9iYWNrQ29sb3I7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9iYWNrQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gX2JhY2tDb2xvci5Ub0h0bWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEVuYWJsZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfZW5hYmxlZDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2VuYWJsZWQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEFwcGx5RGlzYWJsZWQoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfcmVhZG9ubHkgPSBmYWxzZTtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIFJlYWRPbmx5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3JlYWRvbmx5OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfcmVhZG9ubHkgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEFwcGx5UmVhZG9ubHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZvaWQgQXBwbHlEaXNhYmxlZChSZXR5cGVkLmRvbS5IVE1MRWxlbWVudCBlbGVtZW50ID0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoRW5hYmxlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIENvbG9yIEZvcmVDb2xvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2b2lkIEFwcGx5UmVhZG9ubHkoUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQgZWxlbWVudCA9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoUmVhZE9ubHkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWFkb25seVwiKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWFkb25seVwiKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb2JqZWN0IF90YWc7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gVXNlIFRhZyBhcyBDbGFzcyBOYW1lXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBvYmplY3QgVGFnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3RhZzsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3RhZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSAoX3RhZyArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEFwcGx5RGlzYWJsZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xDb2xsZWN0aW9uIENvbnRyb2xzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHByaXZhdGUgRm9udCBfZm9udDtcclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBGb250IEZvbnQgeyBnZXQgeyByZXR1cm4gX2ZvbnQ7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF9mb250ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfZm9udCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcImluaGVyaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBcImluaGVyaXRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gX2ZvbnQuRW1TaXplLlRvU3RyaW5nKCkgKyBcInB0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gX2ZvbnQuRmFtaWx5TmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfYXV0b1NpemU7XHJcbiAgICAgICAgcHJvdGVjdGVkIGJvb2wgX2luaXQ7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgYm9vbCBBdXRvU2l6ZSB7IGdldCB7IHJldHVybiBfYXV0b1NpemU7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmKF9pbml0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF9hdXRvU2l6ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBTaXplID0gX3NpemU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQgRWxlbWVudDtcclxuICAgICAgICBpbnRlcm5hbCBzdGF0aWMgQ29udHJvbCBDbGlja2VkT25Db250cm9sO1xyXG5cclxuICAgICAgICBzdGF0aWMgQ29udHJvbCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXR5cGVkLmRvbS53aW5kb3cgLm9ubW91c2Vtb3ZlID0gbmV3IFJldHlwZWQuZG9tLldpbmRvdy5vbm1vdXNlbW92ZUZuKChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKENsaWNrZWRPbkNvbnRyb2wgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2tlZE9uQ29udHJvbC5Pbk1vdXNlTW92ZShNb3VzZUV2ZW50QXJncy5DcmVhdGVGcm9tTW91c2VFdmVudChldiwgQ2xpY2tlZE9uQ29udHJvbCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgUmV0eXBlZC5kb20ud2luZG93IC5vbm1vdXNldXAgPSBuZXcgUmV0eXBlZC5kb20uV2luZG93Lm9ubW91c2V1cEZuKChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKENsaWNrZWRPbkNvbnRyb2wgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2tlZE9uQ29udHJvbC5Pbk1vdXNlVXAoTW91c2VFdmVudEFyZ3MuQ3JlYXRlRnJvbU1vdXNlRXZlbnQoZXYsIENsaWNrZWRPbkNvbnRyb2wpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2tlZE9uQ29udHJvbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbnRlcm5hbCBDb250cm9sKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIENvbnRyb2xzID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlcmJveFwiO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiaW5oZXJpdFwiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBcImluaGVyaXRcIjtcclxuXHJcbiAgICAgICAgICAgIFZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgVGFiU3RvcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50Lm9uY2xpY2sgPSBuZXcgUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQub25jbGlja0ZuKChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgT25DbGljayhFdmVudEFyZ3MuRW1wdHkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5vbm1vdXNlZG93biA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbm1vdXNlZG93bkZuKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ2xpY2tlZE9uQ29udHJvbCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPbk1vdXNlRG93bihNb3VzZUV2ZW50QXJncy5DcmVhdGVGcm9tTW91c2VFdmVudChldiwgdGhpcykpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50Lm9ubW91c2Vtb3ZlID0gbmV3IFJldHlwZWQuZG9tLkhUTUxFbGVtZW50Lm9ubW91c2Vtb3ZlRm4oKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihDbGlja2VkT25Db250cm9sID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9uTW91c2VNb3ZlKE1vdXNlRXZlbnRBcmdzLkNyZWF0ZUZyb21Nb3VzZUV2ZW50KGV2LCB0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgX2luaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkNsaWNrKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKENsaWNrICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBDbGljayh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Nb3VzZURvd24oTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChNb3VzZURvd24gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIE1vdXNlRG93bih0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Nb3VzZU1vdmUoTW91c2VFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChNb3VzZU1vdmUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIE1vdXNlTW92ZSh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGludGVybmFsIHZvaWQgSW52b2tlTG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPbkxvYWQoRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Mb2FkKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKExvYWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIExvYWQodGhpcywgZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgRXZlbnRIYW5kbGVyIExvYWQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Nb3VzZVVwKE1vdXNlRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoTW91c2VVcCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgTW91c2VVcCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nIE1hcmdpbiB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIFBhZGRpbmcgUGFkZGluZyB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudCBFdmVudEhhbmRsZXIgQ2xpY2s7XHJcbiAgICAgICAgcHVibGljIGV2ZW50IE1vdXNlRXZlbnRIYW5kbGVyIE1vdXNlRG93bjtcclxuICAgICAgICBwdWJsaWMgZXZlbnQgTW91c2VFdmVudEhhbmRsZXIgTW91c2VNb3ZlO1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBNb3VzZUV2ZW50SGFuZGxlciBNb3VzZVVwO1xyXG4gICAgICAgIHByb3RlY3RlZCBib29sIGxheW91dFN1c3BlbmRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTdXNwZW5kTGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxheW91dFN1c3BlbmRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlc3VtZUxheW91dChib29sIHBlcmZvcm1MYXlvdXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYXlvdXRTdXNwZW5kZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYocGVyZm9ybUxheW91dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUGVyZm9ybUxheW91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgUGVyZm9ybUxheW91dCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobGF5b3V0U3VzcGVuZGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcmVhY2ggKHZhciBpdGVtIGluIENvbnRyb2xzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLlBlcmZvcm1MYXlvdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlld0NvbHVtblxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50IEVsZW1lbnQ7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBIZWFkZXJUZXh0IHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIEVsZW1lbnQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBOYW1lIHsgZ2V0IHsgcmV0dXJuIEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiTmFtZVwiKTsgfSBzZXQgeyBFbGVtZW50LnNldEF0dHJpYnV0ZShcIk5hbWVcIiwgdmFsdWUpOyB9IH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIERhdGFQcm9wZXJ0eU5hbWUgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3Q29sdW1uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgZW51bSBEaWFsb2dSZXN1bHRcclxuICAgIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIE5vdGhpbmcgaXMgcmV0dXJuZWQgZnJvbSB0aGUgZGlhbG9nIGJveC4gVGhpcyBtZWFucyB0aGF0IHRoZSBtb2RhbCBkaWFsb2cgY29udGludWVzXHJcbiAgICAgICAgICAgIC8vICAgICBydW5uaW5nLlxyXG4gICAgICAgICAgICBOb25lID0gMCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBPSyAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBPSykuXHJcbiAgICAgICAgICAgIE9LID0gMSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBDYW5jZWwgKHVzdWFsbHkgc2VudCBmcm9tIGEgYnV0dG9uIGxhYmVsZWQgQ2FuY2VsKS5cclxuICAgICAgICAgICAgQ2FuY2VsID0gMixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBBYm9ydCAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBBYm9ydCkuXHJcbiAgICAgICAgICAgIEFib3J0ID0gMyxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBSZXRyeSAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBSZXRyeSkuXHJcbiAgICAgICAgICAgIFJldHJ5ID0gNCxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBJZ25vcmUgKHVzdWFsbHkgc2VudCBmcm9tIGEgYnV0dG9uIGxhYmVsZWQgSWdub3JlKS5cclxuICAgICAgICAgICAgSWdub3JlID0gNSxcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBZZXMgKHVzdWFsbHkgc2VudCBmcm9tIGEgYnV0dG9uIGxhYmVsZWQgWWVzKS5cclxuICAgICAgICAgICAgWWVzID0gNixcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAgICAgLy8gICAgIFRoZSBkaWFsb2cgYm94IHJldHVybiB2YWx1ZSBpcyBObyAodXN1YWxseSBzZW50IGZyb20gYSBidXR0b24gbGFiZWxlZCBObykuXHJcbiAgICAgICAgICAgIE5vID0gN1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBEaWFsb2dPcHRpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGlhbG9nUmVzdWx0IFJlc3VsdEVudW0gPSBEaWFsb2dSZXN1bHQuTm9uZTtcclxuICAgICAgICBwdWJsaWMgQWN0aW9uIENhbGxCYWNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIERpYWxvZ09wdGlvbihEaWFsb2dSZXN1bHQgcmVzdWx0RW51bSwgQWN0aW9uIGNhbGxCYWNrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVzdWx0RW51bSA9IHJlc3VsdEVudW07XHJcbiAgICAgICAgICAgIENhbGxCYWNrID0gY2FsbEJhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnZva2VJZlJlc3VsdChEaWFsb2dSZXN1bHQgcmVzdWx0RW51bSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRFbnVtID09IFJlc3VsdEVudW0gJiYgQ2FsbEJhY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIENhbGxCYWNrLkludm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBGb3JtIDogQ29udGFpbmVyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgaW50IF9mb3JtVG9wQm9yZGVyID0gMzE7XHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAxO1xyXG4gICAgICAgIHByaXZhdGUgaW50IF9mb3JtTGVmdEJvcmRlciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX2Zvcm1SaWdodEJvcmRlciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9hbGxvd1NpemVDaGFuZ2UgPSB0cnVlOyAvLyBub3QgeWV0IGltcGxlbWVudGVkLlxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfYWxsb3dNb3ZlQ2hhbmdlID0gdHJ1ZTsgLy8gbm90IHlldCBpbXBsZW1lbnRlZC5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX21vdXNlRG93bk9uQm9yZGVyID0gZmFsc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBGb3JtTW92ZW1lbnRNb2RlcyBfZm9ybU1vdmVtZW50TW9kZXMgPSBGb3JtTW92ZW1lbnRNb2Rlcy5Ob25lO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQgX2Zvcm1PdmVyTGF5ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBzdGF0aWMgRm9ybSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfZm9ybU92ZXJMYXkgPSBuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLm9wYWNpdHkgPSBcIjAuM1wiO1xyXG4gICAgICAgICAgICBfZm9ybU92ZXJMYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmV5XCI7XHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuXHJcbiAgICAgICAgICAgIF9mb3JtT3ZlckxheS5vbm1vdXNlZG93biA9IChldikgPT5cclxuICAgICAgICAgICAgeyAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoUmV0eXBlZC5kb20uZG9jdW1lbnQgLmFjdGl2ZUVsZW1lbnQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0Zvcm1Qb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudD4oX2Zvcm1PdmVyTGF5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoYXQgd2UgbmVlZCB0byBkbyBpcyBzdXBwb3J0IG1vZGFscyAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIExpc3Q8Rm9ybUNvbGxlY3Rpb24+IF9mb3JtQ29sbGVjdGlvbnMgPSBuZXcgTGlzdDxGb3JtQ29sbGVjdGlvbj4oKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBjbGFzcyBGb3JtQ29sbGVjdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHVibGljIEZvcm0gRm9ybU93bmVyO1xyXG4gICAgICAgICAgICBwdWJsaWMgTGlzdDxGb3JtPiBWaXNpYmxlRm9ybXMgPSBuZXcgTGlzdDxGb3JtPigpO1xyXG5cclxuICAgICAgICAgICAgcHVibGljIEZvcm1Db2xsZWN0aW9uKEZvcm0gZm9ybU93bmVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBGb3JtT3duZXIgPSBmb3JtT3duZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgRm9ybSBfQWN0aXZlRm9ybTtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBGb3JtIF9QcmV2QWN0aXZlRm9ybTtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBGb3JtIEFjdGl2ZUZvcm1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfQWN0aXZlRm9ybTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9BY3RpdmVGb3JtICE9IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF9QcmV2QWN0aXZlRm9ybSA9IF9BY3RpdmVGb3JtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX0FjdGl2ZUZvcm0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vX0FjdGl2ZUZvcm0uT25Mb3N0Rm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9BY3RpdmVGb3JtLkVsZW1lbnQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoX0FjdGl2ZUZvcm0uSW5EZXNpZ24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIF9BY3RpdmVGb3JtLkJvZHlPdmVyTGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vX0FjdGl2ZUZvcm0uQm9keU92ZXJMYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9BY3RpdmVGb3JtID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9BY3RpdmVGb3JtICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL19BY3RpdmVGb3JtLk9uR290Rm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9BY3RpdmVGb3JtLkVsZW1lbnQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9fQWN0aXZlRm9ybS5Cb2R5T3ZlckxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX0FjdGl2ZUZvcm0uQnJpbmdUb0Zyb250KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoX1ByZXZBY3RpdmVGb3JtIGlzIEZvcm1Qb3B1cCAmJiAoKF9BY3RpdmVGb3JtICE9IG51bGwgJiYgIShfQWN0aXZlRm9ybSBpcyBGb3JtUG9wdXApKSB8fCBfQWN0aXZlRm9ybSA9PSBudWxsKSlcclxuICAgICAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBDbG9zZUZvcm1Qb3B1cHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkNsb3NpbmcoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgTGlzdDxEaWFsb2dPcHRpb24+IERpYWxvZ1Jlc3VsdHMgPSBuZXcgTGlzdDxEaWFsb2dPcHRpb24+KCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgRm9ybUNvbGxlY3Rpb24gR2V0Rm9ybUNvbGxlY3Rpb25Gcm9tRm9ybShGb3JtIGZvcm0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IF9mb3JtQ29sbGVjdGlvbnMuQ291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgPT0gX2Zvcm1Db2xsZWN0aW9uc1tpXS5Gb3JtT3duZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mb3JtQ29sbGVjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZUZvcm1zID0gX2Zvcm1Db2xsZWN0aW9uc1tpXS5WaXNpYmxlRm9ybXM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCB4ID0gMDsgeCA8IHZpc2libGVGb3Jtcy5Db3VudDsgeCsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlRm9ybXNbeF0gPT0gdGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9mb3JtQ29sbGVjdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9pc0RpYWxvZztcclxuICAgICAgICBwcml2YXRlIGJvb2wgX2luQ2xvc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9pbkRpYWxvZ1Jlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwcml2YXRlIFdpbmRvd1N0YXRlIF93aW5kb3dTdGF0ZTtcclxuXHJcbiAgICAgICAgcHVibGljIFdpbmRvd1N0YXRlIFdpbmRvd1N0YXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3dpbmRvd1N0YXRlOyB9XHJcbiAgICAgICAgICAgIHNldCB7IF93aW5kb3dTdGF0ZSA9IHZhbHVlOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgQ2FsY3VsYXRlWk9yZGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEdldEFjdGl2ZUZvcm1Db2xsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoX2Zvcm1Db2xsZWN0aW9ucyA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfZm9ybUNvbGxlY3Rpb25zLlJlbW92ZShudWxsKTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gX2Zvcm1Db2xsZWN0aW9ucy5Db3VudDtcclxuICAgICAgICAgICAgaW50IHpJbmRleCA9IDE7XHJcblxyXG4gICAgICAgICAgICAvL3ZhciBmcmFnID0gRG9jdW1lbnQuQ3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgX2Zvcm1PdmVyTGF5LnN0eWxlLm9wYWNpdHkgPSBjb3VudCA9PSAwID8gXCJcIiA6IGNvdW50ID09IDEgPyBcIjBcIiA6IFwiMC40XCI7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGludCB4ID0gMDsgeCA8IGNvdW50OyB4KyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vaWYoSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgIC8vICAgIGlmKHggPT0gY291bnQgLSAxKVxyXG4gICAgICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGZyYWcuQXBwZW5kQ2hpbGQoRm9ybU92ZXJMYXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHpJbmRleCA9IENhbGN1bGF0ZVpPcmRlcihGb3JtQ29sbGVjdGlvbnNbeF0sIHpJbmRleCwgZnJhZyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgIC8vZWxzZVxyXG4gICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgIGlmICh4ID09IGNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZyYWcuQXBwZW5kQ2hpbGQoRm9ybU92ZXJMYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtT3ZlckxheS5zdHlsZS56SW5kZXggPSBDb252ZXJ0LlRvU3RyaW5nKHpJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB6SW5kZXggPSBDYWxjdWxhdGVaT3JkZXIoX2Zvcm1Db2xsZWN0aW9uc1t4XSwgekluZGV4KTsgLy8gZnJhZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vekluZGV4ID0gQ2FsY3VsYXRlWk9yZGVyKHN0YW5kQWxvbmVGb3JtcywgekluZGV4KTsgLy8gZnJhZ1xyXG5cclxuICAgICAgICAgICAgLy9XaW5kb3dIb2xkZXIuRW1wdHkoKTtcclxuICAgICAgICAgICAgLy9XaW5kb3dIb2xkZXIuQXBwZW5kQ2hpbGQoZnJhZyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoQWN0aXZlRm9ybSAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBY3RpdmVGb3JtLkVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBMaXN0PEZvcm0+IFRvQ2xlYW4gPSBuZXcgTGlzdDxGb3JtPigpO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBDYWxjdWxhdGVaT3JkZXIoRm9ybUNvbGxlY3Rpb24gZm9ybUNvbGxlY3Rpb24sIGludCB6SW5kZXgpIC8vICwgRG9jdW1lbnRGcmFnbWVudCBmcmFnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMaXN0PEZvcm0+IFRvcE1vc3RGb3JtcyA9IG5ldyBMaXN0PEZvcm0+KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgVmlzaWJsZUZvcm1zID0gZm9ybUNvbGxlY3Rpb24uVmlzaWJsZUZvcm1zO1xyXG4gICAgICAgICAgICBpZiAoVmlzaWJsZUZvcm1zICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgVmlzaWJsZUZvcm1zLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFZpc2libGVGb3Jtc1tpXS5FbGVtZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb0NsZWFuLkFkZChWaXNpYmxlRm9ybXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmIChWaXNpYmxlRm9ybXNbaV0uVG9wTW9zdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgVG9wTW9zdEZvcm1zLkFkZChWaXNpYmxlRm9ybXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgVG9DbGVhbi5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChWaXNpYmxlRm9ybXMuQ29udGFpbnMoVG9DbGVhbltpXSkpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaXNpYmxlRm9ybXMuUmVtb3ZlKFRvQ2xlYW5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb0NsZWFuW2ldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgVG9DbGVhbi5SZW1vdmUobnVsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1Db2xsZWN0aW9uLkZvcm1Pd25lciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyLk1hbmFnZVBsYWNlSG9sZGVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db2xsZWN0aW9uLkZvcm1Pd25lci5FbGVtZW50LnN0eWxlLnpJbmRleCA9IENvbnZlcnQuVG9TdHJpbmcoekluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAvL2ZyYWcuQXBwZW5kQ2hpbGQoZm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZihIZWxwZXIuTm90RGVza3RvcClcclxuICAgICAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBpZihWaXNpYmxlRm9ybXMuQ291bnQgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGZvcm1Db2xsZWN0aW9uLkZvcm1Pd25lci5NYW5hZ2VQbGFjZUhvbGRlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgZnJhZy5BcHBlbmRDaGlsZChmb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICByZXR1cm4gekluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICAvL2Vsc2VcclxuICAgICAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBmb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIuTWFuYWdlUGxhY2VIb2xkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgZnJhZy5BcHBlbmRDaGlsZChmb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgVG9wTW9zdEZvcm1zLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBUb3BNb3N0Rm9ybXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgVmlzaWJsZUZvcm1zLlJlbW92ZShmb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBWaXNpYmxlRm9ybXMuQWRkKGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50IGxlbmd0aCA9IFZpc2libGVGb3Jtcy5Db3VudDtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFZpc2libGVGb3Jtc1tpXSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc2libGVGb3Jtc1tpXS5FbGVtZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1Zpc2libGVGb3Jtc1tpXS5NYW5hZ2VQbGFjZUhvbGRlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzaWJsZUZvcm1zW2ldLkVsZW1lbnQuc3R5bGUuekluZGV4ID0gQ29udmVydC5Ub1N0cmluZyh6SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mcmFnLkFwcGVuZENoaWxkKFZpc2libGVGb3Jtc1tpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmKEhlbHBlci5Ob3REZXNrdG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgaWYobGVuZ3RoIC0gMSA9PSBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBWaXNpYmxlRm9ybXNbaV0uTWFuYWdlUGxhY2VIb2xkZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBmcmFnLkFwcGVuZENoaWxkKFZpc2libGVGb3Jtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICByZXR1cm4gekluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfWVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFZpc2libGVGb3Jtc1tpXS5NYW5hZ2VQbGFjZUhvbGRlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgZnJhZy5BcHBlbmRDaGlsZChWaXNpYmxlRm9ybXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB6SW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBEaWFsb2dSZXN1bHQgRGlhbG9nUmVzdWx0ID0gRGlhbG9nUmVzdWx0Lk5vbmU7XHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xvc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9pc0RpYWxvZyAmJiBfaW5EaWFsb2dSZXN1bHQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBfaW5DbG9zZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBPbkNsb3NpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIFRvQ2xlYW4uQWRkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG93bmVyRm9ybUNvbGxlY3Rpb24gPSBHZXRGb3JtQ29sbGVjdGlvbkZyb21Gb3JtKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG93bmVyRm9ybUNvbGxlY3Rpb24gIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyRm9ybUNvbGxlY3Rpb24uRm9ybU93bmVyID09IHRoaXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXJGb3JtQ29sbGVjdGlvbi5Gb3JtT3duZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgb3duZXJGb3JtQ29sbGVjdGlvbi5WaXNpYmxlRm9ybXMuQ291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvd25lckZvcm1Db2xsZWN0aW9uLlZpc2libGVGb3Jtc1tpXSA9PSB0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyRm9ybUNvbGxlY3Rpb24uVmlzaWJsZUZvcm1zW2ldLkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfZm9ybUNvbGxlY3Rpb25zLkNvdW50ID09IDEpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybUNvbGxlY3Rpb25zID0gbmV3IExpc3Q8Rm9ybUNvbGxlY3Rpb24+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyRm9ybUNvbGxlY3Rpb24uVmlzaWJsZUZvcm1zLlJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKEVsZW1lbnQgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9pZiAoIUZvclJldXNlKVxyXG4gICAgICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZiAoU2V0dGluZ3MuRm9ybUZhZGVEdXJhdGlvbiA+IDApXHJcbiAgICAgICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgU2VsZi5mYWRlT3V0KFNldHRpbmdzLkZvcm1GYWRlRHVyYXRpb24sIGNsb3NlQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIC8vICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBjbG9zZUFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAvL2Vsc2VcclxuICAgICAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAgICAgLy8gICAgQ29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIENhbGN1bGF0ZVpPcmRlcigpO1xyXG5cclxuICAgICAgICAgICAgQWN0aXZlRm9ybSA9IF9QcmV2QWN0aXZlRm9ybTtcclxuICAgICAgICAgICAgaWYgKF9pc0RpYWxvZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2luRGlhbG9nUmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChEaWFsb2dSZXN1bHQgIT0gRGlhbG9nUmVzdWx0Lk5vbmUgJiZcclxuICAgICAgICAgICAgICAgIERpYWxvZ1Jlc3VsdHMgIT0gbnVsbCAmJiBEaWFsb2dSZXN1bHRzLkNvdW50ID4gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IERpYWxvZ1Jlc3VsdHMuQ291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZ1Jlc3VsdHNbaV0uSW52b2tlSWZSZXN1bHQoRGlhbG9nUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE9uRm9ybUNsb3NlZCgpO1xyXG5cclxuICAgICAgICAgICAgT25DbG9zZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChXaW5kb3dTdGF0ZSA9PSBXaW5kb3dTdGF0ZS5NaW5pbWl6ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9taW5pbWl6ZWRGb3Jtcy5SZW1vdmUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdGVNaW5taXplZEZvcm1zTG9jYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX2luQ2xvc2UgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgQ2FsY3VsYXRlTWlubWl6ZWRGb3Jtc0xvY2F0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfbWluaW1pemVkRm9ybXMuQ291bnQgPiAwICYmIF9taW5pbWl6ZWRGb3Jtcy5Db250YWlucyhudWxsKSlcclxuICAgICAgICAgICAgICAgIF9taW5pbWl6ZWRGb3Jtcy5SZW1vdmUobnVsbCk7XHJcbiAgICAgICAgICAgIHZhciBSZW1vdmVMaXN0ID0gbmV3IExpc3Q8Rm9ybT4oKTtcclxuICAgICAgICAgICAgaW50IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgZmxvYXQgd2lkdGhUb3RhbCA9IDA7XHJcbiAgICAgICAgICAgIGludCB5ID0gMzA7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlld1NpemUgPSBSZXR5cGVkLmRvbS5kb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGl0ZW0gaW4gX21pbmltaXplZEZvcm1zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5FbGVtZW50ID09IG51bGwgfHwgaXRlbS5XaW5kb3dTdGF0ZSAhPSBXaW5kb3dTdGF0ZS5NaW5pbWl6ZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlTGlzdC5BZGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFRvSW5jcmVtZW50ID0gMyArIGl0ZW0uU2l6ZS5XaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZHRoVG90YWwgKyBUb0luY3JlbWVudCA+IHZpZXdTaXplLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhUb3RhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSAzMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaXRlbS5Mb2NhdGlvbiA9IG5ldyBWZWN0b3IyKHdpZHRoVG90YWwsIFwiKDEwMCUgLSBcIiArICh5ICsgMikgKyBcInB4KVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkVsZW1lbnQuc3R5bGUubGVmdCA9IHN0cmluZy5Gb3JtYXQoXCJ7MH1weFwiLHdpZHRoVG90YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uRWxlbWVudC5zdHlsZS50b3AgPSBcImNhbGMoMTAwJSAtIFwiICsgKHkgKyAyKSArIFwicHgpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoVG90YWwgKz0gVG9JbmNyZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIGl0ZW0gaW4gUmVtb3ZlTGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX21pbmltaXplZEZvcm1zLlJlbW92ZShpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgTGlzdDxGb3JtPiBfbWluaW1pemVkRm9ybXMgPSBuZXcgTGlzdDxGb3JtPigpO1xyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25Gb3JtQ2xvc2VkKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkNsb3NlZCgpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIEZvcm1Db2xsZWN0aW9uIEdldEFjdGl2ZUZvcm1Db2xsZWN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSBfZm9ybUNvbGxlY3Rpb25zLkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBmcm1Db2wgPSBfZm9ybUNvbGxlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZybUNvbC5Gb3JtT3duZXIgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGludCB4ID0gMDsgeCA8IGZybUNvbC5WaXNpYmxlRm9ybXMuQ291bnQ7IHgrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm1Db2wuVmlzaWJsZUZvcm1zW3hdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZybUNvbC5WaXNpYmxlRm9ybXNbeF0uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUNvbGxlY3Rpb25zLlJlbW92ZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm1Db2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQnJpbmdUb0Zyb250KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVDb2xsZWN0ID0gR2V0QWN0aXZlRm9ybUNvbGxlY3Rpb24oKTtcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZUNvbGxlY3QgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNvbGxlY3QuRm9ybU93bmVyID09IHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpc2libGVGb3JtcyA9IGFjdGl2ZUNvbGxlY3QuVmlzaWJsZUZvcm1zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpc2libGVGb3JtcyAhPSBudWxsICYmIHZpc2libGVGb3Jtcy5Db3VudCA+IDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZUZvcm1zLlJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlRm9ybXMuQWRkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIENhbGN1bGF0ZVpPcmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTaG93KClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChfaXNEaWFsb2cpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICgoX2Zvcm1Db2xsZWN0aW9ucyA9PSBudWxsIHx8IF9mb3JtQ29sbGVjdGlvbnMuQ291bnQgPT0gMCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9zaG93U3RhcnROZXdMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlQ29sbGVjdCA9IEdldEFjdGl2ZUZvcm1Db2xsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciB2aXNiaWxlRm9ybXMgPSBhY3RpdmVDb2xsZWN0LlZpc2libGVGb3JtcztcclxuXHJcbiAgICAgICAgICAgIGlmICghdmlzYmlsZUZvcm1zLkNvbnRhaW5zKHRoaXMpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2aXNiaWxlRm9ybXMuQWRkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgX3Nob3dGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIENhbGN1bGF0ZVpPcmRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIE9uU2hvd2VkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUmVzaXppbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBPbkxvYWQoRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQWN0aXZlRm9ybSA9IHRoaXM7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTaG93RGlhbG9nKHBhcmFtcyBEaWFsb2dPcHRpb25bXSBkaWFsb2dSZXN1bHRzKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgX2luRGlhbG9nUmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBfaXNEaWFsb2cgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL2lmIChTdGFydFBvc2l0aW9uICE9IEZvcm1TdGFydFBvc2l0aW9uLk1hbnVhbClcclxuICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgIC8vICAgIGlmICghSGVscGVyLk5vdERlc2t0b3ApXHJcbiAgICAgICAgICAgIC8vICAgICAgICBTdGFydFBvc2l0aW9uID0gRm9ybVN0YXJ0UG9zaXRpb24uQ2VudGVyO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgX3Nob3dTdGFydE5ld0xldmVsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlhbG9nUmVzdWx0cyAhPSBudWxsICYmIGRpYWxvZ1Jlc3VsdHMuTGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgRGlhbG9nUmVzdWx0cy5BZGRSYW5nZShkaWFsb2dSZXN1bHRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIF9zaG93Rm9ybSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KHRoaXMuRWxlbWVudCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgX3Nob3dTdGFydE5ld0xldmVsKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9mb3JtQ29sbGVjdGlvbnMuQWRkKG5ldyBGb3JtQ29sbGVjdGlvbih0aGlzKSk7XHJcbiAgICAgICAgICAgIF9zaG93Rm9ybSgpO1xyXG4gICAgICAgICAgICBDYWxjdWxhdGVaT3JkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgKFN0YXJ0UG9zaXRpb24gPT0gRm9ybVN0YXJ0UG9zaXRpb24uQ2VudGVyKVxyXG4gICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgLy8gICAgQ2VudHJlRm9ybSgpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIE9uU2hvd2VkKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBSZXNpemluZygpO1xyXG5cclxuICAgICAgICAgICAgQWN0aXZlRm9ybSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50LmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICBPbkxvYWQoRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25TaG93ZWQoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBSZXNpemluZygpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW50IF9wcmV2WDtcclxuICAgICAgICBwcml2YXRlIGludCBfcHJldlk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW50IF9wcmV2Rm9ybVg7XHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX3ByZXZGb3JtWTtcclxuXHJcbiAgICAgICAgcHVibGljIEZvcm0oKSA6IGJhc2UoKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImZvcm1cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBUYWJTdG9wID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkxvY2F0aW9uID0gbmV3IFBvaW50KDAsIDApO1xyXG5cclxuICAgICAgICAgICAgX3NldEJvcmRlcldpZHRoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRyb2xCb3ggPSB0cnVlO1xyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBDb250cm9sQm94XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2NvbnRyb2xCb3g7IH1cclxuICAgICAgICAgICAgc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmKF9jb250cm9sQm94ICE9IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF9jb250cm9sQm94ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3NXaW5Gb3JtVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBGb3JtQm9yZGVyU3R5bGUgX2Zvcm1Cb3JkZXJTdHlsZTtcclxuXHJcbiAgICAgICAgcHVibGljIEZvcm1Cb3JkZXJTdHlsZSBGb3JtQm9yZGVyU3R5bGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfZm9ybUJvcmRlclN0eWxlOyB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZihfZm9ybUJvcmRlclN0eWxlICE9IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtQm9yZGVyU3R5bGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfcHJvY2Vzc1dpbkZvcm1WaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBlbnVtIEZvcm1Nb3ZlbWVudE1vZGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOb25lLFxyXG4gICAgICAgICAgICBNb3ZlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbk1vdXNlRG93bihNb3VzZUV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQWN0aXZlRm9ybSA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8vIHdvcmsgb3V0IGFyZWEuLi4gb2YgY2xpY2suXHJcbiAgICAgICAgICAgIHZhciBzaXplID0gU2l6ZTtcclxuICAgICAgICAgICAgX2Zvcm1Nb3ZlbWVudE1vZGVzID0gRm9ybU1vdmVtZW50TW9kZXMuTm9uZTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYoZS5YID4gMSAmJiBlLlggPCApXHJcbiAgICAgICAgICAgIGlmIChfYWxsb3dNb3ZlQ2hhbmdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5YID4gMSAmJiBlLlggPD0gc2l6ZS5XaWR0aCAtIF9mb3JtUmlnaHRCb3JkZXIgJiYgZS5ZID4gMSAmJiBlLlkgPD0gX2Zvcm1Ub3BCb3JkZXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1Nb3ZlbWVudE1vZGVzID0gRm9ybU1vdmVtZW50TW9kZXMuTW92ZTtcclxuICAgICAgICAgICAgICAgICAgICBfcHJldlggPSBMb2NhdGlvbi5YIC0gKGUuWCArIExvY2F0aW9uLlgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9wcmV2WSA9IExvY2F0aW9uLlkgLSAoZS5ZICsgTG9jYXRpb24uWSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9wcmV2Rm9ybVggPSBMb2NhdGlvbi5YO1xyXG4gICAgICAgICAgICAgICAgICAgIF9wcmV2Rm9ybVkgPSBMb2NhdGlvbi5ZO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NsaWVudFJlYy50b3AgLSBtb3VzZVBvcy5ZZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX21vdXNlRG93bk9uQm9yZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UuT25Nb3VzZURvd24oZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgT25Nb3VzZVVwKE1vdXNlRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfbW91c2VEb3duT25Cb3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgYmFzZS5Pbk1vdXNlVXAoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbk1vdXNlTW92ZShNb3VzZUV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaXMgbW91c2UgZG93bj8/P1xyXG4gICAgICAgICAgICBpZihfbW91c2VEb3duT25Cb3JkZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKF9mb3JtTW92ZW1lbnRNb2RlcyA9PSBGb3JtTW92ZW1lbnRNb2Rlcy5Nb3ZlKVxyXG4gICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24gPSBuZXcgUG9pbnQoKExvY2F0aW9uLlggKyBlLlgpICsgX3ByZXZYLCAoTG9jYXRpb24uWSArIGUuWSkgKyBfcHJldlkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIG5ld1ggPSAoKG1YID0gbW91c2VQb3MuWGYpICsgTW92aW5nRm9ybS5wcmV2X3B4KTtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBuZXdZID0gKChtWSA9IG1vdXNlUG9zLllmKSArIE1vdmluZ0Zvcm0ucHJldl9weSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgZG8gc29tZSBhY3Rpb24gcmVnYXJkaW5nIHRoaXMuLi4gZXRjIG1vdmUgZm9ybSwgcmVzaXplIGluIGRpcmVjdGlvbi5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFzZS5Pbk1vdXNlTW92ZShlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBfcHJvY2Vzc1dpbkZvcm1WaWV3KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjbGllbnRTaXplID0gQ2xpZW50U2l6ZTtcclxuICAgICAgICAgICAgLy8gbmVlZCB0byBhbGxvdyBmb3IgY3VzdG9tIHNpemUgcGVyIHN0eWxlIC0gY3VycmVudGx5IHNldCBhcyB3aW5kb3dzIDEwLlxyXG4gICAgICAgICAgICBzd2l0Y2ggKF9mb3JtQm9yZGVyU3R5bGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRm9ybUJvcmRlclN0eWxlLk5vbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtUmlnaHRCb3JkZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hbGxvd1NpemVDaGFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1Cb3JkZXJTdHlsZS5GaXhlZFNpbmdsZTpcclxuICAgICAgICAgICAgICAgICAgICBfYWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDb250cm9sQm94KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDMxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUJvdHRvbkJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgRm9ybUJvcmRlclN0eWxlLkZpeGVkM0Q6XHJcbiAgICAgICAgICAgICAgICAgICAgX2FsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29udHJvbEJveClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAzMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1Cb3JkZXJTdHlsZS5GaXhlZERpYWxvZzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX2FsbG93U2l6ZUNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29udHJvbEJveClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAzMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBGb3JtQm9yZGVyU3R5bGUuU2l6YWJsZTpcclxuICAgICAgICAgICAgICAgICAgICBpZighQ29udHJvbEJveClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAzMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1Cb3R0b25Cb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtTGVmdEJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1SaWdodEJvcmRlciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgX2FsbG93U2l6ZUNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1Cb3JkZXJTdHlsZS5GaXhlZFRvb2xXaW5kb3c6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDb250cm9sQm94KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Zvcm1Ub3BCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDMxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUJvdHRvbkJvcmRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX2Zvcm1MZWZ0Qm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybVJpZ2h0Qm9yZGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBfYWxsb3dTaXplQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZvcm1Cb3JkZXJTdHlsZS5TaXphYmxlVG9vbFdpbmRvdzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNvbnRyb2xCb3gpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9ybVRvcEJvcmRlciA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mb3JtVG9wQm9yZGVyID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtQm90dG9uQm9yZGVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBfZm9ybUxlZnRCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIF9mb3JtUmlnaHRCb3JkZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIF9hbGxvd1NpemVDaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgX3NldEJvcmRlcldpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBDbGllbnRTaXplID0gY2xpZW50U2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBfc2V0Qm9yZGVyV2lkdGgoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3JkZXJUb3BXaWR0aCA9IF9mb3JtVG9wQm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gX2Zvcm1Cb3R0b25Cb3JkZXIgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdFdpZHRoID0gX2Zvcm1MZWZ0Qm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPSBfZm9ybVJpZ2h0Qm9yZGVyICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgRm9udCBGb250IHsgZ2V0IHsgcmV0dXJuIGJhc2UuRm9udDsgfSBzZXQgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhc2UuRm9udCA9IHZhbHVlOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgU2l6ZSBHZXRDbGllbnRTaXplKFNpemUgc2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2l6ZShzaXplLldpZHRoIC0gKF9mb3JtTGVmdEJvcmRlciArIF9mb3JtUmlnaHRCb3JkZXIpLCBzaXplLkhlaWdodCAtIChfZm9ybVRvcEJvcmRlciArIF9mb3JtQm90dG9uQm9yZGVyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFNpemUgU2V0U2l6ZShTaXplIGNsaWVudFNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpemUoY2xpZW50U2l6ZS5XaWR0aCArIChfZm9ybUxlZnRCb3JkZXIgKyBfZm9ybVJpZ2h0Qm9yZGVyKSwgY2xpZW50U2l6ZS5IZWlnaHQgKyAoX2Zvcm1Ub3BCb3JkZXIgKyBfZm9ybUJvdHRvbkJvcmRlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBEaXNwb3NlKGJvb2wgZGlzcG9zaW5nKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgcHVibGljIFNpemUgQ2xpZW50U2l6ZSB7IGdldCB7IHJldHVybiBHZXRDbGllbnRTaXplKFNpemUpOyB9IHNldCB7IFNpemUgPSBTZXRTaXplKHZhbHVlKTsgfSB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0IHsgZ2V0OyBzZXQ7IH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgZGVsZWdhdGUgdm9pZCBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50SGFuZGxlcihvYmplY3Qgc2VuZGVyLCBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyBlKTtcclxuICAgIC8vXHJcbiAgICAvLyBTdW1tYXJ5OlxyXG4gICAgLy8gICAgIFByb3ZpZGVzIGRhdGEgZm9yIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWwuTGlua0NsaWNrZWQgZXZlbnQuICAgIFxyXG4gICAgcHVibGljIGNsYXNzIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzIDogRXZlbnRBcmdzXHJcbiAgICB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3NcclxuICAgICAgICAvLyAgICAgY2xhc3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGxpbmsuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQYXJhbWV0ZXJzOlxyXG4gICAgICAgIC8vICAgbGluazpcclxuICAgICAgICAvLyAgICAgVGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5MaW5rIHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgICAgcHVibGljIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzKExpbmtMYWJlbC5MaW5rIGxpbmspXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3NcclxuICAgICAgICAvLyAgICAgY2xhc3Mgd2l0aCB0aGUgc3BlY2lmaWVkIGxpbmsgYW5kIHRoZSBzcGVjaWZpZWQgbW91c2UgYnV0dG9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUGFyYW1ldGVyczpcclxuICAgICAgICAvLyAgIGxpbms6XHJcbiAgICAgICAgLy8gICAgIFRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWwuTGluayB0aGF0IHdhcyBjbGlja2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICBidXR0b246XHJcbiAgICAgICAgLy8gICAgIE9uZSBvZiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTW91c2VCdXR0b25zIHZhbHVlcy5cclxuICAgICAgICBwdWJsaWMgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MoTGlua0xhYmVsLkxpbmsgbGluaywgTW91c2VCdXR0b25zIGJ1dHRvbilcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBHZXRzIHRoZSBtb3VzZSBidXR0b24gdGhhdCBjYXVzZXMgdGhlIGxpbmsgdG8gYmUgY2xpY2tlZC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFJldHVybnM6XHJcbiAgICAgICAgLy8gICAgIE9uZSBvZiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTW91c2VCdXR0b25zIHZhbHVlcy5cclxuICAgICAgICBwdWJsaWMgTW91c2VCdXR0b25zIEJ1dHRvbiB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5MaW5rIHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSZXR1cm5zOlxyXG4gICAgICAgIC8vICAgICBBIGxpbmsgb24gdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5cclxuICAgICAgICBwdWJsaWMgTGlua0xhYmVsLkxpbmsgTGluayB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBCcmlkZ2U7XHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgLy9cclxuICAgIC8vIFN1bW1hcnk6XHJcbiAgICAvLyAgICAgUHJvdmlkZXMgZGF0YSBmb3IgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkNvbnRyb2wuTW91c2VVcCwgU3lzdGVtLldpbmRvd3MuRm9ybXMuQ29udHJvbC5Nb3VzZURvd24sXHJcbiAgICAvLyAgICAgYW5kIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkNvbnRyb2wuTW91c2VNb3ZlIGV2ZW50cy5cclxuICAgIHB1YmxpYyBjbGFzcyBNb3VzZUV2ZW50QXJncyA6IEV2ZW50QXJnc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBSZXR5cGVkLmRvbS5Nb3VzZUV2ZW50IE9yaWdpbmFsO1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBQb2ludCBHZXRPZmZzZXRQb2ludChSZXR5cGVkLmRvbS5FbGVtZW50IGVsZW1lbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkb3VibGUgdG9wID0gMDtcclxuICAgICAgICAgICAgZG91YmxlIGxlZnQgPSAwOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkb1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljIGR5bSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3AgKz0gZHltLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgIGxlZnQgKz0gZHltLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZHltLm9mZnNldFBhcmVudDtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZWxlbWVudCAhPSBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQoKGludClsZWZ0LCAoaW50KXRvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBib29sIElzRWRnZTtcclxuICAgICAgICBzdGF0aWMgTW91c2VFdmVudEFyZ3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSXNFZGdlID0gUmV0eXBlZC5kb20ud2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuSW5kZXhPZihcIkVkZ2VcIikgPiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTW91c2VFdmVudEFyZ3MgQ3JlYXRlRnJvbU1vdXNlRXZlbnQoUmV0eXBlZC5kb20uTW91c2VFdmVudCBvcmlnaW5hbCwgQ29udHJvbCB0YXJnZXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB3aGF0IHdlIG5lZWQgdG8gZG8gaXMgZ2V0IHRoZSBsb2NhbCB4LCB5IG9mZiBmcm9tIHRoZSB0YXJnZXQuXHJcblxyXG4gICAgICAgICAgICBQb2ludCBtb3VzZVBvaW50O1xyXG5cclxuICAgICAgICAgICAgaWYob3JpZ2luYWwuY3VycmVudFRhcmdldCA9PSB0YXJnZXQuRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoQnJvd3Nlci5Jc0lFIHx8IElzRWRnZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gR2V0T2Zmc2V0UG9pbnQodGFyZ2V0LkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlUG9pbnQgPSBuZXcgUG9pbnQoKGludCkob3JpZ2luYWwuY2xpZW50WCAtIG9mZnNldC5YKSwgKGludCkob3JpZ2luYWwuY2xpZW50WSAtIG9mZnNldC5ZKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW91c2VQb2ludCA9IG5ldyBQb2ludCgoaW50KW9yaWdpbmFsLmxheWVyWCwgKGludClvcmlnaW5hbC5sYXllclkpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBHZXRPZmZzZXRQb2ludCh0YXJnZXQuRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBtb3VzZVBvaW50ID0gbmV3IFBvaW50KChpbnQpKG9yaWdpbmFsLnggLSBvZmZzZXQuWCksIChpbnQpKG9yaWdpbmFsLnkgLSBvZmZzZXQuWSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0NvbnNvbGUuQ2xlYXIoKTtcclxuICAgICAgICAgICAgLy9Db25zb2xlLldyaXRlTGluZShtb3VzZVBvaW50LlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IChpbnQpb3JpZ2luYWwuYnV0dG9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNlRXZlbnRBcmdzKFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uID09IDEgPyBNb3VzZUJ1dHRvbnMuTGVmdCA6XHJcbiAgICAgICAgICAgICAgICBidXR0b24gPT0gMiA/IE1vdXNlQnV0dG9ucy5SaWdodCA6XHJcbiAgICAgICAgICAgICAgICBidXR0b24gPT0gNCA/IE1vdXNlQnV0dG9ucy5NaWRkbGUgOlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uID09IDggPyBNb3VzZUJ1dHRvbnMuWEJ1dHRvbjIgOlxyXG4gICAgICAgICAgICAgICAgTW91c2VCdXR0b25zLlhCdXR0b24yLFxyXG4gICAgICAgICAgICAgICAgMSwgbW91c2VQb2ludC5YLCBtb3VzZVBvaW50LlksIDApXHJcbiAgICAgICAgICAgIHsgT3JpZ2luYWwgPSBvcmlnaW5hbCB9OyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTW91c2VFdmVudEFyZ3MgY2xhc3MuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQYXJhbWV0ZXJzOlxyXG4gICAgICAgIC8vICAgYnV0dG9uOlxyXG4gICAgICAgIC8vICAgICBPbmUgb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLk1vdXNlQnV0dG9ucyB2YWx1ZXMgdGhhdCBpbmRpY2F0ZSB3aGljaCBtb3VzZVxyXG4gICAgICAgIC8vICAgICBidXR0b24gd2FzIHByZXNzZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgIGNsaWNrczpcclxuICAgICAgICAvLyAgICAgVGhlIG51bWJlciBvZiB0aW1lcyBhIG1vdXNlIGJ1dHRvbiB3YXMgcHJlc3NlZC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgeDpcclxuICAgICAgICAvLyAgICAgVGhlIHgtY29vcmRpbmF0ZSBvZiBhIG1vdXNlIGNsaWNrLCBpbiBwaXhlbHMuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgIHk6XHJcbiAgICAgICAgLy8gICAgIFRoZSB5LWNvb3JkaW5hdGUgb2YgYSBtb3VzZSBjbGljaywgaW4gcGl4ZWxzLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICBkZWx0YTpcclxuICAgICAgICAvLyAgICAgQSBzaWduZWQgY291bnQgb2YgdGhlIG51bWJlciBvZiBkZXRlbnRzIHRoZSB3aGVlbCBoYXMgcm90YXRlZC5cclxuICAgICAgICBwdWJsaWMgTW91c2VFdmVudEFyZ3MoTW91c2VCdXR0b25zIGJ1dHRvbiwgaW50IGNsaWNrcywgaW50IHgsIGludCB5LCBpbnQgZGVsdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICAgICAgdGhpcy5DbGlja3MgPSBjbGlja3M7XHJcbiAgICAgICAgICAgIHRoaXMuWCA9IHg7XHJcbiAgICAgICAgICAgIHRoaXMuWSA9IHk7XHJcbiAgICAgICAgICAgIHRoaXMuRGVsdGEgPSBkZWx0YTtcclxuICAgICAgICAgICAgdGhpcy5Mb2NhdGlvbiA9IG5ldyBQb2ludChYLCBZKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyB3aGljaCBtb3VzZSBidXR0b24gd2FzIHByZXNzZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSZXR1cm5zOlxyXG4gICAgICAgIC8vICAgICBPbmUgb2YgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLk1vdXNlQnV0dG9ucyB2YWx1ZXMuXHJcbiAgICAgICAgcHVibGljIE1vdXNlQnV0dG9ucyBCdXR0b24geyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBHZXRzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1vdXNlIGJ1dHRvbiB3YXMgcHJlc3NlZCBhbmQgcmVsZWFzZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSZXR1cm5zOlxyXG4gICAgICAgIC8vICAgICBBbiBTeXN0ZW0uSW50MzIgdGhhdCBjb250YWlucyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBtb3VzZSBidXR0b24gd2FzIHByZXNzZWRcclxuICAgICAgICAvLyAgICAgYW5kIHJlbGVhc2VkLlxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ2xpY2tzIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBtb3VzZSBkdXJpbmcgdGhlIGdlbmVyYXRpbmcgbW91c2UgZXZlbnQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSZXR1cm5zOlxyXG4gICAgICAgIC8vICAgICBUaGUgeC1jb29yZGluYXRlIG9mIHRoZSBtb3VzZSwgaW4gcGl4ZWxzLlxyXG4gICAgICAgIHB1YmxpYyBpbnQgWCB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgbW91c2UgZHVyaW5nIHRoZSBnZW5lcmF0aW5nIG1vdXNlIGV2ZW50LlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgVGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgbW91c2UsIGluIHBpeGVscy5cclxuICAgICAgICBwdWJsaWMgaW50IFkgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTdW1tYXJ5OlxyXG4gICAgICAgIC8vICAgICBHZXRzIGEgc2lnbmVkIGNvdW50IG9mIHRoZSBudW1iZXIgb2YgZGV0ZW50cyB0aGUgbW91c2Ugd2hlZWwgaGFzIHJvdGF0ZWQsIG11bHRpcGxpZWRcclxuICAgICAgICAvLyAgICAgYnkgdGhlIFdIRUVMX0RFTFRBIGNvbnN0YW50LiBBIGRldGVudCBpcyBvbmUgbm90Y2ggb2YgdGhlIG1vdXNlIHdoZWVsLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgQSBzaWduZWQgY291bnQgb2YgdGhlIG51bWJlciBvZiBkZXRlbnRzIHRoZSBtb3VzZSB3aGVlbCBoYXMgcm90YXRlZCwgbXVsdGlwbGllZFxyXG4gICAgICAgIC8vICAgICBieSB0aGUgV0hFRUxfREVMVEEgY29uc3RhbnQuXHJcbiAgICAgICAgcHVibGljIGludCBEZWx0YSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgdGhlIGxvY2F0aW9uIG9mIHRoZSBtb3VzZSBkdXJpbmcgdGhlIGdlbmVyYXRpbmcgbW91c2UgZXZlbnQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBSZXR1cm5zOlxyXG4gICAgICAgIC8vICAgICBBIFN5c3RlbS5EcmF3aW5nLlBvaW50IHRoYXQgY29udGFpbnMgdGhlIHgtIGFuZCB5LSBtb3VzZSBjb29yZGluYXRlcywgaW4gcGl4ZWxzLFxyXG4gICAgICAgIC8vICAgICByZWxhdGl2ZSB0byB0aGUgdXBwZXItbGVmdCBjb3JuZXIgb2YgdGhlIGZvcm0uXHJcbiAgICAgICAgcHVibGljIFBvaW50IExvY2F0aW9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vXHJcbiAgICAvLyBTdW1tYXJ5OlxyXG4gICAgLy8gICAgIFJlcHJlc2VudHMgdGhlIGNvbGxlY3Rpb24gb2YgaXRlbXMgaW4gYSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Db21ib0JveC5cclxuICAgIHB1YmxpYyBjbGFzcyBPYmplY3RDb2xsZWN0aW9uIDogSUxpc3Q8b2JqZWN0PiwgSUNvbGxlY3Rpb24sIElFbnVtZXJhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBDb250cm9sIF9vd25lcjtcclxuXHJcbiAgICAgICAgcHVibGljIE9iamVjdENvbGxlY3Rpb24oQ29udHJvbCBvd25lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lciA9IG93bmVyO1xyXG4gICAgICAgICAgICBfY29udHJvbHMgPSBuZXcgTGlzdDxvYmplY3Q+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbCBPd25lciB7IGdldCB7IHJldHVybiBfb3duZXI7IH0gfVxyXG4gICAgICAgIHB1YmxpYyBib29sIElzU3luY2hyb25pemVkIHsgZ2V0IHsgcmV0dXJuIGZhbHNlOyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG9iamVjdCBTeW5jUm9vdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxvYmplY3Q+IF9jb250cm9scztcclxuXHJcbiAgICAgICAgcHVibGljIG9iamVjdCB0aGlzW2ludCBpbmRleF1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQgeyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzLkNvdW50OyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChvYmplY3QgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQ+KG5ldyBSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudCgpIHsgdmFsdWUgPSBfY29udHJvbHMuQ291bnQuVG9TdHJpbmcoKSwgdGV4dENvbnRlbnQgPSAoaXRlbSArIFwiXCIpIH0gKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJhbmdlKG9iamVjdFtdIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uTGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBmcmFnID0gUmV0eXBlZC5kb20uZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGl0ZW0uTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudD4obmV3IFJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50KCkgeyB2YWx1ZSA9IF9jb250cm9scy5Db3VudC5Ub1N0cmluZygpLCB0ZXh0Q29udGVudCA9IChpdGVtW2ldICsgXCJcIikgfSk7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uRG9jdW1lbnRGcmFnbWVudD4oZnJhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKkBcclxuXHRcdFx0dmFyIGxlbiA9IF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZShsZW4tLSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkKF9vd25lci5FbGVtZW50Lmxhc3RDaGlsZCk7XHJcblx0XHRcdH07XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIF9jb250cm9scy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29udGFpbnMob2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkNvbnRhaW5zKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKG9iamVjdFtdIGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKEFycmF5IGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oKG9iamVjdFtdKWFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJRW51bWVyYXRvcjxvYmplY3Q+IEdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IEluZGV4T2Yob2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnNlcnQoaW50IGluZGV4LCBvYmplY3QgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50Lmluc2VydEJlZm9yZTxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50PihuZXcgUmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQoKSB7IHZhbHVlID0gX2NvbnRyb2xzLkNvdW50LlRvU3RyaW5nKCksIHRleHRDb250ZW50ID0gKGl0ZW0gKyBcIlwiKSB9LCBfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5JbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgUmVtb3ZlKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzW19jb250cm9scy5JbmRleE9mKGl0ZW0pXSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuUmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVtb3ZlQXQoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5SZW1vdmVBdChpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJRW51bWVyYXRvciBJRW51bWVyYWJsZS5HZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBQYWRkaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGludCBMZWZ0LCBUb3AsIFJpZ2h0LCBCb3R0b207XHJcbiAgICAgICAgcHVibGljIFBhZGRpbmcoaW50IGxlZnQsIGludCB0b3AsIGludCByaWdodCwgaW50IGJvdHRvbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExlZnQgPSBsZWZ0OyBUb3AgPSB0b3A7IFJpZ2h0ID0gcmlnaHQ7IEJvdHRvbSA9IGJvdHRvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nKGludCBhbGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMZWZ0ID0gYWxsOyBUb3AgPSBhbGw7IFJpZ2h0ID0gYWxsOyBCb3R0b20gPSBhbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnV0dG9uQmFzZSA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgQnV0dG9uQmFzZShSZXR5cGVkLmRvbS5IVE1MRWxlbWVudCBlbGVtZW50KSA6IGJhc2UoZWxlbWVudClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBBdXRvU2l6ZSB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0IHsgZ2V0IHsgcmV0dXJuIGJhc2UuVGV4dDsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIHB1YmxpYyBib29sIFVzZVZpc3VhbFN0eWxlQmFja0NvbG9yIHsgZ2V0OyBzZXQ7IH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbWJvQm94IDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb21ib0JveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTFNlbGVjdEVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEl0ZW1zID0gbmV3IE9iamVjdENvbGxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBPYmplY3RDb2xsZWN0aW9uIEl0ZW1zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRm9ybWF0dGluZ0VuYWJsZWQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBJdGVtSGVpZ2h0IHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRHJhd01vZGUgRHJhd01vZGUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNpemUgTWluaW11bVNpemUgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMaXN0Qm94IDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMaXN0Qm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MU2VsZWN0RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MU2VsZWN0RWxlbWVudD4oKS5tdWx0aXBsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIEl0ZW1zID0gbmV3IE9iamVjdENvbGxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBPYmplY3RDb2xsZWN0aW9uIEl0ZW1zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRm9ybWF0dGluZ0VuYWJsZWQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBJdGVtSGVpZ2h0IHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb250YWluZXJDb250cm9sIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBTaXplRiBBdXRvU2NhbGVEaW1lbnNpb25zIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgQXV0b1NjYWxlTW9kZSBBdXRvU2NhbGVNb2RlIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbnRhaW5lckNvbnRyb2woKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250YWluZXJDb250cm9sKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQpIDogYmFzZShlbGVtZW50KVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBDb250cm9sQ29sbGVjdGlvbiA6IElMaXN0PENvbnRyb2w+LCBJQ29sbGVjdGlvbiwgSUVudW1lcmFibGVcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBDb250cm9sIF9vd25lcjtcclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xDb2xsZWN0aW9uKENvbnRyb2wgb3duZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgX2NvbnRyb2xzID0gbmV3IExpc3Q8Q29udHJvbD4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxDb250cm9sPiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNTeW5jaHJvbml6ZWQgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb2JqZWN0IFN5bmNSb290XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChDb250cm9sIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpdGVtLl9wYXJlbnQgPSBPd25lcjtcclxuICAgICAgICAgICAgaXRlbS5JbnZva2VMb2FkKCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgICAgIF9vd25lci5PbkNvbnRyb2xBZGRlZChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJhbmdlKENvbnRyb2xbXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KGl0ZW1baV0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtW2ldLl9wYXJlbnQgPSBPd25lcjtcclxuICAgICAgICAgICAgICAgIGl0ZW1baV0uSW52b2tlTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtW2ldKTtcclxuICAgICAgICAgICAgICAgIF9vd25lci5PbkNvbnRyb2xBZGRlZChpdGVtW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUobGVuLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZChfb3duZXIuRWxlbWVudC5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKENvbnRyb2wgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuQ29udGFpbnMoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb3B5VG8oQ29udHJvbFtdIGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKEFycmF5IGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oKENvbnRyb2xbXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8Q29udHJvbD4gR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgSW5kZXhPZihDb250cm9sIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnNlcnQoaW50IGluZGV4LCBDb250cm9sIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5pbnNlcnRCZWZvcmU8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oaXRlbS5FbGVtZW50LCBfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5JbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICBfb3duZXIuT25Db250cm9sQWRkZWQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIF9vd25lci5PbkNvbnRyb2xSZW1vdmVkKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLk5vZGU+KF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgICAgIF9vd25lci5PbkNvbnRyb2xSZW1vdmVkKF9jb250cm9sc1tpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgX2NvbnRyb2xzLlJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElFbnVtZXJhdG9yIElFbnVtZXJhYmxlLkdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUdyaWRWaWV3IDogQ29udHJvbCwgSVN1cHBvcnRJbml0aWFsaXplXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZSBDb2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24gUm93cyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCB0YWJsZTtcclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFibGUgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudD4odGFibGUpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG5cclxuICAgICAgICAgICAgQ29sdW1ucyA9IG5ldyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uKHRoaXMsIHRhYmxlKTtcclxuICAgICAgICAgICAgUm93cyA9IG5ldyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uKHRoaXMsIHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJ0YWJsZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJlZ2luSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEVuZEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID49IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9IGFycnlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyeS5MZW5ndGggPj0gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW5zLmhlYWRlci5jbGFzc05hbWUgPSBhcnJ5WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbnMuaGVhZGVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIE9uTmV3Um93RXZlbnQob2JqZWN0IHNlbmRlciwgTmV3Um93RXZlbnRBcmdzIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSb3dzLkFkZChhcmdzLlJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG9iamVjdCBkYXRhU291cmNlO1xyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgRGF0YVNvdXJjZSB7IGdldCB7IHJldHVybiBkYXRhU291cmNlOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPSBkYXRhU291cmNlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTb3VyY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTb3VyY2UgaXMgRGF0YVRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhU291cmNlLkFzPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdC5OZXdSb3dFdmVudCAtPSBPbk5ld1Jvd0V2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhU291cmNlICE9IG51bGwgJiYgZGF0YVNvdXJjZSBpcyBEYXRhVGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhU291cmNlLkFzPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR0Lk5ld1Jvd0V2ZW50ICs9IE9uTmV3Um93RXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFRPRE8gLSBhZGQgY29udHJvbHMgdmlhIGh0bWwuLi4uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24gOiBJTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+LCBJQ29sbGVjdGlvbiwgSUVudW1lcmFibGVcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBEYXRhR3JpZFZpZXcgX293bmVyO1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50IGhlYWRlcjtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24oRGF0YUdyaWRWaWV3IG93bmVyLCBSZXR5cGVkLmRvbS5IVE1MVGFibGVFbGVtZW50IHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PERhdGFHcmlkVmlld0NvbHVtbj4oKTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGhlYWRlciA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+KGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3IE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+IF9jb250cm9scztcclxuICAgICAgICBwdWJsaWMgYm9vbCBJc1N5bmNocm9uaXplZCB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgU3luY1Jvb3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3Q29sdW1uIHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChEYXRhR3JpZFZpZXdDb2x1bW4gaXRlbSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJhbmdlKERhdGFHcmlkVmlld0NvbHVtbltdIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsIHx8IGl0ZW0uTGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBmcmFnID0gUmV0eXBlZC5kb20uZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IGl0ZW0uTGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD4oaXRlbVtpXS5FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uRG9jdW1lbnRGcmFnbWVudD4oZnJhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKkBcclxuXHRcdFx0dmFyIGxlbiA9IGhlYWRlci5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUobGVuLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXIucmVtb3ZlQ2hpbGQoaGVhZGVyLmxhc3RDaGlsZCk7XHJcblx0XHRcdH07XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIF9jb250cm9scy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29udGFpbnMoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkNvbnRhaW5zKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKERhdGFHcmlkVmlld0NvbHVtbltdIGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKEFycmF5IGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oKERhdGFHcmlkVmlld0NvbHVtbltdKWFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJRW51bWVyYXRvcjxEYXRhR3JpZFZpZXdDb2x1bW4+IEdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IEluZGV4T2YoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnNlcnQoaW50IGluZGV4LCBEYXRhR3JpZFZpZXdDb2x1bW4gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlci5pbnNlcnRCZWZvcmU8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD4oaXRlbS5FbGVtZW50LCBoZWFkZXIuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuSW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFJlbW92ZShEYXRhR3JpZFZpZXdDb2x1bW4gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLlJlbW92ZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZUF0KGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLk5vZGU+KGhlYWRlci5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5SZW1vdmVBdChpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJRW51bWVyYXRvciBJRW51bWVyYWJsZS5HZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucztcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFRPRE8gLSBhZGQgY29udHJvbHMgdmlhIGh0bWwuLi4uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24gOiBJTGlzdDxEYXRhUm93PiwgSUNvbGxlY3Rpb24sIElFbnVtZXJhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgRGF0YUdyaWRWaWV3IF9vd25lcjtcclxuICAgICAgICBpbnRlcm5hbCBSZXR5cGVkLmRvbS5IVE1MVGFibGVTZWN0aW9uRWxlbWVudCBib2R5O1xyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3Um93Q29sbGVjdGlvbihEYXRhR3JpZFZpZXcgb3duZXIsIFJldHlwZWQuZG9tLkhUTUxUYWJsZUVsZW1lbnQgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgX2NvbnRyb2xzID0gbmV3IExpc3Q8RGF0YVJvdz4oKTtcclxuXHJcbiAgICAgICAgICAgIGJvZHkgPSB0YWJsZS5jcmVhdGVUQm9keSgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50Pihib2R5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXcgT3duZXIgeyBnZXQgeyByZXR1cm4gX293bmVyOyB9IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBMaXN0PERhdGFSb3c+IF9jb250cm9scztcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFSb3cgdGhpc1tpbnQgaW5kZXhdIHsgZ2V0IHsgcmV0dXJuIF9jb250cm9sc1tpbmRleF07ICB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IENvdW50IHsgZ2V0IHsgcmV0dXJuIF9jb250cm9scy5Db3VudDsgIH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc1JlYWRPbmx5IHsgZ2V0IHsgcmV0dXJuIGZhbHNlOyB9IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc1N5bmNocm9uaXplZCB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgU3luY1Jvb3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoRGF0YVJvdyBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQ+KGl0ZW0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShEYXRhUm93W10gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbS5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGZyYWcgPSBSZXR5cGVkLmRvbS5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgaXRlbS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQ+KGl0ZW1baV0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Eb2N1bWVudEZyYWdtZW50PihmcmFnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENsZWFyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8qQFxyXG5cdFx0XHR2YXIgbGVuID0gYm9keS5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUobGVuLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdENoaWxkKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Ki9cclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBDb250YWlucyhEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkNvbnRhaW5zKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKERhdGFSb3dbXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChEYXRhUm93W10pYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIElFbnVtZXJhdG9yPERhdGFSb3c+IEdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IEluZGV4T2YoRGF0YVJvdyBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgRGF0YVJvdyBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9keS5pbnNlcnRCZWZvcmU8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50PihpdGVtLkVsZW1lbnQsIGJvZHkuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuSW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFJlbW92ZShEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oYm9keS5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5SZW1vdmVBdChpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBJRW51bWVyYXRvciBJRW51bWVyYWJsZS5HZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEdyb3VwQm94IDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgUmV0eXBlZC5kb20uSFRNTExlZ2VuZEVsZW1lbnQgbGVnZW5kO1xyXG4gICAgICAgIHByaXZhdGUgUGFuZWwgcGFuZWw7XHJcbiAgICAgICAgcHVibGljIEdyb3VwQm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRmllbGRTZXRFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYW5lbCA9IG5ldyBQYW5lbCgpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImdyb3VwYm94XCIpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxMZWdlbmRFbGVtZW50PihsZWdlbmQgPSBuZXcgUmV0eXBlZC5kb20uSFRNTExlZ2VuZEVsZW1lbnQoKSk7XHJcblxyXG4gICAgICAgICAgICBsZWdlbmQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJncm91cGJveGxlZ2VuZFwiKTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4ocGFuZWwuRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHBhbmVsLkVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgIENvbnRyb2xzLl9vd25lciA9IHBhbmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gbGVnZW5kLnRleHRDb250ZW50OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLlRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZC5jbGFzc05hbWUgPSBhcnJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWwuRWxlbWVudC5jbGFzc05hbWUgPSBhcnJ5WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBzdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBMYWJlbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGFiZWwoKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxTcGFuRWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwibGFiZWxcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBFbGVtZW50LnRleHRDb250ZW50OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLlRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIExpbmtMYWJlbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlua0xhYmVsKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MQW5jaG9yRWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL0VsZW1lbnQuQXM8SFRNTEFuY2hvckVsZW1lbnQ+KCkuSHJlZiA9IFwiI1wiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gRWxlbWVudC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uQ2xpY2soRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uQ2xpY2soZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoTGlua0NsaWNrZWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIExpbmtDbGlja2VkKHRoaXMsIG5ldyBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyhudWxsKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEhhbmRsZXIgTGlua0NsaWNrZWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBMaW5rXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3Jlc3NCYXIgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQgcHJvZ3Jlc3NCYXI7XHJcbiAgICAgICAgcHVibGljIFByb2dyZXNzQmFyKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50Pihwcm9ncmVzc0JhciA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKTtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicHJvZ3Jlc3NcIik7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBDb2xvciBGb3JlQ29sb3IgeyBnZXQgeyByZXR1cm4gYmFzZS5Gb3JlQ29sb3I7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGJhc2UuRm9yZUNvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZS5Ub0h0bWwoKTtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW50IF92YWx1ZTtcclxuICAgICAgICBwdWJsaWMgaW50IFZhbHVlIHsgZ2V0IHsgcmV0dXJuIF92YWx1ZTsgfSAgc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IF92YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5Db250YWlucyhcIixcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyeSA9IHN0ci5TcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJ5Lkxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBhcnJ5WzFdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRhYkNvbnRyb2wgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFRhYkNvbnRyb2woKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxVTGlzdEVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJ0YWJjb250cm9sXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgb3ZlcnJpZGUgdm9pZCBPbkNvbnRyb2xBZGRlZChDb250cm9sIGNvbnRyb2wpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uQ29udHJvbEFkZGVkKGNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgaWYoY29udHJvbCBpcyBUYWJQYWdlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb250cm9scy5BZGQoY29udHJvbC5BczxUYWJQYWdlPigpLkhlYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgUGVyZm9ybUxheW91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCBvdmVycmlkZSB2b2lkIE9uQ29udHJvbFJlbW92ZWQoQ29udHJvbCBjb250cm9sKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PbkNvbnRyb2xSZW1vdmVkKGNvbnRyb2wpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wgaXMgVGFiUGFnZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29udHJvbHMuUmVtb3ZlKGNvbnRyb2wuQXM8VGFiUGFnZT4oKS5IZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIFBlcmZvcm1MYXlvdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFRhYlBhZ2VbXSBUYWJQYWdlcyB7IGdldCB7XHJcbiAgICAgICAgICAgICAgICBMaXN0PFRhYlBhZ2U+IHBhZ2VzID0gbmV3IExpc3Q8VGFiUGFnZT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcmVhY2ggKHZhciBjb250cm9sIGluIENvbnRyb2xzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sIGlzIFRhYlBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlcy5BZGQoY29udHJvbC5BczxUYWJQYWdlPigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXMuVG9BcnJheSgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIGludGVybmFsIHZvaWQgUmVzaXplVGFiSGVhZGVyU2l6ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnQgaSA9IDA7XHJcbiAgICAgICAgICAgIGRvdWJsZSB4ID0gMDtcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHBhZ2UgaW4gVGFiUGFnZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBuZXcgVGFiUGFnZUhlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgZGl2LlRleHQgPSBwYWdlLlRleHQ7XHJcbiAgICAgICAgICAgICAgICBkaXYuRWxlbWVudC5jbGFzc05hbWUgPSBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIGRpdi5FbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgUmV0eXBlZC5kb20uZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihkaXYuRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciByZWMgPSBkaXYuRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3BhZ2UuSGVhZGVyLkxvY2F0aW9uID0gbmV3IERyYXdpbmcuUG9pbnQoKGludCl4LCBpID09IF9zZWxlY3RlZEluZGV4ID8gMCA6IDQpO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5IZWFkZXIuRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArIFwicHhcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KGRpdi5FbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICB4ICs9IHJlYy53aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBwYWdlLkVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJjYWxjKDEwMCUgLSBcIiArICgoaW50KXJlYy5oZWlnaHQgLSAxKSArIFwicHgpXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdlLkVsZW1lbnQuc3R5bGUudG9wID0gKChpbnQpcmVjLmhlaWdodCAtIDEpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHBhZ2UuRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBQZXJmb3JtTGF5b3V0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGxheW91dFN1c3BlbmRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuUGVyZm9ybUxheW91dCgpO1xyXG5cclxuICAgICAgICAgICAgaW50IGkgPSAwO1xyXG4gICAgICAgICAgICBUYWJQYWdlIGFjdGl2ZVBhZ2UgPSBudWxsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yZWFjaCAodmFyIHBhZ2UgaW4gVGFiUGFnZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlyc3RcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZpcnN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZpcnN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZighc3RyaW5nLklzTnVsbE9yV2hpdGVTcGFjZShMaW5rVGFnKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihMaW5rVGFnLkNvbnRhaW5zKFwiIFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ1tdIHRhZ3MgPSBMaW5rVGFnLlNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmVhY2ggKHZhciBpdGVtIGluIHRhZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKGl0ZW0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFnZS5IZWFkZXIuRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoaXRlbSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhMaW5rVGFnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LmFkZChMaW5rVGFnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF9zZWxlY3RlZEluZGV4ID09IGkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXBhZ2UuSGVhZGVyLkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFnZS5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZS5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5TaXplID0gbmV3IERyYXdpbmcuU2l6ZSh0aGlzLlNpemUuV2lkdGggLSA4LCB0aGlzLlNpemUuSGVpZ2h0IC0gKDIyICsgNCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb250cm9scy5SZW1vdmUocGFnZS5IZWFkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbnRyb2xzLkFkZChwYWdlLkhlYWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYWdlLkhlYWRlci5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVQYWdlICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvbnRyb2xzLlJlbW92ZShhY3RpdmVQYWdlLkhlYWRlcik7XHJcbiAgICAgICAgICAgICAgICBDb250cm9scy5BZGQoYWN0aXZlUGFnZS5IZWFkZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBSZXNpemVUYWJIZWFkZXJTaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGludCBfc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFNlbGVjdGVkSW5kZXhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfc2VsZWN0ZWRJbmRleDsgfVxyXG4gICAgICAgICAgICBzZXQge1xyXG4gICAgICAgICAgICAgICAgaWYoX3NlbGVjdGVkSW5kZXggIT0gdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBQZXJmb3JtTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0cmluZyBMaW5rVGFnO1xyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmtUYWcgPSBhcnJ5WzFdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmtUYWcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rVGFnID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIExpbmtUYWcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRhYlBhZ2VIZWFkZXIgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgLy9saVxyXG4gICAgICAgIHB1YmxpYyBUYWJQYWdlSGVhZGVyKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MQW5jaG9yRWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInRhYnBhZ2VoZWFkZXJcIik7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihFbGVtZW50LmlubmVyVGV4dCAhPSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUZXh0Qm94IDogQ29udHJvbFxyXG4gICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcHVibGljIFRleHRCb3goKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQoKSB7IHR5cGUgPSBcInRleHRcIiB9KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9UZXh0Q2hhbmdlZFxyXG4gICAgICAgICAgICBGdW5jPFJldHlwZWQuZG9tLkV2ZW50LCBvYmplY3Q+IHdvcmtPdXRFdmVudCA9IChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoVGV4dCAhPSBwcmV2U3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTdHJpbmcgPSBUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIE9uVGV4dENoYW5nZWQoRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50Lm9uY2hhbmdlID0gbmV3IFJldHlwZWQuZG9tLkhUTUxFbGVtZW50Lm9uY2hhbmdlRm4od29ya091dEV2ZW50KTtcclxuICAgICAgICAgICAgRWxlbWVudC5vbnBhc3RlID0gbmV3IFJldHlwZWQuZG9tLkhUTUxFbGVtZW50Lm9ucGFzdGVGbih3b3JrT3V0RXZlbnQpO1xyXG4gICAgICAgICAgICBFbGVtZW50Lm9ua2V5ZG93biA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbmtleWRvd25Gbih3b3JrT3V0RXZlbnQpO1xyXG4gICAgICAgICAgICBFbGVtZW50Lm9ua2V5dXAgPSBuZXcgUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQub25rZXl1cEZuKHdvcmtPdXRFdmVudCk7XHJcbiAgICAgICAgICAgIEVsZW1lbnQub25ibHVyID0gbmV3IFJldHlwZWQuZG9tLkhUTUxFbGVtZW50Lm9uYmx1ckZuKHdvcmtPdXRFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIHByZXZTdHJpbmc7XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0IHsgZ2V0IHsgcmV0dXJuIEVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudD4oKS52YWx1ZTsgfSBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50PigpLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfdXNlU3lzdGVtUGFzc3dvcmRDaGFyO1xyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBVc2VTeXN0ZW1QYXNzd29yZENoYXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdXNlU3lzdGVtUGFzc3dvcmRDaGFyOyB9XHJcbiAgICAgICAgICAgIHNldCB7XHJcbiAgICAgICAgICAgICAgICBfdXNlU3lzdGVtUGFzc3dvcmRDaGFyID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfdXNlU3lzdGVtUGFzc3dvcmRDaGFyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50PigpLnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5FbGVtZW50LkFzPFJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQ+KCkudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPblRleHRDaGFuZ2VkKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKFRleHRDaGFuZ2VkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBUZXh0Q2hhbmdlZCh0aGlzLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudCBFdmVudEhhbmRsZXIgVGV4dENoYW5nZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBCdXR0b24gOiBCdXR0b25CYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEJ1dHRvbigpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTEJ1dHRvbkVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ2hlY2tCb3ggOiBCdXR0b25CYXNlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50IGNoZWNrQm94O1xyXG4gICAgICAgIHByaXZhdGUgUmV0eXBlZC5kb20uSFRNTExhYmVsRWxlbWVudCB0ZXh0O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBjaGVja2JveFRvTGFiZWxJZDtcclxuICAgICAgICBwdWJsaWMgQ2hlY2tCb3goKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSBjaGVja2JveFRvTGFiZWxJZCsrO1xyXG4gICAgICAgICAgICB2YXIgaWRzID0gXCJfX2NoZWNrXCIgKyBpZC5Ub1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudD4oKGNoZWNrQm94ID0gbmV3IFJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQoKSB7IHR5cGUgPSBcImNoZWNrYm94XCIsIGlkID0gaWRzIH0pKTtcclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxMYWJlbEVsZW1lbnQ+KHRleHQgPSBuZXcgUmV0eXBlZC5kb20uSFRNTExhYmVsRWxlbWVudCgpIHsgaHRtbEZvciA9IGlkcyB9KTtcclxuXHJcbiAgICAgICAgICAgIGNoZWNrQm94LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICB0ZXh0LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ2hlY2tlZCB7IGdldCB7IHJldHVybiBjaGVja0JveC5AY2hlY2tlZDsgfSBzZXQgeyBjaGVja0JveC5AY2hlY2tlZCA9IHZhbHVlOyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gdGV4dC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzdHIuQ29udGFpbnMoXCIsXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycnkgPSBzdHIuU3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBhcnJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihhcnJ5Lkxlbmd0aCA9PSAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSBhcnJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBhcnJ5WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBzdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBpbnQgVGFiSW5kZXhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFiSW5kZXg7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKF9pbml0KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIF90YWJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUYWJTdG9wKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3gudGFiSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3gucmVtb3ZlQXR0cmlidXRlKFwiVGFiSW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFBhbmVsIDogQ29udGFpbmVyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQYW5lbCgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBUYWJQYWdlIDogUGFuZWxcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBUYWJQYWdlSGVhZGVyIEhlYWRlcjtcclxuICAgICAgICBwdWJsaWMgYm9vbCBVc2VWaXN1YWxTdHlsZUJhY2tDb2xvciB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUYWJQYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEhlYWRlciA9IG5ldyBUYWJQYWdlSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIEhlYWRlci5DbGljayArPSBIZWFkZXJfQ2xpY2s7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJ0YWJwYWdlXCIpOyAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBIZWFkZXJfQ2xpY2sob2JqZWN0IHNlbmRlciwgRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihQYXJlbnQgaXMgVGFiQ29udHJvbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhZ2VzID0gUGFyZW50LkFzPFRhYkNvbnRyb2w+KCkuVGFiUGFnZXM7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IHBhZ2VzLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhZ2VzW2ldID09IHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXJlbnQuQXM8VGFiQ29udHJvbD4oKS5TZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFBhcmVudC5BczxUYWJDb250cm9sPigpLlNlbGVjdGVkSW5kZXggPSAtMTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBIZWFkZXIuVGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKEhlYWRlci5UZXh0ICE9IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEhlYWRlci5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoUGFyZW50IGlzIFRhYkNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXJlbnQuQXM8VGFiQ29udHJvbD4oKS5SZXNpemVUYWJIZWFkZXJTaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXQp9Cg==
