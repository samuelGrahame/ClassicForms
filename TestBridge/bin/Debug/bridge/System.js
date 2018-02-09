/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 16.7.1
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
                this._enabled = true;
                this._readonly = false;
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

    Bridge.define("ClassicForms.ServerButtonHelper", {
        statics: {
            methods: {
                OnClickServer: function (button) {
                    var $t;
                    if (!button.IsSendingEventNull()) {
                        var evArgs = new ClassicForms.SeverSendingEventArgs();
                        button.RaiseSendingEvent(evArgs); // maybe get defaults..

                        if (evArgs == null || evArgs.Cancel) {
                            return false;
                        } else {
                            try {
                                jQuery.ajax({ contentType: evArgs.ContentType, data: evArgs.Data, dataType: evArgs.DataType, username: evArgs.Username, password: evArgs.Password, method: System.String.isNullOrWhiteSpace(evArgs.Method) ? "POST" : evArgs.Method, success: function (o, str, jq) {
                                    var $t;
                                    if (!button.IsSentEventNull()) {
                                        button.RaiseSentEvent(($t = new ClassicForms.ServerSentEventArgs(), $t.ex = null, $t.Result = o, $t));
                                    }

                                    return null;
                                }, error: function (jq, str, str2) {
                                    var $t;
                                    if (!button.IsSentEventNull()) {
                                        button.RaiseSentEvent(($t = new ClassicForms.ServerSentEventArgs(), $t.ex = new System.Exception(System.String.isNullOrWhiteSpace(str2) ? str : str2), $t.Result = null, $t));
                                    }

                                    return null;
                                } });
                            }
                            catch (ex2) {
                                ex2 = System.Exception.create(ex2);
                                if (!button.IsSentEventNull()) {
                                    button.RaiseSentEvent(($t = new ClassicForms.ServerSentEventArgs(), $t.ex = ex2, $t.Result = null, $t));
                                }
                            }

                        }

                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    });

    Bridge.define("ClassicForms.ServerSentEventArgs", {
        fields: {
            ex: null,
            Result: null
        }
    });

    Bridge.define("ClassicForms.ServerSideAttribute", {
        inherits: [System.Attribute],
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);

            }
        }
    });

    Bridge.define("ClassicForms.SeverSendingEventArgs", {
        fields: {
            ContentType: null,
            Data: null,
            DataType: null,
            Password: null,
            Username: null,
            Url: null,
            Method: null,
            Cancel: false
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

    Bridge.define("ClassicForms.ServerButton", {
        inherits: [System.Windows.Forms.Button],
        events: {
            Sending: null,
            Sent: null
        },
        methods: {
            OnClick: function (e) {
                if (!ClassicForms.ServerButtonHelper.OnClickServer(this)) {
                    System.Windows.Forms.Button.prototype.OnClick.call(this, e);
                }
            },
            RaiseSendingEvent: function (e) {
                if (!Bridge.staticEquals(this.Sending, null)) {
                    this.Sending(this, e);
                }
            },
            RaiseSentEvent: function (e) {
                if (!Bridge.staticEquals(this.Sent, null)) {
                    this.Sent(this, e);
                }
            },
            IsSendingEventNull: function () {
                return Bridge.staticEquals(this.Sending, null);
            },
            IsSentEventNull: function () {
                return Bridge.staticEquals(this.Sent, null);
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJTeXN0ZW0uanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIldpbmRvd3MvRm9ybXMvQ29udHJvbC5jcyIsIlNlcnZlckJ1dHRvbkRlc3BhdGNoLmNzIiwiRGF0YS9EYXRhQ29sdW1uLmNzIiwiRGF0YS9EYXRhQ29sdW1uQ29sbGVjdGlvbi5jcyIsIkRhdGEvRGF0YVJvdy5jcyIsIkRhdGEvRGF0YVJvd0NvbGxlY3Rpb24uY3MiLCJEYXRhL0RhdGFUYWJsZS5jcyIsIkRyYXdpbmcvQ29sb3IuY3MiLCJEcmF3aW5nL0ZvbnQuY3MiLCJEcmF3aW5nL1BvaW50LmNzIiwiRHJhd2luZy9TaXplLmNzIiwiRHJhd2luZy9TaXplRi5jcyIsIkRyYXdpbmcvU3lzdGVtQ29sb3JzLmNzIiwiV2luZG93cy9Gb3Jtcy9EYXRhR3JpZFZpZXdDb2x1bW4uY3MiLCJXaW5kb3dzL0Zvcm1zL0xpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyLmNzIiwiV2luZG93cy9Gb3Jtcy9PYmplY3RDb2xsZWN0aW9uLmNzIiwiV2luZG93cy9Gb3Jtcy9QYWRkaW5nLmNzIiwiV2luZG93cy9Gb3Jtcy9CdXR0b25CYXNlLmNzIiwiV2luZG93cy9Gb3Jtcy9Db21ib0JveC5jcyIsIldpbmRvd3MvRm9ybXMvQ29udGFpbmVyQ29udHJvbC5jcyIsIldpbmRvd3MvRm9ybXMvQ29udHJvbENvbGxlY3Rpb24uY3MiLCJXaW5kb3dzL0Zvcm1zL0RhdGFHcmlkVmlldy5jcyIsIldpbmRvd3MvRm9ybXMvRGF0YUdyaWRWaWV3Q29sdW1uQ29sbGVjdGlvbi5jcyIsIldpbmRvd3MvRm9ybXMvRGF0YUdyaWRWaWV3Um93Q29sbGVjdGlvbi5jcyIsIldpbmRvd3MvRm9ybXMvR3JvdXBCb3guY3MiLCJXaW5kb3dzL0Zvcm1zL0xhYmVsLmNzIiwiV2luZG93cy9Gb3Jtcy9MaW5rTGFiZWwuY3MiLCJXaW5kb3dzL0Zvcm1zL1Byb2dyZXNzQmFyLmNzIiwiV2luZG93cy9Gb3Jtcy9UZXh0Qm94LmNzIiwiV2luZG93cy9Gb3Jtcy9CdXR0b24uY3MiLCJXaW5kb3dzL0Zvcm1zL0NoZWNrQm94LmNzIiwiV2luZG93cy9Gb3Jtcy9Gb3JtLmNzIiwiV2luZG93cy9Gb3Jtcy9QYW5lbC5jcyIsIlNlcnZlckJ1dHRvbi5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVdtQ0EsT0FBT0E7OztvQkFBc0NBLGtDQUE2QkE7Ozs7O29CQUkzRkEsT0FBT0E7OztvQkFHVEEsaUJBQVlBOztvQkFFWkEsMEJBQXFCQTtvQkFDckJBLHlCQUFvQkE7Ozs7OztvQkFNQUEsT0FBT0E7OztvQkFDM0JBLGdCQUFXQTtvQkFDWEEsZ0NBQTJCQTs7Ozs7b0JBS0xBLE9BQU9BOzs7OztvQkFrQlpBLE9BQU9BOzs7b0JBQ3hCQSxhQUFRQTtvQkFDUkEsSUFBR0E7d0JBRUNBO3dCQUNBQTs7d0JBSUFBLDJCQUFzQkE7d0JBQ3RCQSw0QkFBdUJBOzs7Ozs7b0JBS1BBLE9BQU9BOzs7b0JBQzNCQSxnQkFBV0E7b0JBQ1hBLGdCQUFXQTs7Ozs7b0JBSWlCQSxPQUFPQTs7O29CQUNuQ0EsaUJBQVlBO29CQUNaQSxJQUFHQTt3QkFFQ0Esd0JBQW1CQTs7d0JBSW5CQTs7Ozs7O29CQVFGQSxPQUFPQTs7O29CQUdUQSxrQkFBYUE7b0JBQ2JBLHFDQUFnQ0E7Ozs7O29CQU85QkEsT0FBT0E7OztvQkFHVEEsZ0JBQVdBO29CQUNYQTs7Ozs7b0JBT0VBLE9BQU9BOzs7b0JBR1RBLGlCQUFZQTtvQkFDWkE7Ozs7Ozs7Ozs7Ozs7O29CQXVFRUEsT0FBT0E7OztvQkFHVEEsWUFBT0E7b0JBQ1BBLElBQUdBO3dCQUVDQSx5QkFBb0JBLENBQUNBOzt3QkFJckJBOztvQkFFSkE7Ozs7O29CQU15QkEsT0FBT0E7OztvQkFDaENBLGFBQVFBO29CQUNSQSxJQUFHQSxjQUFTQTt3QkFFUkE7d0JBQ0FBOzt3QkFJQUEsOEJBQXlCQTt3QkFDekJBLGdD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Ozs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7O3dCQVFqQkEsT0FBT0EsSUFBSUEsNEJBQU1BOzs7Ozt3QkFRakJBLE9BQU9BLElBQUlBLDRCQUFNQTs7Ozs7d0JBUWpCQSxPQUFPQSxJQUFJQSw0QkFBTUE7Ozs7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SUFBSUE7O2dCQUVSQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxJQUFJQSxJQUFJQTtvQkFFSkEsSUFBSUE7O2dCQUVSQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQTs7O2dCQUtiQSxJQUFJQSxDQUFDQSxXQUFVQSxXQUFXQSxDQUFDQSxXQUFVQTtvQkFFakNBOztnQkFFSkEsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEE7Z0JBQ0FBLFFBQVVBO2dCQUNWQSxRQUFVQTtnQkFDVkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsV0FBYUEsSUFBSUE7Z0JBQ2pCQSxJQUFJQSxNQUFLQTtvQkFFTEEsSUFBSUEsQ0FBQ0EsSUFBSUEsS0FBS0E7dUJBRWJBLElBQUlBLE1BQUtBO29CQUVWQSxJQUFJQSxNQUFLQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQTt1QkFFbkJBLElBQUlBLE1BQUtBO29CQUVWQSxJQUFJQSxNQUFLQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQTs7Z0JBRXhCQTtnQkFDQUEsSUFBSUE7b0JBRUFBOztnQkFFSkEsT0FBT0E7OztnQkFPUEEsUUFBVUEsU0FBSUE7Z0JBQ2RBLFFBQVVBLFNBQUlBO2dCQUNkQSxRQUFVQSxTQUFJQTtnQkFDZEE7Z0JBQ0FBLFFBQVVBO2dCQUNWQSxRQUFVQTtnQkFDVkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsSUFBSUE7b0JBRUpBLElBQUlBOztnQkFFUkEsSUFBSUEsTUFBS0E7b0JBRUxBLE9BQU9BOztnQkFFWEEsUUFBVUEsQ0FBQ0EsSUFBSUE7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QUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUE7b0JBQ0FBO29CQUNBQTtvQkFDQUEsZ0RBQWlCQTs7O29CQUtqQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLGdIQUFrQkE7b0JBQ2xCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsOEdBQWdCQTtvQkFDaEJBLDhHQUFnQkE7b0JBQ2hCQSw4R0FBZ0JBO29CQUNoQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSxnSEFBa0JBO29CQUNsQkEsZ0hBQWtCQTtvQkFDbEJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBO29CQUNqQkEsK0dBQWlCQTtvQkFDakJBLCtHQUFpQkE7b0JBQ2pCQSwrR0FBaUJBOzs7b0JBTWpCQSxRQUFVQTs7b0JBRVZBO29CQUNBQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBUUE7b0JBQ1JBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFRQTtvQkFDUkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVFBO29CQUNSQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSwrQkFBVUE7b0JBQ1ZBLCtCQUFVQTtvQkFDVkEsK0JBQVVBO29CQUNWQSxnQ0FBU0E7b0JBQ1RBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFTQTtvQkFDVEEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEsZ0NBQVVBO29CQUNWQSxnQ0FBVUE7b0JBQ1ZBLGdDQUFVQTtvQkFDVkEs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LkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5EcmF3aW5nO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQgeyByZXR1cm4gRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJOYW1lXCIpOyB9IHNldCB7IEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiTmFtZVwiLCB2YWx1ZSk7IH0gfVxyXG4gICAgICAgIHByaXZhdGUgUG9pbnQgX2xvY2F0aW9uO1xyXG4gICAgICAgIHB1YmxpYyBQb2ludCBMb2NhdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9sb2NhdGlvbjsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2xvY2F0aW9uID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5sZWZ0ID0gX2xvY2F0aW9uLlggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLnRvcCA9IF9sb2NhdGlvbi5ZICsgXCJweFwiO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF92aXNpYmxlO1xyXG4gICAgICAgIHB1YmxpYyBib29sIFZpc2libGUgeyBnZXQgeyByZXR1cm4gX3Zpc2libGU7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF92aXNpYmxlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBfdmlzaWJsZSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIjsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfVxyXG5cclxuICAgICAgICBpbnRlcm5hbCBDb250cm9sIF9wYXJlbnQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIFBhcmVudCB7IGdldCB7IHJldHVybiBfcGFyZW50OyB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIEZvcm0gR2V0Rm9ybSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5QYXJlbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5QYXJlbnQgaXMgRm9ybSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuUGFyZW50LkFzPEZvcm0+KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5QYXJlbnQuR2V0Rm9ybSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIFNpemUgX3NpemU7XHJcbiAgICAgICAgcHVibGljIFNpemUgU2l6ZSB7IGdldCB7IHJldHVybiBfc2l6ZTsgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX3NpemUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF9hdXRvU2l6ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLndpZHRoID0gX3NpemUuV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBfc2l6ZS5IZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF90YWJTdG9wO1xyXG4gICAgICAgIHB1YmxpYyBib29sIFRhYlN0b3AgeyBnZXQgeyByZXR1cm4gX3RhYlN0b3A7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF90YWJTdG9wID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBUYWJJbmRleCA9IF90YWJJbmRleDtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBpbnQgX3RhYkluZGV4O1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGludCBUYWJJbmRleCB7IGdldCB7IHJldHVybiBfdGFiSW5kZXg7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF90YWJJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoVGFiU3RvcClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnRhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJUYWJJbmRleFwiKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIFRleHQgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIENvbG9yIF9iYWNrQ29sb3I7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgQ29sb3IgQmFja0NvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2JhY2tDb2xvcjsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2JhY2tDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfYmFja0NvbG9yLlRvSHRtbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2VuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgRW5hYmxlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9lbmFibGVkOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXBwbHlEaXNhYmxlZCgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9yZWFkb25seSA9IGZhbHNlO1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgUmVhZE9ubHlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfcmVhZG9ubHk7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9yZWFkb25seSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgQXBwbHlSZWFkb25seSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBcHBseURpc2FibGVkKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoZWxlbWVudCA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gRWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihFbmFibGVkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgdm9pZCBMb2FkKClcclxuICAgICAgICB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIE9uTG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHZpcnR1YWwgdm9pZCBPbkxvYWQoKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBDb2xvciBGb3JlQ29sb3IgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdm9pZCBBcHBseVJlYWRvbmx5KFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQgPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFJlYWRPbmx5KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZG9ubHlcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZG9ubHlcIikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9iamVjdCBfdGFnO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFVzZSBUYWcgYXMgQ2xhc3MgTmFtZVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmKF90YWcgaXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBBcHBseURpc2FibGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sQ29sbGVjdGlvbiBDb250cm9scyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwcml2YXRlIEZvbnQgX2ZvbnQ7XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgRm9udCBGb250IHsgZ2V0IHsgcmV0dXJuIF9mb250OyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBfZm9udCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoX2ZvbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gXCJpbmhlcml0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IF9mb250LkVtU2l6ZS5Ub1N0cmluZygpICsgXCJwdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9IF9mb250LkZhbWlseU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2F1dG9TaXplO1xyXG4gICAgICAgIHByb3RlY3RlZCBib29sIF9pbml0O1xyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgQXV0b1NpemUgeyBnZXQgeyByZXR1cm4gX2F1dG9TaXplOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfYXV0b1NpemUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgU2l6ZSA9IF9zaXplO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBDb250cm9sKFJldHlwZWQuZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQpXHJcbiAgICAgICAgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBFbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIENvbnRyb2xzID0gbmV3IENvbnRyb2xDb2xsZWN0aW9uKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlcmJveFwiO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiaW5oZXJpdFwiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBcImluaGVyaXRcIjtcclxuXHJcbiAgICAgICAgICAgIFZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgVGFiU3RvcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50Lm9uY2xpY2sgPSBuZXcgUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQub25jbGlja0ZuKChldikgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBPbkNsaWNrKEV2ZW50QXJncy5FbXB0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfaW5pdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdmlydHVhbCB2b2lkIE9uQ2xpY2soRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoQ2xpY2sgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIENsaWNrKHRoaXMsIGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFBhZGRpbmcgTWFyZ2luIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgUGFkZGluZyBQYWRkaW5nIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGV2ZW50IEV2ZW50SGFuZGxlciBDbGljaztcclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgU3VzcGVuZExheW91dCgpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVzdW1lTGF5b3V0KGJvb2wgcGVyZm9ybUxheW91dClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdm9pZCBQZXJmb3JtTGF5b3V0KClcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgQ2xhc3NpY0Zvcm1zXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3MgU2VydmVyQnV0dG9uSGVscGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBib29sIE9uQ2xpY2tTZXJ2ZXIoU2VydmVyQnV0dG9uIGJ1dHRvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghYnV0dG9uLklzU2VuZGluZ0V2ZW50TnVsbCgpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXZBcmdzID0gbmV3IFNldmVyU2VuZGluZ0V2ZW50QXJncygpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLlJhaXNlU2VuZGluZ0V2ZW50KGV2QXJncyk7IC8vIG1heWJlIGdldCBkZWZhdWx0cy4uXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChldkFyZ3MgPT0gbnVsbCB8fCBldkFyZ3MuQ2FuY2VsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJldHlwZWQuanF1ZXJ5LmpRdWVyeS5hamF4KG5ldyBSZXR5cGVkLmpxdWVyeS5KUXVlcnlBamF4U2V0dGluZ3MoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IGV2QXJncy5Db250ZW50VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBldkFyZ3MuRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gZXZBcmdzLkRhdGFUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUgPSBldkFyZ3MuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9IGV2QXJncy5QYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IHN0cmluZy5Jc051bGxPcldoaXRlU3BhY2UoZXZBcmdzLk1ldGhvZCkgPyBcIlBPU1RcIiA6IGV2QXJncy5NZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gbmV3IFJldHlwZWQuanF1ZXJ5LkpRdWVyeUFqYXhTZXR0aW5ncy5zdWNjZXNzRm4oKG8sIHN0ciwganEpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidXR0b24uSXNTZW50RXZlbnROdWxsKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uUmFpc2VTZW50RXZlbnQobmV3IFNlcnZlclNlbnRFdmVudEFyZ3MoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXN1bHQgPSBvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFJldHlwZWQuanF1ZXJ5LkpRdWVyeUFqYXhTZXR0aW5ncy5lcnJvckZuKChqcSwgc3RyLCBzdHIyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnV0dG9uLklzU2VudEV2ZW50TnVsbCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLlJhaXNlU2VudEV2ZW50KG5ldyBTZXJ2ZXJTZW50RXZlbnRBcmdzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXggPSBuZXcgRXhjZXB0aW9uKHN0cmluZy5Jc051bGxPcldoaXRlU3BhY2Uoc3RyMikgPyBzdHIgOiBzdHIyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VsdCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoRXhjZXB0aW9uIGV4MilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnV0dG9uLklzU2VudEV2ZW50TnVsbCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uUmFpc2VTZW50RXZlbnQobmV3IFNlcnZlclNlbnRFdmVudEFyZ3MoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ID0gZXgyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VsdCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRhdGFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIERhdGFDb2x1bW5cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFUYWJsZSBUYWJsZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgRGF0YUNvbHVtbihEYXRhVGFibGUgdGFibGUsIHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIFRhYmxlID0gdGFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUNvbHVtbkNvbGxlY3Rpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgRGF0YVRhYmxlIFRhYmxlIHtnZXQ7cHJpdmF0ZSBzZXQ7fVxyXG4gICAgICAgIGludGVybmFsIExpc3Q8RGF0YUNvbHVtbj4gQ29sdW1ucztcclxuXHJcbiAgICAgICAgcHVibGljIGludCBHZXRDb2x1bW5JbmRleChzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgQ29sdW1ucy5Db3VudDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ29sdW1uc1tpXS5OYW1lID09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQge2dldHtyZXR1cm4gQ29sdW1ucy5Db3VudDt9fVxyXG5cclxuICAgICAgICBpbnRlcm5hbCBEYXRhQ29sdW1uQ29sbGVjdGlvbihEYXRhVGFibGUgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJsZSA9IHRhYmxlO1xyXG4gICAgICAgICAgICBDb2x1bW5zID0gbmV3IExpc3Q8RGF0YUNvbHVtbj4oKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUNvbHVtbiBBZGQoc3RyaW5nIGNvbHVtbk5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBEYXRhQ29sdW1uKFRhYmxlLCBjb2x1bW5OYW1lKTtcclxuXHJcbiAgICAgICAgICAgIENvbHVtbnMuQWRkKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhUm93XHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudCBFbGVtZW50OyAgICAgICAgXHJcbiAgICAgICAgaW50ZXJuYWwgTGlzdDxvYmplY3Q+IGRhdGE7XHJcbiAgICAgICAgcHVibGljIERhdGFDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgaW50ZXJuYWwgRGF0YVJvdyhEYXRhQ29sdW1uQ29sbGVjdGlvbiBjb2x1bW5zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29sdW1ucyA9IGNvbHVtbnM7XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgTGlzdDxvYmplY3Q+KENvbHVtbnMuQ291bnQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBFbGVtZW50ID0gbmV3IFJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBuZXcgb2JqZWN0IHRoaXNbc3RyaW5nIGNvbHVtbk5hbWVdIHsgZ2V0IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW0NvbHVtbnMuR2V0Q29sdW1uSW5kZXgoY29sdW1uTmFtZSldO1xyXG4gICAgICAgICAgICB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW0NvbHVtbnMuR2V0Q29sdW1uSW5kZXgoY29sdW1uTmFtZSldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgdGhpc1tpbnQgY29sdW1uSW5kZXhdIHsgZ2V0IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA8IDAgfHwgY29sdW1uSW5kZXggPiBDb2x1bW5zLkNvdW50IC0gMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtjb2x1bW5JbmRleF07XHJcbiAgICAgICAgICAgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ID4gQ29sdW1ucy5Db3VudCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA+IGRhdGEuQ291bnQgLSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSBkYXRhLkNvdW50OyBpIDwgY29sdW1uSW5kZXggKyAxOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGMgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlRGF0YUNlbGxFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBjb2x1bW5JbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGMuaW5uZXJUZXh0ID0gKHZhbHVlICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVEYXRhQ2VsbEVsZW1lbnQ+KGRjKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZURhdGFDZWxsRWxlbWVudD4oZGMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2hpbGRyZW5bY29sdW1uSW5kZXhdLkFzPFJldHlwZWQuZG9tLkhUTUxFbGVtZW50PigpLmlubmVyVGV4dCA9ICh2YWx1ZSArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbY29sdW1uSW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IH0gICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EYXRhXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhUm93Q29sbGVjdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEYXRhVGFibGUgVGFibGUgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgaW50ZXJuYWwgTGlzdDxEYXRhUm93PiByb3dzO1xyXG5cclxuICAgICAgICBpbnRlcm5hbCBEYXRhUm93Q29sbGVjdGlvbihEYXRhVGFibGUgdGFibGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJsZSA9IHRhYmxlO1xyXG4gICAgICAgICAgICByb3dzID0gbmV3IExpc3Q8RGF0YVJvdz4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChEYXRhUm93IGRyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm93cy5BZGQoZHIpO1xyXG4gICAgICAgICAgICBUYWJsZS5Pbk5ld1JvdyhUYWJsZSwgbmV3IFdpbmRvd3MuRm9ybXMuTmV3Um93RXZlbnRBcmdzKCkgeyBSb3cgPSBkciB9KTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRGF0YVxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YVRhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFSb3dDb2xsZWN0aW9uIFJvd3MgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhVGFibGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29sdW1ucyA9IG5ldyBEYXRhQ29sdW1uQ29sbGVjdGlvbih0aGlzKTtcclxuICAgICAgICAgICAgUm93cyA9IG5ldyBEYXRhUm93Q29sbGVjdGlvbih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIERhdGFSb3cgTmV3Um93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkciA9IG5ldyBEYXRhUm93KENvbHVtbnMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQWNjZXB0Q2hhbmdlcygpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBldmVudCBOZXdSb3dFdmVudEhhbmRsZXIgTmV3Um93RXZlbnQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgT25OZXdSb3cob2JqZWN0IHNlbmRlciwgTmV3Um93RXZlbnRBcmdzIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihOZXdSb3dFdmVudCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBOZXdSb3dFdmVudChzZW5kZXIsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEJyaWRnZTtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgQ29sb3JcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvbG9yIEVtcHR5O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNob3J0IFN0YXRlS25vd25Db2xvclZhbGlkO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNob3J0IFN0YXRlQVJHQlZhbHVlVmFsaWQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc2hvcnQgU3RhdGVWYWx1ZU1hc2s7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc2hvcnQgU3RhdGVOYW1lVmFsaWQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbG9uZyBOb3REZWZpbmVkVmFsdWU7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQVJHQkFscGhhU2hpZnQgPSAweDE4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFSR0JSZWRTaGlmdCA9IDB4MTA7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgQVJHQkdyZWVuU2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFSR0JCbHVlU2hpZnQgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc3RyaW5nIG5hbWU7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBsb25nIHZhbHVlO1xyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgc2hvcnQga25vd25Db2xvcjtcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHNob3J0IHN0YXRlO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRyYW5zcGFyZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBbGljZUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQWxpY2VCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBbnRpcXVlV2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQW50aXF1ZVdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBBcXVhXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFxdWEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFxdWFtYXJpbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQXF1YW1hcmluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQXp1cmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQXp1cmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJlaWdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJlaWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCaXNxdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmlzcXVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCbGFja1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CbGFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmxhbmNoZWRBbG1vbmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmxhbmNoZWRBbG1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQmx1ZVZpb2xldFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CbHVlVmlvbGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBCcm93blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ccm93bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnVybHlXb29kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1cmx5V29vZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ2FkZXRCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNhZGV0Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ2hhcnRyZXVzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5DaGFydHJldXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDaG9jb2xhdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ2hvY29sYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb3JhbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Db3JhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29ybmZsb3dlckJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29ybmZsb3dlckJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvcm5zaWxrXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvcm5zaWxrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDcmltc29uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNyaW1zb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEN5YW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ3lhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya0JsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0JsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtDeWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtDeWFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrR29sZGVucm9kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtHb2xkZW5yb2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrS2hha2lcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya0toYWtpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrTWFnZW50YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrTWFnZW50YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya09saXZlR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya09saXZlR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtPcmFuZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya09yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya09yY2hpZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrT3JjaGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrUmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtSZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtTYWxtb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1NhbG1vbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1NlYUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtTZWFHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1NsYXRlQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrU2xhdGVCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEYXJrU2xhdGVHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkRhcmtTbGF0ZUdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERhcmtUdXJxdW9pc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGFya1R1cnF1b2lzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGFya1Zpb2xldFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EYXJrVmlvbGV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBEZWVwUGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5EZWVwUGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRGVlcFNreUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGVlcFNreUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERpbUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGltR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRG9kZ2VyQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Eb2RnZXJCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGaXJlYnJpY2tcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRmlyZWJyaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBGbG9yYWxXaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5GbG9yYWxXaGl0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRm9yZXN0R3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRm9yZXN0R3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZ1Y2hzaWFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRnVjaHNpYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR2FpbnNib3JvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdhaW5zYm9ybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR2hvc3RXaGl0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5HaG9zdFdoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHb2xkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdvbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdvbGRlbnJvZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Hb2xkZW5yb2QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyZWVuWWVsbG93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyZWVuWWVsbG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBIb25leWRld1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ib25leWRldyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSG90UGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ib3RQaW5rKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmRpYW5SZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5kaWFuUmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmRpZ29cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5kaWdvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJdm9yeVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Jdm9yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgS2hha2lcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuS2hha2kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExhdmVuZGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxhdmVuZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMYXZlbmRlckJsdXNoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxhdmVuZGVyQmx1c2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExhd25HcmVlblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MYXduR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExlbW9uQ2hpZmZvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MZW1vbkNoaWZmb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0Q29yYWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRDb3JhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRDeWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0Q3lhbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRHb2xkZW5yb2RZZWxsb3dcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRHb2xkZW5yb2RZZWxsb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0R3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRHcmF5XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0R3JheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRQaW5rXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0UGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTYWxtb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTYWxtb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U2VhR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTZWFHcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTa3lCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U2t5Qmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGlnaHRTbGF0ZUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGlnaHRTbGF0ZUdyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIExpZ2h0U3RlZWxCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkxpZ2h0U3RlZWxCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaWdodFllbGxvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaWdodFllbGxvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTGltZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaW1lR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTGltZUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBMaW5lblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5MaW5lbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWFnZW50YVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NYWdlbnRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNYXJvb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWFyb29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1BcXVhbWFyaW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bUFxdWFtYXJpbmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtQmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtT3JjaGlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bU9yY2hpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtUHVycGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVB1cnBsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVkaXVtU2VhR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtU2VhR3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVNsYXRlQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZWRpdW1TbGF0ZUJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lZGl1bVNwcmluZ0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lZGl1bVNwcmluZ0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1UdXJxdW9pc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtVHVycXVvaXNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZWRpdW1WaW9sZXRSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVkaXVtVmlvbGV0UmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNaWRuaWdodEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWlkbmlnaHRCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNaW50Q3JlYW1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWludENyZWFtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNaXN0eVJvc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWlzdHlSb3NlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNb2NjYXNpblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Nb2NjYXNpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTmF2YWpvV2hpdGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTmF2YWpvV2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE5hdnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTmF2eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT2xkTGFjZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PbGRMYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBPbGl2ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5PbGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT2xpdmVEcmFiXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9saXZlRHJhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT3JhbmdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT3JhbmdlUmVkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9yYW5nZVJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgT3JjaGlkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk9yY2hpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFsZUdvbGRlbnJvZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYWxlR29sZGVucm9kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYWxlR3JlZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFsZUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQYWxlVHVycXVvaXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBhbGVUdXJxdW9pc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBhbGVWaW9sZXRSZWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGFsZVZpb2xldFJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGFwYXlhV2hpcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QYXBheWFXaGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQZWFjaFB1ZmZcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGVhY2hQdWZmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQZXJ1XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBlcnUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFBpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuUGluayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgUGx1bVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QbHVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBQb3dkZXJCbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlBvd2RlckJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFB1cnBsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5QdXJwbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFJlZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5SZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFJvc3lCcm93blxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Sb3N5QnJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFJveWFsQmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Sb3lhbEJsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNhZGRsZUJyb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNhZGRsZUJyb3duKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTYWxtb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2FsbW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTYW5keUJyb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNhbmR5QnJvd24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNlYUdyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNlYUdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTZWFTaGVsbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5TZWFTaGVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2llbm5hXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNpZW5uYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2lsdmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNpbHZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgU2t5Qmx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5Ta3lCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTbGF0ZUJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2xhdGVCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTbGF0ZUdyYXlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2xhdGVHcmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTbm93XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNub3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFNwcmluZ0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlNwcmluZ0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTdGVlbEJsdWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU3RlZWxCbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVGFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBUZWFsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRlYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFRoaXN0bGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuVGhpc3RsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVG9tYXRvXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlRvbWF0byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVHVycXVvaXNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlR1cnF1b2lzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgVmlvbGV0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlZpb2xldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2hlYXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuV2hlYXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFdoaXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldoaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBXaGl0ZVNtb2tlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLldoaXRlU21va2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFllbGxvd1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5ZZWxsb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFllbGxvd0dyZWVuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLlllbGxvd0dyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgQ29sb3IoS25vd25Db2xvciBrbm93bkNvbG9yKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDBMO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVLbm93bkNvbG9yVmFsaWQ7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMua25vd25Db2xvciA9IChzaG9ydClrbm93bkNvbG9yOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBDb2xvcihsb25nIHZhbHVlLCBzaG9ydCBzdGF0ZSwgc3RyaW5nIG5hbWUsIEtub3duQ29sb3Iga25vd25Db2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmtub3duQ29sb3IgPSAoc2hvcnQpa25vd25Db2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBieXRlIFJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGJ5dGUpKCh0aGlzLlZhbHVlID4+IDB4MTApICYgMHhmZkwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnl0ZSBHXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChieXRlKSgodGhpcy5WYWx1ZSA+PiA4KSAmIDB4ZmZMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ5dGUgQlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYnl0ZSkodGhpcy5WYWx1ZSAmIDB4ZmZMKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ5dGUgQVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYnl0ZSkoKHRoaXMuVmFsdWUgPj4gMHgxOCkgJiAweGZmTCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzS25vd25Db2xvclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKHRoaXMuc3RhdGUgJiBTdGF0ZUtub3duQ29sb3JWYWxpZCkgPiAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNFbXB0eVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNOYW1lZENvbG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVOYW1lVmFsaWQpID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSXNLbm93bkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzU3lzdGVtQ29sb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuSXNLbm93bkNvbG9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmtub3duQ29sb3IgPiAweDFhKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5rbm93bkNvbG9yID4gMHhhNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbXBsaWNpdCBvcGVyYXRvciBzdHJpbmcoQ29sb3IgY29sb3IpICAvLyBpbXBsaWNpdCBkaWdpdCB0byBieXRlIGNvbnZlcnNpb24gb3BlcmF0b3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xvci5Ub0h0bWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW1wbGljaXQgb3BlcmF0b3IgQ29sb3Ioc3RyaW5nIGhleFZhbHVlKSAgLy8gaW1wbGljaXQgZGlnaXQgdG8gYnl0ZSBjb252ZXJzaW9uIG9wZXJhdG9yXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29sb3IuRnJvbUhleChoZXhWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0cmluZyBOYW1lQW5kQVJHQlZhbHVlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJ7e05hbWU9ezB9LCBBUkdCPSh7MX0sIHsyfSwgezN9LCB7NH0pfX1cIiwgdGhpcy5OYW1lLCB0aGlzLkEsIHRoaXMuUiwgdGhpcy5HLCB0aGlzLkIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZU5hbWVWYWxpZCkgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLklzS25vd25Db2xvcilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ29udmVydC5Ub1N0cmluZyh0aGlzLnZhbHVlLCAweDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0cmluZyBzdHIgPSBLbm93bkNvbG9yVGFibGUuS25vd25Db2xvclRvTmFtZSgoS25vd25Db2xvcil0aGlzLmtub3duQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5rbm93bkNvbG9yLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbG9uZyBWYWx1ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlVmFsdWVNYXNrKSAhPSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSXNLbm93bkNvbG9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobG9uZylLbm93bkNvbG9yVGFibGUuS25vd25Db2xvclRvQXJnYigoS25vd25Db2xvcil0aGlzLmtub3duQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vdERlZmluZWRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDaGVja0J5dGUoaW50IHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCh2YWx1ZSA8IDApIHx8ICh2YWx1ZSA+IDB4ZmYpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXJndW1lbnRFeGNlcHRpb24oXCJJbnZhbGlkRXgyQm91bmRBcmd1bWVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgbG9uZyBNYWtlQXJnYihieXRlIGFscGhhLCBieXRlIHJlZCwgYnl0ZSBncmVlbiwgYnl0ZSBibHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhbHBoYSA8PCAyNCkgfCAocmVkIDw8IDE2KSB8IChncmVlbiA8PCA4KSB8IGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCBhcmdiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihhcmdiICYgKChsb25nKTB4ZmZmZmZmZmZMKSwgU3RhdGVBUkdCVmFsdWVWYWxpZCwgbnVsbCwgKEtub3duQ29sb3IpMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCBhbHBoYSwgaW50IHJlZCwgaW50IGdyZWVuLCBpbnQgYmx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShhbHBoYSk7XHJcbiAgICAgICAgICAgIENoZWNrQnl0ZShyZWQpO1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoZ3JlZW4pO1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoYmx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoTWFrZUFyZ2IoKGJ5dGUpYWxwaGEsIChieXRlKXJlZCwgKGJ5dGUpZ3JlZW4sIChieXRlKWJsdWUpLCBTdGF0ZUFSR0JWYWx1ZVZhbGlkLCBudWxsLCAoS25vd25Db2xvcikwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUFyZ2IoaW50IGFscGhhLCBDb2xvciBiYXNlQ29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDaGVja0J5dGUoYWxwaGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKE1ha2VBcmdiKChieXRlKWFscGhhLCBiYXNlQ29sb3IuUiwgYmFzZUNvbG9yLkcsIGJhc2VDb2xvci5CKSwgU3RhdGVBUkdCVmFsdWVWYWxpZCwgbnVsbCwgKEtub3duQ29sb3IpMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21BcmdiKGludCByZWQsIGludCBncmVlbiwgaW50IGJsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRnJvbUFyZ2IoMHhmZiwgcmVkLCBncmVlbiwgYmx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgSXNFbnVtVmFsaWQoRW51bSBlbnVtVmFsdWUsIGludCB2YWx1ZSwgaW50IG1pblZhbHVlLCBpbnQgbWF4VmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCh2YWx1ZSA+PSBtaW5WYWx1ZSkgJiYgKHZhbHVlIDw9IG1heFZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEZyb21Lbm93bkNvbG9yKEtub3duQ29sb3IgY29sb3IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yKGNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgY29tcG9uZW50VG9IZXgoYnl0ZSB2YWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdmFsdWUuVG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHguTGVuZ3RoID09IDEgPyBcIjBcIiA6IFwiXCIpICsgeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVG9IdG1sKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKElzS25vd25Db2xvcilcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBDb2xvci5Gcm9tQXJnYihLbm93bkNvbG9yVGFibGUuS25vd25Db2xvclRvQXJnYigoS25vd25Db2xvcilrbm93bkNvbG9yKSkuVG9IdG1sKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQSAhPSAyNTUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCIjezB9ezF9ezJ9ezN9XCIsIGNvbXBvbmVudFRvSGV4KEEpLCBjb21wb25lbnRUb0hleChSKSwgY29tcG9uZW50VG9IZXgoRyksIGNvbXBvbmVudFRvSGV4KEIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nLkZvcm1hdChcIiN7MH17MX17Mn1cIiwgY29tcG9uZW50VG9IZXgoUiksIGNvbXBvbmVudFRvSGV4KEcpLCBjb21wb25lbnRUb0hleChCKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgRnJvbUhleChzdHJpbmcgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuU3RhcnRzV2l0aChcIiNcIikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRnJvbUhleCh2YWx1ZS5TdWJzdHJpbmcoMSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBDb2xvci5Gcm9tQXJnYihTY3JpcHQuUGFyc2VJbnQodmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZsb2F0IEdldEJyaWdodG5lc3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQgeiA9IFIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB4ID0gRyAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IGMgPSBCIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgdiA9IHo7XHJcbiAgICAgICAgICAgIGZsb2F0IGIgPSB6O1xyXG4gICAgICAgICAgICBpZiAoeCA+IHYpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjID4gdilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPCBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA8IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKHYgKyBiKSAvIDJmKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmbG9hdCBHZXRIdWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLlIgPT0gdGhpcy5HKSAmJiAodGhpcy5HID09IHRoaXMuQikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbG9hdCB6ID0gUiAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IHggPSBHIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgYyA9IEIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB2ID0gMGY7XHJcbiAgICAgICAgICAgIGZsb2F0IGIgPSB6O1xyXG4gICAgICAgICAgICBmbG9hdCBuID0gejtcclxuICAgICAgICAgICAgaWYgKHggPiBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYyA+IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4IDwgbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPCBuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbG9hdCBudW02ID0gYiAtIG47XHJcbiAgICAgICAgICAgIGlmICh6ID09IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSAoeCAtIGMpIC8gbnVtNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh4ID09IGIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHYgPSAyZiArICgoYyAtIHopIC8gbnVtNik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PSBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ID0gNGYgKyAoKHogLSB4KSAvIG51bTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHYgKj0gNjBmO1xyXG4gICAgICAgICAgICBpZiAodiA8IDBmKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ICs9IDM2MGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBmbG9hdCBxID0gMjU1ZjtcclxuXHJcbiAgICAgICAgcHVibGljIGZsb2F0IEdldFNhdHVyYXRpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxvYXQgeiA9IFIgLyBxO1xyXG4gICAgICAgICAgICBmbG9hdCB4ID0gRyAvIHE7XHJcbiAgICAgICAgICAgIGZsb2F0IGMgPSBCIC8gcTtcclxuICAgICAgICAgICAgZmxvYXQgdiA9IDBmO1xyXG4gICAgICAgICAgICBmbG9hdCBiID0gejtcclxuICAgICAgICAgICAgZmxvYXQgbiA9IHo7XHJcbiAgICAgICAgICAgIGlmICh4ID4gYilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYiA9IHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPiBiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA8IG4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG4gPSB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjIDwgbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbiA9IGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIgPT0gbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxvYXQgbSA9IChiICsgbikgLyAyZjtcclxuICAgICAgICAgICAgaWYgKG0gPD0gMC41KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKChiIC0gbikgLyAoYiArIG4pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKChiIC0gbikgLyAoKDJmIC0gYikgLSBuKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IFRvQXJnYigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKGludCl0aGlzLlZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEtub3duQ29sb3IgVG9Lbm93bkNvbG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAoS25vd25Db2xvcil0aGlzLmtub3duQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRvU3RyaW5nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFN0cmluZ0J1aWxkZXIgYnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKDB4MjApO1xyXG4gICAgICAgICAgICBidWlsZGVyLkFwcGVuZChiYXNlLkdldFR5cGUoKS5OYW1lKTtcclxuICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQoXCIgW1wiKTtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnN0YXRlICYgU3RhdGVOYW1lVmFsaWQpICE9IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuQXBwZW5kKHRoaXMuTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoKHRoaXMuc3RhdGUgJiBTdGF0ZUtub3duQ29sb3JWYWxpZCkgIT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQodGhpcy5OYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgodGhpcy5zdGF0ZSAmIFN0YXRlVmFsdWVNYXNrKSAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLkFwcGVuZEZvcm1hdChcIkE9ezB9LCBSPXsxfSwgRz17Mn0sIEI9ezN9XCIsIEEsIFIsIEcsIEIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5BcHBlbmQoXCJFbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZGVyLkFwcGVuZChcIl1cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgb3BlcmF0b3IgPT0oQ29sb3IgbGVmdCwgQ29sb3IgcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoKChsZWZ0LnZhbHVlICE9IHJpZ2h0LnZhbHVlKSB8fCAobGVmdC5zdGF0ZSAhPSByaWdodC5zdGF0ZSkpIHx8IChsZWZ0Lmtub3duQ29sb3IgIT0gcmlnaHQua25vd25Db2xvcikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKChsZWZ0Lm5hbWUgPT0gcmlnaHQubmFtZSkgfHwgKCgobGVmdC5uYW1lICE9IG51bGwpICYmIChyaWdodC5uYW1lICE9IG51bGwpKSAmJiBsZWZ0Lm5hbWUuRXF1YWxzKHJpZ2h0Lm5hbWUpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGJvb2wgb3BlcmF0b3IgIT0oQ29sb3IgbGVmdCwgQ29sb3IgcmlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gIShsZWZ0ID09IHJpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBib29sIEVxdWFscyhvYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG9iaiBpcyBDb2xvcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29sb3IgY29sb3IgPSAoQ29sb3Ipb2JqO1xyXG4gICAgICAgICAgICAgICAgaWYgKCgodGhpcy52YWx1ZSA9PSBjb2xvci52YWx1ZSkgJiYgKHRoaXMuc3RhdGUgPT0gY29sb3Iuc3RhdGUpKSAmJiAodGhpcy5rbm93bkNvbG9yID09IGNvbG9yLmtub3duQ29sb3IpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHRoaXMubmFtZSA9PSBjb2xvci5uYW1lKSB8fCAoKCh0aGlzLm5hbWUgIT0gbnVsbCkgJiYgKGNvbG9yLm5hbWUgIT0gbnVsbCkpICYmIHRoaXMubmFtZS5FcXVhbHModGhpcy5uYW1lKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBpbnQgR2V0SGFzaENvZGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuICgodGhpcy52YWx1ZS5HZXRIYXNoQ29kZSgpIF4gdGhpcy5zdGF0ZS5HZXRIYXNoQ29kZSgpKSBeIHRoaXMua25vd25Db2xvci5HZXRIYXNoQ29kZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBDb2xvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbXB0eSA9IG5ldyBDb2xvcigpO1xyXG4gICAgICAgICAgICBTdGF0ZUtub3duQ29sb3JWYWxpZCA9IDE7XHJcbiAgICAgICAgICAgIFN0YXRlQVJHQlZhbHVlVmFsaWQgPSAyO1xyXG4gICAgICAgICAgICBTdGF0ZVZhbHVlTWFzayA9IFN0YXRlQVJHQlZhbHVlVmFsaWQ7XHJcbiAgICAgICAgICAgIFN0YXRlTmFtZVZhbGlkID0gODtcclxuICAgICAgICAgICAgTm90RGVmaW5lZFZhbHVlID0gMEw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIEtub3duQ29sb3JcclxuICAgIHtcclxuICAgICAgICBBY3RpdmVCb3JkZXIgPSAxLFxyXG4gICAgICAgIEFjdGl2ZUNhcHRpb24gPSAyLFxyXG4gICAgICAgIEFjdGl2ZUNhcHRpb25UZXh0ID0gMyxcclxuICAgICAgICBBbGljZUJsdWUgPSAweDFjLFxyXG4gICAgICAgIEFudGlxdWVXaGl0ZSA9IDB4MWQsXHJcbiAgICAgICAgQXBwV29ya3NwYWNlID0gNCxcclxuICAgICAgICBBcXVhID0gMzAsXHJcbiAgICAgICAgQXF1YW1hcmluZSA9IDB4MWYsXHJcbiAgICAgICAgQXp1cmUgPSAweDIwLFxyXG4gICAgICAgIEJlaWdlID0gMHgyMSxcclxuICAgICAgICBCaXNxdWUgPSAweDIyLFxyXG4gICAgICAgIEJsYWNrID0gMHgyMyxcclxuICAgICAgICBCbGFuY2hlZEFsbW9uZCA9IDB4MjQsXHJcbiAgICAgICAgQmx1ZSA9IDB4MjUsXHJcbiAgICAgICAgQmx1ZVZpb2xldCA9IDB4MjYsXHJcbiAgICAgICAgQnJvd24gPSAweDI3LFxyXG4gICAgICAgIEJ1cmx5V29vZCA9IDQwLFxyXG4gICAgICAgIEJ1dHRvbkZhY2UgPSAweGE4LFxyXG4gICAgICAgIEJ1dHRvbkhpZ2hsaWdodCA9IDB4YTksXHJcbiAgICAgICAgQnV0dG9uU2hhZG93ID0gMTcwLFxyXG4gICAgICAgIENhZGV0Qmx1ZSA9IDB4MjksXHJcbiAgICAgICAgQ2hhcnRyZXVzZSA9IDB4MmEsXHJcbiAgICAgICAgQ2hvY29sYXRlID0gMHgyYixcclxuICAgICAgICBDb250cm9sID0gNSxcclxuICAgICAgICBDb250cm9sRGFyayA9IDYsXHJcbiAgICAgICAgQ29udHJvbERhcmtEYXJrID0gNyxcclxuICAgICAgICBDb250cm9sTGlnaHQgPSA4LFxyXG4gICAgICAgIENvbnRyb2xMaWdodExpZ2h0ID0gOSxcclxuICAgICAgICBDb250cm9sVGV4dCA9IDEwLFxyXG4gICAgICAgIENvcmFsID0gMHgyYyxcclxuICAgICAgICBDb3JuZmxvd2VyQmx1ZSA9IDB4MmQsXHJcbiAgICAgICAgQ29ybnNpbGsgPSAweDJlLFxyXG4gICAgICAgIENyaW1zb24gPSAweDJmLFxyXG4gICAgICAgIEN5YW4gPSAweDMwLFxyXG4gICAgICAgIERhcmtCbHVlID0gMHgzMSxcclxuICAgICAgICBEYXJrQ3lhbiA9IDUwLFxyXG4gICAgICAgIERhcmtHb2xkZW5yb2QgPSAweDMzLFxyXG4gICAgICAgIERhcmtHcmF5ID0gMHgzNCxcclxuICAgICAgICBEYXJrR3JlZW4gPSAweDM1LFxyXG4gICAgICAgIERhcmtLaGFraSA9IDB4MzYsXHJcbiAgICAgICAgRGFya01hZ2VudGEgPSAweDM3LFxyXG4gICAgICAgIERhcmtPbGl2ZUdyZWVuID0gMHgzOCxcclxuICAgICAgICBEYXJrT3JhbmdlID0gMHgzOSxcclxuICAgICAgICBEYXJrT3JjaGlkID0gMHgzYSxcclxuICAgICAgICBEYXJrUmVkID0gMHgzYixcclxuICAgICAgICBEYXJrU2FsbW9uID0gNjAsXHJcbiAgICAgICAgRGFya1NlYUdyZWVuID0gMHgzZCxcclxuICAgICAgICBEYXJrU2xhdGVCbHVlID0gMHgzZSxcclxuICAgICAgICBEYXJrU2xhdGVHcmF5ID0gMHgzZixcclxuICAgICAgICBEYXJrVHVycXVvaXNlID0gMHg0MCxcclxuICAgICAgICBEYXJrVmlvbGV0ID0gMHg0MSxcclxuICAgICAgICBEZWVwUGluayA9IDB4NDIsXHJcbiAgICAgICAgRGVlcFNreUJsdWUgPSAweDQzLFxyXG4gICAgICAgIERlc2t0b3AgPSAxMSxcclxuICAgICAgICBEaW1HcmF5ID0gMHg0NCxcclxuICAgICAgICBEb2RnZXJCbHVlID0gMHg0NSxcclxuICAgICAgICBGaXJlYnJpY2sgPSA3MCxcclxuICAgICAgICBGbG9yYWxXaGl0ZSA9IDB4NDcsXHJcbiAgICAgICAgRm9yZXN0R3JlZW4gPSAweDQ4LFxyXG4gICAgICAgIEZ1Y2hzaWEgPSAweDQ5LFxyXG4gICAgICAgIEdhaW5zYm9ybyA9IDB4NGEsXHJcbiAgICAgICAgR2hvc3RXaGl0ZSA9IDB4NGIsXHJcbiAgICAgICAgR29sZCA9IDB4NGMsXHJcbiAgICAgICAgR29sZGVucm9kID0gMHg0ZCxcclxuICAgICAgICBHcmFkaWVudEFjdGl2ZUNhcHRpb24gPSAweGFiLFxyXG4gICAgICAgIEdyYWRpZW50SW5hY3RpdmVDYXB0aW9uID0gMHhhYyxcclxuICAgICAgICBHcmF5ID0gMHg0ZSxcclxuICAgICAgICBHcmF5VGV4dCA9IDEyLFxyXG4gICAgICAgIEdyZWVuID0gMHg0ZixcclxuICAgICAgICBHcmVlblllbGxvdyA9IDgwLFxyXG4gICAgICAgIEhpZ2hsaWdodCA9IDEzLFxyXG4gICAgICAgIEhpZ2hsaWdodFRleHQgPSAxNCxcclxuICAgICAgICBIb25leWRldyA9IDB4NTEsXHJcbiAgICAgICAgSG90UGluayA9IDB4NTIsXHJcbiAgICAgICAgSG90VHJhY2sgPSAxNSxcclxuICAgICAgICBJbmFjdGl2ZUJvcmRlciA9IDB4MTAsXHJcbiAgICAgICAgSW5hY3RpdmVDYXB0aW9uID0gMHgxMSxcclxuICAgICAgICBJbmFjdGl2ZUNhcHRpb25UZXh0ID0gMHgxMixcclxuICAgICAgICBJbmRpYW5SZWQgPSAweDUzLFxyXG4gICAgICAgIEluZGlnbyA9IDB4NTQsXHJcbiAgICAgICAgSW5mbyA9IDB4MTMsXHJcbiAgICAgICAgSW5mb1RleHQgPSAyMCxcclxuICAgICAgICBJdm9yeSA9IDB4NTUsXHJcbiAgICAgICAgS2hha2kgPSAweDU2LFxyXG4gICAgICAgIExhdmVuZGVyID0gMHg1NyxcclxuICAgICAgICBMYXZlbmRlckJsdXNoID0gMHg1OCxcclxuICAgICAgICBMYXduR3JlZW4gPSAweDU5LFxyXG4gICAgICAgIExlbW9uQ2hpZmZvbiA9IDkwLFxyXG4gICAgICAgIExpZ2h0Qmx1ZSA9IDB4NWIsXHJcbiAgICAgICAgTGlnaHRDb3JhbCA9IDB4NWMsXHJcbiAgICAgICAgTGlnaHRDeWFuID0gMHg1ZCxcclxuICAgICAgICBMaWdodEdvbGRlbnJvZFllbGxvdyA9IDB4NWUsXHJcbiAgICAgICAgTGlnaHRHcmF5ID0gMHg1ZixcclxuICAgICAgICBMaWdodEdyZWVuID0gMHg2MCxcclxuICAgICAgICBMaWdodFBpbmsgPSAweDYxLFxyXG4gICAgICAgIExpZ2h0U2FsbW9uID0gMHg2MixcclxuICAgICAgICBMaWdodFNlYUdyZWVuID0gMHg2MyxcclxuICAgICAgICBMaWdodFNreUJsdWUgPSAxMDAsXHJcbiAgICAgICAgTGlnaHRTbGF0ZUdyYXkgPSAweDY1LFxyXG4gICAgICAgIExpZ2h0U3RlZWxCbHVlID0gMHg2NixcclxuICAgICAgICBMaWdodFllbGxvdyA9IDB4NjcsXHJcbiAgICAgICAgTGltZSA9IDB4NjgsXHJcbiAgICAgICAgTGltZUdyZWVuID0gMHg2OSxcclxuICAgICAgICBMaW5lbiA9IDB4NmEsXHJcbiAgICAgICAgTWFnZW50YSA9IDB4NmIsXHJcbiAgICAgICAgTWFyb29uID0gMHg2YyxcclxuICAgICAgICBNZWRpdW1BcXVhbWFyaW5lID0gMHg2ZCxcclxuICAgICAgICBNZWRpdW1CbHVlID0gMTEwLFxyXG4gICAgICAgIE1lZGl1bU9yY2hpZCA9IDB4NmYsXHJcbiAgICAgICAgTWVkaXVtUHVycGxlID0gMHg3MCxcclxuICAgICAgICBNZWRpdW1TZWFHcmVlbiA9IDB4NzEsXHJcbiAgICAgICAgTWVkaXVtU2xhdGVCbHVlID0gMHg3MixcclxuICAgICAgICBNZWRpdW1TcHJpbmdHcmVlbiA9IDB4NzMsXHJcbiAgICAgICAgTWVkaXVtVHVycXVvaXNlID0gMHg3NCxcclxuICAgICAgICBNZWRpdW1WaW9sZXRSZWQgPSAweDc1LFxyXG4gICAgICAgIE1lbnUgPSAweDE1LFxyXG4gICAgICAgIE1lbnVCYXIgPSAweGFkLFxyXG4gICAgICAgIE1lbnVIaWdobGlnaHQgPSAweGFlLFxyXG4gICAgICAgIE1lbnVUZXh0ID0gMHgxNixcclxuICAgICAgICBNaWRuaWdodEJsdWUgPSAweDc2LFxyXG4gICAgICAgIE1pbnRDcmVhbSA9IDB4NzcsXHJcbiAgICAgICAgTWlzdHlSb3NlID0gMTIwLFxyXG4gICAgICAgIE1vY2Nhc2luID0gMHg3OSxcclxuICAgICAgICBOYXZham9XaGl0ZSA9IDB4N2EsXHJcbiAgICAgICAgTmF2eSA9IDB4N2IsXHJcbiAgICAgICAgT2xkTGFjZSA9IDB4N2MsXHJcbiAgICAgICAgT2xpdmUgPSAweDdkLFxyXG4gICAgICAgIE9saXZlRHJhYiA9IDB4N2UsXHJcbiAgICAgICAgT3JhbmdlID0gMHg3ZixcclxuICAgICAgICBPcmFuZ2VSZWQgPSAweDgwLFxyXG4gICAgICAgIE9yY2hpZCA9IDB4ODEsXHJcbiAgICAgICAgUGFsZUdvbGRlbnJvZCA9IDEzMCxcclxuICAgICAgICBQYWxlR3JlZW4gPSAweDgzLFxyXG4gICAgICAgIFBhbGVUdXJxdW9pc2UgPSAweDg0LFxyXG4gICAgICAgIFBhbGVWaW9sZXRSZWQgPSAweDg1LFxyXG4gICAgICAgIFBhcGF5YVdoaXAgPSAweDg2LFxyXG4gICAgICAgIFBlYWNoUHVmZiA9IDB4ODcsXHJcbiAgICAgICAgUGVydSA9IDB4ODgsXHJcbiAgICAgICAgUGluayA9IDB4ODksXHJcbiAgICAgICAgUGx1bSA9IDB4OGEsXHJcbiAgICAgICAgUG93ZGVyQmx1ZSA9IDB4OGIsXHJcbiAgICAgICAgUHVycGxlID0gMTQwLFxyXG4gICAgICAgIFJlZCA9IDB4OGQsXHJcbiAgICAgICAgUm9zeUJyb3duID0gMHg4ZSxcclxuICAgICAgICBSb3lhbEJsdWUgPSAweDhmLFxyXG4gICAgICAgIFNhZGRsZUJyb3duID0gMHg5MCxcclxuICAgICAgICBTYWxtb24gPSAweDkxLFxyXG4gICAgICAgIFNhbmR5QnJvd24gPSAweDkyLFxyXG4gICAgICAgIFNjcm9sbEJhciA9IDB4MTcsXHJcbiAgICAgICAgU2VhR3JlZW4gPSAweDkzLFxyXG4gICAgICAgIFNlYVNoZWxsID0gMHg5NCxcclxuICAgICAgICBTaWVubmEgPSAweDk1LFxyXG4gICAgICAgIFNpbHZlciA9IDE1MCxcclxuICAgICAgICBTa3lCbHVlID0gMHg5NyxcclxuICAgICAgICBTbGF0ZUJsdWUgPSAweDk4LFxyXG4gICAgICAgIFNsYXRlR3JheSA9IDB4OTksXHJcbiAgICAgICAgU25vdyA9IDB4OWEsXHJcbiAgICAgICAgU3ByaW5nR3JlZW4gPSAweDliLFxyXG4gICAgICAgIFN0ZWVsQmx1ZSA9IDB4OWMsXHJcbiAgICAgICAgVGFuID0gMHg5ZCxcclxuICAgICAgICBUZWFsID0gMHg5ZSxcclxuICAgICAgICBUaGlzdGxlID0gMHg5ZixcclxuICAgICAgICBUb21hdG8gPSAxNjAsXHJcbiAgICAgICAgVHJhbnNwYXJlbnQgPSAweDFiLFxyXG4gICAgICAgIFR1cnF1b2lzZSA9IDB4YTEsXHJcbiAgICAgICAgVmlvbGV0ID0gMHhhMixcclxuICAgICAgICBXaGVhdCA9IDB4YTMsXHJcbiAgICAgICAgV2hpdGUgPSAweGE0LFxyXG4gICAgICAgIFdoaXRlU21va2UgPSAweGE1LFxyXG4gICAgICAgIFdpbmRvdyA9IDB4MTgsXHJcbiAgICAgICAgV2luZG93RnJhbWUgPSAweDE5LFxyXG4gICAgICAgIFdpbmRvd1RleHQgPSAweDFhLFxyXG4gICAgICAgIFllbGxvdyA9IDB4YTYsXHJcbiAgICAgICAgWWVsbG93R3JlZW4gPSAweGE3XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJuYWwgc3RhdGljIGNsYXNzIEtub3duQ29sb3JUYWJsZVxyXG4gICAge1xyXG4gICAgICAgIC8vIEZpZWxkc1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IEFscGhhU2hpZnQgPSAweDE4O1xyXG5cclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBCbHVlU2hpZnQgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHN0cmluZ1tdIGNvbG9yTmFtZVRhYmxlO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludFtdIGNvbG9yVGFibGU7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgR3JlZW5TaGlmdCA9IDg7XHJcbiAgICAgICAgcHJpdmF0ZSBjb25zdCBpbnQgUmVkU2hpZnQgPSAweDEwO1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IFdpbjMyQmx1ZVNoaWZ0ID0gMHgxMDtcclxuICAgICAgICBwcml2YXRlIGNvbnN0IGludCBXaW4zMkdyZWVuU2hpZnQgPSA4O1xyXG4gICAgICAgIHByaXZhdGUgY29uc3QgaW50IFdpbjMyUmVkU2hpZnQgPSAwO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBHZXRDb2xvck5hbWUoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlQ29sb3JOYW1lVGFibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbG9yTmFtZVRhYmxlW2luZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ldGhvZHNcclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFyZ2JUb0tub3duQ29sb3IoaW50IHRhcmdldEFSR0IpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBFbnN1cmVDb2xvclRhYmxlKCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgY29sb3JUYWJsZS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW50IG51bTIgPSBjb2xvclRhYmxlW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bTIgPT0gdGFyZ2V0QVJHQilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb2xvciBjb2xvciA9IENvbG9yLkZyb21Lbm93bkNvbG9yKChLbm93bkNvbG9yKWkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29sb3IuSXNTeXN0ZW1Db2xvcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIENvbG9yLkZyb21BcmdiKHRhcmdldEFSR0IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW50IEVuY29kZShpbnQgYWxwaGEsIGludCByZWQsIGludCBncmVlbiwgaW50IGJsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gKCgoKHJlZCA8PCAweDEwKSB8IChncmVlbiA8PCA4KSkgfCBibHVlKSB8IChhbHBoYSA8PCAweDE4KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIEVuc3VyZUNvbG9yTmFtZVRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvck5hbWVUYWJsZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJbml0Q29sb3JOYW1lVGFibGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBFbnN1cmVDb2xvclRhYmxlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjb2xvclRhYmxlID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEluaXRDb2xvclRhYmxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBGcm9tV2luMzJWYWx1ZShpbnQgdmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRW5jb2RlKDB4ZmYsIHZhbHVlICYgMHhmZiwgKHZhbHVlID4+IDgpICYgMHhmZiwgKHZhbHVlID4+IDB4MTApICYgMHhmZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIEluaXRDb2xvck5hbWVUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBzID0gbmV3IHN0cmluZ1sweGFmXTtcclxuICAgICAgICAgICAgc1sxXSA9IFwiQWN0aXZlQm9yZGVyXCI7XHJcbiAgICAgICAgICAgIHNbMl0gPSBcIkFjdGl2ZUNhcHRpb25cIjtcclxuICAgICAgICAgICAgc1szXSA9IFwiQWN0aXZlQ2FwdGlvblRleHRcIjtcclxuICAgICAgICAgICAgc1s0XSA9IFwiQXBwV29ya3NwYWNlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhOF0gPSBcIkJ1dHRvbkZhY2VcIjtcclxuICAgICAgICAgICAgc1sweGE5XSA9IFwiQnV0dG9uSGlnaGxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbMTcwXSA9IFwiQnV0dG9uU2hhZG93XCI7XHJcbiAgICAgICAgICAgIHNbNV0gPSBcIkNvbnRyb2xcIjtcclxuICAgICAgICAgICAgc1s2XSA9IFwiQ29udHJvbERhcmtcIjtcclxuICAgICAgICAgICAgc1s3XSA9IFwiQ29udHJvbERhcmtEYXJrXCI7XHJcbiAgICAgICAgICAgIHNbOF0gPSBcIkNvbnRyb2xMaWdodFwiO1xyXG4gICAgICAgICAgICBzWzldID0gXCJDb250cm9sTGlnaHRMaWdodFwiO1xyXG4gICAgICAgICAgICBzWzEwXSA9IFwiQ29udHJvbFRleHRcIjtcclxuICAgICAgICAgICAgc1sxMV0gPSBcIkRlc2t0b3BcIjtcclxuICAgICAgICAgICAgc1sweGFiXSA9IFwiR3JhZGllbnRBY3RpdmVDYXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHhhY10gPSBcIkdyYWRpZW50SW5hY3RpdmVDYXB0aW9uXCI7XHJcbiAgICAgICAgICAgIHNbMTJdID0gXCJHcmF5VGV4dFwiO1xyXG4gICAgICAgICAgICBzWzEzXSA9IFwiSGlnaGxpZ2h0XCI7XHJcbiAgICAgICAgICAgIHNbMTRdID0gXCJIaWdobGlnaHRUZXh0XCI7XHJcbiAgICAgICAgICAgIHNbMTVdID0gXCJIb3RUcmFja1wiO1xyXG4gICAgICAgICAgICBzWzB4MTBdID0gXCJJbmFjdGl2ZUJvcmRlclwiO1xyXG4gICAgICAgICAgICBzWzB4MTFdID0gXCJJbmFjdGl2ZUNhcHRpb25cIjtcclxuICAgICAgICAgICAgc1sweDEyXSA9IFwiSW5hY3RpdmVDYXB0aW9uVGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MTNdID0gXCJJbmZvXCI7XHJcbiAgICAgICAgICAgIHNbMjBdID0gXCJJbmZvVGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MTVdID0gXCJNZW51XCI7XHJcbiAgICAgICAgICAgIHNbMHhhZF0gPSBcIk1lbnVCYXJcIjtcclxuICAgICAgICAgICAgc1sweGFlXSA9IFwiTWVudUhpZ2hsaWdodFwiO1xyXG4gICAgICAgICAgICBzWzB4MTZdID0gXCJNZW51VGV4dFwiO1xyXG4gICAgICAgICAgICBzWzB4MTddID0gXCJTY3JvbGxCYXJcIjtcclxuICAgICAgICAgICAgc1sweDE4XSA9IFwiV2luZG93XCI7XHJcbiAgICAgICAgICAgIHNbMHgxOV0gPSBcIldpbmRvd0ZyYW1lXCI7XHJcbiAgICAgICAgICAgIHNbMHgxYV0gPSBcIldpbmRvd1RleHRcIjtcclxuICAgICAgICAgICAgc1sweDFiXSA9IFwiVHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgc1sweDFjXSA9IFwiQWxpY2VCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgxZF0gPSBcIkFudGlxdWVXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzMwXSA9IFwiQXF1YVwiO1xyXG4gICAgICAgICAgICBzWzB4MWZdID0gXCJBcXVhbWFyaW5lXCI7XHJcbiAgICAgICAgICAgIHNbMHgyMF0gPSBcIkF6dXJlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyMV0gPSBcIkJlaWdlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyMl0gPSBcIkJpc3F1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4MjNdID0gXCJCbGFja1wiO1xyXG4gICAgICAgICAgICBzWzB4MjRdID0gXCJCbGFuY2hlZEFsbW9uZFwiO1xyXG4gICAgICAgICAgICBzWzB4MjVdID0gXCJCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHgyNl0gPSBcIkJsdWVWaW9sZXRcIjtcclxuICAgICAgICAgICAgc1sweDI3XSA9IFwiQnJvd25cIjtcclxuICAgICAgICAgICAgc1s0MF0gPSBcIkJ1cmx5V29vZFwiO1xyXG4gICAgICAgICAgICBzWzB4MjldID0gXCJDYWRldEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDJhXSA9IFwiQ2hhcnRyZXVzZVwiO1xyXG4gICAgICAgICAgICBzWzB4MmJdID0gXCJDaG9jb2xhdGVcIjtcclxuICAgICAgICAgICAgc1sweDJjXSA9IFwiQ29yYWxcIjtcclxuICAgICAgICAgICAgc1sweDJkXSA9IFwiQ29ybmZsb3dlckJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDJlXSA9IFwiQ29ybnNpbGtcIjtcclxuICAgICAgICAgICAgc1sweDJmXSA9IFwiQ3JpbXNvblwiO1xyXG4gICAgICAgICAgICBzWzB4MzBdID0gXCJDeWFuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzMV0gPSBcIkRhcmtCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbNTBdID0gXCJEYXJrQ3lhblwiO1xyXG4gICAgICAgICAgICBzWzB4MzNdID0gXCJEYXJrR29sZGVucm9kXCI7XHJcbiAgICAgICAgICAgIHNbMHgzNF0gPSBcIkRhcmtHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHgzNV0gPSBcIkRhcmtHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4MzZdID0gXCJEYXJrS2hha2lcIjtcclxuICAgICAgICAgICAgc1sweDM3XSA9IFwiRGFya01hZ2VudGFcIjtcclxuICAgICAgICAgICAgc1sweDM4XSA9IFwiRGFya09saXZlR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDM5XSA9IFwiRGFya09yYW5nZVwiO1xyXG4gICAgICAgICAgICBzWzB4M2FdID0gXCJEYXJrT3JjaGlkXCI7XHJcbiAgICAgICAgICAgIHNbMHgzYl0gPSBcIkRhcmtSZWRcIjtcclxuICAgICAgICAgICAgc1s2MF0gPSBcIkRhcmtTYWxtb25cIjtcclxuICAgICAgICAgICAgc1sweDNkXSA9IFwiRGFya1NlYUdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbMHgzZV0gPSBcIkRhcmtTbGF0ZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDNmXSA9IFwiRGFya1NsYXRlR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NDBdID0gXCJEYXJrVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg0MV0gPSBcIkRhcmtWaW9sZXRcIjtcclxuICAgICAgICAgICAgc1sweDQyXSA9IFwiRGVlcFBpbmtcIjtcclxuICAgICAgICAgICAgc1sweDQzXSA9IFwiRGVlcFNreUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDQ0XSA9IFwiRGltR3JheVwiO1xyXG4gICAgICAgICAgICBzWzB4NDVdID0gXCJEb2RnZXJCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbNzBdID0gXCJGaXJlYnJpY2tcIjtcclxuICAgICAgICAgICAgc1sweDQ3XSA9IFwiRmxvcmFsV2hpdGVcIjtcclxuICAgICAgICAgICAgc1sweDQ4XSA9IFwiRm9yZXN0R3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDQ5XSA9IFwiRnVjaHNpYVwiO1xyXG4gICAgICAgICAgICBzWzB4NGFdID0gXCJHYWluc2Jvcm9cIjtcclxuICAgICAgICAgICAgc1sweDRiXSA9IFwiR2hvc3RXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4NGNdID0gXCJHb2xkXCI7XHJcbiAgICAgICAgICAgIHNbMHg0ZF0gPSBcIkdvbGRlbnJvZFwiO1xyXG4gICAgICAgICAgICBzWzB4NGVdID0gXCJHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg0Zl0gPSBcIkdyZWVuXCI7XHJcbiAgICAgICAgICAgIHNbODBdID0gXCJHcmVlblllbGxvd1wiO1xyXG4gICAgICAgICAgICBzWzB4NTFdID0gXCJIb25leWRld1wiO1xyXG4gICAgICAgICAgICBzWzB4NTJdID0gXCJIb3RQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg1M10gPSBcIkluZGlhblJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4NTRdID0gXCJJbmRpZ29cIjtcclxuICAgICAgICAgICAgc1sweDU1XSA9IFwiSXZvcnlcIjtcclxuICAgICAgICAgICAgc1sweDU2XSA9IFwiS2hha2lcIjtcclxuICAgICAgICAgICAgc1sweDU3XSA9IFwiTGF2ZW5kZXJcIjtcclxuICAgICAgICAgICAgc1sweDU4XSA9IFwiTGF2ZW5kZXJCbHVzaFwiO1xyXG4gICAgICAgICAgICBzWzB4NTldID0gXCJMYXduR3JlZW5cIjtcclxuICAgICAgICAgICAgc1s5MF0gPSBcIkxlbW9uQ2hpZmZvblwiO1xyXG4gICAgICAgICAgICBzWzB4NWJdID0gXCJMaWdodEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDVjXSA9IFwiTGlnaHRDb3JhbFwiO1xyXG4gICAgICAgICAgICBzWzB4NWRdID0gXCJMaWdodEN5YW5cIjtcclxuICAgICAgICAgICAgc1sweDVlXSA9IFwiTGlnaHRHb2xkZW5yb2RZZWxsb3dcIjtcclxuICAgICAgICAgICAgc1sweDVmXSA9IFwiTGlnaHRHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg2MF0gPSBcIkxpZ2h0R3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDYxXSA9IFwiTGlnaHRQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg2Ml0gPSBcIkxpZ2h0U2FsbW9uXCI7XHJcbiAgICAgICAgICAgIHNbMHg2M10gPSBcIkxpZ2h0U2VhR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sxMDBdID0gXCJMaWdodFNreUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDY1XSA9IFwiTGlnaHRTbGF0ZUdyYXlcIjtcclxuICAgICAgICAgICAgc1sweDY2XSA9IFwiTGlnaHRTdGVlbEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDY3XSA9IFwiTGlnaHRZZWxsb3dcIjtcclxuICAgICAgICAgICAgc1sweDY4XSA9IFwiTGltZVwiO1xyXG4gICAgICAgICAgICBzWzB4NjldID0gXCJMaW1lR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDZhXSA9IFwiTGluZW5cIjtcclxuICAgICAgICAgICAgc1sweDZiXSA9IFwiTWFnZW50YVwiO1xyXG4gICAgICAgICAgICBzWzB4NmNdID0gXCJNYXJvb25cIjtcclxuICAgICAgICAgICAgc1sweDZkXSA9IFwiTWVkaXVtQXF1YW1hcmluZVwiO1xyXG4gICAgICAgICAgICBzWzExMF0gPSBcIk1lZGl1bUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDZmXSA9IFwiTWVkaXVtT3JjaGlkXCI7XHJcbiAgICAgICAgICAgIHNbMHg3MF0gPSBcIk1lZGl1bVB1cnBsZVwiO1xyXG4gICAgICAgICAgICBzWzB4NzFdID0gXCJNZWRpdW1TZWFHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4NzJdID0gXCJNZWRpdW1TbGF0ZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDczXSA9IFwiTWVkaXVtU3ByaW5nR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDc0XSA9IFwiTWVkaXVtVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3NV0gPSBcIk1lZGl1bVZpb2xldFJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4NzZdID0gXCJNaWRuaWdodEJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDc3XSA9IFwiTWludENyZWFtXCI7XHJcbiAgICAgICAgICAgIHNbMTIwXSA9IFwiTWlzdHlSb3NlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3OV0gPSBcIk1vY2Nhc2luXCI7XHJcbiAgICAgICAgICAgIHNbMHg3YV0gPSBcIk5hdmFqb1doaXRlXCI7XHJcbiAgICAgICAgICAgIHNbMHg3Yl0gPSBcIk5hdnlcIjtcclxuICAgICAgICAgICAgc1sweDdjXSA9IFwiT2xkTGFjZVwiO1xyXG4gICAgICAgICAgICBzWzB4N2RdID0gXCJPbGl2ZVwiO1xyXG4gICAgICAgICAgICBzWzB4N2VdID0gXCJPbGl2ZURyYWJcIjtcclxuICAgICAgICAgICAgc1sweDdmXSA9IFwiT3JhbmdlXCI7XHJcbiAgICAgICAgICAgIHNbMHg4MF0gPSBcIk9yYW5nZVJlZFwiO1xyXG4gICAgICAgICAgICBzWzB4ODFdID0gXCJPcmNoaWRcIjtcclxuICAgICAgICAgICAgc1sxMzBdID0gXCJQYWxlR29sZGVucm9kXCI7XHJcbiAgICAgICAgICAgIHNbMHg4M10gPSBcIlBhbGVHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4ODRdID0gXCJQYWxlVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHg4NV0gPSBcIlBhbGVWaW9sZXRSZWRcIjtcclxuICAgICAgICAgICAgc1sweDg2XSA9IFwiUGFwYXlhV2hpcFwiO1xyXG4gICAgICAgICAgICBzWzB4ODddID0gXCJQZWFjaFB1ZmZcIjtcclxuICAgICAgICAgICAgc1sweDg4XSA9IFwiUGVydVwiO1xyXG4gICAgICAgICAgICBzWzB4ODldID0gXCJQaW5rXCI7XHJcbiAgICAgICAgICAgIHNbMHg4YV0gPSBcIlBsdW1cIjtcclxuICAgICAgICAgICAgc1sweDhiXSA9IFwiUG93ZGVyQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzE0MF0gPSBcIlB1cnBsZVwiO1xyXG4gICAgICAgICAgICBzWzB4OGRdID0gXCJSZWRcIjtcclxuICAgICAgICAgICAgc1sweDhlXSA9IFwiUm9zeUJyb3duXCI7XHJcbiAgICAgICAgICAgIHNbMHg4Zl0gPSBcIlJveWFsQmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4OTBdID0gXCJTYWRkbGVCcm93blwiO1xyXG4gICAgICAgICAgICBzWzB4OTFdID0gXCJTYWxtb25cIjtcclxuICAgICAgICAgICAgc1sweDkyXSA9IFwiU2FuZHlCcm93blwiO1xyXG4gICAgICAgICAgICBzWzB4OTNdID0gXCJTZWFHcmVlblwiO1xyXG4gICAgICAgICAgICBzWzB4OTRdID0gXCJTZWFTaGVsbFwiO1xyXG4gICAgICAgICAgICBzWzB4OTVdID0gXCJTaWVubmFcIjtcclxuICAgICAgICAgICAgc1sxNTBdID0gXCJTaWx2ZXJcIjtcclxuICAgICAgICAgICAgc1sweDk3XSA9IFwiU2t5Qmx1ZVwiO1xyXG4gICAgICAgICAgICBzWzB4OThdID0gXCJTbGF0ZUJsdWVcIjtcclxuICAgICAgICAgICAgc1sweDk5XSA9IFwiU2xhdGVHcmF5XCI7XHJcbiAgICAgICAgICAgIHNbMHg5YV0gPSBcIlNub3dcIjtcclxuICAgICAgICAgICAgc1sweDliXSA9IFwiU3ByaW5nR3JlZW5cIjtcclxuICAgICAgICAgICAgc1sweDljXSA9IFwiU3RlZWxCbHVlXCI7XHJcbiAgICAgICAgICAgIHNbMHg5ZF0gPSBcIlRhblwiO1xyXG4gICAgICAgICAgICBzWzB4OWVdID0gXCJUZWFsXCI7XHJcbiAgICAgICAgICAgIHNbMHg5Zl0gPSBcIlRoaXN0bGVcIjtcclxuICAgICAgICAgICAgc1sxNjBdID0gXCJUb21hdG9cIjtcclxuICAgICAgICAgICAgc1sweGExXSA9IFwiVHVycXVvaXNlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhMl0gPSBcIlZpb2xldFwiO1xyXG4gICAgICAgICAgICBzWzB4YTNdID0gXCJXaGVhdFwiO1xyXG4gICAgICAgICAgICBzWzB4YTRdID0gXCJXaGl0ZVwiO1xyXG4gICAgICAgICAgICBzWzB4YTVdID0gXCJXaGl0ZVNtb2tlXCI7XHJcbiAgICAgICAgICAgIHNbMHhhNl0gPSBcIlllbGxvd1wiO1xyXG4gICAgICAgICAgICBzWzB4YTddID0gXCJZZWxsb3dHcmVlblwiO1xyXG4gICAgICAgICAgICBjb2xvck5hbWVUYWJsZSA9IHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIFVwZGF0ZVN5c3RlbUNvbG9ycygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzFdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbM10gPSBTeXN0ZW1Db2xvclRvQXJnYig5KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs0XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDEyKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNjhdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTUpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE2OV0gPSBTeXN0ZW1Db2xvclRvQXJnYigyMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTcwXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzVdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTUpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzZdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbN10gPSBTeXN0ZW1Db2xvclRvQXJnYigweDE1KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVs4XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTYpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzldID0gU3lzdGVtQ29sb3JUb0FyZ2IoMjApO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzEwXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDB4MTIpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzExXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDEpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE3MV0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDFiKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxYyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTNdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMTMpO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlWzE0XSA9IFN5c3RlbUNvbG9yVG9BcmdiKDE0KTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNV0gPSBTeXN0ZW1Db2xvclRvQXJnYigweDFhKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNl0gPSBTeXN0ZW1Db2xvclRvQXJnYigxMSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTddID0gU3lzdGVtQ29sb3JUb0FyZ2IoMyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMThdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxMyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTldID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxOCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjBdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxNyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjFdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMTczXSA9IFN5c3RlbUNvbG9yVG9BcmdiKDMwKTtcclxuICAgICAgICAgICAgY29sb3JUYWJsZVsxNzRdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMHgxZCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjJdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNyk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjNdID0gU3lzdGVtQ29sb3JUb0FyZ2IoMCk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjRdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjVdID0gU3lzdGVtQ29sb3JUb0FyZ2IoNik7XHJcbiAgICAgICAgICAgIGNvbG9yVGFibGVbMjZdID0gU3lzdGVtQ29sb3JUb0FyZ2IoOCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBJbml0Q29sb3JUYWJsZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbnRbXSBjID0gbmV3IGludFsweGFmXTtcclxuXHJcbiAgICAgICAgICAgIGNbMHgxYl0gPSAweGZmZmZmZjtcclxuICAgICAgICAgICAgY1sweDFjXSA9IC05ODQ4MzM7XHJcbiAgICAgICAgICAgIGNbMHgxZF0gPSAtMzMyODQxO1xyXG4gICAgICAgICAgICBjWzMwXSA9IC0xNjcxMTY4MTtcclxuICAgICAgICAgICAgY1sweDFmXSA9IC04Mzg4NjUyO1xyXG4gICAgICAgICAgICBjWzB4MjBdID0gLTk4MzA0MTtcclxuICAgICAgICAgICAgY1sweDIxXSA9IC02NTc5NTY7XHJcbiAgICAgICAgICAgIGNbMHgyMl0gPSAtNjk3MjtcclxuICAgICAgICAgICAgY1sweDIzXSA9IC0xNjc3NzIxNjtcclxuICAgICAgICAgICAgY1sweDI0XSA9IC01MTcxO1xyXG4gICAgICAgICAgICBjWzB4MjVdID0gLTE2Nzc2OTYxO1xyXG4gICAgICAgICAgICBjWzB4MjZdID0gLTc3MjIwMTQ7XHJcbiAgICAgICAgICAgIGNbMHgyN10gPSAtNTk1Mjk4MjtcclxuICAgICAgICAgICAgY1s0MF0gPSAtMjE4MDk4NTtcclxuICAgICAgICAgICAgY1sweDI5XSA9IC0xMDUxMDY4ODtcclxuICAgICAgICAgICAgY1sweDJhXSA9IC04Mzg4ODY0O1xyXG4gICAgICAgICAgICBjWzB4MmJdID0gLTI5ODc3NDY7XHJcbiAgICAgICAgICAgIGNbMHgyY10gPSAtMzI5NDQ7XHJcbiAgICAgICAgICAgIGNbMHgyZF0gPSAtMTAxODUyMzU7XHJcbiAgICAgICAgICAgIGNbMHgyZV0gPSAtMTgyODtcclxuICAgICAgICAgICAgY1sweDJmXSA9IC0yMzU0MTE2O1xyXG4gICAgICAgICAgICBjWzB4MzBdID0gLTE2NzExNjgxO1xyXG4gICAgICAgICAgICBjWzB4MzFdID0gLTE2Nzc3MDc3O1xyXG4gICAgICAgICAgICBjWzUwXSA9IC0xNjc0MTQ5MztcclxuICAgICAgICAgICAgY1sweDMzXSA9IC00Njg0Mjc3O1xyXG4gICAgICAgICAgICBjWzB4MzRdID0gLTU2NTgxOTk7XHJcbiAgICAgICAgICAgIGNbMHgzNV0gPSAtMTY3NTE2MTY7XHJcbiAgICAgICAgICAgIGNbMHgzNl0gPSAtNDM0Mzk1NztcclxuICAgICAgICAgICAgY1sweDM3XSA9IC03NjY3NTczO1xyXG4gICAgICAgICAgICBjWzB4MzhdID0gLTExMTc5MjE3O1xyXG4gICAgICAgICAgICBjWzB4MzldID0gLTI5Njk2O1xyXG4gICAgICAgICAgICBjWzB4M2FdID0gLTY3MzcyMDQ7XHJcbiAgICAgICAgICAgIGNbMHgzYl0gPSAtNzY2NzcxMjtcclxuICAgICAgICAgICAgY1s2MF0gPSAtMTQ2ODgwNjtcclxuICAgICAgICAgICAgY1sweDNkXSA9IC03MzU3MzAxO1xyXG4gICAgICAgICAgICBjWzB4M2VdID0gLTEyMDQyODY5O1xyXG4gICAgICAgICAgICBjWzB4M2ZdID0gLTEzNjc2NzIxO1xyXG4gICAgICAgICAgICBjWzB4NDBdID0gLTE2NzI0MjcxO1xyXG4gICAgICAgICAgICBjWzB4NDFdID0gLTcwNzc2Nzc7XHJcbiAgICAgICAgICAgIGNbMHg0Ml0gPSAtNjAyNjk7XHJcbiAgICAgICAgICAgIGNbMHg0M10gPSAtMTY3MjgwNjU7XHJcbiAgICAgICAgICAgIGNbMHg0NF0gPSAtOTg2ODk1MTtcclxuICAgICAgICAgICAgY1sweDQ1XSA9IC0xNDc3NDAxNztcclxuICAgICAgICAgICAgY1s3MF0gPSAtNTEwMzA3MDtcclxuICAgICAgICAgICAgY1sweDQ3XSA9IC0xMjk2O1xyXG4gICAgICAgICAgICBjWzB4NDhdID0gLTE0NTEzMzc0O1xyXG4gICAgICAgICAgICBjWzB4NDldID0gLTY1MjgxO1xyXG4gICAgICAgICAgICBjWzB4NGFdID0gLTIzMDI3NTY7XHJcbiAgICAgICAgICAgIGNbMHg0Yl0gPSAtNDYwNTQ1O1xyXG4gICAgICAgICAgICBjWzB4NGNdID0gLTEwNDk2O1xyXG4gICAgICAgICAgICBjWzB4NGRdID0gLTI0NDgwOTY7XHJcbiAgICAgICAgICAgIGNbMHg0ZV0gPSAtODM1NTcxMjtcclxuICAgICAgICAgICAgY1sweDRmXSA9IC0xNjc0NDQ0ODtcclxuICAgICAgICAgICAgY1s4MF0gPSAtNTM3NDE2MTtcclxuICAgICAgICAgICAgY1sweDUxXSA9IC05ODMwNTY7XHJcbiAgICAgICAgICAgIGNbMHg1Ml0gPSAtMzg0NzY7XHJcbiAgICAgICAgICAgIGNbMHg1M10gPSAtMzMxODY5MjtcclxuICAgICAgICAgICAgY1sweDU0XSA9IC0xMTg2MTg4NjtcclxuICAgICAgICAgICAgY1sweDU1XSA9IC0xNjtcclxuICAgICAgICAgICAgY1sweDU2XSA9IC05ODk1NTY7XHJcbiAgICAgICAgICAgIGNbMHg1N10gPSAtMTY0NDgwNjtcclxuICAgICAgICAgICAgY1sweDU4XSA9IC0zODUxO1xyXG4gICAgICAgICAgICBjWzB4NTldID0gLTg1ODYyNDA7XHJcbiAgICAgICAgICAgIGNbOTBdID0gLTEzMzE7XHJcbiAgICAgICAgICAgIGNbMHg1Yl0gPSAtNTM4Mzk2MjtcclxuICAgICAgICAgICAgY1sweDVjXSA9IC0xMDE1NjgwO1xyXG4gICAgICAgICAgICBjWzB4NWRdID0gLTIwMzE2MTc7XHJcbiAgICAgICAgICAgIGNbMHg1ZV0gPSAtMzI5MDA2O1xyXG4gICAgICAgICAgICBjWzB4NWZdID0gLTI4OTQ4OTM7XHJcbiAgICAgICAgICAgIGNbMHg2MF0gPSAtNzI3ODk2MDtcclxuICAgICAgICAgICAgY1sweDYxXSA9IC0xODc1MTtcclxuICAgICAgICAgICAgY1sweDYyXSA9IC0yNDQ1NDtcclxuICAgICAgICAgICAgY1sweDYzXSA9IC0xNDYzNDMyNjtcclxuICAgICAgICAgICAgY1sxMDBdID0gLTc4NzY4NzA7XHJcbiAgICAgICAgICAgIGNbMHg2NV0gPSAtODk0MzQ2MztcclxuICAgICAgICAgICAgY1sweDY2XSA9IC01MTkyNDgyO1xyXG4gICAgICAgICAgICBjWzB4NjddID0gLTMyO1xyXG4gICAgICAgICAgICBjWzB4NjhdID0gLTE2NzExOTM2O1xyXG4gICAgICAgICAgICBjWzB4NjldID0gLTEzNDQ3ODg2O1xyXG4gICAgICAgICAgICBjWzB4NmFdID0gLTMzMTU0NjtcclxuICAgICAgICAgICAgY1sweDZiXSA9IC02NTI4MTtcclxuICAgICAgICAgICAgY1sweDZjXSA9IC04Mzg4NjA4O1xyXG4gICAgICAgICAgICBjWzB4NmRdID0gLTEwMDM5ODk0O1xyXG4gICAgICAgICAgICBjWzExMF0gPSAtMTY3NzcwMTE7XHJcbiAgICAgICAgICAgIGNbMHg2Zl0gPSAtNDU2NTU0OTtcclxuICAgICAgICAgICAgY1sweDcwXSA9IC03MTE0NTMzO1xyXG4gICAgICAgICAgICBjWzB4NzFdID0gLTEyNzk5MTE5O1xyXG4gICAgICAgICAgICBjWzB4NzJdID0gLTg2ODk0MjY7XHJcbiAgICAgICAgICAgIGNbMHg3M10gPSAtMTY3MTMwNjI7XHJcbiAgICAgICAgICAgIGNbMHg3NF0gPSAtMTIwMDQ5MTY7XHJcbiAgICAgICAgICAgIGNbMHg3NV0gPSAtMzczMDA0MztcclxuICAgICAgICAgICAgY1sweDc2XSA9IC0xNTEzMjMwNDtcclxuICAgICAgICAgICAgY1sweDc3XSA9IC02NTUzNjY7XHJcbiAgICAgICAgICAgIGNbMTIwXSA9IC02OTQzO1xyXG4gICAgICAgICAgICBjWzB4NzldID0gLTY5ODc7XHJcbiAgICAgICAgICAgIGNbMHg3YV0gPSAtODUzMTtcclxuICAgICAgICAgICAgY1sweDdiXSA9IC0xNjc3NzA4ODtcclxuICAgICAgICAgICAgY1sweDdjXSA9IC0xMzM2NTg7XHJcbiAgICAgICAgICAgIGNbMHg3ZF0gPSAtODM1NTg0MDtcclxuICAgICAgICAgICAgY1sweDdlXSA9IC05NzI4NDc3O1xyXG4gICAgICAgICAgICBjWzB4N2ZdID0gLTIzMjk2O1xyXG4gICAgICAgICAgICBjWzB4ODBdID0gLTQ3ODcyO1xyXG4gICAgICAgICAgICBjWzB4ODFdID0gLTI0NjE0ODI7XHJcbiAgICAgICAgICAgIGNbMTMwXSA9IC0xMTIwMDg2O1xyXG4gICAgICAgICAgICBjWzB4ODNdID0gLTY3NTEzMzY7XHJcbiAgICAgICAgICAgIGNbMHg4NF0gPSAtNTI0NzI1MDtcclxuICAgICAgICAgICAgY1sweDg1XSA9IC0yMzk2MDEzO1xyXG4gICAgICAgICAgICBjWzB4ODZdID0gLTQxMzk7XHJcbiAgICAgICAgICAgIGNbMHg4N10gPSAtOTU0MztcclxuICAgICAgICAgICAgY1sweDg4XSA9IC0zMzA4MjI1O1xyXG4gICAgICAgICAgICBjWzB4ODldID0gLTE2MTgxO1xyXG4gICAgICAgICAgICBjWzB4OGFdID0gLTIyNTI1Nzk7XHJcbiAgICAgICAgICAgIGNbMHg4Yl0gPSAtNTE4NTMwNjtcclxuICAgICAgICAgICAgY1sxNDBdID0gLTgzODg0ODA7XHJcbiAgICAgICAgICAgIGNbMHg4ZF0gPSAtNjU1MzY7XHJcbiAgICAgICAgICAgIGNbMHg4ZV0gPSAtNDQxOTY5NztcclxuICAgICAgICAgICAgY1sweDhmXSA9IC0xMjQ5MDI3MTtcclxuICAgICAgICAgICAgY1sweDkwXSA9IC03NjUwMDI5O1xyXG4gICAgICAgICAgICBjWzB4OTFdID0gLTM2MDMzNDtcclxuICAgICAgICAgICAgY1sweDkyXSA9IC03NDQzNTI7XHJcbiAgICAgICAgICAgIGNbMHg5M10gPSAtMTM3MjY4ODk7XHJcbiAgICAgICAgICAgIGNbMHg5NF0gPSAtMjU3ODtcclxuICAgICAgICAgICAgY1sweDk1XSA9IC02MjcwNDE5O1xyXG4gICAgICAgICAgICBjWzE1MF0gPSAtNDE0NDk2MDtcclxuICAgICAgICAgICAgY1sweDk3XSA9IC03ODc2ODg1O1xyXG4gICAgICAgICAgICBjWzB4OThdID0gLTk4MDcxNTU7XHJcbiAgICAgICAgICAgIGNbMHg5OV0gPSAtOTQwNDI3MjtcclxuICAgICAgICAgICAgY1sweDlhXSA9IC0xMjg2O1xyXG4gICAgICAgICAgICBjWzB4OWJdID0gLTE2NzExODA5O1xyXG4gICAgICAgICAgICBjWzB4OWNdID0gLTEyMTU2MjM2O1xyXG4gICAgICAgICAgICBjWzB4OWRdID0gLTI5Njg0MzY7XHJcbiAgICAgICAgICAgIGNbMHg5ZV0gPSAtMTY3NDQzMjA7XHJcbiAgICAgICAgICAgIGNbMHg5Zl0gPSAtMjU3MjMyODtcclxuICAgICAgICAgICAgY1sxNjBdID0gLTQwMTIxO1xyXG4gICAgICAgICAgICBjWzB4YTFdID0gLTEyNTI1MzYwO1xyXG4gICAgICAgICAgICBjWzB4YTJdID0gLTExNDYxMzA7XHJcbiAgICAgICAgICAgIGNbMHhhM10gPSAtNjYzODg1O1xyXG4gICAgICAgICAgICBjWzB4YTRdID0gLTE7XHJcbiAgICAgICAgICAgIGNbMHhhNV0gPSAtNjU3OTMxO1xyXG4gICAgICAgICAgICBjWzB4YTZdID0gLTI1NjtcclxuICAgICAgICAgICAgY1sweGE3XSA9IC02NjMyMTQyO1xyXG4gICAgICAgICAgICBjb2xvclRhYmxlID0gYztcclxuXHJcbiAgICAgICAgICAgIFVwZGF0ZVN5c3RlbUNvbG9ycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbnQgS25vd25Db2xvclRvQXJnYihLbm93bkNvbG9yIGNvbG9yKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRW5zdXJlQ29sb3JUYWJsZSgpO1xyXG4gICAgICAgICAgICBpZiAoY29sb3IgPD0gS25vd25Db2xvci5NZW51SGlnaGxpZ2h0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUYWJsZVsoaW50KWNvbG9yXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIEtub3duQ29sb3JUb05hbWUoS25vd25Db2xvciBjb2xvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVuc3VyZUNvbG9yTmFtZVRhYmxlKCk7XHJcbiAgICAgICAgICAgIGlmIChjb2xvciA8PSBLbm93bkNvbG9yLk1lbnVIaWdobGlnaHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvck5hbWVUYWJsZVsoaW50KWNvbG9yXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludFtdIF9TeXNDb2xvcnMgPSBuZXcgaW50W10gXHJcbiAgICAgICAgICAgIHsxMTg0Mjc0MCxcclxuICAgICAgICAgICAgMTM3NDMyNTcsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDExMjUwNjAzLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDEwNTI2ODgwLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTA1MjY4ODAsXHJcbiAgICAgICAgICAgIDY5MDgyNjUsXHJcbiAgICAgICAgICAgIDE0OTM1MDExLFxyXG4gICAgICAgICAgICAxNjc3NzIxNSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgMTUzODkxMTMsXHJcbiAgICAgICAgICAgIDE1OTE4Mjk1LFxyXG4gICAgICAgICAgICA3MTcxNDM3LFxyXG4gICAgICAgICAgICAxNjc1MDg5OSxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDEzMzk1NDU2LFxyXG4gICAgICAgICAgICAxNjU3ODU0OCxcclxuICAgICAgICAgICAgMTQ0MDUwNTUsXHJcbiAgICAgICAgICAgIDU1MjUwNTksXHJcbiAgICAgICAgICAgIDE0ODExMTM1LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxNTc5MDMyMCxcclxuICAgICAgICAgICAgMTU3OTAzMjAsXHJcbiAgICAgICAgICAgIDE2NzUwODk5LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAxMzE1ODYwMCxcclxuICAgICAgICAgICAgMTY3NzcyMTUsXHJcbiAgICAgICAgICAgIDY1NzkzMDAsXHJcbiAgICAgICAgICAgIDB9O1xyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgU3lzdGVtQ29sb3JUb0FyZ2IoaW50IGluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEZyb21XaW4zMlZhbHVlKF9TeXNDb2xvcnNbaW5kZXhdKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uRHJhd2luZ1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRm9udFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRmFtaWx5TmFtZSB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgZmxvYXQgRW1TaXplIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRm9udChzdHJpbmcgZmFtaWx5TmFtZSwgZmxvYXQgZW1TaXplLCBGb250U3R5bGUgc3R5bGUsIEdyYXBoaWNzVW5pdCB1bml0LCBieXRlIGdkaUNoYXJTZXQpIDogdGhpcyhmYW1pbHlOYW1lLCBlbVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBGb250KHN0cmluZyBmYW1pbHlOYW1lLCBmbG9hdCBlbVNpemUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGYW1pbHlOYW1lID0gZmFtaWx5TmFtZTtcclxuICAgICAgICAgICAgRW1TaXplID0gZW1TaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgUG9pbnRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgaW50IFg7XHJcbiAgICAgICAgcHVibGljIGludCBZO1xyXG4gICAgICAgIHB1YmxpYyBQb2ludChpbnQgeCwgaW50IHkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBYID0geDtcclxuICAgICAgICAgICAgWSA9IHk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgU2l6ZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgV2lkdGg7XHJcbiAgICAgICAgcHVibGljIGludCBIZWlnaHQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2l6ZSBFbXB0eSA9IG5ldyBTaXplKDAsIDApO1xyXG5cclxuICAgICAgICBwdWJsaWMgU2l6ZShpbnQgd2lkdGgsIGludCBoZWlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5EcmF3aW5nXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgU2l6ZUZcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZmxvYXQgV2lkdGg7XHJcbiAgICAgICAgcHVibGljIGZsb2F0IEhlaWdodDtcclxuXHJcbiAgICAgICAgcHVibGljIFNpemVGKGZsb2F0IHdpZHRoLCBmbG9hdCBoZWlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLkRyYXdpbmdcclxue1xyXG4gICAgcHVibGljIHNlYWxlZCBjbGFzcyBTeXN0ZW1Db2xvcnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFjdGl2ZUJvcmRlciB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BY3RpdmVCb3JkZXIpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQWN0aXZlQ2FwdGlvbiB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BY3RpdmVDYXB0aW9uKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFjdGl2ZUNhcHRpb25UZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkFjdGl2ZUNhcHRpb25UZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEFwcFdvcmtzcGFjZSB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5BcHBXb3Jrc3BhY2UpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnV0dG9uRmFjZSB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CdXR0b25GYWNlKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEJ1dHRvbkhpZ2hsaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5CdXR0b25IaWdobGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQnV0dG9uU2hhZG93IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkJ1dHRvblNoYWRvdyk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2wpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbERhcmsge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbERhcmspO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgQ29udHJvbERhcmtEYXJrIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2xEYXJrRGFyayk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBDb250cm9sTGlnaHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuQ29udHJvbExpZ2h0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2xMaWdodExpZ2h0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2xMaWdodExpZ2h0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIENvbnRyb2xUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkNvbnRyb2xUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIERlc2t0b3Age2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuRGVza3RvcCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBHcmFkaWVudEFjdGl2ZUNhcHRpb24ge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuR3JhZGllbnRBY3RpdmVDYXB0aW9uKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYWRpZW50SW5hY3RpdmVDYXB0aW9uIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyYWRpZW50SW5hY3RpdmVDYXB0aW9uKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEdyYXlUZXh0IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkdyYXlUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEhpZ2hsaWdodCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5IaWdobGlnaHQpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSGlnaGxpZ2h0VGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5IaWdobGlnaHRUZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEhvdFRyYWNrIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkhvdFRyYWNrKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluYWN0aXZlQm9yZGVyIHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLkluYWN0aXZlQm9yZGVyKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluYWN0aXZlQ2FwdGlvbiB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmFjdGl2ZUNhcHRpb24pO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgSW5hY3RpdmVDYXB0aW9uVGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmFjdGl2ZUNhcHRpb25UZXh0KTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIEluZm8ge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuSW5mbyk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBJbmZvVGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5JbmZvVGV4dCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZW51IHtnZXR7cmV0dXJuIG5ldyBDb2xvcihLbm93bkNvbG9yLk1lbnUpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgTWVudUJhciB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZW51QmFyKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIE1lbnVIaWdobGlnaHQge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuTWVudUhpZ2hsaWdodCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBNZW51VGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5NZW51VGV4dCk7fX1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDb2xvciBTY3JvbGxCYXIge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuU2Nyb2xsQmFyKTt9fVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENvbG9yIFdpbmRvdyB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaW5kb3cpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2luZG93RnJhbWUge2dldHtyZXR1cm4gbmV3IENvbG9yKEtub3duQ29sb3IuV2luZG93RnJhbWUpO319XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ29sb3IgV2luZG93VGV4dCB7Z2V0e3JldHVybiBuZXcgQ29sb3IoS25vd25Db2xvci5XaW5kb3dUZXh0KTt9fVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUdyaWRWaWV3Q29sdW1uXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQgRWxlbWVudDtcclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEhlYWRlclRleHQge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gRWxlbWVudC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIE5hbWUgeyBnZXQgeyByZXR1cm4gRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJOYW1lXCIpOyB9IHNldCB7IEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiTmFtZVwiLCB2YWx1ZSk7IH0gfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRGF0YVByb3BlcnR5TmFtZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW4oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBkZWxlZ2F0ZSB2b2lkIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRIYW5kbGVyKG9iamVjdCBzZW5kZXIsIExpbmtMYWJlbExpbmtDbGlja2VkRXZlbnRBcmdzIGUpO1xyXG4gICAgLy9cclxuICAgIC8vIFN1bW1hcnk6XHJcbiAgICAvLyAgICAgUHJvdmlkZXMgZGF0YSBmb3IgdGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5MaW5rQ2xpY2tlZCBldmVudC4gICAgXHJcbiAgICBwdWJsaWMgY2xhc3MgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MgOiBFdmVudEFyZ3NcclxuICAgIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJnc1xyXG4gICAgICAgIC8vICAgICBjbGFzcyB3aXRoIHRoZSBzcGVjaWZpZWQgbGluay5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFBhcmFtZXRlcnM6XHJcbiAgICAgICAgLy8gICBsaW5rOlxyXG4gICAgICAgIC8vICAgICBUaGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLkxpbmsgdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgICAgICBwdWJsaWMgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEFyZ3MoTGlua0xhYmVsLkxpbmsgbGluaylcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5MaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJnc1xyXG4gICAgICAgIC8vICAgICBjbGFzcyB3aXRoIHRoZSBzcGVjaWZpZWQgbGluayBhbmQgdGhlIHNwZWNpZmllZCBtb3VzZSBidXR0b24uXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQYXJhbWV0ZXJzOlxyXG4gICAgICAgIC8vICAgbGluazpcclxuICAgICAgICAvLyAgICAgVGhlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkxpbmtMYWJlbC5MaW5rIHRoYXQgd2FzIGNsaWNrZWQuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgIGJ1dHRvbjpcclxuICAgICAgICAvLyAgICAgT25lIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Nb3VzZUJ1dHRvbnMgdmFsdWVzLlxyXG4gICAgICAgIHB1YmxpYyBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyhMaW5rTGFiZWwuTGluayBsaW5rLCBNb3VzZUJ1dHRvbnMgYnV0dG9uKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFN1bW1hcnk6XHJcbiAgICAgICAgLy8gICAgIEdldHMgdGhlIG1vdXNlIGJ1dHRvbiB0aGF0IGNhdXNlcyB0aGUgbGluayB0byBiZSBjbGlja2VkLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmV0dXJuczpcclxuICAgICAgICAvLyAgICAgT25lIG9mIHRoZSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Nb3VzZUJ1dHRvbnMgdmFsdWVzLlxyXG4gICAgICAgIHB1YmxpYyBNb3VzZUJ1dHRvbnMgQnV0dG9uIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gU3VtbWFyeTpcclxuICAgICAgICAvLyAgICAgR2V0cyB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLkxpbmsgdGhhdCB3YXMgY2xpY2tlZC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFJldHVybnM6XHJcbiAgICAgICAgLy8gICAgIEEgbGluayBvbiB0aGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuTGlua0xhYmVsLlxyXG4gICAgICAgIHB1YmxpYyBMaW5rTGFiZWwuTGluayBMaW5rIHsgZ2V0OyBwcml2YXRlIHNldDsgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vXHJcbiAgICAvLyBTdW1tYXJ5OlxyXG4gICAgLy8gICAgIFJlcHJlc2VudHMgdGhlIGNvbGxlY3Rpb24gb2YgaXRlbXMgaW4gYSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Db21ib0JveC5cclxuICAgIHB1YmxpYyBjbGFzcyBPYmplY3RDb2xsZWN0aW9uIDogSUxpc3Q8b2JqZWN0PiwgSUNvbGxlY3Rpb24sIElFbnVtZXJhYmxlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBDb250cm9sIF9vd25lcjtcclxuXHJcbiAgICAgICAgcHVibGljIE9iamVjdENvbGxlY3Rpb24oQ29udHJvbCBvd25lcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lciA9IG93bmVyO1xyXG4gICAgICAgICAgICBfY29udHJvbHMgPSBuZXcgTGlzdDxvYmplY3Q+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbCBPd25lciB7IGdldCB7IHJldHVybiBfb3duZXI7IH0gfVxyXG5cclxuICAgICAgICBwcml2YXRlIExpc3Q8b2JqZWN0PiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgdGhpc1tpbnQgaW5kZXhdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaW50IENvdW50IHsgZ2V0IHsgcmV0dXJuIF9jb250cm9scy5Db3VudDsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQob2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50PihuZXcgUmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQoKSB7IHZhbHVlID0gX2NvbnRyb2xzLkNvdW50LlRvU3RyaW5nKCksIHRleHRDb250ZW50ID0gKGl0ZW0gKyBcIlwiKSB9ICk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShvYmplY3RbXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTE9wdGlvbkVsZW1lbnQ+KG5ldyBSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudCgpIHsgdmFsdWUgPSBfY29udHJvbHMuQ291bnQuVG9TdHJpbmcoKSwgdGV4dENvbnRlbnQgPSAoaXRlbVtpXSArIFwiXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBfb3duZXIuRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0d2hpbGUobGVuLS0pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZChfb3duZXIuRWxlbWVudC5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhvYmplY3RbXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChvYmplY3RbXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8b2JqZWN0PiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKG9iamVjdCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgb2JqZWN0IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5pbnNlcnRCZWZvcmU8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MT3B0aW9uRWxlbWVudD4obmV3IFJldHlwZWQuZG9tLkhUTUxPcHRpb25FbGVtZW50KCkgeyB2YWx1ZSA9IF9jb250cm9scy5Db3VudC5Ub1N0cmluZygpLCB0ZXh0Q29udGVudCA9IChpdGVtICsgXCJcIikgfSwgX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuSW5zZXJ0KGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIFJlbW92ZShvYmplY3QgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tfY29udHJvbHMuSW5kZXhPZihpdGVtKV0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLlJlbW92ZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZUF0KGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uTm9kZT4oX293bmVyLkVsZW1lbnQuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBzdHJ1Y3QgUGFkZGluZ1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgTGVmdCwgVG9wLCBSaWdodCwgQm90dG9tO1xyXG4gICAgICAgIHB1YmxpYyBQYWRkaW5nKGludCBsZWZ0LCBpbnQgdG9wLCBpbnQgcmlnaHQsIGludCBib3R0b20pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMZWZ0ID0gbGVmdDsgVG9wID0gdG9wOyBSaWdodCA9IHJpZ2h0OyBCb3R0b20gPSBib3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgUGFkZGluZyhpbnQgYWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGVmdCA9IGFsbDsgVG9wID0gYWxsOyBSaWdodCA9IGFsbDsgQm90dG9tID0gYWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEJ1dHRvbkJhc2UgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIEJ1dHRvbkJhc2UoUmV0eXBlZC5kb20uSFRNTEVsZW1lbnQgZWxlbWVudCkgOiBiYXNlKGVsZW1lbnQpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIGJvb2wgQXV0b1NpemUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dCB7IGdldCB7IHJldHVybiBiYXNlLlRleHQ7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuICAgICAgICBwdWJsaWMgYm9vbCBVc2VWaXN1YWxTdHlsZUJhY2tDb2xvciB7IGdldDsgc2V0OyB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb21ib0JveCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQ29tYm9Cb3goKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxTZWxlY3RFbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJdGVtcyA9IG5ldyBPYmplY3RDb2xsZWN0aW9uKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgT2JqZWN0Q29sbGVjdGlvbiBJdGVtcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEZvcm1hdHRpbmdFbmFibGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgSXRlbUhlaWdodCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERyYXdNb2RlIERyYXdNb2RlIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBTaXplIE1pbmltdW1TaXplIHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgTGlzdEJveCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlzdEJveCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTFNlbGVjdEVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTFNlbGVjdEVsZW1lbnQ+KCkubXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBJdGVtcyA9IG5ldyBPYmplY3RDb2xsZWN0aW9uKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgT2JqZWN0Q29sbGVjdGlvbiBJdGVtcyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBib29sIEZvcm1hdHRpbmdFbmFibGVkIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBpbnQgSXRlbUhlaWdodCB7IGdldDsgc2V0OyB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udGFpbmVyQ29udHJvbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU2l6ZUYgQXV0b1NjYWxlRGltZW5zaW9ucyB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIEF1dG9TY2FsZU1vZGUgQXV0b1NjYWxlTW9kZSB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250YWluZXJDb250cm9sKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBDb250cm9sQ29sbGVjdGlvbiA6IElMaXN0PENvbnRyb2w+LCBJQ29sbGVjdGlvbiwgSUVudW1lcmFibGVcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBDb250cm9sIF9vd25lcjtcclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xDb2xsZWN0aW9uKENvbnRyb2wgb3duZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgX2NvbnRyb2xzID0gbmV3IExpc3Q8Q29udHJvbD4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxDb250cm9sPiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sIHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChDb250cm9sIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpdGVtLl9wYXJlbnQgPSBPd25lcjtcclxuICAgICAgICAgICAgaXRlbS5Mb2FkKCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShDb250cm9sW10gaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtID09IG51bGwgfHwgaXRlbS5MZW5ndGggPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGZyYWcgPSBSZXR5cGVkLmRvbS5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgICAgIGZvciAoaW50IGkgPSAwOyBpIDwgaXRlbS5MZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZnJhZy5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtW2ldLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtpXS5fcGFyZW50ID0gT3duZXI7XHJcbiAgICAgICAgICAgICAgICBpdGVtW2ldLkxvYWQoKTtcclxuICAgICAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbVtpXSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uRG9jdW1lbnRGcmFnbWVudD4oZnJhZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDbGVhcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvKkBcclxuXHRcdFx0dmFyIGxlbiA9IF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZShsZW4tLSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdF9vd25lci5FbGVtZW50LnJlbW92ZUNoaWxkKF9vd25lci5FbGVtZW50Lmxhc3RDaGlsZCk7XHJcblx0XHRcdH07XHJcblx0XHRcdCovXHJcbiAgICAgICAgICAgIF9jb250cm9scy5DbGVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgQ29udGFpbnMoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhDb250cm9sW10gYXJyYXksIGludCBhcnJheUluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNvcHlUbyhhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb3B5VG8oQXJyYXkgYXJyYXksIGludCBhcnJheUluZGV4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkNvcHlUbygoQ29udHJvbFtdKWFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJRW51bWVyYXRvcjxDb250cm9sPiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKENvbnRyb2wgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuSW5kZXhPZihpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluc2VydChpbnQgaW5kZXgsIENvbnRyb2wgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9vd25lci5FbGVtZW50Lmluc2VydEJlZm9yZTxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihpdGVtLkVsZW1lbnQsIF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoQ29udHJvbCBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyLkVsZW1lbnQucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfb3duZXIuRWxlbWVudC5yZW1vdmVDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLk5vZGU+KF9vd25lci5FbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLlJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElFbnVtZXJhdG9yIElFbnVtZXJhYmxlLkdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5Db21wb25lbnRNb2RlbDtcclxudXNpbmcgU3lzdGVtLkRhdGE7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0YUdyaWRWaWV3IDogQ29udHJvbCwgSVN1cHBvcnRJbml0aWFsaXplXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbkhlYWRlcnNIZWlnaHRTaXplTW9kZSBDb2x1bW5IZWFkZXJzSGVpZ2h0U2l6ZU1vZGUgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uIENvbHVtbnMgeyBnZXQ7IHByaXZhdGUgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24gUm93cyB7IGdldDsgcHJpdmF0ZSBzZXQ7IH1cclxuXHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCB0YWJsZTtcclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFibGUgPSBuZXcgUmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlRWxlbWVudD4odGFibGUpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG5cclxuICAgICAgICAgICAgQ29sdW1ucyA9IG5ldyBEYXRhR3JpZFZpZXdDb2x1bW5Db2xsZWN0aW9uKHRoaXMsIHRhYmxlKTtcclxuICAgICAgICAgICAgUm93cyA9IG5ldyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uKHRoaXMsIHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIFRhYlN0b3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJ0YWJsZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEJlZ2luSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEVuZEluaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IFRhZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF90YWc7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF90YWcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGFnIGlzIHN0cmluZylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gKF90YWcgKyBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycnkuTGVuZ3RoID49IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTmFtZSA9IGFycnlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyeS5MZW5ndGggPj0gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2x1bW5zLmhlYWRlci5jbGFzc05hbWUgPSBhcnJ5WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbHVtbnMuaGVhZGVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29sdW1ucy5oZWFkZXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIE9uTmV3Um93RXZlbnQob2JqZWN0IHNlbmRlciwgTmV3Um93RXZlbnRBcmdzIGFyZ3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSb3dzLkFkZChhcmdzLlJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIG9iamVjdCBkYXRhU291cmNlO1xyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgRGF0YVNvdXJjZSB7IGdldCB7IHJldHVybiBkYXRhU291cmNlOyB9IHNldCB7XHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPSBkYXRhU291cmNlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTb3VyY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGFTb3VyY2UgaXMgRGF0YVRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhU291cmNlLkFzPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdC5OZXdSb3dFdmVudCAtPSBPbk5ld1Jvd0V2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhU291cmNlICE9IG51bGwgJiYgZGF0YVNvdXJjZSBpcyBEYXRhVGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSBkYXRhU291cmNlLkFzPERhdGFUYWJsZT4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR0Lk5ld1Jvd0V2ZW50ICs9IE9uTmV3Um93RXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vIFRPRE8gLSBhZGQgY29udHJvbHMgdmlhIGh0bWwuLi4uXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIERhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24gOiBJTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+LCBJQ29sbGVjdGlvbiwgSUVudW1lcmFibGVcclxuICAgIHtcclxuICAgICAgICBpbnRlcm5hbCBEYXRhR3JpZFZpZXcgX293bmVyO1xyXG4gICAgICAgIGludGVybmFsIFJldHlwZWQuZG9tLkhUTUxUYWJsZVNlY3Rpb25FbGVtZW50IGhlYWRlcjtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbkNvbGxlY3Rpb24oRGF0YUdyaWRWaWV3IG93bmVyLCBSZXR5cGVkLmRvbS5IVE1MVGFibGVFbGVtZW50IHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PERhdGFHcmlkVmlld0NvbHVtbj4oKTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGhlYWRlciA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+KGhlYWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3IE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxEYXRhR3JpZFZpZXdDb2x1bW4+IF9jb250cm9scztcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld0NvbHVtbiB0aGlzW2ludCBpbmRleF0geyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzW2luZGV4XTsgIH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIF9jb250cm9sc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgQ291bnQgeyBnZXQgeyByZXR1cm4gX2NvbnRyb2xzLkNvdW50OyAgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIElzUmVhZE9ubHkgeyBnZXQgeyByZXR1cm4gZmFsc2U7IH0gfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGQoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBBZGRSYW5nZShEYXRhR3JpZFZpZXdDb2x1bW5bXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW1baV0uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBfY29udHJvbHMuQWRkKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBoZWFkZXIuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdHdoaWxlKGxlbi0tKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRlci5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKERhdGFHcmlkVmlld0NvbHVtbiBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5Db250YWlucyhpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhEYXRhR3JpZFZpZXdDb2x1bW5bXSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKGFycmF5LCBhcnJheUluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIENvcHlUbyhBcnJheSBhcnJheSwgaW50IGFycmF5SW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ29weVRvKChEYXRhR3JpZFZpZXdDb2x1bW5bXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8RGF0YUdyaWRWaWV3Q29sdW1uPiBHZXRFbnVtZXJhdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuR2V0RW51bWVyYXRvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBJbmRleE9mKERhdGFHcmlkVmlld0NvbHVtbiBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5JbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5zZXJ0KGludCBpbmRleCwgRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIuaW5zZXJ0QmVmb3JlPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+KGl0ZW0uRWxlbWVudCwgaGVhZGVyLmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkluc2VydChpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBSZW1vdmUoRGF0YUdyaWRWaWV3Q29sdW1uIGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5SZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSZW1vdmVBdChpbnQgaW5kZXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihoZWFkZXIuY2hpbGROb2Rlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBfY29udHJvbHMuUmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSUVudW1lcmF0b3IgSUVudW1lcmFibGUuR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnM7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIFN5c3RlbS5XaW5kb3dzLkZvcm1zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyBUT0RPIC0gYWRkIGNvbnRyb2xzIHZpYSBodG1sLi4uLlxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhR3JpZFZpZXdSb3dDb2xsZWN0aW9uIDogSUxpc3Q8RGF0YVJvdz4sIElDb2xsZWN0aW9uLCBJRW51bWVyYWJsZVxyXG4gICAge1xyXG4gICAgICAgIGludGVybmFsIERhdGFHcmlkVmlldyBfb3duZXI7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQgYm9keTtcclxuXHJcbiAgICAgICAgcHVibGljIERhdGFHcmlkVmlld1Jvd0NvbGxlY3Rpb24oRGF0YUdyaWRWaWV3IG93bmVyLCBSZXR5cGVkLmRvbS5IVE1MVGFibGVFbGVtZW50IHRhYmxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX293bmVyID0gb3duZXI7XHJcbiAgICAgICAgICAgIF9jb250cm9scyA9IG5ldyBMaXN0PERhdGFSb3c+KCk7XHJcblxyXG4gICAgICAgICAgICBib2R5ID0gdGFibGUuY3JlYXRlVEJvZHkoKTtcclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVTZWN0aW9uRWxlbWVudD4oYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGF0YUdyaWRWaWV3IE93bmVyIHsgZ2V0IHsgcmV0dXJuIF9vd25lcjsgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgTGlzdDxEYXRhUm93PiBfY29udHJvbHM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBEYXRhUm93IHRoaXNbaW50IGluZGV4XSB7IGdldCB7IHJldHVybiBfY29udHJvbHNbaW5kZXhdOyAgfSBzZXQge1xyXG4gICAgICAgICAgICAgICAgX2NvbnRyb2xzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGludCBDb3VudCB7IGdldCB7IHJldHVybiBfY29udHJvbHMuQ291bnQ7ICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNSZWFkT25seSB7IGdldCB7IHJldHVybiBmYWxzZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZChEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudD4oaXRlbS5FbGVtZW50KTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLkFkZChpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIEFkZFJhbmdlKERhdGFSb3dbXSBpdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtLkxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZnJhZyA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBpdGVtLkxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTFRhYmxlUm93RWxlbWVudD4oaXRlbVtpXS5FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIF9jb250cm9scy5BZGQoaXRlbVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkRvY3VtZW50RnJhZ21lbnQ+KGZyYWcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ2xlYXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLypAXHJcblx0XHRcdHZhciBsZW4gPSBib2R5LmNoaWxkTm9kZXMubGVuZ3RoO1xyXG5cdFx0XHR3aGlsZShsZW4tLSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHQqL1xyXG4gICAgICAgICAgICBfY29udHJvbHMuQ2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENvbnRhaW5zKERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBfY29udHJvbHMuQ29udGFpbnMoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBDb3B5VG8oRGF0YVJvd1tdIGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oYXJyYXksIGFycmF5SW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgQ29weVRvKEFycmF5IGFycmF5LCBpbnQgYXJyYXlJbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5Db3B5VG8oKERhdGFSb3dbXSlhcnJheSwgYXJyYXlJbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgSUVudW1lcmF0b3I8RGF0YVJvdz4gR2V0RW51bWVyYXRvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkdldEVudW1lcmF0b3IoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbnQgSW5kZXhPZihEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLkluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBJbnNlcnQoaW50IGluZGV4LCBEYXRhUm93IGl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib2R5Lmluc2VydEJlZm9yZTxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxUYWJsZVJvd0VsZW1lbnQ+KGl0ZW0uRWxlbWVudCwgYm9keS5jaGlsZE5vZGVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIF9jb250cm9scy5JbnNlcnQoaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgUmVtb3ZlKERhdGFSb3cgaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MVGFibGVSb3dFbGVtZW50PihpdGVtLkVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRyb2xzLlJlbW92ZShpdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFJlbW92ZUF0KGludCBpbmRleClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5Ob2RlPihib2R5LmNoaWxkTm9kZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgX2NvbnRyb2xzLlJlbW92ZUF0KGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIElFbnVtZXJhdG9yIElFbnVtZXJhYmxlLkdldEVudW1lcmF0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9jb250cm9scy5HZXRFbnVtZXJhdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgR3JvdXBCb3ggOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBSZXR5cGVkLmRvbS5IVE1MTGVnZW5kRWxlbWVudCBsZWdlbmQ7XHJcbiAgICAgICAgcHJpdmF0ZSBQYW5lbCBwYW5lbDtcclxuICAgICAgICBwdWJsaWMgR3JvdXBCb3goKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxGaWVsZFNldEVsZW1lbnQoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhbmVsID0gbmV3IFBhbmVsKCk7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwiZ3JvdXBib3hcIik7XHJcblxyXG4gICAgICAgICAgICBFbGVtZW50LmFwcGVuZENoaWxkPGdsb2JhbDo6UmV0eXBlZC5kb20uSFRNTExlZ2VuZEVsZW1lbnQ+KGxlZ2VuZCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MTGVnZW5kRWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgICAgIGxlZ2VuZC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImdyb3VwYm94bGVnZW5kXCIpO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxFbGVtZW50PihwYW5lbC5FbGVtZW50KTtcclxuICAgICAgICAgICAgcGFuZWwuRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICAgICAgQ29udHJvbHMuX293bmVyID0gcGFuZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBsZWdlbmQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBvYmplY3QgVGFnXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3RhZzsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3RhZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90YWcgaXMgc3RyaW5nKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSAoX3RhZyArIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHIuQ29udGFpbnMoXCIsXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycnkgPSBzdHIuU3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBhcnJ5WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyeS5MZW5ndGggPT0gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kLmNsYXNzTmFtZSA9IGFycnlbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5FbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLkVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IHN0cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsLkVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLkVsZW1lbnQuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIExhYmVsIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBMYWJlbCgpIDogYmFzZShuZXcgUmV0eXBlZC5kb20uSFRNTFNwYW5FbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBFbGVtZW50LnRleHRDb250ZW50OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLlRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIExpbmtMYWJlbCA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTGlua0xhYmVsKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MQW5jaG9yRWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL0VsZW1lbnQuQXM8SFRNTEFuY2hvckVsZW1lbnQ+KCkuSHJlZiA9IFwiI1wiO1xyXG4gICAgICAgICAgICBFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gRWxlbWVudC50ZXh0Q29udGVudDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50LnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uQ2xpY2soRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiYXNlLk9uQ2xpY2soZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoTGlua0NsaWNrZWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIExpbmtDbGlja2VkKHRoaXMsIG5ldyBMaW5rTGFiZWxMaW5rQ2xpY2tlZEV2ZW50QXJncyhudWxsKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZXZlbnQgTGlua0xhYmVsTGlua0NsaWNrZWRFdmVudEhhbmRsZXIgTGlua0NsaWNrZWQ7XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGFzcyBMaW5rXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgUHJvZ3Jlc3NCYXIgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgaW50ZXJuYWwgUmV0eXBlZC5kb20uSFRNTERpdkVsZW1lbnQgcHJvZ3Jlc3NCYXI7XHJcbiAgICAgICAgcHVibGljIFByb2dyZXNzQmFyKCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxEaXZFbGVtZW50Pihwcm9ncmVzc0JhciA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKTtcclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBFbGVtZW50LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicHJvZ3Jlc3NcIik7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBDb2xvciBGb3JlQ29sb3IgeyBnZXQgeyByZXR1cm4gYmFzZS5Gb3JlQ29sb3I7IH0gc2V0IHtcclxuICAgICAgICAgICAgICAgIGJhc2UuRm9yZUNvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZS5Ub0h0bWwoKTtcclxuICAgICAgICAgICAgfSB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaW50IF92YWx1ZTtcclxuICAgICAgICBwdWJsaWMgaW50IFZhbHVlIHsgZ2V0IHsgcmV0dXJuIF92YWx1ZTsgfSAgc2V0IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID4gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IF92YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgICAgICB9IH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ci5Db250YWlucyhcIixcIikpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyeSA9IHN0ci5TcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IGFycnlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJ5Lkxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBhcnJ5WzFdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBFbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgVGV4dEJveCA6IENvbnRyb2xcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBUZXh0Qm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50KCkgeyB0eXBlID0gXCJ0ZXh0XCIgfSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIFRleHQgeyBnZXQgeyByZXR1cm4gRWxlbWVudC5BczxSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50PigpLnZhbHVlOyB9IHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLlRleHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnQuQXM8UmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudD4oKS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQnV0dG9uIDogQnV0dG9uQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBCdXR0b24oKSA6IGJhc2UobmV3IFJldHlwZWQuZG9tLkhUTUxCdXR0b25FbGVtZW50KCkpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENoZWNrQm94IDogQnV0dG9uQmFzZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgUmV0eXBlZC5kb20uSFRNTElucHV0RWxlbWVudCBjaGVja0JveDtcclxuICAgICAgICBwcml2YXRlIFJldHlwZWQuZG9tLkhUTUxMYWJlbEVsZW1lbnQgdGV4dDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgY2hlY2tib3hUb0xhYmVsSWQ7XHJcbiAgICAgICAgcHVibGljIENoZWNrQm94KCkgOiBiYXNlKG5ldyBSZXR5cGVkLmRvbS5IVE1MRGl2RWxlbWVudCgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gY2hlY2tib3hUb0xhYmVsSWQrKztcclxuICAgICAgICAgICAgdmFyIGlkcyA9IFwiX19jaGVja1wiICsgaWQuVG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5hcHBlbmRDaGlsZDxnbG9iYWw6OlJldHlwZWQuZG9tLkhUTUxJbnB1dEVsZW1lbnQ+KChjaGVja0JveCA9IG5ldyBSZXR5cGVkLmRvbS5IVE1MSW5wdXRFbGVtZW50KCkgeyB0eXBlID0gXCJjaGVja2JveFwiLCBpZCA9IGlkcyB9KSk7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MTGFiZWxFbGVtZW50Pih0ZXh0ID0gbmV3IFJldHlwZWQuZG9tLkhUTUxMYWJlbEVsZW1lbnQoKSB7IGh0bWxGb3IgPSBpZHMgfSk7XHJcblxyXG4gICAgICAgICAgICBjaGVja0JveC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgdGV4dC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBib29sIENoZWNrZWQgeyBnZXQgeyByZXR1cm4gY2hlY2tCb3guQGNoZWNrZWQ7IH0gc2V0IHsgY2hlY2tCb3guQGNoZWNrZWQgPSB2YWx1ZTsgfSB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgVGV4dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIHRleHQudGV4dENvbnRlbnQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIG9iamVjdCBUYWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfdGFnOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfdGFnID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RhZyBpcyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IChfdGFnICsgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3RyLkNvbnRhaW5zKFwiLFwiKSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJ5ID0gc3RyLlNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gYXJyeVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXJyeS5MZW5ndGggPT0gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3guY2xhc3NOYW1lID0gYXJyeVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gYXJyeVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnQuY2xhc3NOYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0JveC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgaW50IFRhYkluZGV4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3RhYkluZGV4OyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihfaW5pdClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGFiSW5kZXggPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFiU3RvcClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LnRhYkluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQm94LnJlbW92ZUF0dHJpYnV0ZShcIlRhYkluZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBTeXN0ZW0uV2luZG93cy5Gb3Jtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRm9ybSA6IENvbnRhaW5lckNvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgRm9ybVRvcEJvcmRlciA9IDI3O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBGb3JtQm90dG9uQm9yZGVyID0gNjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnQgRm9ybUxlZnRCb3JkZXIgPSA2O1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGludCBGb3JtUmlnaHRCb3JkZXIgPSA2O1xyXG5cclxuICAgICAgICBwdWJsaWMgRm9ybSgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBCYWNrQ29sb3IgPSBTeXN0ZW1Db2xvcnMuQ29udHJvbDtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3JkZXJUb3AgPSBcInNvbGlkIFwiICsgRm9ybVRvcEJvcmRlciArIFwicHhcIiArIFwiIFwiICsgQ29sb3IuQ29ybmZsb3dlckJsdWU7XHJcbiAgICAgICAgICAgIEVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCBcIiArIEZvcm1Cb3R0b25Cb3JkZXIgKyBcInB4XCIgKyBcIiBcIiArIENvbG9yLkNvcm5mbG93ZXJCbHVlO1xyXG5cclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJzb2xpZCBcIiArIEZvcm1MZWZ0Qm9yZGVyICsgXCJweFwiICsgXCIgXCIgKyBDb2xvci5Db3JuZmxvd2VyQmx1ZTtcclxuICAgICAgICAgICAgRWxlbWVudC5zdHlsZS5ib3JkZXJSaWdodCA9IFwic29saWQgXCIgKyBGb3JtUmlnaHRCb3JkZXIgKyBcInB4XCIgKyBcIiBcIiArIENvbG9yLkNvcm5mbG93ZXJCbHVlO1xyXG5cclxuICAgICAgICAgICAgVGFiU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIEZvbnQgRm9udCB7IGdldCB7IHJldHVybiBiYXNlLkZvbnQ7IH0gc2V0IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBiYXNlLkZvbnQgPSB2YWx1ZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gfSAgICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2l6ZSBHZXRDbGllbnRTaXplKFNpemUgc2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2l6ZShzaXplLldpZHRoIC0gKEZvcm1MZWZ0Qm9yZGVyICsgRm9ybVJpZ2h0Qm9yZGVyKSwgc2l6ZS5IZWlnaHQgLSAoRm9ybVRvcEJvcmRlciArIEZvcm1Cb3R0b25Cb3JkZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU2l6ZSBTZXRTaXplKFNpemUgY2xpZW50U2l6ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2l6ZShjbGllbnRTaXplLldpZHRoICsgKEZvcm1MZWZ0Qm9yZGVyICsgRm9ybVJpZ2h0Qm9yZGVyKSwgY2xpZW50U2l6ZS5IZWlnaHQgKyAoRm9ybVRvcEJvcmRlciArIEZvcm1Cb3R0b25Cb3JkZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB2aXJ0dWFsIHZvaWQgRGlzcG9zZShib29sIGRpc3Bvc2luZylcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuICAgICAgICBwdWJsaWMgdm9pZCBTaG93KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQ8Z2xvYmFsOjpSZXR5cGVkLmRvbS5IVE1MRWxlbWVudD4oRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgcHVibGljIFNpemUgQ2xpZW50U2l6ZSB7IGdldCB7IHJldHVybiBHZXRDbGllbnRTaXplKFNpemUpOyB9IHNldCB7IFNpemUgPSBTZXRTaXplKHZhbHVlKTsgfSB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBUZXh0IHsgZ2V0OyBzZXQ7IH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgU3lzdGVtLldpbmRvd3MuRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFBhbmVsIDogQ29udGFpbmVyQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQYW5lbCgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUYWJTdG9wID0gZmFsc2U7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBDbGFzc2ljRm9ybXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFNlcnZlckJ1dHRvbiA6IEJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBTZXZlclNlbmRpbmdFdmVudEhhbmRsZXIgU2VuZGluZztcclxuICAgICAgICBwdWJsaWMgZXZlbnQgU2V2ZXJTZW50RXZlbnRIYW5kbGVyIFNlbnQ7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIE9uQ2xpY2soRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4jaWYgQlJJREdFICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghU2VydmVyQnV0dG9uSGVscGVyLk9uQ2xpY2tTZXJ2ZXIodGhpcykpXHJcbiAgICAgICAgICAgICAgICBiYXNlLk9uQ2xpY2soZSk7XHJcbiNlbmRpZlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZvaWQgUmFpc2VTZW5kaW5nRXZlbnQoU2V2ZXJTZW5kaW5nRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihTZW5kaW5nICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNlbmRpbmcuSW52b2tlKHRoaXMsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBSYWlzZVNlbnRFdmVudChTZXJ2ZXJTZW50RXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoU2VudCAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTZW50Lkludm9rZSh0aGlzLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgSXNTZW5kaW5nRXZlbnROdWxsKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZW5kaW5nID09IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYm9vbCBJc1NlbnRFdmVudE51bGwoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNlbnQgPT0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXQp9Cg==
