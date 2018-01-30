/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.7.0
 */
Bridge.assembly("System", function ($asm, globals) {
    "use strict";

    Bridge.define("System.Windows.Forms.Control", {
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
            Padding: null
        },
        events: {
            Click: null
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
                this._visible = true;
                this._enabled = true;
                this._readonly = false;
            },
            ctor: function (element) {
                this.$initialize();
                this.Element = element;

                this.Controls = new System.Windows.Forms.ControlCollection(this);

                this.Element.style.position = "absolute";
                this.Element.style.boxSizing = "borderbox";


                this.Element.style.fontSize = "inherit";
                this.Element.style.fontFamily = "inherit";

                this.TabStop = true;

                this.Element.onclick = Bridge.fn.bind(this, function (ev) {
                    ev.stopPropagation();
                    this.OnClick({ });
                    return null;
                });

                this._init = true;
            }
        },
        methods: {
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
            Load: function () {
                this.OnLoad();
            },
            OnLoad: function () {

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
            SuspendLayout: function () {

            },
            ResumeLayout: function (performLayout) {

            },
            PerformLayout: function () {

            }
        }
    });

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
                    return this.knownColor.toString();
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
                        return new System.Drawing.Color.$ctor1(System.Drawing.KnownColor.Control);
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

    Bridge.define("System.Windows.Forms.DataGridViewColumn", {
        fields: {
            Element: null
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

    Bridge.define("System.Windows.Forms.LinkLabel.Link");

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
                this._owner.Element.appendChild(($t = document.createElement("option"), $t.value = this._controls.Count.toString(), $t.textContent = (System.String.concat(item, "")), $t));
                this._controls.add(item);
            },
            AddRange: function (item) {
                var $t;
                if (item == null || item.length === 0) {
                    return;
                }
                var frag = document.createDocumentFragment();
                for (var i = 0; i < item.length; i = (i + 1) | 0) {
                    frag.appendChild(($t = document.createElement("option"), $t.value = this._controls.Count.toString(), $t.textContent = (System.String.concat(item[System.Array.index(i, item)], "")), $t));
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
                this._owner.Element.insertBefore(($t = document.createElement("option"), $t.value = this._controls.Count.toString(), $t.textContent = (System.String.concat(item, "")), $t), this._owner.Element.childNodes[index]);
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
            $ctor1: function (left, top, right, bottom) {
                this.$initialize();
                this.Left = left;
                this.Top = top;
                this.Right = right;
                this.Bottom = bottom;
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

    Bridge.define("System.Windows.Forms.TextBox", {
        inherits: [System.Windows.Forms.Control],
        props: {
            Text: {
                get: function () {
                    return this.Element.value;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Text").$System$Windows$Forms$Control$Text = value;
                    this.Element.value = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                var $t;
                this.$initialize();
                System.Windows.Forms.Control.ctor.call(this, ($t = document.createElement("input"), $t.type = "text", $t));

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
            }
        },
        alias: [
            "getItem", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$getItem",
            "setItem", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$setItem",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$IsReadOnly",
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
                item.Load();
                this._controls.add(item);
            },
            AddRange: function (item) {
                if (item == null || item.length === 0) {
                    return;
                }
                var frag = document.createDocumentFragment();
                for (var i = 0; i < item.length; i = (i + 1) | 0) {
                    frag.appendChild(item[System.Array.index(i, item)].Element);
                    item[System.Array.index(i, item)]._parent = this.Owner;
                    item[System.Array.index(i, item)].Load();
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
            },
            remove: function (item) {
                this._owner.Element.removeChild(item.Element);
                return this._controls.remove(item);
            },
            removeAt: function (index) {
                this._owner.Element.removeChild(this._owner.Element.childNodes[index]);
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
                        this.table.className = (System.String.concat(this._tag, ""));
                    } else {
                        this.table.className = "";
                    }
                    this.ApplyDisabled(this.table);
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
            }
        },
        alias: [
            "getItem", "System$Collections$Generic$IList$1$System$Data$DataRow$getItem",
            "setItem", "System$Collections$Generic$IList$1$System$Data$DataRow$setItem",
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$System$Data$DataRow$Count",
            "IsReadOnly", "System$Collections$Generic$ICollection$1$System$Data$DataRow$IsReadOnly",
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
                System.Windows.Forms.Control.ctor.call(this, document.createElement("div"));
                this.panel = new System.Windows.Forms.Panel();

                this.Element.appendChild((this.legend = document.createElement("div")));
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
            }
        }
    });

    Bridge.define("System.ComboBoxResize", {
        inherits: [System.Windows.Forms.ComboBox],
        props: {
            AutoSize: {
                get: function () {
                    return Bridge.ensureBaseProperty(this, "AutoSize").$System$Windows$Forms$Control$AutoSize;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "AutoSize").$System$Windows$Forms$Control$AutoSize = value;
                }
            }
        }
    });

    Bridge.define("System.TextBoxResize", {
        inherits: [System.Windows.Forms.TextBox],
        props: {
            AutoSize: {
                get: function () {
                    return Bridge.ensureBaseProperty(this, "AutoSize").$System$Windows$Forms$Control$AutoSize;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "AutoSize").$System$Windows$Forms$Control$AutoSize = value;
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.TextBox.ctor.call(this);
                this.AutoSize = false;

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
                var ids = "__check" + (id.toString() || "");



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
                FormTopBorder: 0,
                FormBottonBorder: 0,
                FormLeftBorder: 0,
                FormRightBorder: 0
            },
            ctors: {
                init: function () {
                    this.FormTopBorder = 27;
                    this.FormBottonBorder = 6;
                    this.FormLeftBorder = 6;
                    this.FormRightBorder = 6;
                }
            },
            methods: {
                GetClientSize: function (size) {
                    return new System.Drawing.Size.$ctor1(((size.Width - (((System.Windows.Forms.Form.FormLeftBorder + System.Windows.Forms.Form.FormRightBorder) | 0))) | 0), ((size.Height - (((System.Windows.Forms.Form.FormTopBorder + System.Windows.Forms.Form.FormBottonBorder) | 0))) | 0));
                },
                SetSize: function (clientSize) {
                    return new System.Drawing.Size.$ctor1(((clientSize.Width + (((System.Windows.Forms.Form.FormLeftBorder + System.Windows.Forms.Form.FormRightBorder) | 0))) | 0), ((clientSize.Height + (((System.Windows.Forms.Form.FormTopBorder + System.Windows.Forms.Form.FormBottonBorder) | 0))) | 0));
                }
            }
        },
        fields: {
            Text: null
        },
        props: {
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
                    return System.Windows.Forms.Form.GetClientSize(this.Size.$clone());
                },
                set: function (value) {
                    this.Size = System.Windows.Forms.Form.SetSize(value.$clone());
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.ContainerControl.ctor.call(this);
                this.BackColor = System.Drawing.SystemColors.Control.$clone();
                this.Element.style.borderTop = "solid " + System.Windows.Forms.Form.FormTopBorder + "px" + " " + System.Drawing.Color.op_Implicit$1(System.Drawing.Color.CornflowerBlue);
                this.Element.style.borderBottom = "solid " + System.Windows.Forms.Form.FormBottonBorder + "px" + " " + System.Drawing.Color.op_Implicit$1(System.Drawing.Color.CornflowerBlue);

                this.Element.style.borderLeft = "solid " + System.Windows.Forms.Form.FormLeftBorder + "px" + " " + System.Drawing.Color.op_Implicit$1(System.Drawing.Color.CornflowerBlue);
                this.Element.style.borderRight = "solid " + System.Windows.Forms.Form.FormRightBorder + "px" + " " + System.Drawing.Color.op_Implicit$1(System.Drawing.Color.CornflowerBlue);

                this.TabStop = false;
            }
        },
        methods: {
            Dispose: function (disposing) {

            },
            Show: function () {
                document.body.appendChild(this.Element);
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
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJTeXN0ZW0uanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIldpbmRvd3MvRm9ybXMvQ29udHJvbC5jcyIsIkRhdGEvRGF0YUNvbHVtbi5jcyIsIkRhdGEvRGF0YUNvbHVtbkNvbGxlY3Rpb24uY3MiLCJEYXRhL0RhdGFSb3cuY3MiLCJEYXRhL0RhdGFSb3dDb2xsZWN0aW9uLmNzIiwiRGF0YS9EYXRhVGFibGUuY3MiLCJEcmF3aW5nL0NvbG9yLmNzIiwiRHJhd2luZy9Gb250LmNzIiwiRHJhd2luZy9Qb2ludC5jcyIsIkRyYXdpbmcvU2l6ZS5jcyIsIkRyYXdpbmcvU2l6ZUYuY3MiLCJEcmF3aW5nL1N5c3RlbUNvbG9ycy5jcyIsIldpbmRvd3MvRm9ybXMvRGF0YUdyaWRWaWV3Q29sdW1uLmNzIiwiV2luZG93cy9Gb3Jtcy9MaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50SGFuZGxlci5jcyIsIldpbmRvd3MvRm9ybXMvT2JqZWN0Q29sbGVjdGlvbi5jcyIsIldpbmRvd3MvRm9ybXMvUGFkZGluZy5jcyIsIldpbmRvd3MvRm9ybXMvQ29tYm9Cb3guY3MiLCJXaW5kb3dzL0Zvcm1zL1RleHRCb3guY3MiLCJXaW5kb3dzL0Zvcm1zL0J1dHRvbkJhc2UuY3MiLCJXaW5kb3dzL0Zvcm1zL0NvbnRhaW5lckNvbnRyb2wuY3MiLCJXaW5kb3dzL0Zvcm1zL0NvbnRyb2xDb2xsZWN0aW9uLmNzIiwiV2luZG93cy9Gb3Jtcy9EYXRhR3JpZFZpZXcuY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0dyb3VwQm94LmNzIiwiV2luZG93cy9Gb3Jtcy9MYWJlbC5jcyIsIldpbmRvd3MvRm9ybXMvTGlua0xhYmVsLmNzIiwiV2luZG93cy9Gb3Jtcy9Qcm9ncmVzc0Jhci5jcyIsIkNvbWJvQm94UmVzaXplLmNzIiwiVGV4dEJveFJlc2l6ZS5jcyIsIldpbmRvd3MvRm9ybXMvQnV0dG9uLmNzIiwiV2luZG93cy9Gb3Jtcy9DaGVja0JveC5jcyIsIldpbmRvd3MvRm9ybXMvRm9ybS5jcyIsIldpbmRvd3MvRm9ybXMvUGFuZWwuY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFXbUNBLE9BQU9BOzs7b0JBQXNDQSxrQ0FBNkJBOzs7OztvQkFJM0ZBLE9BQU9BOzs7b0JBR1RBLGlCQUFZQTs7b0JBRVpBLDBCQUFxQkE7b0JBQ3JCQSx5QkFBb0JBOzs7Ozs7b0JBTUFBLE9BQU9BOzs7b0JBQzNCQSxnQkFBV0E7b0JBQ1hBLGdDQUEyQkE7Ozs7O29CQUtMQSxPQUFPQTs7Ozs7b0JBa0JaQSxPQUFPQTs7O29CQUN4QkEsYUFBUUE7b0JBQ1JBLElBQUdBO3dCQUVDQTt3QkFDQUE7O3dCQUlBQSwyQkFBc0JBO3dCQUN0QkEsNEJBQXVCQTs7Ozs7O29CQUtQQSxPQUFPQTs7O29CQUMzQkEsZ0JBQVdBO29CQUNYQSxnQkFBV0E7Ozs7O29CQUlpQkEsT0FBT0E7OztvQkFDbkNBLGlCQUFZQTtvQkFDWkEsSUFBR0E7d0JBRUNBLHdCQUFtQkE7O3dCQUluQkE7Ozs7OztvQkFRRkEsT0FBT0E7OztvQkFHVEEsa0JBQWFBO29CQUNiQSxxQ0FBZ0NBOzs7OztvQkFPOUJBLE9BQU9BOzs7b0JBR1RBLGdCQUFXQTtvQkFDWEE7Ozs7O29CQU9FQSxPQUFPQTs7O29CQUdUQSxpQkFBWUE7b0JBQ1pBOzs7Ozs7Ozs7Ozs7OztvQkF1RUVBLE9BQU9BOzs7b0JBR1RBLFlBQU9BO29CQUNQQSxJQUFHQTt3QkFFQ0EseUJBQW9CQSxDQUFDQTs7d0JBSXJCQTs7b0JBRUpBOzs7OztvQkFNeUJBLE9BQU9BOzs7b0JBQ2hDQSxhQUFRQTtvQkFDUkEsSUFBR0EsY0FBU0E7d0JBRVJBO3dCQUNBQTs7d0JBSUFBLDhCQUF5QkE7d0JBQ3pCQSxnQ0FBMkJB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O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JB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Q2JBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBLGdEQUFpQkE7OztvQkFLakJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLGdIQUFrQkE7b0JBQ2xCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsZ0hBQWtCQTtvQkFDbEJBLGdIQUFrQkE7b0JBQ2xCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsZ0hBQWtCQTtvQkFDbEJBLGdIQUFrQkE7b0JBQ2xCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTs7O29CQU1qQkEsUUFBVUE7O29CQUVWQTtvQkFDQUEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsZ0NBQVNBO29CQUNUQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBU0E7b0JBQ1RBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFTQTtvQkFDVEEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVNBO29CQUNUQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBU0E7b0JBQ1RBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFTQTtvQkFDVEEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NB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QW9CQTs0QkFDcEJBLElBQUdBO2dDQUVDQSwwQkFBcUJBO2dDQUNyQkEsc0JBQWlCQTs7Z0NBSWpCQTtnQ0FDQUE7Ozs0QkFLSkEseUJBQW9CQTs0QkFDcEJBOzRCQUNBQTs7O3dCQUtKQTt3QkFDQUE7d0JBQ0FBOzs7Ozs7b0JBUUZBLE9BQU9BOzs7b0JBR1RBLElBQUdBO3dCQUVDQSxpQkFBWUE7d0JBQ1pBLElBQUlBOzRCQUVBQSx5QkFBb0JBOzs0QkFJcEJBOzs7Ozs7Ozs7O2dFQWhGU0E7Z0JBRXJCQSx5QkFBU0E7Z0JBQ1RBLFVBQVVBLGFBQVlBOzs7O2dCQUl0QkEseUJBQTBEQSxDQUFDQSxpQkFBV0Esd0VBQTZEQTtnQkFDbklBLHlCQUEwREEsYUFBT0Esc0RBQStDQTs7Z0JBRWhIQTtnQkFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQ1E2QkE7b0JBRTdCQSxPQUFPQSxJQUFJQSwyQkFBS0EsZUFBYUEsQ0FBQ0EsNkNBQWlCQSx3REFBa0JBLGdCQUFjQSxDQUFDQSw0Q0FBZ0JBOzttQ0FHekVBO29CQUV2QkEsT0FBT0EsSUFBSUEsMkJBQUtBLHFCQUFtQkEsQ0FBQ0EsNkNBQWlCQSx3REFBa0JBLHNCQUFvQkEsQ0FBQ0EsNENBQWdCQTs7Ozs7Ozs7OztvQkFYOUVBLE9BQU9BOzs7b0JBQ2pDQSw2RUFBWUE7Ozs7O29CQXlCV0EsT0FBT0Esd0NBQWNBOzs7b0JBQWVBLFlBQU9BLGtDQUFRQTs7Ozs7Ozs7Z0JBcEM5RUEsaUJBQVlBO2dCQUNaQSwrQkFBMEJBLFdBQVdBLHVEQUE2QkE7Z0JBQ2xFQSxrQ0FBNkJBLFdBQVdBLDBEQUFnQ0E7O2dCQUV4RUEsZ0NBQTJCQSxXQUFXQSx3REFBOEJBO2dCQUNwRUEsaUNBQTRCQSxXQUFXQSx5REFBK0JBOztnQkFFdEVBOzs7OytCQWlCMkJBOzs7O2dCQVEzQkEsMEJBQXVFQTs7Ozs7Ozs7Ozs7Z0JDdEN2RUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldCB7IHJldHVybiBFbGVtZW50LmdldEF0dHJpYnV0ZShcIk5hbWVcIik7IH0gc2V0IHsgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJOYW1lXCIsIHZhbHVlKTsgfSB9XHJcbiAgICAgICAgcHJpdmF0ZSBQb2ludCBfbG9jYXRpb247XHJcbiAgICAgICAgcHVibGljIFBvaW50IExvY2F0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2xvY2F0aW9uOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfbG9jYXRpb24gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmxlZnQgPSBfbG9jYXRpb24uWCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUudG9wID0gX2xvY2F0aW9uLlkgKyBcInB4XCI7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX3Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHB1YmxpYyBib29sIFZpc2libGUgeyBnZXQgeyByZXR1cm4gX3Zpc2libGU7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF92aXNpYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBfdmlzaWJsZSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCBDb250cm9sIF9wYXJlbnQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIFBhcmVudCB7IGdldCB7IHJldHVybiBfcGFyZW50OyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIEZvcm0gR2V0Rm9ybSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5QYXJlbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5QYXJlbnQgaXMgRm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyZW50LkFzPEZvcm0+KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJlbnQuR2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFNpemUgX3NpemU7XHJcbiAgICAgICAgcHVibGljIFNpemUgU2l6ZSB7IGdldCB7IHJldHVybiBfc2l6ZTsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3NpemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF9hdXRvU2l6ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLndpZHRoID0gX3NpemUuV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBfc2l6ZS5IZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF90YWJTdG9wO1xyXG4gICAgICAgIHB1YmxpYyBib29sIFRhYlN0b3AgeyBnZXQgeyByZXR1cm4gX3RhYlN0b3A7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF90YWJTdG9wID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBUYWJJbmRleCA9IF90YWJJbmRleDtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpbnQgX3RhYkluZGV4O1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBUYWJJbmRleCB7IGdldCB7IHJldHVybiBfdGFiSW5kZXg7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF90YWJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoVGFiU3RvcClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnRhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJUYWJJbmRleFwiKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFRleHQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIENvbG9yIF9iYWNrQ29sb3I7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29sb3IgQmFja0NvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2JhY2tDb2xvcjsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2JhY2tDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfYmFja0NvbG9yLlRvSHRtbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRW5hYmxlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9lbmFibGVkOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXBwbHlEaXNhYmxlZCgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9yZWFkb25seSA9IGZhbHNlO1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgUmVhZE9ubHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfcmVhZG9ubHk7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9yZWFkb25seSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXBwbHlSZWFkb25seSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBcHBseURpc2FibGVkKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihFbmFibGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgdm9pZCBMb2FkKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIE9uTG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkxvYWQoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2xvciBGb3JlQ29sb3IgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBcHBseVJlYWRvbmx5KFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFJlYWRPbmx5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZG9ubHlcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZG9ubHlcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9iamVjdCBfdGFnO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVzZSBUYWcgYXMgQ2xhc3MgTmFtZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF90YWcgaXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBcHBseURpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sQ29sbGVjdGlvbiBDb250cm9scyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwcml2YXRlIEZvbnQgX2ZvbnQ7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRm9udCBGb250IHsgZ2V0IHsgcmV0dXJuIF9mb250OyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfZm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX2ZvbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IF9mb250LkVtU2l6ZS5Ub1N0cmluZygpICsgXCJwdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IF9mb250LkZhbWlseU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2F1dG9TaXplO1xyXG4gICAgICAgIHByb3RlY3RlZCBib29sIF9pbml0O1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgQXV0b1NpemUgeyBnZXQgeyByZXR1cm4gX2F1dG9TaXplOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfYXV0b1NpemUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2l6ZSA9IF9zaXplO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBDb250cm9sKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIENvbnRyb2xzID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlcmJveFwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBcImluaGVyaXRcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJpbmhlcml0XCI7XHJcblxyXG4gICAgICAgICAgICBUYWJTdG9wID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQub25jbGljayA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRWxlbWVudC5vbmNsaWNrRm4oKGV2KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIE9uQ2xpY2soRXZlbnRBcmdzLkVtcHR5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIF9pbml0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgT25DbGljayhFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChDbGljayAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgQ2xpY2sodGhpcywgZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUGFkZGluZyBNYXJnaW4geyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nIFBhZGRpbmcgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgRXZlbnRIYW5kbGVyIENsaWNrO1xyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBTdXNwZW5kTGF5b3V0KClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZXN1bWVMYXlvdXQoYm9vbCBwZXJmb3JtTGF5b3V0KVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFBlcmZvcm1MYXlvdXQoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUNvbHVtblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRGF0YVRhYmxlIFRhYmxlIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhQ29sdW1uKERhdGFUYWJsZSB0YWJsZSwgc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBOYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgVGFibGUgPSB0YWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhQ29sdW1uQ29sbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEYXRhVGFibGUgVGFibGUge2dldDtwcml2YXRlIHNldDt9XHJcbiAgICAgICAgaW50ZXJuYWwgTGlzdDxEYXRhQ29sdW1uPiBDb2x1bW5zO1xyXG5cclxuICAgICAgICBwdWJsaWMgaW50IEdldENvbHVtbkluZGV4KHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBDb2x1bW5zLkNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChDb2x1bW5zW2ldLk5hbWUgPT0gbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7Z2V0e3JldHVybiBDb2x1bW5zLkNvdW50O319XHJcblxyXG4gICAgICAgIGludGVybmFsIERhdGFDb2x1bW5Db2xsZWN0aW9uKERhdGFUYWJsZSB0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgICAgIENvbHVtbnMgPSBuZXcgTGlzdDxEYXRhQ29sdW1uPigpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhQ29sdW1uIEFkZChzdHJpbmcgY29sdW1uTmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IERhdGFDb2x1bW4oVGFibGUsIGNvbHVtbk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgQ29sdW1ucy5BZGQoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRhdGFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFSb3dcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50IEVsZW1lbnQ7ICAgICAgICBcclxuICAgICAgICBpbnRlcm5hbCBMaXN0PG9iamVjdD4gZGF0YTtcclxuICAgICAgICBwdWJsaWMgRGF0YUNvbHVtbkNvbGxlY3Rpb24gQ29sdW1ucyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBpbnRlcm5hbCBEYXRhUm93KERhdGFDb2x1bW5Db2xsZWN0aW9uIGNvbHVtbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb2x1bW5zID0gY29sdW1ucztcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBMaXN0PG9iamVjdD4oQ29sdW1ucy5Db3VudCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEVsZW1lbnQgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG5ldyBvYmplY3QgdGhpc1tzdHJpbmcgY29sdW1uTmFtZV0geyBnZXQge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbQ29sdW1ucy5HZXRDb2x1bW5JbmRleChjb2x1bW5OYW1lKV07XHJcbiAgICAgICAgICAgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIHRoaXNbQ29sdW1ucy5HZXRDb2x1bW5JbmRleChjb2x1bW5OYW1lKV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIG9iamVjdCB0aGlzW2ludCBjb2x1bW5JbmRleF0geyBnZXQge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMCB8fCBjb2x1bW5JbmRleCA+IENvbHVtbnMuQ291bnQgLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2NvbHVtbkluZGV4XTtcclxuICAgICAgICAgICAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgMClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggPiBDb2x1bW5zLkNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ID4gZGF0YS5Db3VudCAtIDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IGRhdGEuQ291bnQ7IGkgPCBjb2x1bW5JbmRleCArIDE7IGkrKylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYyA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGNvbHVtbkluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYy5pbm5lclRleHQgPSAodmFsdWUgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZURhdGFDZWxsRWxlbWVudD4oZGMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50PihkYyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jaGlsZHJlbltjb2x1bW5JbmRleF0uQXM8UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KCkuaW5uZXJUZXh0ID0gKHZhbHVlICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtjb2x1bW5JbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfSAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRhdGFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFSb3dDb2xsZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFUYWJsZSBUYWJsZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBpbnRlcm5hbCBMaXN0PERhdGFSb3c+IHJvd3M7XHJcblxyXG4gICAgICAgIGludGVybmFsIERhdGFSb3dDb2xsZWN0aW9uKERhdGFUYWJsZSB0YWJsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgICAgIHJvd3MgPSBuZXcgTGlzdDxEYXRhUm93PigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWRkKERhdGFSb3cgZHIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3dzLkFkZChkcik7XHJcbiAgICAgICAgICAgIFRhYmxlLk9uTmV3Um93KFRhYmxlLCBuZXcgV2luZG93cy5Gb3Jtcy5OZXdSb3dFdmVudEFyZ3MoKSB7IFJvdyA9IGRyIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhVGFibGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGF0YUNvbHVtbkNvbGxlY3Rpb24gQ29sdW1ucyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRGF0YVJvd0NvbGxlY3Rpb24gUm93cyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIERhdGFUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb2x1bW5zID0gbmV3IERhdGFDb2x1bW5Db2xsZWN0aW9uKHRoaXMpO1xyXG4gICAgICAgICAgICBSb3dzID0gbmV3IERhdGFSb3dDb2xsZWN0aW9uKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgRGF0YVJvdyBOZXdSb3coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRyID0gbmV3IERhdGFSb3coQ29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZHI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBY2NlcHRDaGFuZ2VzKClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV2ZW50IE5ld1Jvd0V2ZW50SGFuZGxlciBOZXdSb3dFdmVudDtcclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBPbk5ld1JvdyhvYmplY3Qgc2VuZGVyLCBOZXdSb3dFdmVudEFyZ3MgYXJncylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKE5ld1Jvd0V2ZW50ICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE5ld1Jvd0V2ZW50KHNlbmRlciwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBDb2xvclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ29sb3IgRW1wdHk7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc2hvcnQgU3RhdGVLbm93bkNvbG9yVmFsaWQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc2hvcnQgU3RhdGVBUkdCVmFsdWVWYWxpZDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzaG9ydCBTdGF0ZVZhbHVlTWFzaztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzaG9ydCBTdGF0ZU5hbWVWYWxpZDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsb25nIE5vdERlZmluZWRWYWx1ZTtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBBUkdCQWxwaGFTaGlmdCA9IDB4MTg7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQVJHQlJlZFNoaWZ0ID0gMHgxMDtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBBUkdCR3JlZW5TaGlmdCA9IDg7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQVJHQkJsdWVTaGlmdCA9IDA7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzdHJpbmcgbmFtZTtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGxvbmcgdmFsdWU7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBzaG9ydCBrbm93bkNvbG9yO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc2hvcnQgc3RhdGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVHJhbnNwYXJlbnRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFsaWNlQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BbGljZUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFudGlxdWVXaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BbnRpcXVlV2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFxdWFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQXF1YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXF1YW1hcmluZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BcXVhbWFyaW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBenVyZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BenVyZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmVpZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmVpZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJpc3F1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CaXNxdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJsYWNrXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJsYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCbGFuY2hlZEFsbW9uZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CbGFuY2hlZEFsbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCbHVlVmlvbGV0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJsdWVWaW9sZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJyb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCdXJseVdvb2RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQnVybHlXb29kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDYWRldEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ2FkZXRCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDaGFydHJldXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNoYXJ0cmV1c2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENob2NvbGF0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5DaG9jb2xhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvcmFsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvcmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb3JuZmxvd2VyQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db3JuZmxvd2VyQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29ybnNpbGtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29ybnNpbGspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENyaW1zb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ3JpbXNvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ3lhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5DeWFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0N5YW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0N5YW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtHb2xkZW5yb2RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0dvbGRlbnJvZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0dyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0dyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtLaGFraVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrS2hha2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtNYWdlbnRhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtNYWdlbnRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrT2xpdmVHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrT2xpdmVHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya09yYW5nZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrT3JhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrT3JjaGlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtPcmNoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1JlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1NhbG1vblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrU2FsbW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrU2VhR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1NlYUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrU2xhdGVCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtTbGF0ZUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtTbGF0ZUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1NsYXRlR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1R1cnF1b2lzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrVHVycXVvaXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrVmlvbGV0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtWaW9sZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERlZXBQaW5rXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRlZXBQaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEZWVwU2t5Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EZWVwU2t5Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGltR3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EaW1HcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEb2RnZXJCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRvZGdlckJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZpcmVicmlja1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5GaXJlYnJpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZsb3JhbFdoaXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkZsb3JhbFdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGb3Jlc3RHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Gb3Jlc3RHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnVjaHNpYVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5GdWNoc2lhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHYWluc2Jvcm9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR2FpbnNib3JvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHaG9zdFdoaXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdob3N0V2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdvbGRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR29sZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR29sZGVucm9kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdvbGRlbnJvZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JlZW5ZZWxsb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JlZW5ZZWxsb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEhvbmV5ZGV3XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhvbmV5ZGV3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBIb3RQaW5rXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhvdFBpbmspO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluZGlhblJlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmRpYW5SZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluZGlnb1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmRpZ28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEl2b3J5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkl2b3J5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBLaGFraVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5LaGFraSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGF2ZW5kZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGF2ZW5kZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExhdmVuZGVyQmx1c2hcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGF2ZW5kZXJCbHVzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGF3bkdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxhd25HcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGVtb25DaGlmZm9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxlbW9uQ2hpZmZvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRDb3JhbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodENvcmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodEN5YW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRDeWFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodEdvbGRlbnJvZFllbGxvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodEdvbGRlbnJvZFllbGxvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodEdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodEdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFBpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRQaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFNhbG1vblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFNhbG1vbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTZWFHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFNlYUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFNreUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTa3lCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFNsYXRlR3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFNsYXRlR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTdGVlbEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTdGVlbEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0WWVsbG93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0WWVsbG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpbWVHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaW1lR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpbmVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpbmVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNYWdlbnRhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1hZ2VudGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1hcm9vblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NYXJvb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bUFxdWFtYXJpbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtQXF1YW1hcmluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1CbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1PcmNoaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtT3JjaGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1QdXJwbGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtUHVycGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1TZWFHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1TZWFHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtU2xhdGVCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVNsYXRlQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtU3ByaW5nR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtU3ByaW5nR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVR1cnF1b2lzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1UdXJxdW9pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVZpb2xldFJlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1WaW9sZXRSZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1pZG5pZ2h0Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NaWRuaWdodEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1pbnRDcmVhbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NaW50Q3JlYW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1pc3R5Um9zZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NaXN0eVJvc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1vY2Nhc2luXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1vY2Nhc2luKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBOYXZham9XaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5OYXZham9XaGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTmF2eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5OYXZ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPbGRMYWNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9sZExhY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE9saXZlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9saXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPbGl2ZURyYWJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuT2xpdmVEcmFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPcmFuZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuT3JhbmdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPcmFuZ2VSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuT3JhbmdlUmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPcmNoaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuT3JjaGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYWxlR29sZGVucm9kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBhbGVHb2xkZW5yb2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBhbGVHcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYWxlR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBhbGVUdXJxdW9pc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFsZVR1cnF1b2lzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFsZVZpb2xldFJlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYWxlVmlvbGV0UmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYXBheWFXaGlwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBhcGF5YVdoaXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBlYWNoUHVmZlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QZWFjaFB1ZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBlcnVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGVydSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQbHVtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBsdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBvd2RlckJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUG93ZGVyQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUHVycGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlB1cnBsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUm9zeUJyb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlJvc3lCcm93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUm95YWxCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlJveWFsQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2FkZGxlQnJvd25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2FkZGxlQnJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNhbG1vblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TYWxtb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNhbmR5QnJvd25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2FuZHlCcm93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2VhR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2VhR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNlYVNoZWxsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNlYVNoZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTaWVubmFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2llbm5hKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTaWx2ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2lsdmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTa3lCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNreUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNsYXRlQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TbGF0ZUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNsYXRlR3JheVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TbGF0ZUdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNub3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU25vdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU3ByaW5nR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU3ByaW5nR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFN0ZWVsQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TdGVlbEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5UYW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRlYWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVGVhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVGhpc3RsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5UaGlzdGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUb21hdG9cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVG9tYXRvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUdXJxdW9pc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVHVycXVvaXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBWaW9sZXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVmlvbGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaGVhdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaGVhdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuV2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFdoaXRlU21va2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuV2hpdGVTbW9rZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgWWVsbG93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlllbGxvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgWWVsbG93R3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuWWVsbG93R3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCBDb2xvcihLbm93bkNvbG9yIGtub3duQ29sb3IpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMEw7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZUtub3duQ29sb3JWYWxpZDtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5rbm93bkNvbG9yID0gKHNob3J0KWtub3duQ29sb3I7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIENvbG9yKGxvbmcgdmFsdWUsIHNob3J0IHN0YXRlLCBzdHJpbmcgbmFtZSwgS25vd25Db2xvciBrbm93bkNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMua25vd25Db2xvciA9IChzaG9ydClrbm93bkNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ5dGUgUlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYnl0ZSkoKHRoaXMuVmFsdWUgPj4gMHgxMCkgJiAweGZmTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBieXRlIEdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGJ5dGUpKCh0aGlzLlZhbHVlID4+IDgpICYgMHhmZkwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnl0ZSBCXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChieXRlKSh0aGlzLlZhbHVlICYgMHhmZkwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnl0ZSBBXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChieXRlKSgodGhpcy5WYWx1ZSA+PiAweDE4KSAmIDB4ZmZMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNLbm93bkNvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgodGhpcy5zdGF0ZSAmIFN0YXRlS25vd25Db2xvclZhbGlkKSA+IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc0VtcHR5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlID09IDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc05hbWVkQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZU5hbWVWYWxpZCkgPT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Jc0tub3duQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNTeXN0ZW1Db2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5Jc0tub3duQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua25vd25Db2xvciA+IDB4MWEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmtub3duQ29sb3IgPiAweGE3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGltcGxpY2l0IG9wZXJhdG9yIHN0cmluZyhDb2xvciBjb2xvcikgIC8vIGltcGxpY2l0IGRpZ2l0IHRvIGJ5dGUgY29udmVyc2lvbiBvcGVyYXRvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yLlRvSHRtbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbXBsaWNpdCBvcGVyYXRvciBDb2xvcihzdHJpbmcgaGV4VmFsdWUpICAvLyBpbXBsaWNpdCBkaWdpdCB0byBieXRlIGNvbnZlcnNpb24gb3BlcmF0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb2xvci5Gcm9tSGV4KGhleFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIE5hbWVBbmRBUkdCVmFsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcInt7TmFtZT17MH0sIEFSR0I9KHsxfSwgezJ9LCB7M30sIHs0fSl9fVwiLCB0aGlzLk5hbWUsIHRoaXMuQSwgdGhpcy5SLCB0aGlzLkcsIHRoaXMuQik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlTmFtZVZhbGlkKSAhPSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuSXNLbm93bkNvbG9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBDb252ZXJ0LlRvU3RyaW5nKHRoaXMudmFsdWUsIDB4MTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyaW5nIHN0ciA9IEtub3duQ29sb3JUYWJsZS5Lbm93bkNvbG9yVG9OYW1lKChLbm93bkNvbG9yKXRoaXMua25vd25Db2xvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmtub3duQ29sb3IuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBsb25nIFZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVWYWx1ZU1hc2spICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Jc0tub3duQ29sb3IpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChsb25nKUtub3duQ29sb3JUYWJsZS5Lbm93bkNvbG9yVG9BcmdiKChLbm93bkNvbG9yKXRoaXMua25vd25Db2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTm90RGVmaW5lZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIENoZWNrQnl0ZShpbnQgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoKHZhbHVlIDwgMCkgfHwgKHZhbHVlID4gMHhmZikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBBcmd1bWVudEV4Y2VwdGlvbihcIkludmFsaWRFeDJCb3VuZEFyZ3VtZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsb25nIE1ha2VBcmdiKGJ5dGUgYWxwaGEsIGJ5dGUgcmVkLCBieXRlIGdyZWVuLCBieXRlIGJsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGFscGhhIDw8IDI0KSB8IChyZWQgPDwgMTYpIHwgKGdyZWVuIDw8IDgpIHwgYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUFyZ2IoaW50IGFyZ2IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGFyZ2IgJiAoKGxvbmcpMHhmZmZmZmZmZkwpLCBTdGF0ZUFSR0JWYWx1ZVZhbGlkLCBudWxsLCAoS25vd25Db2xvcikwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUFyZ2IoaW50IGFscGhhLCBpbnQgcmVkLCBpbnQgZ3JlZW4sIGludCBibHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ2hlY2tCeXRlKGFscGhhKTtcclxuICAgICAgICAgICAgQ2hlY2tCeXRlKHJlZCk7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShncmVlbik7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShibHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihNYWtlQXJnYigoYnl0ZSlhbHBoYSwgKGJ5dGUpcmVkLCAoYnl0ZSlncmVlbiwgKGJ5dGUpYmx1ZSksIFN0YXRlQVJHQlZhbHVlVmFsaWQsIG51bGwsIChLbm93bkNvbG9yKTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGcm9tQXJnYihpbnQgYWxwaGEsIENvbG9yIGJhc2VDb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShhbHBoYSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoTWFrZUFyZ2IoKGJ5dGUpYWxwaGEsIGJhc2VDb2xvci5SLCBiYXNlQ29sb3IuRywgYmFzZUNvbG9yLkIpLCBTdGF0ZUFSR0JWYWx1ZVZhbGlkLCBudWxsLCAoS25vd25Db2xvcikwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUFyZ2IoaW50IHJlZCwgaW50IGdyZWVuLCBpbnQgYmx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBGcm9tQXJnYigweGZmLCByZWQsIGdyZWVuLCBibHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBJc0VudW1WYWxpZChFbnVtIGVudW1WYWx1ZSwgaW50IHZhbHVlLCBpbnQgbWluVmFsdWUsIGludCBtYXhWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKHZhbHVlID49IG1pblZhbHVlKSAmJiAodmFsdWUgPD0gbWF4VmFsdWUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUtub3duQ29sb3IoS25vd25Db2xvciBjb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBjb21wb25lbnRUb0hleChieXRlIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHggPSB2YWx1ZS5Ub1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIHJldHVybiAoeC5MZW5ndGggPT0gMSA/IFwiMFwiIDogXCJcIikgKyB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0cmluZyBUb0h0bWwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoSXNLbm93bkNvbG9yKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbG9yLkZyb21BcmdiKEtub3duQ29sb3JUYWJsZS5Lbm93bkNvbG9yVG9BcmdiKChLbm93bkNvbG9yKWtub3duQ29sb3IpKS5Ub0h0bWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChBICE9IDI1NSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIiN7MH17MX17Mn17M31cIiwgY29tcG9uZW50VG9IZXgoQSksIGNvbXBvbmVudFRvSGV4KFIpLCBjb21wb25lbnRUb0hleChHKSwgY29tcG9uZW50VG9IZXgoQikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmcuRm9ybWF0KFwiI3swfXsxfXsyfVwiLCBjb21wb25lbnRUb0hleChSKSwgY29tcG9uZW50VG9IZXgoRyksIGNvbXBvbmVudFRvSGV4KEIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGcm9tSGV4KHN0cmluZyB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5TdGFydHNXaXRoKFwiI1wiKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBGcm9tSGV4KHZhbHVlLlN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbG9yLkZyb21BcmdiKFNjcmlwdC5QYXJzZUludCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZmxvYXQgR2V0QnJpZ2h0bmVzcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdCB6ID0gUiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHggPSBHIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgYyA9IEIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB2ID0gejtcclxuICAgICAgICAgICAgZmxvYXQgYiA9IHo7XHJcbiAgICAgICAgICAgIGlmICh4ID4gdilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPiB2KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA8IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjIDwgYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgodiArIGIpIC8gMmYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZsb2F0IEdldEh1ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuUiA9PSB0aGlzLkcpICYmICh0aGlzLkcgPT0gdGhpcy5CKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsb2F0IHogPSBSIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgeCA9IEcgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCBjID0gQiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHYgPSAwZjtcclxuICAgICAgICAgICAgZmxvYXQgYiA9IHo7XHJcbiAgICAgICAgICAgIGZsb2F0IG4gPSB6O1xyXG4gICAgICAgICAgICBpZiAoeCA+IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjID4gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPCBuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA8IG4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG4gPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsb2F0IG51bTYgPSBiIC0gbjtcclxuICAgICAgICAgICAgaWYgKHogPT0gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9ICh4IC0gYykgLyBudW02O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHggPT0gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IDJmICsgKChjIC0geikgLyBudW02KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjID09IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSA0ZiArICgoeiAtIHgpIC8gbnVtNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdiAqPSA2MGY7XHJcbiAgICAgICAgICAgIGlmICh2IDwgMGYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgKz0gMzYwZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGZsb2F0IHEgPSAyNTVmO1xyXG5cclxuICAgICAgICBwdWJsaWMgZmxvYXQgR2V0U2F0dXJhdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdCB6ID0gUiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHggPSBHIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgYyA9IEIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB2ID0gMGY7XHJcbiAgICAgICAgICAgIGZsb2F0IGIgPSB6O1xyXG4gICAgICAgICAgICBmbG9hdCBuID0gejtcclxuICAgICAgICAgICAgaWYgKHggPiBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA+IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4IDwgbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPCBuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYiA9PSBuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbG9hdCBtID0gKGIgKyBuKSAvIDJmO1xyXG4gICAgICAgICAgICBpZiAobSA8PSAwLjUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGIgLSBuKSAvIChiICsgbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKGIgLSBuKSAvICgoMmYgLSBiKSAtIG4pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgVG9BcmdiKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoaW50KXRoaXMuVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgS25vd25Db2xvciBUb0tub3duQ29sb3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChLbm93bkNvbG9yKXRoaXMua25vd25Db2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVG9TdHJpbmcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgU3RyaW5nQnVpbGRlciBidWlsZGVyID0gbmV3IFN0cmluZ0J1aWxkZXIoMHgyMCk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKGJhc2UuR2V0VHlwZSgpLk5hbWUpO1xyXG4gICAgICAgICAgICBidWlsZGVyLkFwcGVuZChcIiBbXCIpO1xyXG4gICAgICAgICAgICBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZU5hbWVWYWxpZCkgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQodGhpcy5OYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlS25vd25Db2xvclZhbGlkKSAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLkFwcGVuZCh0aGlzLk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVWYWx1ZU1hc2spICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kRm9ybWF0KFwiQT17MH0sIFI9ezF9LCBHPXsyfSwgQj17M31cIiwgQSwgUiwgRywgQik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLkFwcGVuZChcIkVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKFwiXVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXIuVG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBvcGVyYXRvciA9PShDb2xvciBsZWZ0LCBDb2xvciByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICgoKGxlZnQudmFsdWUgIT0gcmlnaHQudmFsdWUpIHx8IChsZWZ0LnN0YXRlICE9IHJpZ2h0LnN0YXRlKSkgfHwgKGxlZnQua25vd25Db2xvciAhPSByaWdodC5rbm93bkNvbG9yKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKGxlZnQubmFtZSA9PSByaWdodC5uYW1lKSB8fCAoKChsZWZ0Lm5hbWUgIT0gbnVsbCkgJiYgKHJpZ2h0Lm5hbWUgIT0gbnVsbCkpICYmIGxlZnQubmFtZS5FcXVhbHMocmlnaHQubmFtZSkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYm9vbCBvcGVyYXRvciAhPShDb2xvciBsZWZ0LCBDb2xvciByaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGxlZnQgPT0gcmlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgRXF1YWxzKG9iamVjdCBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAob2JqIGlzIENvbG9yKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb2xvciBjb2xvciA9IChDb2xvcilvYmo7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCh0aGlzLnZhbHVlID09IGNvbG9yLnZhbHVlKSAmJiAodGhpcy5zdGF0ZSA9PSBjb2xvci5zdGF0ZSkpICYmICh0aGlzLmtub3duQ29sb3IgPT0gY29sb3Iua25vd25Db2xvcikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgodGhpcy5uYW1lID09IGNvbG9yLm5hbWUpIHx8ICgoKHRoaXMubmFtZSAhPSBudWxsKSAmJiAoY29sb3IubmFtZSAhPSBudWxsKSkgJiYgdGhpcy5uYW1lLkVxdWFscyh0aGlzLm5hbWUpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGludCBHZXRIYXNoQ29kZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCh0aGlzLnZhbHVlLkdldEhhc2hDb2RlKCkgXiB0aGlzLnN0YXRlLkdldEhhc2hDb2RlKCkpIF4gdGhpcy5rbm93bkNvbG9yLkdldEhhc2hDb2RlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIENvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVtcHR5ID0gbmV3IENvbG9yKCk7XHJcbiAgICAgICAgICAgIFN0YXRlS25vd25Db2xvclZhbGlkID0gMTtcclxuICAgICAgICAgICAgU3RhdGVBUkdCVmFsdWVWYWxpZCA9IDI7XHJcbiAgICAgICAgICAgIFN0YXRlVmFsdWVNYXNrID0gU3RhdGVBUkdCVmFsdWVWYWxpZDtcclxuICAgICAgICAgICAgU3RhdGVOYW1lVmFsaWQgPSA4O1xyXG4gICAgICAgICAgICBOb3REZWZpbmVkVmFsdWUgPSAwTDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudW0gS25vd25Db2xvclxyXG4gICAge1xyXG4gICAgICAgIEFjdGl2ZUJvcmRlciA9IDEsXHJcbiAgICAgICAgQWN0aXZlQ2FwdGlvbiA9IDIsXHJcbiAgICAgICAgQWN0aXZlQ2FwdGlvblRleHQgPSAzLFxyXG4gICAgICAgIEFsaWNlQmx1ZSA9IDB4MWMsXHJcbiAgICAgICAgQW50aXF1ZVdoaXRlID0gMHgxZCxcclxuICAgICAgICBBcHBXb3Jrc3BhY2UgPSA0LFxyXG4gICAgICAgIEFxdWEgPSAzMCxcclxuICAgICAgICBBcXVhbWFyaW5lID0gMHgxZixcclxuICAgICAgICBBenVyZSA9IDB4MjAsXHJcbiAgICAgICAgQmVpZ2UgPSAweDIxLFxyXG4gICAgICAgIEJpc3F1ZSA9IDB4MjIsXHJcbiAgICAgICAgQmxhY2sgPSAweDIzLFxyXG4gICAgICAgIEJsYW5jaGVkQWxtb25kID0gMHgyNCxcclxuICAgICAgICBCbHVlID0gMHgyNSxcclxuICAgICAgICBCbHVlVmlvbGV0ID0gMHgyNixcclxuICAgICAgICBCcm93biA9IDB4MjcsXHJcbiAgICAgICAgQnVybHlXb29kID0gNDAsXHJcbiAgICAgICAgQnV0dG9uRmFjZSA9IDB4YTgsXHJcbiAgICAgICAgQnV0dG9uSGlnaGxpZ2h0ID0gMHhhOSxcclxuICAgICAgICBCdXR0b25TaGFkb3cgPSAxNzAsXHJcbiAgICAgICAgQ2FkZXRCbHVlID0gMHgyOSxcclxuICAgICAgICBDaGFydHJldXNlID0gMHgyYSxcclxuICAgICAgICBDaG9jb2xhdGUgPSAweDJiLFxyXG4gICAgICAgIENvbnRyb2wgPSA1LFxyXG4gICAgICAgIENvbnRyb2xEYXJrID0gNixcclxuICAgICAgICBDb250cm9sRGFya0RhcmsgPSA3LFxyXG4gICAgICAgIENvbnRyb2xMaWdodCA9IDgsXHJcbiAgICAgICAgQ29udHJvbExpZ2h0TGlnaHQgPSA5LFxyXG4gICAgICAgIENvbnRyb2xUZXh0ID0gMTAsXHJcbiAgICAgICAgQ29yYWwgPSAweDJjLFxyXG4gICAgICAgIENvcm5mbG93ZXJCbHVlID0gMHgyZCxcclxuICAgICAgICBDb3Juc2lsayA9IDB4MmUsXHJcbiAgICAgICAgQ3JpbXNvbiA9IDB4MmYsXHJcbiAgICAgICAgQ3lhbiA9IDB4MzAsXHJcbiAgICAgICAgRGFya0JsdWUgPSAweDMxLFxyXG4gICAgICAgIERhcmtDeWFuID0gNTAsXHJcbiAgICAgICAgRGFya0dvbGRlbnJvZCA9IDB4MzMsXHJcbiAgICAgICAgRGFya0dyYXkgPSAweDM0LFxyXG4gICAgICAgIERhcmtHcmVlbiA9IDB4MzUsXHJcbiAgICAgICAgRGFya0toYWtpID0gMHgzNixcclxuICAgICAgICBEYXJrTWFnZW50YSA9IDB4MzcsXHJcbiAgICAgICAgRGFya09saXZlR3JlZW4gPSAweDM4LFxyXG4gICAgICAgIERhcmtPcmFuZ2UgPSAweDM5LFxyXG4gICAgICAgIERhcmtPcmNoaWQgPSAweDNhLFxyXG4gICAgICAgIERhcmtSZWQgPSAweDNiLFxyXG4gICAgICAgIERhcmtTYWxtb24gPSA2MCxcclxuICAgICAgICBEYXJrU2VhR3JlZW4gPSAweDNkLFxyXG4gICAgICAgIERhcmtTbGF0ZUJsdWUgPSAweDNlLFxyXG4gICAgICAgIERhcmtTbGF0ZUdyYXkgPSAweDNmLFxyXG4gICAgICAgIERhcmtUdXJxdW9pc2UgPSAweDQwLFxyXG4gICAgICAgIERhcmtWaW9sZXQgPSAweDQxLFxyXG4gICAgICAgIERlZXBQaW5rID0gMHg0MixcclxuICAgICAgICBEZWVwU2t5Qmx1ZSA9IDB4NDMsXHJcbiAgICAgICAgRGVza3RvcCA9IDExLFxyXG4gICAgICAgIERpbUdyYXkgPSAweDQ0LFxyXG4gICAgICAgIERvZGdlckJsdWUgPSAweDQ1LFxyXG4gICAgICAgIEZpcmVicmljayA9IDcwLFxyXG4gICAgICAgIEZsb3JhbFdoaXRlID0gMHg0NyxcclxuICAgICAgICBGb3Jlc3RHcmVlbiA9IDB4NDgsXHJcbiAgICAgICAgRnVjaHNpYSA9IDB4NDksXHJcbiAgICAgICAgR2FpbnNib3JvID0gMHg0YSxcclxuICAgICAgICBHaG9zdFdoaXRlID0gMHg0YixcclxuICAgICAgICBHb2xkID0gMHg0YyxcclxuICAgICAgICBHb2xkZW5yb2QgPSAweDRkLFxyXG4gICAgICAgIEdyYWRpZW50QWN0aXZlQ2FwdGlvbiA9IDB4YWIsXHJcbiAgICAgICAgR3JhZGllbnRJbmFjdGl2ZUNhcHRpb24gPSAweGFjLFxyXG4gICAgICAgIEdyYXkgPSAweDRlLFxyXG4gICAgICAgIEdyYXlUZXh0ID0gMTIsXHJcbiAgICAgICAgR3JlZW4gPSAweDRmLFxyXG4gICAgICAgIEdyZWVuWWVsbG93ID0gODAsXHJcbiAgICAgICAgSGlnaGxpZ2h0ID0gMTMsXHJcbiAgICAgICAgSGlnaGxpZ2h0VGV4dCA9IDE0LFxyXG4gICAgICAgIEhvbmV5ZGV3ID0gMHg1MSxcclxuICAgICAgICBIb3RQaW5rID0gMHg1MixcclxuICAgICAgICBIb3RUcmFjayA9IDE1LFxyXG4gICAgICAgIEluYWN0aXZlQm9yZGVyID0gMHgxMCxcclxuICAgICAgICBJbmFjdGl2ZUNhcHRpb24gPSAweDExLFxyXG4gICAgICAgIEluYWN0aXZlQ2FwdGlvblRleHQgPSAweDEyLFxyXG4gICAgICAgIEluZGlhblJlZCA9IDB4NTMsXHJcbiAgICAgICAgSW5kaWdvID0gMHg1NCxcclxuICAgICAgICBJbmZvID0gMHgxMyxcclxuICAgICAgICBJbmZvVGV4dCA9IDIwLFxyXG4gICAgICAgIEl2b3J5ID0gMHg1NSxcclxuICAgICAgICBLaGFraSA9IDB4NTYsXHJcbiAgICAgICAgTGF2ZW5kZXIgPSAweDU3LFxyXG4gICAgICAgIExhdmVuZGVyQmx1c2ggPSAweDU4LFxyXG4gICAgICAgIExhd25HcmVlbiA9IDB4NTksXHJcbiAgICAgICAgTGVtb25DaGlmZm9uID0gOTAsXHJcbiAgICAgICAgTGlnaHRCbHVlID0gMHg1YixcclxuICAgICAgICBMaWdodENvcmFsID0gMHg1YyxcclxuICAgICAgICBMaWdodEN5YW4gPSAweDVkLFxyXG4gICAgICAgIExpZ2h0R29sZGVucm9kWWVsbG93ID0gMHg1ZSxcclxuICAgICAgICBMaWdodEdyYXkgPSAweDVmLFxyXG4gICAgICAgIExpZ2h0R3JlZW4gPSAweDYwLFxyXG4gICAgICAgIExpZ2h0UGluayA9IDB4NjEsXHJcbiAgICAgICAgTGlnaHRTYWxtb24gPSAweDYyLFxyXG4gICAgICAgIExpZ2h0U2VhR3JlZW4gPSAweDYzLFxyXG4gICAgICAgIExpZ2h0U2t5Qmx1ZSA9IDEwMCxcclxuICAgICAgICBMaWdodFNsYXRlR3JheSA9IDB4NjUsXHJcbiAgICAgICAgTGlnaHRTdGVlbEJsdWUgPSAweDY2LFxyXG4gICAgICAgIExpZ2h0WWVsbG93ID0gMHg2NyxcclxuICAgICAgICBMaW1lID0gMHg2OCxcclxuICAgICAgICBMaW1lR3JlZW4gPSAweDY5LFxyXG4gICAgICAgIExpbmVuID0gMHg2YSxcclxuICAgICAgICBNYWdlbnRhID0gMHg2YixcclxuICAgICAgICBNYXJvb24gPSAweDZjLFxyXG4gICAgICAgIE1lZGl1bUFxdWFtYXJpbmUgPSAweDZkLFxyXG4gICAgICAgIE1lZGl1bUJsdWUgPSAxMTAsXHJcbiAgICAgICAgTWVkaXVtT3JjaGlkID0gMHg2ZixcclxuICAgICAgICBNZWRpdW1QdXJwbGUgPSAweDcwLFxyXG4gICAgICAgIE1lZGl1bVNlYUdyZWVuID0gMHg3MSxcclxuICAgICAgICBNZWRpdW1TbGF0ZUJsdWUgPSAweDcyLFxyXG4gICAgICAgIE1lZGl1bVNwcmluZ0dyZWVuID0gMHg3MyxcclxuICAgICAgICBNZWRpdW1UdXJxdW9pc2UgPSAweDc0LFxyXG4gICAgICAgIE1lZGl1bVZpb2xldFJlZCA9IDB4NzUsXHJcbiAgICAgICAgTWVudSA9IDB4MTUsXHJcbiAgICAgICAgTWVudUJhciA9IDB4YWQsXHJcbiAgICAgICAgTWVudUhpZ2hsaWdodCA9IDB4YWUsXHJcbiAgICAgICAgTWVudVRleHQgPSAweDE2LFxyXG4gICAgICAgIE1pZG5pZ2h0Qmx1ZSA9IDB4NzYsXHJcbiAgICAgICAgTWludENyZWFtID0gMHg3NyxcclxuICAgICAgICBNaXN0eVJvc2UgPSAxMjAsXHJcbiAgICAgICAgTW9jY2FzaW4gPSAweDc5LFxyXG4gICAgICAgIE5hdmFqb1doaXRlID0gMHg3YSxcclxuICAgICAgICBOYXZ5ID0gMHg3YixcclxuICAgICAgICBPbGRMYWNlID0gMHg3YyxcclxuICAgICAgICBPbGl2ZSA9IDB4N2QsXHJcbiAgICAgICAgT2xpdmVEcmFiID0gMHg3ZSxcclxuICAgICAgICBPcmFuZ2UgPSAweDdmLFxyXG4gICAgICAgIE9yYW5nZVJlZCA9IDB4ODAsXHJcbiAgICAgICAgT3JjaGlkID0gMHg4MSxcclxuICAgICAgICBQYWxlR29sZGVucm9kID0gMTMwLFxyXG4gICAgICAgIFBhbGVHcmVlbiA9IDB4ODMsXHJcbiAgICAgICAgUGFsZVR1cnF1b2lzZSA9IDB4ODQsXHJcbiAgICAgICAgUGFsZVZpb2xldFJlZCA9IDB4ODUsXHJcbiAgICAgICAgUGFwYXlhV2hpcCA9IDB4ODYsXHJcbiAgICAgICAgUGVhY2hQdWZmID0gMHg4NyxcclxuICAgICAgICBQZXJ1ID0gMHg4OCxcclxuICAgICAgICBQaW5rID0gMHg4OSxcclxuICAgICAgICBQbHVtID0gMHg4YSxcclxuICAgICAgICBQb3dkZXJCbHVlID0gMHg4YixcclxuICAgICAgICBQdXJwbGUgPSAxNDAsXHJcbiAgICAgICAgUmVkID0gMHg4ZCxcclxuICAgICAgICBSb3N5QnJvd24gPSAweDhlLFxyXG4gICAgICAgIFJveWFsQmx1ZSA9IDB4OGYsXHJcbiAgICAgICAgU2FkZGxlQnJvd24gPSAweDkwLFxyXG4gICAgICAgIFNhbG1vbiA9IDB4OTEsXHJcbiAgICAgICAgU2FuZHlCcm93biA9IDB4OTIsXHJcbiAgICAgICAgU2Nyb2xsQmFyID0gMHgxNyxcclxuICAgICAgICBTZWFHcmVlbiA9IDB4OTMsXHJcbiAgICAgICAgU2VhU2hlbGwgPSAweDk0LFxyXG4gICAgICAgIFNpZW5uYSA9IDB4OTUsXHJcbiAgICAgICAgU2lsdmVyID0gMTUwLFxyXG4gICAgICAgIFNreUJsdWUgPSAweDk3LFxyXG4gICAgICAgIFNsYXRlQmx1ZSA9IDB4OTgsXHJcbiAgICAgICAgU2xhdGVHcmF5ID0gMHg5OSxcclxuICAgICAgICBTbm93ID0gMHg5YSxcclxuICAgICAgICBTcHJpbmdHcmVlbiA9IDB4OWIsXHJcbiAgICAgICAgU3RlZWxCbHVlID0gMHg5YyxcclxuICAgICAgICBUYW4gPSAweDlkLFxyXG4gICAgICAgIFRlYWwgPSAweDllLFxyXG4gICAgICAgIFRoaXN0bGUgPSAweDlmLFxyXG4gICAgICAgIFRvbWF0byA9IDE2MCxcclxuICAgICAgICBUcmFuc3BhcmVudCA9IDB4MWIsXHJcbiAgICAgICAgVHVycXVvaXNlID0gMHhhMSxcclxuICAgICAgICBWaW9sZXQgPSAweGEyLFxyXG4gICAgICAgIFdoZWF0ID0gMHhhMyxcclxuICAgICAgICBXaGl0ZSA9IDB4YTQsXHJcbiAgICAgICAgV2hpdGVTbW9rZSA9IDB4YTUsXHJcbiAgICAgICAgV2luZG93ID0gMHgxOCxcclxuICAgICAgICBXaW5kb3dGcmFtZSA9IDB4MTksXHJcbiAgICAgICAgV2luZG93VGV4dCA9IDB4MWEsXHJcbiAgICAgICAgWWVsbG93ID0gMHhhNixcclxuICAgICAgICBZZWxsb3dHcmVlbiA9IDB4YTdcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcm5hbCBzdGF0aWMgY2xhc3MgS25vd25Db2xvclRhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gRmllbGRzXHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQWxwaGFTaGlmdCA9IDB4MTg7XHJcblxyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEJsdWVTaGlmdCA9IDA7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3RyaW5nW10gY29sb3JOYW1lVGFibGU7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50W10gY29sb3JUYWJsZTtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBHcmVlblNoaWZ0ID0gODtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBSZWRTaGlmdCA9IDB4MTA7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgV2luMzJCbHVlU2hpZnQgPSAweDEwO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IFdpbjMyR3JlZW5TaGlmdCA9IDg7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgV2luMzJSZWRTaGlmdCA9IDA7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIEdldENvbG9yTmFtZShpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVDb2xvck5hbWVUYWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29sb3JOYW1lVGFibGVbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWV0aG9kc1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXJnYlRvS25vd25Db2xvcihpbnQgdGFyZ2V0QVJHQilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuc3VyZUNvbG9yVGFibGUoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBjb2xvclRhYmxlLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbnQgbnVtMiA9IGNvbG9yVGFibGVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtMiA9PSB0YXJnZXRBUkdCKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENvbG9yIGNvbG9yID0gQ29sb3IuRnJvbUtub3duQ29sb3IoKEtub3duQ29sb3IpaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2xvci5Jc1N5c3RlbUNvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQ29sb3IuRnJvbUFyZ2IodGFyZ2V0QVJHQik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgRW5jb2RlKGludCBhbHBoYSwgaW50IHJlZCwgaW50IGdyZWVuLCBpbnQgYmx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoKCgocmVkIDw8IDB4MTApIHwgKGdyZWVuIDw8IDgpKSB8IGJsdWUpIHwgKGFscGhhIDw8IDB4MTgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgRW5zdXJlQ29sb3JOYW1lVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yTmFtZVRhYmxlID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEluaXRDb2xvck5hbWVUYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIEVuc3VyZUNvbG9yVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yVGFibGUgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSW5pdENvbG9yVGFibGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IEZyb21XaW4zMlZhbHVlKGludCB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbmNvZGUoMHhmZiwgdmFsdWUgJiAweGZmLCAodmFsdWUgPj4gOCkgJiAweGZmLCAodmFsdWUgPj4gMHgxMCkgJiAweGZmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgSW5pdENvbG9yTmFtZVRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0cmluZ1tdIHMgPSBuZXcgc3RyaW5nWzB4YWZdO1xyXG4gICAgICAgICAgICBzWzFdID0gXCJBY3RpdmVCb3JkZXJcIjtcclxuICAgICAgICAgICAgc1syXSA9IFwiQWN0aXZlQ2FwdGlvblwiO1xyXG4gICAgICAgICAgICBzWzNdID0gXCJBY3RpdmVDYXB0aW9uVGV4dFwiO1xyXG4gICAgICAgICAgICBzWzRdID0gXCJBcHBXb3Jrc3BhY2VcIjtcclxuICAgICAgICAgICAgc1sweGE4XSA9IFwiQnV0dG9uRmFjZVwiO1xyXG4gICAgICAgICAgICBzWzB4YTldID0gXCJCdXR0b25IaWdobGlnaHRcIjtcclxuICAgICAgICAgICAgc1sxNzBdID0gXCJCdXR0b25TaGFkb3dcIjtcclxuICAgICAgICAgICAgc1s1XSA9IFwiQ29udHJvbFwiO1xyXG4gICAgICAgICAgICBzWzZdID0gXCJDb250cm9sRGFya1wiO1xyXG4gICAgICAgICAgICBzWzddID0gXCJDb250cm9sRGFya0RhcmtcIjtcclxuICAgICAgICAgICAgc1s4XSA9IFwiQ29udHJvbExpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbOV0gPSBcIkNvbnRyb2xMaWdodExpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbMTBdID0gXCJDb250cm9sVGV4dFwiO1xyXG4gICAgICAgICAgICBzWzExXSA9IFwiRGVza3RvcFwiO1xyXG4gICAgICAgICAgICBzWzB4YWJdID0gXCJHcmFkaWVudEFjdGl2ZUNhcHRpb25cIjtcclxuICAgICAgICAgICAgc1sweGFjXSA9IFwiR3JhZGllbnRJbmFjdGl2ZUNhcHRpb25cIjtcclxuICAgICAgICAgICAgc1sxMl0gPSBcIkdyYXlUZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMTNdID0gXCJIaWdobGlnaHRcIjtcclxuICAgICAgICAgICAgc1sxNF0gPSBcIkhpZ2hsaWdodFRleHRcIjtcclxuICAgICAgICAgICAgc1sxNV0gPSBcIkhvdFRyYWNrXCI7XHJcbiAgICAgICAgICAgIHNbMHgxMF0gPSBcIkluYWN0aXZlQm9yZGVyXCI7XHJcbiAgICAgICAgICAgIHNbMHgxMV0gPSBcIkluYWN0aXZlQ2FwdGlvblwiO1xyXG4gICAgICAgICAgICBzWzB4MTJdID0gXCJJbmFjdGl2ZUNhcHRpb25UZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMHgxM10gPSBcIkluZm9cIjtcclxuICAgICAgICAgICAgc1syMF0gPSBcIkluZm9UZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMHgxNV0gPSBcIk1lbnVcIjtcclxuICAgICAgICAgICAgc1sweGFkXSA9IFwiTWVudUJhclwiO1xyXG4gICAgICAgICAgICBzWzB4YWVdID0gXCJNZW51SGlnaGxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbMHgxNl0gPSBcIk1lbnVUZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMHgxN10gPSBcIlNjcm9sbEJhclwiO1xyXG4gICAgICAgICAgICBzWzB4MThdID0gXCJXaW5kb3dcIjtcclxuICAgICAgICAgICAgc1sweDE5XSA9IFwiV2luZG93RnJhbWVcIjtcclxuICAgICAgICAgICAgc1sweDFhXSA9IFwiV2luZG93VGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MWJdID0gXCJUcmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICBzWzB4MWNdID0gXCJBbGljZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDFkXSA9IFwiQW50aXF1ZVdoaXRlXCI7XHJcbiAgICAgICAgICAgIHNbMzBdID0gXCJBcXVhXCI7XHJcbiAgICAgICAgICAgIHNbMHgxZl0gPSBcIkFxdWFtYXJpbmVcIjtcclxuICAgICAgICAgICAgc1sweDIwXSA9IFwiQXp1cmVcIjtcclxuICAgICAgICAgICAgc1sweDIxXSA9IFwiQmVpZ2VcIjtcclxuICAgICAgICAgICAgc1sweDIyXSA9IFwiQmlzcXVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyM10gPSBcIkJsYWNrXCI7XHJcbiAgICAgICAgICAgIHNbMHgyNF0gPSBcIkJsYW5jaGVkQWxtb25kXCI7XHJcbiAgICAgICAgICAgIHNbMHgyNV0gPSBcIkJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDI2XSA9IFwiQmx1ZVZpb2xldFwiO1xyXG4gICAgICAgICAgICBzWzB4MjddID0gXCJCcm93blwiO1xyXG4gICAgICAgICAgICBzWzQwXSA9IFwiQnVybHlXb29kXCI7XHJcbiAgICAgICAgICAgIHNbMHgyOV0gPSBcIkNhZGV0Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MmFdID0gXCJDaGFydHJldXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyYl0gPSBcIkNob2NvbGF0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MmNdID0gXCJDb3JhbFwiO1xyXG4gICAgICAgICAgICBzWzB4MmRdID0gXCJDb3JuZmxvd2VyQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MmVdID0gXCJDb3Juc2lsa1wiO1xyXG4gICAgICAgICAgICBzWzB4MmZdID0gXCJDcmltc29uXCI7XHJcbiAgICAgICAgICAgIHNbMHgzMF0gPSBcIkN5YW5cIjtcclxuICAgICAgICAgICAgc1sweDMxXSA9IFwiRGFya0JsdWVcIjtcclxuICAgICAgICAgICAgc1s1MF0gPSBcIkRhcmtDeWFuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzM10gPSBcIkRhcmtHb2xkZW5yb2RcIjtcclxuICAgICAgICAgICAgc1sweDM0XSA9IFwiRGFya0dyYXlcIjtcclxuICAgICAgICAgICAgc1sweDM1XSA9IFwiRGFya0dyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzNl0gPSBcIkRhcmtLaGFraVwiO1xyXG4gICAgICAgICAgICBzWzB4MzddID0gXCJEYXJrTWFnZW50YVwiO1xyXG4gICAgICAgICAgICBzWzB4MzhdID0gXCJEYXJrT2xpdmVHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4MzldID0gXCJEYXJrT3JhbmdlXCI7XHJcbiAgICAgICAgICAgIHNbMHgzYV0gPSBcIkRhcmtPcmNoaWRcIjtcclxuICAgICAgICAgICAgc1sweDNiXSA9IFwiRGFya1JlZFwiO1xyXG4gICAgICAgICAgICBzWzYwXSA9IFwiRGFya1NhbG1vblwiO1xyXG4gICAgICAgICAgICBzWzB4M2RdID0gXCJEYXJrU2VhR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDNlXSA9IFwiRGFya1NsYXRlQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4M2ZdID0gXCJEYXJrU2xhdGVHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg0MF0gPSBcIkRhcmtUdXJxdW9pc2VcIjtcclxuICAgICAgICAgICAgc1sweDQxXSA9IFwiRGFya1Zpb2xldFwiO1xyXG4gICAgICAgICAgICBzWzB4NDJdID0gXCJEZWVwUGlua1wiO1xyXG4gICAgICAgICAgICBzWzB4NDNdID0gXCJEZWVwU2t5Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NDRdID0gXCJEaW1HcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg0NV0gPSBcIkRvZGdlckJsdWVcIjtcclxuICAgICAgICAgICAgc1s3MF0gPSBcIkZpcmVicmlja1wiO1xyXG4gICAgICAgICAgICBzWzB4NDddID0gXCJGbG9yYWxXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NDhdID0gXCJGb3Jlc3RHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4NDldID0gXCJGdWNoc2lhXCI7XHJcbiAgICAgICAgICAgIHNbMHg0YV0gPSBcIkdhaW5zYm9yb1wiO1xyXG4gICAgICAgICAgICBzWzB4NGJdID0gXCJHaG9zdFdoaXRlXCI7XHJcbiAgICAgICAgICAgIHNbMHg0Y10gPSBcIkdvbGRcIjtcclxuICAgICAgICAgICAgc1sweDRkXSA9IFwiR29sZGVucm9kXCI7XHJcbiAgICAgICAgICAgIHNbMHg0ZV0gPSBcIkdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDRmXSA9IFwiR3JlZW5cIjtcclxuICAgICAgICAgICAgc1s4MF0gPSBcIkdyZWVuWWVsbG93XCI7XHJcbiAgICAgICAgICAgIHNbMHg1MV0gPSBcIkhvbmV5ZGV3XCI7XHJcbiAgICAgICAgICAgIHNbMHg1Ml0gPSBcIkhvdFBpbmtcIjtcclxuICAgICAgICAgICAgc1sweDUzXSA9IFwiSW5kaWFuUmVkXCI7XHJcbiAgICAgICAgICAgIHNbMHg1NF0gPSBcIkluZGlnb1wiO1xyXG4gICAgICAgICAgICBzWzB4NTVdID0gXCJJdm9yeVwiO1xyXG4gICAgICAgICAgICBzWzB4NTZdID0gXCJLaGFraVwiO1xyXG4gICAgICAgICAgICBzWzB4NTddID0gXCJMYXZlbmRlclwiO1xyXG4gICAgICAgICAgICBzWzB4NThdID0gXCJMYXZlbmRlckJsdXNoXCI7XHJcbiAgICAgICAgICAgIHNbMHg1OV0gPSBcIkxhd25HcmVlblwiO1xyXG4gICAgICAgICAgICBzWzkwXSA9IFwiTGVtb25DaGlmZm9uXCI7XHJcbiAgICAgICAgICAgIHNbMHg1Yl0gPSBcIkxpZ2h0Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NWNdID0gXCJMaWdodENvcmFsXCI7XHJcbiAgICAgICAgICAgIHNbMHg1ZF0gPSBcIkxpZ2h0Q3lhblwiO1xyXG4gICAgICAgICAgICBzWzB4NWVdID0gXCJMaWdodEdvbGRlbnJvZFllbGxvd1wiO1xyXG4gICAgICAgICAgICBzWzB4NWZdID0gXCJMaWdodEdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDYwXSA9IFwiTGlnaHRHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4NjFdID0gXCJMaWdodFBpbmtcIjtcclxuICAgICAgICAgICAgc1sweDYyXSA9IFwiTGlnaHRTYWxtb25cIjtcclxuICAgICAgICAgICAgc1sweDYzXSA9IFwiTGlnaHRTZWFHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzEwMF0gPSBcIkxpZ2h0U2t5Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NjVdID0gXCJMaWdodFNsYXRlR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NjZdID0gXCJMaWdodFN0ZWVsQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NjddID0gXCJMaWdodFllbGxvd1wiO1xyXG4gICAgICAgICAgICBzWzB4NjhdID0gXCJMaW1lXCI7XHJcbiAgICAgICAgICAgIHNbMHg2OV0gPSBcIkxpbWVHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4NmFdID0gXCJMaW5lblwiO1xyXG4gICAgICAgICAgICBzWzB4NmJdID0gXCJNYWdlbnRhXCI7XHJcbiAgICAgICAgICAgIHNbMHg2Y10gPSBcIk1hcm9vblwiO1xyXG4gICAgICAgICAgICBzWzB4NmRdID0gXCJNZWRpdW1BcXVhbWFyaW5lXCI7XHJcbiAgICAgICAgICAgIHNbMTEwXSA9IFwiTWVkaXVtQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NmZdID0gXCJNZWRpdW1PcmNoaWRcIjtcclxuICAgICAgICAgICAgc1sweDcwXSA9IFwiTWVkaXVtUHVycGxlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3MV0gPSBcIk1lZGl1bVNlYUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg3Ml0gPSBcIk1lZGl1bVNsYXRlQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NzNdID0gXCJNZWRpdW1TcHJpbmdHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4NzRdID0gXCJNZWRpdW1UdXJxdW9pc2VcIjtcclxuICAgICAgICAgICAgc1sweDc1XSA9IFwiTWVkaXVtVmlvbGV0UmVkXCI7XHJcbiAgICAgICAgICAgIHNbMHg3Nl0gPSBcIk1pZG5pZ2h0Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NzddID0gXCJNaW50Q3JlYW1cIjtcclxuICAgICAgICAgICAgc1sxMjBdID0gXCJNaXN0eVJvc2VcIjtcclxuICAgICAgICAgICAgc1sweDc5XSA9IFwiTW9jY2FzaW5cIjtcclxuICAgICAgICAgICAgc1sweDdhXSA9IFwiTmF2YWpvV2hpdGVcIjtcclxuICAgICAgICAgICAgc1sweDdiXSA9IFwiTmF2eVwiO1xyXG4gICAgICAgICAgICBzWzB4N2NdID0gXCJPbGRMYWNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3ZF0gPSBcIk9saXZlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3ZV0gPSBcIk9saXZlRHJhYlwiO1xyXG4gICAgICAgICAgICBzWzB4N2ZdID0gXCJPcmFuZ2VcIjtcclxuICAgICAgICAgICAgc1sweDgwXSA9IFwiT3JhbmdlUmVkXCI7XHJcbiAgICAgICAgICAgIHNbMHg4MV0gPSBcIk9yY2hpZFwiO1xyXG4gICAgICAgICAgICBzWzEzMF0gPSBcIlBhbGVHb2xkZW5yb2RcIjtcclxuICAgICAgICAgICAgc1sweDgzXSA9IFwiUGFsZUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg4NF0gPSBcIlBhbGVUdXJxdW9pc2VcIjtcclxuICAgICAgICAgICAgc1sweDg1XSA9IFwiUGFsZVZpb2xldFJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4ODZdID0gXCJQYXBheWFXaGlwXCI7XHJcbiAgICAgICAgICAgIHNbMHg4N10gPSBcIlBlYWNoUHVmZlwiO1xyXG4gICAgICAgICAgICBzWzB4ODhdID0gXCJQZXJ1XCI7XHJcbiAgICAgICAgICAgIHNbMHg4OV0gPSBcIlBpbmtcIjtcclxuICAgICAgICAgICAgc1sweDhhXSA9IFwiUGx1bVwiO1xyXG4gICAgICAgICAgICBzWzB4OGJdID0gXCJQb3dkZXJCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMTQwXSA9IFwiUHVycGxlXCI7XHJcbiAgICAgICAgICAgIHNbMHg4ZF0gPSBcIlJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4OGVdID0gXCJSb3N5QnJvd25cIjtcclxuICAgICAgICAgICAgc1sweDhmXSA9IFwiUm95YWxCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg5MF0gPSBcIlNhZGRsZUJyb3duXCI7XHJcbiAgICAgICAgICAgIHNbMHg5MV0gPSBcIlNhbG1vblwiO1xyXG4gICAgICAgICAgICBzWzB4OTJdID0gXCJTYW5keUJyb3duXCI7XHJcbiAgICAgICAgICAgIHNbMHg5M10gPSBcIlNlYUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHg5NF0gPSBcIlNlYVNoZWxsXCI7XHJcbiAgICAgICAgICAgIHNbMHg5NV0gPSBcIlNpZW5uYVwiO1xyXG4gICAgICAgICAgICBzWzE1MF0gPSBcIlNpbHZlclwiO1xyXG4gICAgICAgICAgICBzWzB4OTddID0gXCJTa3lCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg5OF0gPSBcIlNsYXRlQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4OTldID0gXCJTbGF0ZUdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDlhXSA9IFwiU25vd1wiO1xyXG4gICAgICAgICAgICBzWzB4OWJdID0gXCJTcHJpbmdHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4OWNdID0gXCJTdGVlbEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDlkXSA9IFwiVGFuXCI7XHJcbiAgICAgICAgICAgIHNbMHg5ZV0gPSBcIlRlYWxcIjtcclxuICAgICAgICAgICAgc1sweDlmXSA9IFwiVGhpc3RsZVwiO1xyXG4gICAgICAgICAgICBzWzE2MF0gPSBcIlRvbWF0b1wiO1xyXG4gICAgICAgICAgICBzWzB4YTFdID0gXCJUdXJxdW9pc2VcIjtcclxuICAgICAgICAgICAgc1sweGEyXSA9IFwiVmlvbGV0XCI7XHJcbiAgICAgICAgICAgIHNbMHhhM10gPSBcIldoZWF0XCI7XHJcbiAgICAgICAgICAgIHNbMHhhNF0gPSBcIldoaXRlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhNV0gPSBcIldoaXRlU21va2VcIjtcclxuICAgICAgICAgICAgc1sweGE2XSA9IFwiWWVsbG93XCI7XHJcbiAgICAgICAgICAgIHNbMHhhN10gPSBcIlllbGxvd0dyZWVuXCI7XHJcbiAgICAgICAgICAgIGNvbG9yTmFtZVRhYmxlID0gcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgVXBkYXRlU3lzdGVtQ29sb3JzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMV0gPSBTeXN0ZW1Db2xvclRvQXJnYigxMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMl0gPSBTeXN0ZW1Db2xvclRvQXJnYigyKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVszXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDkpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzRdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTIpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE2OF0gPSBTeXN0ZW1Db2xvclRvQXJnYigxNSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTY5XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDIwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzBdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbNV0gPSBTeXN0ZW1Db2xvclRvQXJnYigxNSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbNl0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDEwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs3XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTUpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzhdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxNik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbOV0gPSBTeXN0ZW1Db2xvclRvQXJnYigyMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTBdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTFdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTcxXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MWIpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3Ml0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDFjKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxMl0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDExKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxM10gPSBTeXN0ZW1Db2xvclRvQXJnYigxMyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTRdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTQpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE1XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MWEpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE2XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDExKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxN10gPSBTeXN0ZW1Db2xvclRvQXJnYigzKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxOF0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDEzKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxOV0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDE4KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyMF0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDE3KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyMV0gPSBTeXN0ZW1Db2xvclRvQXJnYig0KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzNdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMzApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3NF0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDFkKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyMl0gPSBTeXN0ZW1Db2xvclRvQXJnYig3KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyM10gPSBTeXN0ZW1Db2xvclRvQXJnYigwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyNF0gPSBTeXN0ZW1Db2xvclRvQXJnYig1KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyNV0gPSBTeXN0ZW1Db2xvclRvQXJnYig2KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsyNl0gPSBTeXN0ZW1Db2xvclRvQXJnYig4KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIEluaXRDb2xvclRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGludFtdIGMgPSBuZXcgaW50WzB4YWZdO1xyXG5cclxuICAgICAgICAgICAgY1sweDFiXSA9IDB4ZmZmZmZmO1xyXG4gICAgICAgICAgICBjWzB4MWNdID0gLTk4NDgzMztcclxuICAgICAgICAgICAgY1sweDFkXSA9IC0zMzI4NDE7XHJcbiAgICAgICAgICAgIGNbMzBdID0gLTE2NzExNjgxO1xyXG4gICAgICAgICAgICBjWzB4MWZdID0gLTgzODg2NTI7XHJcbiAgICAgICAgICAgIGNbMHgyMF0gPSAtOTgzMDQxO1xyXG4gICAgICAgICAgICBjWzB4MjFdID0gLTY1Nzk1NjtcclxuICAgICAgICAgICAgY1sweDIyXSA9IC02OTcyO1xyXG4gICAgICAgICAgICBjWzB4MjNdID0gLTE2Nzc3MjE2O1xyXG4gICAgICAgICAgICBjWzB4MjRdID0gLTUxNzE7XHJcbiAgICAgICAgICAgIGNbMHgyNV0gPSAtMTY3NzY5NjE7XHJcbiAgICAgICAgICAgIGNbMHgyNl0gPSAtNzcyMjAxNDtcclxuICAgICAgICAgICAgY1sweDI3XSA9IC01OTUyOTgyO1xyXG4gICAgICAgICAgICBjWzQwXSA9IC0yMTgwOTg1O1xyXG4gICAgICAgICAgICBjWzB4MjldID0gLTEwNTEwNjg4O1xyXG4gICAgICAgICAgICBjWzB4MmFdID0gLTgzODg4NjQ7XHJcbiAgICAgICAgICAgIGNbMHgyYl0gPSAtMjk4Nzc0NjtcclxuICAgICAgICAgICAgY1sweDJjXSA9IC0zMjk0NDtcclxuICAgICAgICAgICAgY1sweDJkXSA9IC0xMDE4NTIzNTtcclxuICAgICAgICAgICAgY1sweDJlXSA9IC0xODI4O1xyXG4gICAgICAgICAgICBjWzB4MmZdID0gLTIzNTQxMTY7XHJcbiAgICAgICAgICAgIGNbMHgzMF0gPSAtMTY3MTE2ODE7XHJcbiAgICAgICAgICAgIGNbMHgzMV0gPSAtMTY3NzcwNzc7XHJcbiAgICAgICAgICAgIGNbNTBdID0gLTE2NzQxNDkzO1xyXG4gICAgICAgICAgICBjWzB4MzNdID0gLTQ2ODQyNzc7XHJcbiAgICAgICAgICAgIGNbMHgzNF0gPSAtNTY1ODE5OTtcclxuICAgICAgICAgICAgY1sweDM1XSA9IC0xNjc1MTYxNjtcclxuICAgICAgICAgICAgY1sweDM2XSA9IC00MzQzOTU3O1xyXG4gICAgICAgICAgICBjWzB4MzddID0gLTc2Njc1NzM7XHJcbiAgICAgICAgICAgIGNbMHgzOF0gPSAtMTExNzkyMTc7XHJcbiAgICAgICAgICAgIGNbMHgzOV0gPSAtMjk2OTY7XHJcbiAgICAgICAgICAgIGNbMHgzYV0gPSAtNjczNzIwNDtcclxuICAgICAgICAgICAgY1sweDNiXSA9IC03NjY3NzEyO1xyXG4gICAgICAgICAgICBjWzYwXSA9IC0xNDY4ODA2O1xyXG4gICAgICAgICAgICBjWzB4M2RdID0gLTczNTczMDE7XHJcbiAgICAgICAgICAgIGNbMHgzZV0gPSAtMTIwNDI4Njk7XHJcbiAgICAgICAgICAgIGNbMHgzZl0gPSAtMTM2NzY3MjE7XHJcbiAgICAgICAgICAgIGNbMHg0MF0gPSAtMTY3MjQyNzE7XHJcbiAgICAgICAgICAgIGNbMHg0MV0gPSAtNzA3NzY3NztcclxuICAgICAgICAgICAgY1sweDQyXSA9IC02MDI2OTtcclxuICAgICAgICAgICAgY1sweDQzXSA9IC0xNjcyODA2NTtcclxuICAgICAgICAgICAgY1sweDQ0XSA9IC05ODY4OTUxO1xyXG4gICAgICAgICAgICBjWzB4NDVdID0gLTE0Nzc0MDE3O1xyXG4gICAgICAgICAgICBjWzcwXSA9IC01MTAzMDcwO1xyXG4gICAgICAgICAgICBjWzB4NDddID0gLTEyOTY7XHJcbiAgICAgICAgICAgIGNbMHg0OF0gPSAtMTQ1MTMzNzQ7XHJcbiAgICAgICAgICAgIGNbMHg0OV0gPSAtNjUyODE7XHJcbiAgICAgICAgICAgIGNbMHg0YV0gPSAtMjMwMjc1NjtcclxuICAgICAgICAgICAgY1sweDRiXSA9IC00NjA1NDU7XHJcbiAgICAgICAgICAgIGNbMHg0Y10gPSAtMTA0OTY7XHJcbiAgICAgICAgICAgIGNbMHg0ZF0gPSAtMjQ0ODA5NjtcclxuICAgICAgICAgICAgY1sweDRlXSA9IC04MzU1NzEyO1xyXG4gICAgICAgICAgICBjWzB4NGZdID0gLTE2NzQ0NDQ4O1xyXG4gICAgICAgICAgICBjWzgwXSA9IC01Mzc0MTYxO1xyXG4gICAgICAgICAgICBjWzB4NTFdID0gLTk4MzA1NjtcclxuICAgICAgICAgICAgY1sweDUyXSA9IC0zODQ3NjtcclxuICAgICAgICAgICAgY1sweDUzXSA9IC0zMzE4NjkyO1xyXG4gICAgICAgICAgICBjWzB4NTRdID0gLTExODYxODg2O1xyXG4gICAgICAgICAgICBjWzB4NTVdID0gLTE2O1xyXG4gICAgICAgICAgICBjWzB4NTZdID0gLTk4OTU1NjtcclxuICAgICAgICAgICAgY1sweDU3XSA9IC0xNjQ0ODA2O1xyXG4gICAgICAgICAgICBjWzB4NThdID0gLTM4NTE7XHJcbiAgICAgICAgICAgIGNbMHg1OV0gPSAtODU4NjI0MDtcclxuICAgICAgICAgICAgY1s5MF0gPSAtMTMzMTtcclxuICAgICAgICAgICAgY1sweDViXSA9IC01MzgzOTYyO1xyXG4gICAgICAgICAgICBjWzB4NWNdID0gLTEwMTU2ODA7XHJcbiAgICAgICAgICAgIGNbMHg1ZF0gPSAtMjAzMTYxNztcclxuICAgICAgICAgICAgY1sweDVlXSA9IC0zMjkwMDY7XHJcbiAgICAgICAgICAgIGNbMHg1Zl0gPSAtMjg5NDg5MztcclxuICAgICAgICAgICAgY1sweDYwXSA9IC03Mjc4OTYwO1xyXG4gICAgICAgICAgICBjWzB4NjFdID0gLTE4NzUxO1xyXG4gICAgICAgICAgICBjWzB4NjJdID0gLTI0NDU0O1xyXG4gICAgICAgICAgICBjWzB4NjNdID0gLTE0NjM0MzI2O1xyXG4gICAgICAgICAgICBjWzEwMF0gPSAtNzg3Njg3MDtcclxuICAgICAgICAgICAgY1sweDY1XSA9IC04OTQzNDYzO1xyXG4gICAgICAgICAgICBjWzB4NjZdID0gLTUxOTI0ODI7XHJcbiAgICAgICAgICAgIGNbMHg2N10gPSAtMzI7XHJcbiAgICAgICAgICAgIGNbMHg2OF0gPSAtMTY3MTE5MzY7XHJcbiAgICAgICAgICAgIGNbMHg2OV0gPSAtMTM0NDc4ODY7XHJcbiAgICAgICAgICAgIGNbMHg2YV0gPSAtMzMxNTQ2O1xyXG4gICAgICAgICAgICBjWzB4NmJdID0gLTY1MjgxO1xyXG4gICAgICAgICAgICBjWzB4NmNdID0gLTgzODg2MDg7XHJcbiAgICAgICAgICAgIGNbMHg2ZF0gPSAtMTAwMzk4OTQ7XHJcbiAgICAgICAgICAgIGNbMTEwXSA9IC0xNjc3NzAxMTtcclxuICAgICAgICAgICAgY1sweDZmXSA9IC00NTY1NTQ5O1xyXG4gICAgICAgICAgICBjWzB4NzBdID0gLTcxMTQ1MzM7XHJcbiAgICAgICAgICAgIGNbMHg3MV0gPSAtMTI3OTkxMTk7XHJcbiAgICAgICAgICAgIGNbMHg3Ml0gPSAtODY4OTQyNjtcclxuICAgICAgICAgICAgY1sweDczXSA9IC0xNjcxMzA2MjtcclxuICAgICAgICAgICAgY1sweDc0XSA9IC0xMjAwNDkxNjtcclxuICAgICAgICAgICAgY1sweDc1XSA9IC0zNzMwMDQzO1xyXG4gICAgICAgICAgICBjWzB4NzZdID0gLTE1MTMyMzA0O1xyXG4gICAgICAgICAgICBjWzB4NzddID0gLTY1NTM2NjtcclxuICAgICAgICAgICAgY1sxMjBdID0gLTY5NDM7XHJcbiAgICAgICAgICAgIGNbMHg3OV0gPSAtNjk4NztcclxuICAgICAgICAgICAgY1sweDdhXSA9IC04NTMxO1xyXG4gICAgICAgICAgICBjWzB4N2JdID0gLTE2Nzc3MDg4O1xyXG4gICAgICAgICAgICBjWzB4N2NdID0gLTEzMzY1ODtcclxuICAgICAgICAgICAgY1sweDdkXSA9IC04MzU1ODQwO1xyXG4gICAgICAgICAgICBjWzB4N2VdID0gLTk3Mjg0Nzc7XHJcbiAgICAgICAgICAgIGNbMHg3Zl0gPSAtMjMyOTY7XHJcbiAgICAgICAgICAgIGNbMHg4MF0gPSAtNDc4NzI7XHJcbiAgICAgICAgICAgIGNbMHg4MV0gPSAtMjQ2MTQ4MjtcclxuICAgICAgICAgICAgY1sxMzBdID0gLTExMjAwODY7XHJcbiAgICAgICAgICAgIGNbMHg4M10gPSAtNjc1MTMzNjtcclxuICAgICAgICAgICAgY1sweDg0XSA9IC01MjQ3MjUwO1xyXG4gICAgICAgICAgICBjWzB4ODVdID0gLTIzOTYwMTM7XHJcbiAgICAgICAgICAgIGNbMHg4Nl0gPSAtNDEzOTtcclxuICAgICAgICAgICAgY1sweDg3XSA9IC05NTQzO1xyXG4gICAgICAgICAgICBjWzB4ODhdID0gLTMzMDgyMjU7XHJcbiAgICAgICAgICAgIGNbMHg4OV0gPSAtMTYxODE7XHJcbiAgICAgICAgICAgIGNbMHg4YV0gPSAtMjI1MjU3OTtcclxuICAgICAgICAgICAgY1sweDhiXSA9IC01MTg1MzA2O1xyXG4gICAgICAgICAgICBjWzE0MF0gPSAtODM4ODQ4MDtcclxuICAgICAgICAgICAgY1sweDhkXSA9IC02NTUzNjtcclxuICAgICAgICAgICAgY1sweDhlXSA9IC00NDE5Njk3O1xyXG4gICAgICAgICAgICBjWzB4OGZdID0gLTEyNDkwMjcxO1xyXG4gICAgICAgICAgICBjWzB4OTBdID0gLTc2NTAwMjk7XHJcbiAgICAgICAgICAgIGNbMHg5MV0gPSAtMzYwMzM0O1xyXG4gICAgICAgICAgICBjWzB4OTJdID0gLTc0NDM1MjtcclxuICAgICAgICAgICAgY1sweDkzXSA9IC0xMzcyNjg4OTtcclxuICAgICAgICAgICAgY1sweDk0XSA9IC0yNTc4O1xyXG4gICAgICAgICAgICBjWzB4OTVdID0gLTYyNzA0MTk7XHJcbiAgICAgICAgICAgIGNbMTUwXSA9IC00MTQ0OTYwO1xyXG4gICAgICAgICAgICBjWzB4OTddID0gLTc4NzY4ODU7XHJcbiAgICAgICAgICAgIGNbMHg5OF0gPSAtOTgwNzE1NTtcclxuICAgICAgICAgICAgY1sweDk5XSA9IC05NDA0MjcyO1xyXG4gICAgICAgICAgICBjWzB4OWFdID0gLTEyODY7XHJcbiAgICAgICAgICAgIGNbMHg5Yl0gPSAtMTY3MTE4MDk7XHJcbiAgICAgICAgICAgIGNbMHg5Y10gPSAtMTIxNTYyMzY7XHJcbiAgICAgICAgICAgIGNbMHg5ZF0gPSAtMjk2ODQzNjtcclxuICAgICAgICAgICAgY1sweDllXSA9IC0xNjc0NDMyMDtcclxuICAgICAgICAgICAgY1sweDlmXSA9IC0yNTcyMzI4O1xyXG4gICAgICAgICAgICBjWzE2MF0gPSAtNDAxMjE7XHJcbiAgICAgICAgICAgIGNbMHhhMV0gPSAtMTI1MjUzNjA7XHJcbiAgICAgICAgICAgIGNbMHhhMl0gPSAtMTE0NjEzMDtcclxuICAgICAgICAgICAgY1sweGEzXSA9IC02NjM4ODU7XHJcbiAgICAgICAgICAgIGNbMHhhNF0gPSAtMTtcclxuICAgICAgICAgICAgY1sweGE1XSA9IC02NTc5MzE7XHJcbiAgICAgICAgICAgIGNbMHhhNl0gPSAtMjU2O1xyXG4gICAgICAgICAgICBjWzB4YTddID0gLTY2MzIxNDI7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGUgPSBjO1xyXG5cclxuICAgICAgICAgICAgVXBkYXRlU3lzdGVtQ29sb3JzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGludCBLbm93bkNvbG9yVG9BcmdiKEtub3duQ29sb3IgY29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVDb2xvclRhYmxlKCk7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA8PSBLbm93bkNvbG9yLk1lbnVIaWdobGlnaHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclRhYmxlWyhpbnQpY29sb3JdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBzdHJpbmcgS25vd25Db2xvclRvTmFtZShLbm93bkNvbG9yIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlQ29sb3JOYW1lVGFibGUoKTtcclxuICAgICAgICAgICAgaWYgKGNvbG9yIDw9IEtub3duQ29sb3IuTWVudUhpZ2hsaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yTmFtZVRhYmxlWyhpbnQpY29sb3JdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50W10gX1N5c0NvbG9ycyA9IG5ldyBpbnRbXSBcclxuICAgICAgICAgICAgezExODQyNzQwLFxyXG4gICAgICAgICAgICAxMzc0MzI1NyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMTEyNTA2MDMsXHJcbiAgICAgICAgICAgIDE1NzkwMzIwLFxyXG4gICAgICAgICAgICAxNjc3NzIxNSxcclxuICAgICAgICAgICAgMTA1MjY4ODAsXHJcbiAgICAgICAgICAgIDE1NzkwMzIwLFxyXG4gICAgICAgICAgICAxMDUyNjg4MCxcclxuICAgICAgICAgICAgNjkwODI2NSxcclxuICAgICAgICAgICAgMTQ5MzUwMTEsXHJcbiAgICAgICAgICAgIDE2Nzc3MjE1LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxNTM4OTExMyxcclxuICAgICAgICAgICAgMTU5MTgyOTUsXHJcbiAgICAgICAgICAgIDcxNzE0MzcsXHJcbiAgICAgICAgICAgIDE2NzUwODk5LFxyXG4gICAgICAgICAgICAxNjc3NzIxNSxcclxuICAgICAgICAgICAgMTMzOTU0NTYsXHJcbiAgICAgICAgICAgIDE2NTc4NTQ4LFxyXG4gICAgICAgICAgICAxNDQwNTA1NSxcclxuICAgICAgICAgICAgNTUyNTA1OSxcclxuICAgICAgICAgICAgMTQ4MTExMzUsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDE1NzkwMzIwLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTY3NTA4OTksXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDEzMTU4NjAwLFxyXG4gICAgICAgICAgICAxNjc3NzIxNSxcclxuICAgICAgICAgICAgNjU3OTMwMCxcclxuICAgICAgICAgICAgMH07XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBTeXN0ZW1Db2xvclRvQXJnYihpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRnJvbVdpbjMyVmFsdWUoX1N5c0NvbG9yc1tpbmRleF0pO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBGb250XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBGYW1pbHlOYW1lIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBFbVNpemUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb250KHN0cmluZyBmYW1pbHlOYW1lLCBmbG9hdCBlbVNpemUsIEZvbnRTdHlsZSBzdHlsZSwgR3JhcGhpY3NVbml0IHVuaXQsIGJ5dGUgZ2RpQ2hhclNldCkgOiB0aGlzKGZhbWlseU5hbWUsIGVtU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEZvbnQoc3RyaW5nIGZhbWlseU5hbWUsIGZsb2F0IGVtU2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZhbWlseU5hbWUgPSBmYW1pbHlOYW1lO1xyXG4gICAgICAgICAgICBFbVNpemUgPSBlbVNpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBQb2ludFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgWDtcclxuICAgICAgICBwdWJsaWMgaW50IFk7XHJcbiAgICAgICAgcHVibGljIFBvaW50KGludCB4LCBpbnQgeSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFggPSB4O1xyXG4gICAgICAgICAgICBZID0geTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBTaXplXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGludCBXaWR0aDtcclxuICAgICAgICBwdWJsaWMgaW50IEhlaWdodDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBTaXplIEVtcHR5ID0gbmV3IFNpemUoMCwgMCk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBTaXplKGludCB3aWR0aCwgaW50IGhlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHN0cnVjdCBTaXplRlxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBXaWR0aDtcclxuICAgICAgICBwdWJsaWMgZmxvYXQgSGVpZ2h0O1xyXG5cclxuICAgICAgICBwdWJsaWMgU2l6ZUYoZmxvYXQgd2lkdGgsIGZsb2F0IGhlaWdodClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIEhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRHJhd2luZ1xyXG57XHJcbiAgICBwdWJsaWMgc2VhbGVkIGNsYXNzIFN5c3RlbUNvbG9yc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWN0aXZlQm9yZGVyIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFjdGl2ZUJvcmRlcik7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBY3RpdmVDYXB0aW9uIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWN0aXZlQ2FwdGlvblRleHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQWN0aXZlQ2FwdGlvblRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXBwV29ya3NwYWNlIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFwcFdvcmtzcGFjZSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCdXR0b25GYWNlIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1dHRvbkZhY2UpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnV0dG9uSGlnaGxpZ2h0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1dHRvbkhpZ2hsaWdodCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCdXR0b25TaGFkb3cge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQnV0dG9uU2hhZG93KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2wge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sRGFyayB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db250cm9sRGFyayk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sRGFya0Rhcmsge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbERhcmtEYXJrKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2xMaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db250cm9sTGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbExpZ2h0TGlnaHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbExpZ2h0TGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbFRleHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbFRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGVza3RvcCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EZXNrdG9wKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYWRpZW50QWN0aXZlQ2FwdGlvbiB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HcmFkaWVudEFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JhZGllbnRJbmFjdGl2ZUNhcHRpb24ge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JhZGllbnRJbmFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JheVRleHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JheVRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSGlnaGxpZ2h0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhpZ2hsaWdodCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBIaWdobGlnaHRUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhpZ2hsaWdodFRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSG90VHJhY2sge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSG90VHJhY2spO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5hY3RpdmVCb3JkZXIge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5hY3RpdmVCb3JkZXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5hY3RpdmVDYXB0aW9uIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluYWN0aXZlQ2FwdGlvbik7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmFjdGl2ZUNhcHRpb25UZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluYWN0aXZlQ2FwdGlvblRleHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5mbyB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmZvKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluZm9UZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluZm9UZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lbnUge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVudSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZW51QmFyIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lbnVCYXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVudUhpZ2hsaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZW51SGlnaGxpZ2h0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lbnVUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lbnVUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNjcm9sbEJhciB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TY3JvbGxCYXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2luZG93IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldpbmRvdyk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaW5kb3dGcmFtZSB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaW5kb3dGcmFtZSk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaW5kb3dUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldpbmRvd1RleHQpO319XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhR3JpZFZpZXdDb2x1bW5cclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCBFbGVtZW50O1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgSGVhZGVyVGV4dCB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBFbGVtZW50LnRleHRDb250ZW50OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgTmFtZSB7IGdldCB7IHJldHVybiBFbGVtZW50LmdldEF0dHJpYnV0ZShcIk5hbWVcIik7IH0gc2V0IHsgRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJOYW1lXCIsIHZhbHVlKTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBkZWxlZ2F0ZSB2b2lkIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyKG9iamVjdCBzZW5kZXIsIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzIGUpO1xyXG4gICAgLy9cclxuICAgIC8vIFN1bW1hcnk6XHJcbiAgICAvLyAgICAgUHJvdmlkZXMgZGF0YSBmb3IgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5MaW5rQ2xpY2tlZCBldmVudC4gICAgXHJcbiAgICBwdWJsaWMgY2xhc3MgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MgOiBFdmVudEFyZ3NcclxuICAgIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJnc1xyXG4gICAgICAgIC8vICAgICBjbGFzcyB3aXRoIHRoZSBzcGVjaWZpZWQgbGluay5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFBhcmFtZXRlcnM6XHJcbiAgICAgICAgLy8gICBsaW5rOlxyXG4gICAgICAgIC8vICAgICBUaGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLkxpbmsgdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgICAgICBwdWJsaWMgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MoTGlua0xhYmVsLkxpbmsgbGluaylcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJnc1xyXG4gICAgICAgIC8vICAgICBjbGFzcyB3aXRoIHRoZSBzcGVjaWZpZWQgbGluayBhbmQgdGhlIHNwZWNpZmllZCBtb3VzZSBidXR0b24uXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQYXJhbWV0ZXJzOlxyXG4gICAgICAgIC8vICAgbGluazpcclxuICAgICAgICAvLyAgICAgVGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5MaW5rIHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgIGJ1dHRvbjpcclxuICAgICAgICAvLyAgICAgT25lIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Nb3VzZUJ1dHRvbnMgdmFsdWVzLlxyXG4gICAgICAgIHB1YmxpYyBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyhMaW5rTGFiZWwuTGluayBsaW5rLCBNb3VzZUJ1dHRvbnMgYnV0dG9uKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgdGhlIG1vdXNlIGJ1dHRvbiB0aGF0IGNhdXNlcyB0aGUgbGluayB0byBiZSBjbGlja2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgT25lIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Nb3VzZUJ1dHRvbnMgdmFsdWVzLlxyXG4gICAgICAgIHB1YmxpYyBNb3VzZUJ1dHRvbnMgQnV0dG9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLkxpbmsgdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFJldHVybnM6XHJcbiAgICAgICAgLy8gICAgIEEgbGluayBvbiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLlxyXG4gICAgICAgIHB1YmxpYyBMaW5rTGFiZWwuTGluayBMaW5rIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vXHJcbiAgICAvLyBTdW1tYXJ5OlxyXG4gICAgLy8gICAgIFJlcHJlc2VudHMgdGhlIGNvbGxlY3Rpb24gb2YgaXRlbXMgaW4gYSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Db21ib0JveC5cclxuICAgIHB1YmxpYyBjbGFzcyBPYmplY3RDb2xsZWN0aW9uIDogSUxpc3Q8b2JqZWN0PiwgSUNvbGxlY3Rpb24sIElFbnVtZXJhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBDb250cm9sIF9vd25lcjtcclxuXHJcbiAgICAgICAgcHVibGljIE9iamVjdENvbGxlY3Rpb24oQ29udHJvbCBvd25lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lciA9IG93bmVyO1xyXG4gICAgICAgICAgICBfY29udHJvbHMgPSBuZXcgTGlzdDxvYmplY3Q+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbCBPd25lciB7IGdldCB7IHJldHVybiBfb3duZXI7IH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIExpc3Q8b2JqZWN0PiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgdGhpc1tpbnQgaW5kZXhdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IENvdW50IHsgZ2V0IHsgcmV0dXJuIF9jb250cm9scy5Db3VudDsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQob2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50PihuZXcgUmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQoKSB7IHZhbHVlID0gX2NvbnRyb2xzLkNvdW50LlRvU3RyaW5nKCksIHRleHRDb250ZW50ID0gKGl0ZW0gKyBcIlwiKSB9ICk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShvYmplY3RbXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQ+KG5ldyBSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudCgpIHsgdmFsdWUgPSBfY29udHJvbHMuQ291bnQuVG9TdHJpbmcoKSwgdGV4dENvbnRlbnQgPSAoaXRlbVtpXSArIFwiXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUobGVuLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZChfb3duZXIuRWxlbWVudC5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhvYmplY3RbXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChvYmplY3RbXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8b2JqZWN0PiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgb2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5pbnNlcnRCZWZvcmU8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudD4obmV3IFJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50KCkgeyB2YWx1ZSA9IF9jb250cm9scy5Db3VudC5Ub1N0cmluZygpLCB0ZXh0Q29udGVudCA9IChpdGVtICsgXCJcIikgfSwgX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuSW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFJlbW92ZShvYmplY3QgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tfY29udHJvbHMuSW5kZXhPZihpdGVtKV0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLlJlbW92ZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZUF0KGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgUGFkZGluZ1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgTGVmdCwgVG9wLCBSaWdodCwgQm90dG9tO1xyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nKGludCBsZWZ0LCBpbnQgdG9wLCBpbnQgcmlnaHQsIGludCBib3R0b20pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMZWZ0ID0gbGVmdDsgVG9wID0gdG9wOyBSaWdodCA9IHJpZ2h0OyBCb3R0b20gPSBib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbWJvQm94IDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBDb21ib0JveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTFNlbGVjdEVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEl0ZW1zID0gbmV3IE9iamVjdENvbGxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBPYmplY3RDb2xsZWN0aW9uIEl0ZW1zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRm9ybWF0dGluZ0VuYWJsZWQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBJdGVtSGVpZ2h0IHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRHJhd01vZGUgRHJhd01vZGUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIFNpemUgTWluaW11bVNpemUgeyBnZXQ7IHNldDsgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBMaXN0Qm94IDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMaXN0Qm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MU2VsZWN0RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MU2VsZWN0RWxlbWVudD4oKS5tdWx0aXBsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIEl0ZW1zID0gbmV3IE9iamVjdENvbGxlY3Rpb24odGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBPYmplY3RDb2xsZWN0aW9uIEl0ZW1zIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRm9ybWF0dGluZ0VuYWJsZWQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBJdGVtSGVpZ2h0IHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRleHRCb3ggOiBDb250cm9sXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBwdWJsaWMgVGV4dEJveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudCgpIHsgdHlwZSA9IFwidGV4dFwiIH0pXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dCB7IGdldCB7IHJldHVybiBFbGVtZW50LkFzPFJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQ+KCkudmFsdWU7IH0gc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50PigpLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBCdXR0b25CYXNlIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBCdXR0b25CYXNlKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQpIDogYmFzZShlbGVtZW50KVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIEF1dG9TaXplIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHQgeyBnZXQgeyByZXR1cm4gYmFzZS5UZXh0OyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLlRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgcHVibGljIGJvb2wgVXNlVmlzdWFsU3R5bGVCYWNrQ29sb3IgeyBnZXQ7IHNldDsgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udGFpbmVyQ29udHJvbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU2l6ZUYgQXV0b1NjYWxlRGltZW5zaW9ucyB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIEF1dG9TY2FsZU1vZGUgQXV0b1NjYWxlTW9kZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250YWluZXJDb250cm9sKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBDb250cm9sQ29sbGVjdGlvbiA6IElMaXN0PENvbnRyb2w+LCBJQ29sbGVjdGlvbiwgSUVudW1lcmFibGVcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBDb250cm9sIF9vd25lcjtcclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xDb2xsZWN0aW9uKENvbnRyb2wgb3duZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgX2NvbnRyb2xzID0gbmV3IExpc3Q8Q29udHJvbD4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxDb250cm9sPiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChDb250cm9sIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpdGVtLl9wYXJlbnQgPSBPd25lcjtcclxuICAgICAgICAgICAgaXRlbS5Mb2FkKCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShDb250cm9sW10gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbS5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGZyYWcgPSBSZXR5cGVkLmRvbS5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgaXRlbS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtW2ldLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtpXS5fcGFyZW50ID0gT3duZXI7XHJcbiAgICAgICAgICAgICAgICBpdGVtW2ldLkxvYWQoKTtcclxuICAgICAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbVtpXSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uRG9jdW1lbnRGcmFnbWVudD4oZnJhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKkBcclxuXHRcdFx0dmFyIGxlbiA9IF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZShsZW4tLSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkKF9vd25lci5FbGVtZW50Lmxhc3RDaGlsZCk7XHJcblx0XHRcdH07XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIF9jb250cm9scy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29udGFpbnMoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhDb250cm9sW10gYXJyYXksIGludCBhcnJheUluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNvcHlUbyhhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb3B5VG8oQXJyYXkgYXJyYXksIGludCBhcnJheUluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNvcHlUbygoQ29udHJvbFtdKWFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJRW51bWVyYXRvcjxDb250cm9sPiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKENvbnRyb2wgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuSW5kZXhPZihpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluc2VydChpbnQgaW5kZXgsIENvbnRyb2wgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50Lmluc2VydEJlZm9yZTxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtLkVsZW1lbnQsIF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLk5vZGU+KF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLlJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElFbnVtZXJhdG9yIElFbnVtZXJhYmxlLkdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUdyaWRWaWV3IDogQ29udHJvbCwgSVN1cHBvcnRJbml0aWFsaXplXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZSBDb2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24gUm93cyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCB0YWJsZTtcclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFibGUgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudD4odGFibGUpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG5cclxuICAgICAgICAgICAgQ29sdW1ucyA9IG5ldyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uKHRoaXMsIHRhYmxlKTtcclxuICAgICAgICAgICAgUm93cyA9IG5ldyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uKHRoaXMsIHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJlZ2luSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEVuZEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc05hbWUgPSAoX3RhZyArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBcHBseURpc2FibGVkKHRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIE9uTmV3Um93RXZlbnQob2JqZWN0IHNlbmRlciwgTmV3Um93RXZlbnRBcmdzIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSb3dzLkFkZChhcmdzLlJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG9iamVjdCBkYXRhU291cmNlO1xyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgRGF0YVNvdXJjZSB7IGdldCB7IHJldHVybiBkYXRhU291cmNlOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPSBkYXRhU291cmNlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTb3VyY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTb3VyY2UgaXMgRGF0YVRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhU291cmNlLkFzPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdC5OZXdSb3dFdmVudCAtPSBPbk5ld1Jvd0V2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhU291cmNlICE9IG51bGwgJiYgZGF0YVNvdXJjZSBpcyBEYXRhVGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhU291cmNlLkFzPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR0Lk5ld1Jvd0V2ZW50ICs9IE9uTmV3Um93RXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFRPRE8gLSBhZGQgY29udHJvbHMgdmlhIGh0bWwuLi4uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24gOiBJTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+LCBJQ29sbGVjdGlvbiwgSUVudW1lcmFibGVcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBEYXRhR3JpZFZpZXcgX293bmVyO1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50IGhlYWRlcjtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24oRGF0YUdyaWRWaWV3IG93bmVyLCBSZXR5cGVkLmRvbS5IVE1MVGFibGVFbGVtZW50IHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PERhdGFHcmlkVmlld0NvbHVtbj4oKTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGhlYWRlciA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+KGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3IE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+IF9jb250cm9scztcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbiB0aGlzW2ludCBpbmRleF0geyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF9jb250cm9sc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQgeyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzLkNvdW50OyAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShEYXRhR3JpZFZpZXdDb2x1bW5bXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW1baV0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBoZWFkZXIuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlKGxlbi0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRlci5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKERhdGFHcmlkVmlld0NvbHVtbiBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhEYXRhR3JpZFZpZXdDb2x1bW5bXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChEYXRhR3JpZFZpZXdDb2x1bW5bXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8RGF0YUdyaWRWaWV3Q29sdW1uPiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKERhdGFHcmlkVmlld0NvbHVtbiBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIuaW5zZXJ0QmVmb3JlPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCwgaGVhZGVyLmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihoZWFkZXIuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uIDogSUxpc3Q8RGF0YVJvdz4sIElDb2xsZWN0aW9uLCBJRW51bWVyYWJsZVxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIERhdGFHcmlkVmlldyBfb3duZXI7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQgYm9keTtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24oRGF0YUdyaWRWaWV3IG93bmVyLCBSZXR5cGVkLmRvbS5IVE1MVGFibGVFbGVtZW50IHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PERhdGFSb3c+KCk7XHJcblxyXG4gICAgICAgICAgICBib2R5ID0gdGFibGUuY3JlYXRlVEJvZHkoKTtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVTZWN0aW9uRWxlbWVudD4oYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3IE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxEYXRhUm93PiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhUm93IHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJhbmdlKERhdGFSb3dbXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudD4oaXRlbVtpXS5FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBib2R5LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZShsZW4tLSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuQ29udGFpbnMoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb3B5VG8oRGF0YVJvd1tdIGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKEFycmF5IGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oKERhdGFSb3dbXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8RGF0YVJvdz4gR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgSW5kZXhPZihEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnNlcnQoaW50IGluZGV4LCBEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZTxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQ+KGl0ZW0uRWxlbWVudCwgYm9keS5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5JbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgUmVtb3ZlKERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLlJlbW92ZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZUF0KGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihib2R5LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLlJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElFbnVtZXJhdG9yIElFbnVtZXJhYmxlLkdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgR3JvdXBCb3ggOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCBsZWdlbmQ7XHJcbiAgICAgICAgcHJpdmF0ZSBQYW5lbCBwYW5lbDtcclxuICAgICAgICBwdWJsaWMgR3JvdXBCb3goKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYW5lbCA9IG5ldyBQYW5lbCgpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50PihsZWdlbmQgPSBuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4ocGFuZWwuRWxlbWVudCk7XHJcbiAgICAgICAgICAgIHBhbmVsLkVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgICAgIENvbnRyb2xzLl9vd25lciA9IHBhbmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gbGVnZW5kLnRleHRDb250ZW50OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLlRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZC5jbGFzc05hbWUgPSBhcnJ5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFuZWwuRWxlbWVudC5jbGFzc05hbWUgPSBhcnJ5WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBzdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBMYWJlbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGFiZWwoKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxTcGFuRWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gRWxlbWVudC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBMaW5rTGFiZWwgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpbmtMYWJlbCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTEFuY2hvckVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9FbGVtZW50LkFzPEhUTUxBbmNob3JFbGVtZW50PigpLkhyZWYgPSBcIiNcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIEVsZW1lbnQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBPbkNsaWNrKEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYmFzZS5PbkNsaWNrKGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKExpbmtDbGlja2VkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBMaW5rQ2xpY2tlZCh0aGlzLCBuZXcgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MobnVsbCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV2ZW50IExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyIExpbmtDbGlja2VkO1xyXG5cclxuICAgICAgICBwdWJsaWMgY2xhc3MgTGlua1xyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyZXNzQmFyIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50IHByb2dyZXNzQmFyO1xyXG4gICAgICAgIHB1YmxpYyBQcm9ncmVzc0JhcigpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudD4ocHJvZ3Jlc3NCYXIgPSBuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIENvbG9yIEZvcmVDb2xvciB7IGdldCB7IHJldHVybiBiYXNlLkZvcmVDb2xvcjsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5Gb3JlQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF9pbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlLlRvSHRtbCgpO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBpbnQgX3ZhbHVlO1xyXG4gICAgICAgIHB1YmxpYyBpbnQgVmFsdWUgeyBnZXQgeyByZXR1cm4gX3ZhbHVlOyB9ICBzZXQge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgMClcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAxMDA7XHJcbiAgICAgICAgICAgICAgICBfdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF9pbml0KVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gX3ZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID09IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IGFycnlbMV07ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gXCJcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBzdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbiNpZiAhQlJJREdFXHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbiNlbmRpZlxyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkZvcm1zO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29tYm9Cb3hSZXNpemUgOiBDb21ib0JveFxyXG4gICAge1xyXG4jaWYgIUJSSURHRVxyXG4gICAgICAgIFtEZWZhdWx0VmFsdWUoZmFsc2UpXVxyXG4gICAgICAgIFtCcm93c2FibGUodHJ1ZSldXHJcbiNlbmRpZlxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIEF1dG9TaXplXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2UuQXV0b1NpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuQXV0b1NpemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiNpZiAhQlJJREdFXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIFNpemUgTWluaW11bVNpemUgeyBnZXQgPT4gYmFzZS5NaW5pbXVtU2l6ZTsgc2V0ID0+IGJhc2UuTWluaW11bVNpemUgPSBiYXNlLlNpemU7IH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbWJvQm94UmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIERyYXdNb2RlID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRHJhd01vZGUuT3duZXJEcmF3VmFyaWFibGU7XHJcbiAgICAgICAgICAgIEF1dG9TaXplID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4jZW5kaWZcclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuI2lmICFCUklER0VcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG4jZW5kaWZcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW1cclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRleHRCb3hSZXNpemUgOiBUZXh0Qm94XHJcbiAgICB7XHJcbiNpZiAhQlJJREdFXHJcbiAgICAgICAgW0RlZmF1bHRWYWx1ZSh0cnVlKV1cclxuICAgICAgICBbQnJvd3NhYmxlKHRydWUpXVxyXG4jZW5kaWZcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgYm9vbCBBdXRvU2l6ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlLkF1dG9TaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLkF1dG9TaXplID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBUZXh0Qm94UmVzaXplKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEF1dG9TaXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbiA6IEJ1dHRvbkJhc2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQnV0dG9uKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MQnV0dG9uRWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDaGVja0JveCA6IEJ1dHRvbkJhc2VcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIFJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQgY2hlY2tCb3g7XHJcbiAgICAgICAgcHJpdmF0ZSBSZXR5cGVkLmRvbS5IVE1MTGFiZWxFbGVtZW50IHRleHQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IGNoZWNrYm94VG9MYWJlbElkO1xyXG4gICAgICAgIHB1YmxpYyBDaGVja0JveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IGNoZWNrYm94VG9MYWJlbElkKys7XHJcbiAgICAgICAgICAgIHZhciBpZHMgPSBcIl9fY2hlY2tcIiArIGlkLlRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50PigoY2hlY2tCb3ggPSBuZXcgUmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudCgpIHsgdHlwZSA9IFwiY2hlY2tib3hcIiwgaWQgPSBpZHMgfSkpO1xyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTExhYmVsRWxlbWVudD4odGV4dCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MTGFiZWxFbGVtZW50KCkgeyBodG1sRm9yID0gaWRzIH0pO1xyXG5cclxuICAgICAgICAgICAgY2hlY2tCb3guc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgIHRleHQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBDaGVja2VkIHsgZ2V0IHsgcmV0dXJuIGNoZWNrQm94LkBjaGVja2VkOyB9IHNldCB7IGNoZWNrQm94LkBjaGVja2VkID0gdmFsdWU7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiB0ZXh0LnRleHRDb250ZW50OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBvYmplY3QgVGFnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3RhZzsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3RhZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90YWcgaXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAoX3RhZyArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN0ci5Db250YWlucyhcIixcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyeSA9IHN0ci5TcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFycnkuTGVuZ3RoID09IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IGFycnlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IGFycnlbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGludCBUYWJJbmRleFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWJJbmRleDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoX2luaXQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRhYlN0b3ApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveC50YWJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5yZW1vdmVBdHRyaWJ1dGUoXCJUYWJJbmRleFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEZvcm0gOiBDb250YWluZXJDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IEZvcm1Ub3BCb3JkZXIgPSAyNztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgRm9ybUJvdHRvbkJvcmRlciA9IDY7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IEZvcm1MZWZ0Qm9yZGVyID0gNjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgRm9ybVJpZ2h0Qm9yZGVyID0gNjtcclxuXHJcbiAgICAgICAgcHVibGljIEZvcm0oKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQmFja0NvbG9yID0gU3lzdGVtQ29sb3JzLkNvbnRyb2w7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm9yZGVyVG9wID0gXCJzb2xpZCBcIiArIEZvcm1Ub3BCb3JkZXIgKyBcInB4XCIgKyBcIiBcIiArIENvbG9yLkNvcm5mbG93ZXJCbHVlO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgXCIgKyBGb3JtQm90dG9uQm9yZGVyICsgXCJweFwiICsgXCIgXCIgKyBDb2xvci5Db3JuZmxvd2VyQmx1ZTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9IFwic29saWQgXCIgKyBGb3JtTGVmdEJvcmRlciArIFwicHhcIiArIFwiIFwiICsgQ29sb3IuQ29ybmZsb3dlckJsdWU7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm9yZGVyUmlnaHQgPSBcInNvbGlkIFwiICsgRm9ybVJpZ2h0Qm9yZGVyICsgXCJweFwiICsgXCIgXCIgKyBDb2xvci5Db3JuZmxvd2VyQmx1ZTtcclxuXHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBGb250IEZvbnQgeyBnZXQgeyByZXR1cm4gYmFzZS5Gb250OyB9IHNldCB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYmFzZS5Gb250ID0gdmFsdWU7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH0gICAgICAgIFxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNpemUgR2V0Q2xpZW50U2l6ZShTaXplIHNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpemUoc2l6ZS5XaWR0aCAtIChGb3JtTGVmdEJvcmRlciArIEZvcm1SaWdodEJvcmRlciksIHNpemUuSGVpZ2h0IC0gKEZvcm1Ub3BCb3JkZXIgKyBGb3JtQm90dG9uQm9yZGVyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNpemUgU2V0U2l6ZShTaXplIGNsaWVudFNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNpemUoY2xpZW50U2l6ZS5XaWR0aCArIChGb3JtTGVmdEJvcmRlciArIEZvcm1SaWdodEJvcmRlciksIGNsaWVudFNpemUuSGVpZ2h0ICsgKEZvcm1Ub3BCb3JkZXIgKyBGb3JtQm90dG9uQm9yZGVyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIERpc3Bvc2UoYm9vbCBkaXNwb3NpbmcpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgcHVibGljIHZvaWQgU2hvdygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTEVsZW1lbnQ+KEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBTaXplIENsaWVudFNpemUgeyBnZXQgeyByZXR1cm4gR2V0Q2xpZW50U2l6ZShTaXplKTsgfSBzZXQgeyBTaXplID0gU2V0U2l6ZSh2YWx1ZSk7IH0gfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBQYW5lbCA6IENvbnRhaW5lckNvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFuZWwoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdCn0K
