/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.0.0
 */
Bridge.assembly("ClassicForms", function ($asm, globals) {
    "use strict";

    Bridge.define("System.Collections.ArrayList", {
        inherits: [System.Collections.IList,System.Collections.ICollection,System.Collections.IEnumerable,System.ICloneable],
        statics: {
            fields: {
                _defaultCapacity: 0,
                emptyArray: null
            },
            ctors: {
                init: function () {
                    this._defaultCapacity = 4;
                    this.emptyArray = System.Collections.EmptyArray$1(System.Object).Value;
                }
            },
            methods: {
                Adapter: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.IListWrapper(list);
                },
                FixedSize: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.FixedSizeArrayList(list);
                },
                FixedSize$1: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.FixedSizeList(list);
                },
                ReadOnly: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.ReadOnlyArrayList(list);
                },
                ReadOnly$1: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.ReadOnlyList(list);
                },
                Repeat: function (value, count) {
                    if (count < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                    }
                    var list = new System.Collections.ArrayList.$ctor3((count > 4) ? count : 4);
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        list.add(value);
                    }
                    return list;
                },
                Synchronized: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.SyncArrayList(list);
                },
                Synchronized$1: function (list) {
                    if (list == null) {
                        throw new System.ArgumentNullException.$ctor1("list");
                    }
                    return new System.Collections.ArrayList.SyncIList(list);
                }
            }
        },
        fields: {
            _items: null,
            _size: 0,
            _syncRoot: null,
            _version: 0
        },
        props: {
            Capacity: {
                get: function () {
                    return this._items.length;
                },
                set: function (value) {
                    if (value < this._size) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("value", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_SmallCapacity"));
                    }
                    if (value !== this._items.length) {
                        if (value > 0) {
                            var destinationArray = System.Array.init(value, null, System.Object);
                            if (this._size > 0) {
                                System.Array.copy(this._items, 0, destinationArray, 0, this._size);
                            }
                            this._items = destinationArray;
                        } else {
                            this._items = System.Array.init(4, null, System.Object);
                        }
                    }
                }
            },
            Count: {
                get: function () {
                    return this._size;
                }
            },
            IsFixedSize: {
                get: function () {
                    return false;
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
                    if (this._syncRoot == null) {
                        this._syncRoot = { };
                        //Interlocked.CompareExchange<object>(ref this._syncRoot, new object(), null);
                    }
                    return this._syncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._items = System.Collections.ArrayList.emptyArray;
            },
            $ctor1: function (trash) {
                this.$initialize();
            },
            $ctor2: function (c) {
                this.$initialize();
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor3("c", System.EnvironmentV2.GetResourceString("ArgumentNull_Collection"));
                }
                var count = System.Array.getCount(c);
                if (count === 0) {
                    this._items = System.Collections.ArrayList.emptyArray;
                } else {
                    this._items = System.Array.init(count, null, System.Object);
                    this.AddRange(c);
                }
            },
            $ctor3: function (capacity) {
                this.$initialize();
                if (capacity < 0) {
                    var values = System.Array.init(["capacity"], System.Object);
                    throw new System.ArgumentOutOfRangeException.$ctor4("capacity", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_MustBeNonNegNum", values));
                }
                if (capacity === 0) {
                    this._items = System.Collections.ArrayList.emptyArray;
                } else {
                    this._items = System.Array.init(capacity, null, System.Object);
                }
            }
        },
        methods: {
            getItem: function (index) {
                if ((index < 0) || (index >= this._size)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                return this._items[System.Array.index(index, this._items)];
            },
            setItem: function (index, value) {
                if ((index < 0) || (index >= this._size)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this._items[System.Array.index(index, this._items)] = value;
                this._version = (this._version + 1) | 0;
            },
            add: function (value) {
                if (this._size === this._items.length) {
                    this.EnsureCapacity(((this._size + 1) | 0));
                }
                this._items[System.Array.index(this._size, this._items)] = value;
                this._version = (this._version + 1) | 0;
                var num = this._size;
                this._size = (num + 1) | 0;
                return num;
            },
            AddRange: function (c) {
                this.InsertRange(this._size, c);
            },
            BinarySearch$1: function (value) {
                return this.BinarySearch(0, this.Count, value, null);
            },
            BinarySearch$2: function (value, comparer) {
                return this.BinarySearch(0, this.Count, value, comparer);
            },
            BinarySearch: function (index, count, value, comparer) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return System.Array.binarySearch(this._items, index, count, value, comparer);
            },
            clear: function () {
                if (this._size > 0) {
                    System.Array.fill(this._items, null, 0, this._size);
                    this._size = 0;
                }
                this._version = (this._version + 1) | 0;
            },
            clone: function () {
                var $t;
                var list = ($t = new System.Collections.ArrayList.$ctor3(this._size), $t._size = this._size, $t._version = this._version, $t);
                System.Array.copy(this._items, 0, list._items, 0, this._size);
                return list;
            },
            contains: function (item) {
                if (item == null) {
                    for (var j = 0; j < this._size; j = (j + 1) | 0) {
                        if (this._items[System.Array.index(j, this._items)] == null) {
                            return true;
                        }
                    }
                    return false;
                }
                for (var i = 0; i < this._size; i = (i + 1) | 0) {
                    if ((this._items[System.Array.index(i, this._items)] != null) && Bridge.equals(this._items[System.Array.index(i, this._items)], item)) {
                        return true;
                    }
                }
                return false;
            },
            CopyTo: function (array) {
                this.copyTo(array, 0);
            },
            copyTo: function (array, arrayIndex) {
                if ((array != null) && (System.Array.getRank(array) !== 1)) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Arg_RankMultiDimNotSupported"));
                }
                System.Array.copy(this._items, 0, array, arrayIndex, this._size);
            },
            CopyTo$1: function (index, array, arrayIndex, count) {
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                if ((array != null) && (System.Array.getRank(array) !== 1)) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Arg_RankMultiDimNotSupported"));
                }
                System.Array.copy(this._items, index, array, arrayIndex, count);
            },
            EnsureCapacity: function (min) {
                if (this._items.length < min) {
                    var num = (this._items.length === 0) ? 4 : (Bridge.Int.mul(this._items.length, 2));
                    if (num > 2146435071) {
                        num = 2146435071;
                    }
                    if (num < min) {
                        num = min;
                    }
                    this.Capacity = num;
                }
            },
            GetEnumerator: function () {
                return new System.Collections.ArrayList.ArrayListEnumeratorSimple.$ctor1(this);
            },
            GetEnumerator$1: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return new System.Collections.ArrayList.ArrayListEnumerator.$ctor1(this, index, count);
            },
            GetRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return new System.Collections.ArrayList.Range(this, index, count);
            },
            indexOf: function (value) {
                return System.Array.indexOfT(this._items, value, 0, this._size);
            },
            IndexOf: function (value, startIndex) {
                if (startIndex > this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                return System.Array.indexOfT(this._items, value, startIndex, ((this._size - startIndex) | 0));
            },
            IndexOf$1: function (value, startIndex, count) {
                if (startIndex > this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if ((count < 0) || (startIndex > (((this._size - count) | 0)))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Count"));
                }
                return System.Array.indexOfT(this._items, value, startIndex, count);
            },
            insert: function (index, value) {
                if ((index < 0) || (index > this._size)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_ArrayListInsert"));
                }
                if (this._size === this._items.length) {
                    this.EnsureCapacity(((this._size + 1) | 0));
                }
                if (index < this._size) {
                    System.Array.copy(this._items, index, this._items, ((index + 1) | 0), ((this._size - index) | 0));
                }
                this._items[System.Array.index(index, this._items)] = value;
                this._size = (this._size + 1) | 0;
                this._version = (this._version + 1) | 0;
            },
            InsertRange: function (index, c) {
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor3("c", System.EnvironmentV2.GetResourceString("ArgumentNull_Collection"));
                }
                if ((index < 0) || (index > this._size)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                var count = System.Array.getCount(c);
                if (count > 0) {
                    this.EnsureCapacity(((this._size + count) | 0));
                    if (index < this._size) {
                        System.Array.copy(this._items, index, this._items, ((index + count) | 0), ((this._size - index) | 0));
                    }
                    var array = System.Array.init(count, null, System.Object);
                    System.Array.copyTo(c, array, 0);
                    System.Array.copy(array, 0, this._items, index, array.length);
                    this._size = (this._size + count) | 0;
                    this._version = (this._version + 1) | 0;
                }
            },
            LastIndexOf: function (value) {
                return this.LastIndexOf$2(value, ((this._size - 1) | 0), this._size);
            },
            LastIndexOf$1: function (value, startIndex) {
                if (startIndex >= this._size) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                return this.LastIndexOf$2(value, startIndex, ((startIndex + 1) | 0));
            },
            LastIndexOf$2: function (value, startIndex, count) {
                if ((this.Count !== 0) && ((startIndex < 0) || (count < 0))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((startIndex < 0) ? "startIndex" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (this._size === 0) {
                    return -1;
                }
                if ((startIndex >= this._size) || (count > (((startIndex + 1) | 0)))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((startIndex >= this._size) ? "startIndex" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_BiggerThanCollection"));
                }
                return System.Array.lastIndexOfT(this._items, value, startIndex, count);
            },
            remove: function (obj) {
                var index = this.indexOf(obj);
                if (index >= 0) {
                    this.removeAt(index);
                }
            },
            removeAt: function (index) {
                if ((index < 0) || (index >= this._size)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this._size = (this._size - 1) | 0;
                if (index < this._size) {
                    System.Array.copy(this._items, ((index + 1) | 0), this._items, index, ((this._size - index) | 0));
                }
                this._items[System.Array.index(this._size, this._items)] = null;
                this._version = (this._version + 1) | 0;
            },
            RemoveRange: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                if (count > 0) {
                    var num = this._size;
                    this._size = (this._size - count) | 0;
                    if (index < this._size) {
                        System.Array.copy(this._items, ((index + count) | 0), this._items, index, ((this._size - index) | 0));
                    }
                    while (num > this._size) {
                        this._items[System.Array.index(((num = (num - 1) | 0)), this._items)] = null;
                    }
                    this._version = (this._version + 1) | 0;
                }
            },
            Reverse: function () {
                this.Reverse$1(0, this.Count);
            },
            Reverse$1: function (index, count) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                System.Array.reverse(this._items, index, count);
                this._version = (this._version + 1) | 0;
            },
            SetRange: function (index, c) {
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor3("c", System.EnvironmentV2.GetResourceString("ArgumentNull_Collection"));
                }
                var count = System.Array.getCount(c);
                if ((index < 0) || (index > (((this._size - count) | 0)))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if (count > 0) {
                    System.Array.copyTo(c, this._items, index);
                    this._version = (this._version + 1) | 0;
                }
            },
            Sort: function () {
                this.Sort$2(0, this.Count, new (System.Collections.Generic.Comparer$1(System.Object))(System.Collections.Generic.Comparer$1.$default.fn));
            },
            Sort$1: function (comparer) {
                this.Sort$2(0, this.Count, comparer);
            },
            Sort$2: function (index, count, comparer) {
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._size - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                System.Array.sort(this._items, index, count, comparer);
                this._version = (this._version + 1) | 0;
            },
            ToArray$1: function () {
                var destinationArray = System.Array.init(this._size, null, System.Object);
                System.Array.copy(this._items, 0, destinationArray, 0, this._size);
                return destinationArray;
            },
            ToArray: function (type) {
                if (type == null) {
                    throw new System.ArgumentNullException.$ctor1("type");
                }
                var destinationArray = System.Array.init(this._size, Bridge.getDefaultValue(type), type);
                System.Array.copy(this._items, 0, destinationArray, 0, this._size);
                return destinationArray;
            },
            TrimToSize: function () {
                this.Capacity = this._size;
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.ArrayListDebugView", {
        $kind: "nested class",
        fields: {
            arrayList: null
        },
        props: {
            Items: {
                get: function () {
                    return this.arrayList.ToArray$1();
                }
            }
        },
        ctors: {
            ctor: function (arrayList) {
                this.$initialize();
                if (arrayList == null) {
                    throw new System.ArgumentNullException.$ctor1("arrayList");
                }
                this.arrayList = arrayList;
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.ArrayListEnumerator", {
        inherits: [System.Collections.IEnumerator,System.ICloneable],
        $kind: "nested class",
        fields: {
            currentElement: null,
            endIndex: 0,
            index: 0,
            list: null,
            startIndex: 0,
            version: 0
        },
        props: {
            Current: {
                get: function () {
                    if (this.index < this.startIndex) {
                        throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumNotStarted"));
                    }
                    if (this.index > this.endIndex) {
                        throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumEnded"));
                    }
                    return this.currentElement;
                }
            }
        },
        alias: [
            "clone", "System$ICloneable$clone",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset",
            "Current", "System$Collections$IEnumerator$Current"
        ],
        ctors: {
            $ctor1: function (list, index, count) {
                this.$initialize();
                this.list = list;
                this.startIndex = index;
                this.index = (index - 1) | 0;
                this.endIndex = (this.index + count) | 0;
                this.version = list._version;
                this.currentElement = null;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            clone: function () {
                var ale = new System.Collections.ArrayList.ArrayListEnumerator.ctor();
                ale.currentElement = this.currentElement;
                ale.endIndex = this.endIndex;
                ale.index = this.index;
                ale.list = this.list;
                ale.startIndex = this.startIndex;
                ale.version = this.version;

                return ale;
            },
            moveNext: function () {
                if (this.version !== this.list._version) {
                    throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumFailedVersion"));
                }
                if (this.index < this.endIndex) {
                    var num = (this.index + 1) | 0;
                    this.index = num;
                    this.currentElement = this.list.getItem(num);
                    return true;
                }
                this.index = (this.endIndex + 1) | 0;
                return false;
            },
            reset: function () {
                if (this.version !== this.list._version) {
                    throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumFailedVersion"));
                }
                this.index = (this.startIndex - 1) | 0;
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.ArrayListEnumeratorSimple", {
        inherits: [System.Collections.IEnumerator,System.ICloneable],
        $kind: "nested class",
        statics: {
            fields: {
                dummyObject: null
            },
            ctors: {
                init: function () {
                    this.dummyObject = { };
                }
            }
        },
        fields: {
            currentElement: null,
            index: 0,
            isArrayList: false,
            list: null,
            version: 0
        },
        props: {
            Current: {
                get: function () {
                    var currentElement = this.currentElement;
                    if (!Bridge.referenceEquals(System.Collections.ArrayList.ArrayListEnumeratorSimple.dummyObject, currentElement)) {
                        return currentElement;
                    }
                    if (this.index === -1) {
                        throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumNotStarted"));
                    }
                    throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumEnded"));
                }
            }
        },
        alias: [
            "clone", "System$ICloneable$clone",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset",
            "Current", "System$Collections$IEnumerator$Current"
        ],
        ctors: {
            $ctor1: function (list) {
                this.$initialize();
                this.list = list;
                this.index = -1;
                this.version = list._version;
                this.isArrayList = Bridge.referenceEquals(Bridge.getType(list), System.Collections.ArrayList);
                this.currentElement = System.Collections.ArrayList.ArrayListEnumeratorSimple.dummyObject;
            },
            ctor: function () {
                this.$initialize();

            }
        },
        methods: {
            clone: function () {
                var ale = new System.Collections.ArrayList.ArrayListEnumeratorSimple.ctor();
                ale.currentElement = this.currentElement;
                ale.index = this.index;
                ale.list = this.list;
                ale.isArrayList = this.isArrayList;
                ale.version = this.version;

                return ale;
            },
            moveNext: function () {
                var $t;
                var num;
                if (this.version !== this.list._version) {
                    throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumFailedVersion"));
                }
                if (this.isArrayList) {
                    if (this.index < (((this.list._size - 1) | 0))) {
                        num = (this.index + 1) | 0;
                        this.index = num;
                        this.currentElement = ($t = this.list._items)[System.Array.index(num, $t)];
                        return true;
                    }
                    this.currentElement = System.Collections.ArrayList.ArrayListEnumeratorSimple.dummyObject;
                    this.index = this.list._size;
                    return false;
                }
                if (this.index < (((this.list.Count - 1) | 0))) {
                    num = (this.index + 1) | 0;
                    this.index = num;
                    this.currentElement = this.list.getItem(num);
                    return true;
                }
                this.index = this.list.Count;
                this.currentElement = System.Collections.ArrayList.ArrayListEnumeratorSimple.dummyObject;
                return false;
            },
            reset: function () {
                if (this.version !== this.list._version) {
                    throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumFailedVersion"));
                }
                this.currentElement = System.Collections.ArrayList.ArrayListEnumeratorSimple.dummyObject;
                this.index = -1;
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.FixedSizeList", {
        inherits: [System.Collections.IList,System.Collections.ICollection,System.Collections.IEnumerable],
        $kind: "nested class",
        fields: {
            _list: null
        },
        props: {
            Count: {
                get: function () {
                    return System.Array.getCount(this._list);
                }
            },
            IsFixedSize: {
                get: function () {
                    return true;
                }
            },
            IsReadOnly: {
                get: function () {
                    return System.Array.getIsReadOnly(this._list);
                }
            },
            IsSynchronized: {
                get: function () {
                    return this._list.System$Collections$ICollection$IsSynchronized;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._list.System$Collections$ICollection$SyncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (l) {
                this.$initialize();
                this._list = l;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this._list, index);
            },
            setItem: function (index, value) {
                System.Array.setItem(this._list, index, value);
            },
            add: function (obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            clear: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            contains: function (obj) {
                return System.Array.contains(this._list, obj);
            },
            copyTo: function (array, index) {
                System.Array.copyTo(this._list, array, index);
            },
            GetEnumerator: function () {
                return Bridge.getEnumerator(this._list);
            },
            indexOf: function (value) {
                return System.Array.indexOf(this._list, value, 0, null);
            },
            insert: function (index, obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            remove: function (value) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            removeAt: function (index) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.IListWrapper.IListWrapperEnumWrapper", {
        inherits: [System.Collections.IEnumerator,System.ICloneable],
        $kind: "nested class",
        fields: {
            _en: null,
            _firstCall: false,
            _initialCount: 0,
            _initialStartIndex: 0,
            _remaining: 0
        },
        props: {
            Current: {
                get: function () {
                    if (this._firstCall) {
                        throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumNotStarted"));
                    }
                    if (this._remaining < 0) {
                        throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_EnumEnded"));
                    }
                    return this._en.System$Collections$IEnumerator$Current;
                }
            }
        },
        alias: [
            "clone", "System$ICloneable$clone",
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset",
            "Current", "System$Collections$IEnumerator$Current"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (listWrapper, startIndex, count) {
                this.$initialize();
                this._en = listWrapper.GetEnumerator();
                this._initialStartIndex = startIndex;
                this._initialCount = count;
                while ((Bridge.identity(startIndex, (startIndex = (startIndex - 1) | 0)) > 0) && this._en.System$Collections$IEnumerator$moveNext()) {
                }
                this._remaining = count;
                this._firstCall = true;
            }
        },
        methods: {
            clone: function () {
                var $t;
                return ($t = new System.Collections.ArrayList.IListWrapper.IListWrapperEnumWrapper.ctor(), $t._en = Bridge.cast(Bridge.clone(Bridge.cast(this._en, System.ICloneable)), System.Collections.IEnumerator), $t._initialStartIndex = this._initialStartIndex, $t._initialCount = this._initialCount, $t._remaining = this._remaining, $t._firstCall = this._firstCall, $t);
            },
            moveNext: function () {
                var num;
                if (this._firstCall) {
                    this._firstCall = false;
                    num = this._remaining;
                    this._remaining = (num - 1) | 0;
                    return ((num > 0) && this._en.System$Collections$IEnumerator$moveNext());
                }
                if ((this._remaining >= 0) && this._en.System$Collections$IEnumerator$moveNext()) {
                    num = this._remaining;
                    this._remaining = (num - 1) | 0;
                    return (num > 0);
                }
                return false;
            },
            reset: function () {
                this._en.System$Collections$IEnumerator$reset();
                var num = this._initialStartIndex;
                while ((Bridge.identity(num, (num = (num - 1) | 0)) > 0) && this._en.System$Collections$IEnumerator$moveNext()) {
                }
                this._remaining = this._initialCount;
                this._firstCall = true;
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.ReadOnlyList", {
        inherits: [System.Collections.IList,System.Collections.ICollection,System.Collections.IEnumerable],
        $kind: "nested class",
        fields: {
            _list: null
        },
        props: {
            Count: {
                get: function () {
                    return System.Array.getCount(this._list);
                }
            },
            IsFixedSize: {
                get: function () {
                    return true;
                }
            },
            IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            IsSynchronized: {
                get: function () {
                    return this._list.System$Collections$ICollection$IsSynchronized;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._list.System$Collections$ICollection$SyncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (l) {
                this.$initialize();
                this._list = l;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this._list, index);
            },
            setItem: function (index, value) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            add: function (obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            clear: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            contains: function (obj) {
                return System.Array.contains(this._list, obj);
            },
            copyTo: function (array, index) {
                System.Array.copyTo(this._list, array, index);
            },
            GetEnumerator: function () {
                return Bridge.getEnumerator(this._list);
            },
            indexOf: function (value) {
                return System.Array.indexOf(this._list, value, 0, null);
            },
            insert: function (index, obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            remove: function (value) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            removeAt: function (index) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.SyncIList", {
        inherits: [System.Collections.IList,System.Collections.ICollection,System.Collections.IEnumerable],
        $kind: "nested class",
        fields: {
            _list: null,
            _root: null
        },
        props: {
            Count: {
                get: function () {
                    var obj2 = this._root;
                    obj2;
                    {
                        return System.Array.getCount(this._list);
                    }
                }
            },
            IsFixedSize: {
                get: function () {
                    return this._list.System$Collections$IList$IsFixedSize;
                }
            },
            IsReadOnly: {
                get: function () {
                    return System.Array.getIsReadOnly(this._list);
                }
            },
            IsSynchronized: {
                get: function () {
                    return true;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._root;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                this._list = list;
                this._root = list.System$Collections$ICollection$SyncRoot;
            }
        },
        methods: {
            getItem: function (index) {
                var obj2 = this._root;
                obj2;
                {
                    return System.Array.getItem(this._list, index);
                }
            },
            setItem: function (index, value) {
                var obj2 = this._root;
                obj2;
                {
                    System.Array.setItem(this._list, index, value);
                }
            },
            add: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    return System.Array.add(this._list, value);
                }
            },
            clear: function () {
                var obj2 = this._root;
                obj2;
                {
                    System.Array.clear(this._list);
                }
            },
            contains: function (item) {
                var obj2 = this._root;
                obj2;
                {
                    return System.Array.contains(this._list, item);
                }
            },
            copyTo: function (array, index) {
                var obj2 = this._root;
                obj2;
                {
                    System.Array.copyTo(this._list, array, index);
                }
            },
            GetEnumerator: function () {
                var obj2 = this._root;
                obj2;
                {
                    return Bridge.getEnumerator(this._list);
                }
            },
            indexOf: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    return System.Array.indexOf(this._list, value, 0, null);
                }
            },
            insert: function (index, value) {
                var obj2 = this._root;
                obj2;
                {
                    System.Array.insert(this._list, index, value);
                }
            },
            remove: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    System.Array.remove(this._list, value);
                }
            },
            removeAt: function (index) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.System$Collections$IList$removeAt(index);
                }
            }
        }
    });

    Bridge.define("System.Collections.DictionaryEntryV2", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Collections.DictionaryEntryV2(); }
            }
        },
        fields: {
            Key: null,
            Value: null
        },
        ctors: {
            $ctor1: function (key, value) {
                this.$initialize();
                this.Key = key;
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([6888146117, this.Key, this.Value]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Collections.DictionaryEntryV2)) {
                    return false;
                }
                return Bridge.equals(this.Key, o.Key) && Bridge.equals(this.Value, o.Value);
            },
            $clone: function (to) {
                var s = to || new System.Collections.DictionaryEntryV2();
                s.Key = this.Key;
                s.Value = this.Value;
                return s;
            }
        }
    });

    Bridge.define("System.Collections.EmptyArray$1", function (T) { return {
        statics: {
            fields: {
                Value: null
            },
            ctors: {
                ctor: function () {
                    System.Collections.EmptyArray$1(T).Value = System.Array.init(0, function (){
                        return Bridge.getDefaultValue(T);
                    }, T);
                }
            }
        }
    }; });

    Bridge.define("System.Collections.IDict", {
        inherits: [System.Collections.ICollection,System.Collections.IEnumerable],
        $kind: "interface"
    });

    Bridge.define("System.Collections.IDictEnumrator", {
        inherits: [System.Collections.IEnumerator],
        $kind: "interface"
    });

    Bridge.define("System.Collections.Specialized.BitVector32", {
        $kind: "struct",
        statics: {
            methods: {
                CountBitsSet: function (mask) {
                    var num = 0;
                    while ((mask & 1) !== 0) {
                        num = Bridge.Int.sxs((((num + 1) | 0)) & 65535);
                        mask = Bridge.Int.sxs((mask >> 1) & 65535);
                    }
                    return num;
                },
                CreateMask: function () {
                    return System.Collections.Specialized.BitVector32.CreateMask$1(0);
                },
                CreateMask$1: function (previous) {
                    if (previous === 0) {
                        return 1;
                    }
                    if (previous === -2147483648) {
                        throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("BitVectorFull"));
                    }
                    return (previous << 1);
                },
                CreateMaskFromHighValue: function (highValue) {
                    var num = 16;
                    while ((highValue & 32768) === 0) {
                        num = Bridge.Int.sxs((((num - 1) | 0)) & 65535);
                        highValue = Bridge.Int.sxs((highValue << 1) & 65535);
                    }
                    var num2 = 0;
                    while (num > 0) {
                        num = Bridge.Int.sxs((((num - 1) | 0)) & 65535);
                        num2 = (num2 << 1) & 65535;
                        num2 = (num2 | 1) & 65535;
                    }
                    return Bridge.Int.sxs(num2 & 65535);
                },
                CreateSection: function (maxValue) {
                    return System.Collections.Specialized.BitVector32.CreateSectionHelper(maxValue, 0, 0);
                },
                CreateSection$1: function (maxValue, previous) {
                    return System.Collections.Specialized.BitVector32.CreateSectionHelper(maxValue, previous.Mask, previous.Offset);
                },
                CreateSectionHelper: function (maxValue, priorMask, priorOffset) {
                    if (maxValue < 1) {
                        var args = System.Array.init(["maxValue", Bridge.box(0, System.Int32)], System.Object);
                        throw new System.ArgumentException.$ctor3(System.Windows.Forms.SR.GetString("Argument_InvalidValue", args), "maxValue");
                    }
                    var offset = Bridge.Int.sxs((((priorOffset + System.Collections.Specialized.BitVector32.CountBitsSet(priorMask)) | 0)) & 65535);
                    if (offset >= 32) {
                        throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("BitVectorFull"));
                    }
                    return new System.Collections.Specialized.BitVector32.Section.$ctor1(System.Collections.Specialized.BitVector32.CreateMaskFromHighValue(maxValue), offset);
                },
                ToString: function (value) {
                    var builder = new System.Text.StringBuilder("", 45);
                    builder.append("BitVector32{");
                    var data = value.data | 0;
                    for (var i = 0; i < 32; i = (i + 1) | 0) {
                        if ((System.Int64(data).and(System.Int64([-2147483648,0]))).ne(System.Int64(0))) {
                            builder.append("1");
                        } else {
                            builder.append("0");
                        }
                        data = data << 1;
                    }
                    builder.append("}");
                    return builder.toString();
                },
                getDefaultValue: function () { return new System.Collections.Specialized.BitVector32(); }
            }
        },
        fields: {
            data: 0
        },
        props: {
            Data: {
                get: function () {
                    return (this.data | 0);
                }
            }
        },
        ctors: {
            $ctor2: function (data) {
                this.$initialize();
                this.data = data >>> 0;
            },
            $ctor1: function (value) {
                this.$initialize();
                this.data = value.data;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getItem: function (bit) {
                return ((System.Int64(this.data).and(System.Int64(bit))).equals((bit >>> 0)));
            },
            setItem: function (bit, value) {
                if (value) {
                    this.data = (this.data | (bit >>> 0)) >>> 0;
                } else {
                    this.data = (this.data & (((~bit) >>> 0))) >>> 0;
                }
            },
            getItem$1: function (section) {
                return (System.Int64.clip32((System.Int64(this.data).and(System.Int64((section.Mask << (section.Offset & 31))))).shr((section.Offset & 31))));
            },
            setItem$1: function (section, value) {
                value = value << section.Offset;
                var num = (65535 & section.Mask) << section.Offset;
                this.data = System.Int64.clipu32((System.Int64(this.data).and(System.Int64(~num))).or(System.Int64((((value & num)) >>> 0))));
            },
            equals: function (o) {
                return ((Bridge.is(o, System.Collections.Specialized.BitVector32)) && (this.data === System.Nullable.getValue(Bridge.cast(Bridge.unbox(o), System.Collections.Specialized.BitVector32)).data));
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            toString: function () {
                return System.Collections.Specialized.BitVector32.ToString(this);
            },
            $clone: function (to) {
                var s = to || new System.Collections.Specialized.BitVector32();
                s.data = this.data;
                return s;
            }
        }
    });

    Bridge.define("System.Collections.Specialized.BitVector32.Section", {
        $kind: "nested struct",
        statics: {
            methods: {
                ToString: function (value) {
                    var textArray1 = System.Array.init(["Section{0x", System.Convert.toStringInBase(value.Mask, 16, 7), ", 0x", System.Convert.toStringInBase(value.Offset, 16, 7), "}"], System.String);
                    return System.String.concat(textArray1);
                },
                op_Equality: function (a, b) {
                    return a.Equals(b);
                },
                op_Inequality: function (a, b) {
                    return !(System.Collections.Specialized.BitVector32.Section.op_Equality(a, b));
                },
                getDefaultValue: function () { return new System.Collections.Specialized.BitVector32.Section(); }
            }
        },
        fields: {
            mask: 0,
            offset: 0
        },
        props: {
            Mask: {
                get: function () {
                    return this.mask;
                }
            },
            Offset: {
                get: function () {
                    return this.offset;
                }
            }
        },
        ctors: {
            $ctor1: function (mask, offset) {
                this.$initialize();
                this.mask = mask;
                this.offset = offset;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (o) {
                return ((Bridge.is(o, System.Collections.Specialized.BitVector32.Section)) && this.Equals(System.Nullable.getValue(Bridge.cast(Bridge.unbox(o), System.Collections.Specialized.BitVector32.Section))));
            },
            Equals: function (obj) {
                return ((obj.mask === this.mask) && (obj.offset === this.offset));
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            toString: function () {
                return System.Collections.Specialized.BitVector32.Section.ToString(this);
            },
            $clone: function (to) {
                var s = to || new System.Collections.Specialized.BitVector32.Section();
                s.mask = this.mask;
                s.offset = this.offset;
                return s;
            }
        }
    });

    Bridge.define("System.Collections.Specialized.ListDictionary.DictionaryNode", {
        $kind: "nested class",
        fields: {
            key: null,
            next: null,
            value: null
        }
    });

    Bridge.define("System.Collections.Specialized.ListDictionary.NodeKeyValueCollection", {
        inherits: [System.Collections.ICollection,System.Collections.IEnumerable],
        $kind: "nested class",
        fields: {
            isKeys: false,
            list: null
        },
        props: {
            System$Collections$ICollection$Count: {
                get: function () {
                    var num = 0;
                    for (var node = this.list.head; node != null; node = node.next) {
                        num = (num + 1) | 0;
                    }
                    return num;
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return this.list.SyncRoot;
                }
            }
        },
        ctors: {
            ctor: function (list, isKeys) {
                this.$initialize();
                this.list = list;
                this.isKeys = isKeys;
            }
        },
        methods: {
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.Windows.Forms.SR.GetString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                for (var node = this.list.head; node != null; node = node.next) {
                    System.Array.set(array, this.isKeys ? node.key : node.value, index);
                    index = (index + 1) | 0;
                }
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return new System.Collections.Specialized.ListDictionary.NodeKeyValueCollection.NodeKeyValueEnumerator(this.list, this.isKeys);
            }
        }
    });

    Bridge.define("System.Collections.Specialized.ListDictionary.NodeKeyValueCollection.NodeKeyValueEnumerator", {
        inherits: [System.Collections.IEnumerator],
        $kind: "nested class",
        fields: {
            current: null,
            isKeys: false,
            list: null,
            start: false,
            version: 0
        },
        props: {
            Current: {
                get: function () {
                    if (this.current == null) {
                        throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    if (!this.isKeys) {
                        return this.current.value;
                    }
                    return this.current.key;
                }
            }
        },
        alias: [
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset",
            "Current", "System$Collections$IEnumerator$Current"
        ],
        ctors: {
            ctor: function (list, isKeys) {
                this.$initialize();
                this.list = list;
                this.isKeys = isKeys;
                this.version = list.version;
                this.start = true;
                this.current = null;
            }
        },
        methods: {
            moveNext: function () {
                if (this.version !== this.list.version) {
                    throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumFailedVersion"));
                }
                if (this.start) {
                    this.current = this.list.head;
                    this.start = false;
                } else if (this.current != null) {
                    this.current = this.current.next;
                }
                return (this.current != null);
            },
            reset: function () {
                if (this.version !== this.list.version) {
                    throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumFailedVersion"));
                }
                this.start = true;
                this.current = null;
            }
        }
    });

    Bridge.define("System.ComponentModel.IContainer", {
        inherits: [System.IDisposable],
        $kind: "interface"
    });

    Bridge.define("System.ComponentModel.IComponent", {
        inherits: [System.IDisposable],
        $kind: "interface"
    });

    Bridge.define("System.ComponentModel.InvalidEnumArgumentException", {
        inherits: [System.ArgumentException],
        ctors: {
            ctor: function () {
                System.ComponentModel.InvalidEnumArgumentException.$ctor1.call(this, null);
            },
            $ctor1: function (message) {
                this.$initialize();
                System.ArgumentException.$ctor1.call(this, message);
            },
            $ctor2: function (message, innerException) {
                this.$initialize();
                System.ArgumentException.$ctor2.call(this, message, innerException);
            },
            $ctor3: function (argumentName, invalidValue, enumClass) {
                this.$initialize();
                System.ArgumentException.$ctor3.call(this, System.Windows.Forms.SR.GetString("InvalidEnumArgument"), argumentName);
                var objArray1 = System.Array.init([argumentName, Bridge.toString(invalidValue), Bridge.Reflection.getTypeName(enumClass)], System.Object);
            }
        }
    });

    Bridge.define("System.IServiceProviderV2", {
        $kind: "interface"
    });

    Bridge.define("System.ComponentModel.ISupportInitialize", {
        $kind: "interface"
    });

    Bridge.define("System.Data.DataColumn", {
        fields: {
            Name: null,
            Table: null,
            DataType: null
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
            Add$1: function (columnName, type) {
                var data = new System.Data.DataColumn(this.Table, columnName);

                this.Columns.add(data);

                return data;
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
                        throw new System.ArgumentException.$ctor1("InvalidEx2BoundArgument");
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

    Bridge.define("System.Drawing.ContentAlignment", {
        $kind: "enum",
        statics: {
            fields: {
                BottomCenter: 512,
                BottomLeft: 256,
                BottomRight: 1024,
                MiddleCenter: 32,
                MiddleLeft: 16,
                MiddleRight: 64,
                TopCenter: 2,
                TopLeft: 1,
                TopRight: 4
            }
        }
    });

    Bridge.define("System.Drawing.Font", {
        statics: {
            methods: {
                SetFont: function (font, element) {
                    if (font == null) {
                        element.style.fontSize = "inherit";
                        element.style.fontFamily = "inherit";
                    } else {
                        element.style.fontSize = (System.Single.format(font.EmSize) || "") + "pt";
                        if (!System.String.isNullOrWhiteSpace(font.FamilyName)) {
                            element.style.fontFamily = font.FamilyName;
                        } else {
                            element.style.fontFamily = "inherit";
                        }
                    }

                }
            }
        },
        fields: {
            FamilyName: null,
            EmSize: 0,
            Style: 0,
            Unit: 0
        },
        ctors: {
            init: function () {
                this.Style = System.Drawing.FontStyle.Regular;
                this.Unit = System.Drawing.GraphicsUnit.Point;
            },
            $ctor1: function (familyName, emSize, style, unit, gdiCharSet) {
                System.Drawing.Font.ctor.call(this, familyName, emSize);
                this.Style = style;
            },
            ctor: function (familyName, emSize) {
                this.$initialize();
                if (!System.Settings.WinFormIgnoreFontName) {
                    this.FamilyName = familyName;
                }
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

    Bridge.define("System.Drawing.PointF", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Drawing.PointF();
                },
                ctor: function () {
                }
            },
            methods: {
                Add: function (pt, sz) {
                    return new System.Drawing.PointF.$ctor1(pt.X + sz.Width, pt.Y + sz.Height);
                },
                Add$1: function (pt, sz) {
                    return new System.Drawing.PointF.$ctor1(pt.X + sz.Width, pt.Y + sz.Height);
                },
                Subtract: function (pt, sz) {
                    return new System.Drawing.PointF.$ctor1(pt.X - sz.Width, pt.Y - sz.Height);
                },
                Subtract$1: function (pt, sz) {
                    return new System.Drawing.PointF.$ctor1(pt.X - sz.Width, pt.Y - sz.Height);
                },
                op_Addition: function (pt, sz) {
                    return System.Drawing.PointF.Add(pt.$clone(), sz.$clone());
                },
                op_Addition$1: function (pt, sz) {
                    return System.Drawing.PointF.Add$1(pt.$clone(), sz.$clone());
                },
                op_Subtraction: function (pt, sz) {
                    return System.Drawing.PointF.Subtract(pt.$clone(), sz.$clone());
                },
                op_Subtraction$1: function (pt, sz) {
                    return System.Drawing.PointF.Subtract$1(pt.$clone(), sz.$clone());
                },
                op_Equality: function (left, right) {
                    return ((left.X === right.X) && (left.Y === right.Y));
                },
                op_Inequality: function (left, right) {
                    return !(System.Drawing.PointF.op_Equality(left.$clone(), right.$clone()));
                },
                getDefaultValue: function () { return new System.Drawing.PointF(); }
            }
        },
        fields: {
            x: 0,
            y: 0
        },
        props: {
            IsEmpty: {
                get: function () {
                    return ((this.x === 0.0) && (this.y === 0.0));
                }
            },
            X: {
                get: function () {
                    return this.x;
                },
                set: function (value) {
                    this.x = value;
                }
            },
            Y: {
                get: function () {
                    return this.y;
                },
                set: function (value) {
                    this.y = value;
                }
            }
        },
        ctors: {
            $ctor1: function (x, y) {
                this.$initialize();
                this.x = x;
                this.y = y;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                if (!(Bridge.is(obj, System.Drawing.PointF))) {
                    return false;
                }
                var tf = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj), System.Drawing.PointF));
                return (((tf.X === this.X) && (tf.Y === this.Y)) && Bridge.equals(System.Drawing.PointF, Bridge.getType(this)));
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            toString: function () {
                var args = System.Array.init([Bridge.box(this.x, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(this.y, System.Single, System.Single.format, System.Single.getHashCode)], System.Object);
                return System.String.formatProvider.apply(System.String, [System.Globalization.CultureInfo.getCurrentCulture(), "{{X={0}, Y={1}}}"].concat(args));
            },
            $clone: function (to) {
                var s = to || new System.Drawing.PointF();
                s.x = this.x;
                s.y = this.y;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.Rectangle", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Drawing.Rectangle();
                },
                ctor: function () {
                }
            },
            methods: {
                FromLTRB: function (left, top, right, bottom) {
                    return new System.Drawing.Rectangle.$ctor2(left, top, ((right - left) | 0), ((bottom - top) | 0));
                },
                Ceiling: function (value) {
                    return new System.Drawing.Rectangle.$ctor2(Bridge.Int.clip32(Math.ceil(value.X)), Bridge.Int.clip32(Math.ceil(value.Y)), Bridge.Int.clip32(Math.ceil(value.Width)), Bridge.Int.clip32(Math.ceil(value.Height)));
                },
                Truncate: function (value) {
                    return new System.Drawing.Rectangle.$ctor2(Bridge.Int.clip32(value.X), Bridge.Int.clip32(value.Y), Bridge.Int.clip32(value.Width), Bridge.Int.clip32(value.Height));
                },
                Round: function (value) {
                    return new System.Drawing.Rectangle.$ctor2(Bridge.Int.clip32(Bridge.Math.round(value.X, 0, 6)), Bridge.Int.clip32(Bridge.Math.round(value.Y, 0, 6)), Bridge.Int.clip32(Bridge.Math.round(value.Width, 0, 6)), Bridge.Int.clip32(Bridge.Math.round(value.Height, 0, 6)));
                },
                Inflate: function (rect, x, y) {
                    var rectangle = rect.$clone();
                    rectangle.Inflate$1(x, y);
                    return rectangle.$clone();
                },
                Intersect: function (a, b) {
                    var x = Math.max(a.X, b.X);
                    var num2 = Math.min(((a.X + a.Width) | 0), ((b.X + b.Width) | 0));
                    var y = Math.max(a.Y, b.Y);
                    var num4 = Math.min(((a.Y + a.Height) | 0), ((b.Y + b.Height) | 0));
                    if ((num2 >= x) && (num4 >= y)) {
                        return new System.Drawing.Rectangle.$ctor2(x, y, ((num2 - x) | 0), ((num4 - y) | 0));
                    }
                    return System.Drawing.Rectangle.Empty.$clone();
                },
                Union: function (a, b) {
                    var x = Math.min(a.X, b.X);
                    var num2 = Math.max(((a.X + a.Width) | 0), ((b.X + b.Width) | 0));
                    var y = Math.min(a.Y, b.Y);
                    var num4 = Math.max(((a.Y + a.Height) | 0), ((b.Y + b.Height) | 0));
                    return new System.Drawing.Rectangle.$ctor2(x, y, ((num2 - x) | 0), ((num4 - y) | 0));
                },
                op_Equality: function (left, right) {
                    return ((((left.X === right.X) && (left.Y === right.Y)) && (left.Width === right.Width)) && (left.Height === right.Height));
                },
                op_Inequality: function (left, right) {
                    return !(System.Drawing.Rectangle.op_Equality(left.$clone(), right.$clone()));
                },
                getDefaultValue: function () { return new System.Drawing.Rectangle(); }
            }
        },
        fields: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        props: {
            Location: {
                get: function () {
                    return new System.Drawing.Point.$ctor1(this.X, this.Y);
                },
                set: function (value) {
                    this.X = value.X;
                    this.Y = value.Y;
                }
            },
            Size: {
                get: function () {
                    return new System.Drawing.Size.$ctor2(this.Width, this.Height);
                },
                set: function (value) {
                    this.Width = value.Width;
                    this.Height = value.Height;
                }
            },
            X: {
                get: function () {
                    return this.x;
                },
                set: function (value) {
                    this.x = value;
                }
            },
            Y: {
                get: function () {
                    return this.y;
                },
                set: function (value) {
                    this.y = value;
                }
            },
            Width: {
                get: function () {
                    return this.width;
                },
                set: function (value) {
                    this.width = value;
                }
            },
            Height: {
                get: function () {
                    return this.height;
                },
                set: function (value) {
                    this.height = value;
                }
            },
            Left: {
                get: function () {
                    return this.X;
                }
            },
            Top: {
                get: function () {
                    return this.Y;
                }
            },
            Right: {
                get: function () {
                    return (((this.X + this.Width) | 0));
                }
            },
            Bottom: {
                get: function () {
                    return (((this.Y + this.Height) | 0));
                }
            },
            IsEmpty: {
                get: function () {
                    return ((((this.height === 0) && (this.width === 0)) && (this.x === 0)) && (this.y === 0));
                }
            }
        },
        ctors: {
            $ctor2: function (x, y, width, height) {
                this.$initialize();
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            },
            $ctor1: function (location, size) {
                this.$initialize();
                this.x = location.X;
                this.y = location.Y;
                this.width = size.Width;
                this.height = size.Height;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                if (!(Bridge.is(obj, System.Drawing.Rectangle))) {
                    return false;
                }
                var rectangle = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj), System.Drawing.Rectangle));
                return ((((rectangle.X === this.X) && (rectangle.Y === this.Y)) && (rectangle.Width === this.Width)) && (rectangle.Height === this.Height));
            },
            Contains$2: function (x, y) {
                return ((((this.X <= x) && (x < (((this.X + this.Width) | 0)))) && (this.Y <= y)) && (y < (((this.Y + this.Height) | 0))));
            },
            Contains: function (pt) {
                return this.Contains$2(pt.X, pt.Y);
            },
            Contains$1: function (rect) {
                return ((((this.X <= rect.X) && ((((rect.X + rect.Width) | 0)) <= (((this.X + this.Width) | 0)))) && (this.Y <= rect.Y)) && ((((rect.Y + rect.Height) | 0)) <= (((this.Y + this.Height) | 0))));
            },
            getHashCode: function () {
                return (((this.X ^ ((this.Y << 13) | (this.Y >> 19))) ^ ((this.Width << 26) | (this.Width >> 6))) ^ ((this.Height << 7) | (this.Height >> 25)));
            },
            Inflate$1: function (width, height) {
                this.X = (this.X - width) | 0;
                this.Y = (this.Y - height) | 0;
                this.Width = (this.Width + (Bridge.Int.mul(2, width))) | 0;
                this.Height = (this.Height + (Bridge.Int.mul(2, height))) | 0;
            },
            Inflate: function (size) {
                this.Inflate$1(size.Width, size.Height);
            },
            Intersect: function (rect) {
                var rectangle = System.Drawing.Rectangle.Intersect(rect.$clone(), this);
                this.X = rectangle.X;
                this.Y = rectangle.Y;
                this.Width = rectangle.Width;
                this.Height = rectangle.Height;
            },
            IntersectsWith: function (rect) {
                return ((((rect.X < (((this.X + this.Width) | 0))) && (this.X < (((rect.X + rect.Width) | 0)))) && (rect.Y < (((this.Y + this.Height) | 0)))) && (this.Y < (((rect.Y + rect.Height) | 0))));
            },
            Offset: function (pos) {
                this.Offset$1(pos.X, pos.Y);
            },
            Offset$1: function (x, y) {
                this.X = (this.X + x) | 0;
                this.Y = (this.Y + y) | 0;
            },
            toString: function () {
                var textArray1 = System.Array.init(["{X=", Bridge.toString(this.X), ",Y=", Bridge.toString(this.Y), ",Width=", Bridge.toString(this.Width), ",Height=", Bridge.toString(this.Height), "}"], System.String);
                return System.String.concat(textArray1);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.Rectangle();
                s.x = this.x;
                s.y = this.y;
                s.width = this.width;
                s.height = this.height;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.RectangleF", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Drawing.RectangleF();
                },
                ctor: function () {
                }
            },
            methods: {
                FromLTRB: function (left, top, right, bottom) {
                    return new System.Drawing.RectangleF.$ctor2(left, top, right - left, bottom - top);
                },
                Inflate: function (rect, x, y) {
                    var ef = rect.$clone();
                    ef.Inflate$1(x, y);
                    return ef.$clone();
                },
                Intersect: function (a, b) {
                    var x = Math.max(a.X, b.X);
                    var num2 = Math.min(a.X + a.Width, b.X + b.Width);
                    var y = Math.max(a.Y, b.Y);
                    var num4 = Math.min(a.Y + a.Height, b.Y + b.Height);
                    if ((num2 >= x) && (num4 >= y)) {
                        return new System.Drawing.RectangleF.$ctor2(x, y, num2 - x, num4 - y);
                    }
                    return System.Drawing.RectangleF.Empty.$clone();
                },
                Union: function (a, b) {
                    var x = Math.min(a.X, b.X);
                    var num2 = Math.max(a.X + a.Width, b.X + b.Width);
                    var y = Math.min(a.Y, b.Y);
                    var num4 = Math.max(a.Y + a.Height, b.Y + b.Height);
                    return new System.Drawing.RectangleF.$ctor2(x, y, num2 - x, num4 - y);
                },
                op_Equality: function (left, right) {
                    return ((((left.X === right.X) && (left.Y === right.Y)) && (left.Width === right.Width)) && (left.Height === right.Height));
                },
                op_Inequality: function (left, right) {
                    return !(System.Drawing.RectangleF.op_Equality(left.$clone(), right.$clone()));
                },
                op_Implicit: function (r) {
                    return new System.Drawing.RectangleF.$ctor2(r.X, r.Y, r.Width, r.Height);
                },
                getDefaultValue: function () { return new System.Drawing.RectangleF(); }
            }
        },
        fields: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        props: {
            Location: {
                get: function () {
                    return new System.Drawing.PointF.$ctor1(this.X, this.Y);
                },
                set: function (value) {
                    this.X = value.X;
                    this.Y = value.Y;
                }
            },
            Size: {
                get: function () {
                    return new System.Drawing.SizeF.$ctor3(this.Width, this.Height);
                },
                set: function (value) {
                    this.Width = value.Width;
                    this.Height = value.Height;
                }
            },
            X: {
                get: function () {
                    return this.x;
                },
                set: function (value) {
                    this.x = value;
                }
            },
            Y: {
                get: function () {
                    return this.y;
                },
                set: function (value) {
                    this.y = value;
                }
            },
            Width: {
                get: function () {
                    return this.width;
                },
                set: function (value) {
                    this.width = value;
                }
            },
            Height: {
                get: function () {
                    return this.height;
                },
                set: function (value) {
                    this.height = value;
                }
            },
            Left: {
                get: function () {
                    return this.X;
                }
            },
            Top: {
                get: function () {
                    return this.Y;
                }
            },
            Right: {
                get: function () {
                    return (this.X + this.Width);
                }
            },
            Bottom: {
                get: function () {
                    return (this.Y + this.Height);
                }
            },
            IsEmpty: {
                get: function () {
                    if (this.Width > 0.0) {
                        return (this.Height <= 0.0);
                    }
                    return true;
                }
            }
        },
        ctors: {
            $ctor2: function (x, y, width, height) {
                this.$initialize();
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            },
            $ctor1: function (location, size) {
                this.$initialize();
                this.x = location.X;
                this.y = location.Y;
                this.width = size.Width;
                this.height = size.Height;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                if (!(Bridge.is(obj, System.Drawing.RectangleF))) {
                    return false;
                }
                var ef = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj), System.Drawing.RectangleF));
                return ((((ef.X === this.X) && (ef.Y === this.Y)) && (ef.Width === this.Width)) && (ef.Height === this.Height));
            },
            Contains$2: function (x, y) {
                return ((((this.X <= x) && (x < (this.X + this.Width))) && (this.Y <= y)) && (y < (this.Y + this.Height)));
            },
            Contains: function (pt) {
                return this.Contains$2(pt.X, pt.Y);
            },
            Contains$1: function (rect) {
                return ((((this.X <= rect.X) && ((rect.X + rect.Width) <= (this.X + this.Width))) && (this.Y <= rect.Y)) && ((rect.Y + rect.Height) <= (this.Y + this.Height)));
            },
            getHashCode: function () {
                return (((((((((((Bridge.Int.clipu32(this.X) ^ ((((((Bridge.Int.clipu32(this.Y) << 13) >>> 0)) | (Bridge.Int.clipu32(this.Y) >>> 19)) >>> 0))) >>> 0)) ^ ((((((Bridge.Int.clipu32(this.Width) << 26) >>> 0)) | (Bridge.Int.clipu32(this.Width) >>> 6)) >>> 0))) >>> 0)) ^ ((((((Bridge.Int.clipu32(this.Height) << 7) >>> 0)) | (Bridge.Int.clipu32(this.Height) >>> 25)) >>> 0))) >>> 0)) | 0));
            },
            Inflate$1: function (x, y) {
                this.X -= x;
                this.Y -= y;
                this.Width += 2.0 * x;
                this.Height += 2.0 * y;
            },
            Inflate: function (size) {
                this.Inflate$1(size.Width, size.Height);
            },
            Intersect: function (rect) {
                var ef = System.Drawing.RectangleF.Intersect(rect.$clone(), this);
                this.X = ef.X;
                this.Y = ef.Y;
                this.Width = ef.Width;
                this.Height = ef.Height;
            },
            IntersectsWith: function (rect) {
                return ((((rect.X < (this.X + this.Width)) && (this.X < (rect.X + rect.Width))) && (rect.Y < (this.Y + this.Height))) && (this.Y < (rect.Y + rect.Height)));
            },
            Offset: function (pos) {
                this.Offset$1(pos.X, pos.Y);
            },
            Offset$1: function (x, y) {
                this.X += x;
                this.Y += y;
            },
            toString: function () {
                var textArray1 = System.Array.init(["{X=", System.Single.format(this.X, "G", System.Globalization.CultureInfo.getCurrentCulture()), ",Y=", System.Single.format(this.Y, "G", System.Globalization.CultureInfo.getCurrentCulture()), ",Width=", System.Single.format(this.Width, "G", System.Globalization.CultureInfo.getCurrentCulture()), ",Height=", System.Single.format(this.Height, "G", System.Globalization.CultureInfo.getCurrentCulture()), "}"], System.String);
                return System.String.concat(textArray1);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.RectangleF();
                s.x = this.x;
                s.y = this.y;
                s.width = this.width;
                s.height = this.height;
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
                },
                ctor: function () {
                }
            },
            methods: {
                Add: function (sz1, sz2) {
                    return new System.Drawing.Size.$ctor2(((sz1.Width + sz2.Width) | 0), ((sz1.Height + sz2.Height) | 0));
                },
                Ceiling: function (value) {
                    return new System.Drawing.Size.$ctor2(Bridge.Int.clip32(Math.ceil(value.Width)), Bridge.Int.clip32(Math.ceil(value.Height)));
                },
                Subtract: function (sz1, sz2) {
                    return new System.Drawing.Size.$ctor2(((sz1.Width - sz2.Width) | 0), ((sz1.Height - sz2.Height) | 0));
                },
                Truncate: function (value) {
                    return new System.Drawing.Size.$ctor2(Bridge.Int.clip32(value.Width), Bridge.Int.clip32(value.Height));
                },
                Round: function (value) {
                    return new System.Drawing.Size.$ctor2(Bridge.Int.clip32(Bridge.Math.round(value.Width, 0, 6)), Bridge.Int.clip32(Bridge.Math.round(value.Height, 0, 6)));
                },
                op_Implicit: function (p) {
                    return new System.Drawing.SizeF.$ctor3(p.Width, p.Height);
                },
                op_Addition: function (sz1, sz2) {
                    return System.Drawing.Size.Add(sz1.$clone(), sz2.$clone());
                },
                op_Subtraction: function (sz1, sz2) {
                    return System.Drawing.Size.Subtract(sz1.$clone(), sz2.$clone());
                },
                op_Equality: function (sz1, sz2) {
                    return ((sz1.Width === sz2.Width) && (sz1.Height === sz2.Height));
                },
                op_Inequality: function (sz1, sz2) {
                    return !(System.Drawing.Size.op_Equality(sz1.$clone(), sz2.$clone()));
                },
                op_Explicit: function (size) {
                    return new System.Drawing.Point.$ctor1(size.Width, size.Height);
                },
                getDefaultValue: function () { return new System.Drawing.Size(); }
            }
        },
        fields: {
            width: 0,
            height: 0
        },
        props: {
            IsEmpty: {
                get: function () {
                    return ((this.width === 0) && (this.height === 0));
                }
            },
            Width: {
                get: function () {
                    return this.width;
                },
                set: function (value) {
                    this.width = value;
                }
            },
            Height: {
                get: function () {
                    return this.height;
                },
                set: function (value) {
                    this.height = value;
                }
            }
        },
        ctors: {
            $ctor1: function (pt) {
                this.$initialize();
                this.width = pt.X;
                this.height = pt.Y;
            },
            $ctor2: function (width, height) {
                this.$initialize();
                this.width = width;
                this.height = height;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                if (!(Bridge.is(obj, System.Drawing.Size))) {
                    return false;
                }
                var size = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj), System.Drawing.Size));
                return ((size.width === this.width) && (size.height === this.height));
            },
            getHashCode: function () {
                return (this.width ^ this.height);
            },
            toString: function () {
                var textArray1 = System.Array.init(["{Width=", Bridge.toString(this.width), ", Height=", Bridge.toString(this.height), "}"], System.String);
                return System.String.concat(textArray1);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.Size();
                s.width = this.width;
                s.height = this.height;
                return s;
            }
        }
    });

    Bridge.define("System.Drawing.SizeF", {
        $kind: "struct",
        statics: {
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Drawing.SizeF();
                },
                ctor: function () {
                }
            },
            methods: {
                Add: function (sz1, sz2) {
                    return new System.Drawing.SizeF.$ctor3(sz1.Width + sz2.Width, sz1.Height + sz2.Height);
                },
                Subtract: function (sz1, sz2) {
                    return new System.Drawing.SizeF.$ctor3(sz1.Width - sz2.Width, sz1.Height - sz2.Height);
                },
                op_Addition: function (sz1, sz2) {
                    return System.Drawing.SizeF.Add(sz1.$clone(), sz2.$clone());
                },
                op_Subtraction: function (sz1, sz2) {
                    return System.Drawing.SizeF.Subtract(sz1.$clone(), sz2.$clone());
                },
                op_Equality: function (sz1, sz2) {
                    return ((sz1.Width === sz2.Width) && (sz1.Height === sz2.Height));
                },
                op_Inequality: function (sz1, sz2) {
                    return !(System.Drawing.SizeF.op_Equality(sz1.$clone(), sz2.$clone()));
                },
                op_Explicit: function (size) {
                    return new System.Drawing.PointF.$ctor1(size.Width, size.Height);
                },
                getDefaultValue: function () { return new System.Drawing.SizeF(); }
            }
        },
        fields: {
            width: 0,
            height: 0
        },
        props: {
            IsEmpty: {
                get: function () {
                    return ((this.width === 0.0) && (this.height === 0.0));
                }
            },
            Width: {
                get: function () {
                    return this.width;
                },
                set: function (value) {
                    this.width = value;
                }
            },
            Height: {
                get: function () {
                    return this.height;
                },
                set: function (value) {
                    this.height = value;
                }
            }
        },
        ctors: {
            $ctor2: function (size) {
                this.$initialize();
                this.width = size.width;
                this.height = size.height;
            },
            $ctor1: function (pt) {
                this.$initialize();
                this.width = pt.X;
                this.height = pt.Y;
            },
            $ctor3: function (width, height) {
                this.$initialize();
                this.width = width;
                this.height = height;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (obj) {
                if (!(Bridge.is(obj, System.Drawing.SizeF))) {
                    return false;
                }
                var ef = System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj), System.Drawing.SizeF));
                return (((ef.Width === this.Width) && (ef.Height === this.Height)) && Bridge.equals(System.Drawing.SizeF, Bridge.getType(this)));
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            ToPointF: function () {
                return System.Drawing.SizeF.op_Explicit(this);
            },
            ToSize: function () {
                return System.Drawing.Size.Truncate(this);
            },
            toString: function () {
                var textArray1 = System.Array.init(["{Width=", System.Single.format(this.width, "G", System.Globalization.CultureInfo.getCurrentCulture()), ", Height=", System.Single.format(this.height, "G", System.Globalization.CultureInfo.getCurrentCulture()), "}"], System.String);
                return System.String.concat(textArray1);
            },
            $clone: function (to) {
                var s = to || new System.Drawing.SizeF();
                s.width = this.width;
                s.height = this.height;
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

    Bridge.define("System.EnvironmentV2", {
        statics: {
            methods: {
                GetResourceString: function (source, args) {
                    if (args === void 0) { args = []; }
                    return source;
                }
            }
        }
    });

    Bridge.define("System.IWellKnownStringEqualityComparer", {
        $kind: "interface"
    });

    Bridge.define("System.StringComparer", {
        inherits: [System.Collections.IComparer,System.Collections.IEqualityComparer,System.Collections.Generic.IComparer$1(System.String),System.Collections.Generic.IEqualityComparer$1(System.String)],
        statics: {
            fields: {
                _ordinal: null,
                _ordinalIgnoreCase: null
            },
            props: {
                InvariantCulture: {
                    get: function () {
                        return null;
                    }
                },
                InvariantCultureIgnoreCase: {
                    get: function () {
                        return null;
                    }
                },
                Ordinal: {
                    get: function () {
                        return System.StringComparer._ordinal;
                    }
                },
                OrdinalIgnoreCase: {
                    get: function () {
                        return System.StringComparer._ordinalIgnoreCase;
                    }
                }
            },
            ctors: {
                init: function () {
                    this._ordinal = new System.OrdinalComparer(false);
                    this._ordinalIgnoreCase = new System.OrdinalComparer(true);
                }
            },
            methods: {
                Create: function (culture, ignoreCase) {
                    if (culture == null) {
                        throw new System.ArgumentNullException.$ctor1("culture");
                    }
                    throw new System.NotImplementedException.ctor();
                    //return new CultureAwareComparer(culture, ignoreCase);
                }
            }
        },
        alias: [
            "compare", "System$Collections$IComparer$compare",
            "equals", "System$Collections$IEqualityComparer$equals",
            "getHashCode", "System$Collections$IEqualityComparer$getHashCode"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            compare: function (x, y) {
                if (Bridge.referenceEquals(x, y)) {
                    return 0;
                }
                if (x == null) {
                    return -1;
                }
                if (y == null) {
                    return 1;
                }
                var str = Bridge.as(x, System.String);
                if (str != null) {
                    var str2 = Bridge.as(y, System.String);
                    if (str2 != null) {
                        return this.compare$1(str, str2);
                    }
                }
                var comparable = Bridge.as(x, System.IComparable);
                if (comparable == null) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_ImplementIComparable"));
                }
                return Bridge.compare(comparable, y);
            },
            equals: function (x, y) {
                if (Bridge.referenceEquals(x, y)) {
                    return true;
                }
                if ((x == null) || (y == null)) {
                    return false;
                }
                var str = Bridge.as(x, System.String);
                if (str != null) {
                    var str2 = Bridge.as(y, System.String);
                    if (str2 != null) {
                        return this.equals2(str, str2);
                    }
                }
                return Bridge.equals(x, y);
            },
            getHashCode: function (obj) {
                if (obj == null) {
                    throw new System.ArgumentNullException.$ctor1("obj");
                }
                var str = Bridge.as(obj, System.String);
                if (str != null) {
                    return this.getHashCode2(str);
                }
                return Bridge.getHashCode(obj);
            }
        }
    });

    Bridge.define("System.Settings", {
        statics: {
            fields: {
                WinFormIgnoreFontName: false
            },
            ctors: {
                init: function () {
                    this.WinFormIgnoreFontName = false;
                }
            },
            methods: {
                IsUsingWindowsCSS: function () {
                    for (var i = 0; i < document.head.childElementCount; i = (i + 1) | 0) {
                        var child = document.head.children[i];
                        if (Bridge.is(child, HTMLLinkElement)) {
                            var link = child;
                            if (link.rel != null && Bridge.referenceEquals(link.rel.toLowerCase(), "stylesheet") && link.href != null && System.String.contains(link.href.toLowerCase(),"windows10.css")) {
                                return true;
                            }
                        }
                    }

                    return false;
                }
            }
        }
    });

    Bridge.define("System.StringUtils", {
        statics: {
            methods: {
                CompareOrdinal: function (strA, strB) {
                    if (Bridge.referenceEquals(strA, strB)) {
                        return 0;
                    }
                    if (strA == null) {
                        return -1;
                    }
                    if (strB == null) {
                        return 1;
                    }
                    if ((((System.Linq.Enumerable.from(strA).first() - System.Linq.Enumerable.from(strB).first()) | 0)) !== 0) {
                        return (((System.Linq.Enumerable.from(strA).first() - System.Linq.Enumerable.from(strB).first()) | 0));
                    }
                    return System.StringUtils.CompareOrdinalHelper(strA, strB);
                },
                CompareOrdinalHelper: function (strA, strB) {
                    return System.String.compare(strA, strB, false);
                    //int num = Math.Min(strA.Length, strB.Length);
                    //int num2 = -1;
                    //char m_firstChar1 = strA[0];
                    //char m_firstChar2 = strB[0];

                    //int chPtr = 0;
                    //int chPtr2 = 0;
                    //while (num >= 10)
                    //{
                    //    if (strA[chPtr] != strB[chPtr2])
                    //    {
                    //        num2 = 0;
                    //        break;
                    //    }
                    //    if (strA[chPtr + 1] != strB[chPtr2 + 1])
                    //    {
                    //        num2 = 2;
                    //        break;
                    //    }
                    //    if (strA[chPtr + 2] != strB[chPtr2 + 2])
                    //    {
                    //        num2 = 4;
                    //        break;
                    //    }
                    //    if (strA[chPtr + 3] != strB[chPtr2 + 3])
                    //    {
                    //        num2 = 6;
                    //        break;
                    //    }
                    //    if (strA[chPtr + 4] != strB[chPtr2 + 4])
                    //    {
                    //        num2 = 8;
                    //        break;
                    //    }
                    //    chPtr += 5;
                    //    chPtr2 += 5;
                    //    num -= 5;
                    //}
                    //if (num2 == -1)
                    //{
                    //    goto Label_0100;
                    //}
                    //chPtr += num2;
                    //chPtr2 += num2;
                    //int num3 = strA[0] - strB[0];
                    //if (num3 != 0)
                    //{
                    //    return num3;
                    //}
                    //return (strA[1] - strB[1]);
                    //Label_00E2:
                    //if ((strA[0] != *(((int*)chPtr2)))
                    //{
                    //    goto Label_0104;
                    //}
                    //chPtr += 1;
                    //chPtr2 += 1;
                    //num -= 1;
                    //Label_0100:
                    //if (num > 0)
                    //{
                    //    goto Label_00E2;
                    //}
                    //Label_0104:
                    //if (num <= 0)
                    //{
                    //    return (strA.Length - strB.Length);
                    //}
                    //int num4 = strA[0] - strB[0];
                    //if (num4 != 0)
                    //{
                    //    return num4;
                    //}
                    //return (strA[1] - strB[1]);
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.AnchorStyles", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Top: 1,
                Bottom: 2,
                Left: 4,
                Right: 8
            }
        },
        $flags: true
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

    Bridge.define("System.Windows.Forms.AutoSizeMode", {
        $kind: "enum",
        statics: {
            fields: {
                GrowAndShrink: 0,
                GrowOnly: 1
            }
        }
    });

    Bridge.define("System.Windows.Forms.BorderStyle", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                FixedSingle: 1,
                Fixed3D: 2
            }
        }
    });

    Bridge.define("System.Windows.Forms.BoundsSpecified", {
        $kind: "enum",
        statics: {
            fields: {
                All: 15,
                Height: 8,
                Location: 3,
                None: 0,
                Size: 12,
                Width: 4,
                X: 1,
                Y: 2
            }
        },
        $flags: true
    });

    Bridge.define("System.Windows.Forms.ClientUtils", {
        statics: {
            methods: {
                IsEnumValid: function (enumValue, value, minValue, maxValue) {
                    return ((value >= minValue) && (value <= maxValue));
                }
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

    Bridge.define("System.Windows.Forms.DockStyle", {
        $kind: "enum",
        statics: {
            fields: {
                None: 0,
                Top: 1,
                Bottom: 2,
                Left: 3,
                Right: 4,
                Fill: 5
            }
        }
    });

    Bridge.define("System.Windows.Forms.DpiHelper", {
        statics: {
            fields: {
                EnableAnchorLayoutHighDpiImprovements: false
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
                Move: 1,
                TopLeft: 2,
                Left: 3,
                BottomLeft: 4,
                Top: 5,
                TopRight: 6,
                Right: 7,
                BottomRight: 8,
                Bottom: 9
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

    Bridge.define("System.Windows.Forms.FormStartPosition", {
        $kind: "enum",
        statics: {
            fields: {
                Manual: 0,
                CenterScreen: 1,
                WindowsDefaultLocation: 2,
                WindowsDefaultBounds: 3,
                CenterParent: 4
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.ArrangedElementCollection", {
        inherits: [System.Collections.IList,System.Collections.ICollection,System.Collections.IEnumerable],
        statics: {
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Windows.Forms.Layout.ArrangedElementCollection.$ctor2(0);
                }
            },
            methods: {
                Copy: function (sourceList, sourceIndex, destinationList, destinationIndex, length) {
                    if (sourceIndex < destinationIndex) {
                        sourceIndex = (sourceIndex + length) | 0;
                        destinationIndex = (destinationIndex + length) | 0;
                        while (length > 0) {
                            destinationList.InnerList.setItem(((destinationIndex = (destinationIndex - 1) | 0)), sourceList.InnerList.getItem(((sourceIndex = (sourceIndex - 1) | 0))));
                            length = (length - 1) | 0;
                        }
                    } else {
                        while (length > 0) {
                            destinationList.InnerList.setItem(Bridge.identity(destinationIndex, (destinationIndex = (destinationIndex + 1) | 0)), sourceList.InnerList.getItem(Bridge.identity(sourceIndex, (sourceIndex = (sourceIndex + 1) | 0))));
                            length = (length - 1) | 0;
                        }
                    }
                }
            }
        },
        fields: {
            _innerList: null
        },
        props: {
            Count: {
                get: function () {
                    return this.InnerList.Count;
                }
            },
            InnerList: {
                get: function () {
                    return this._innerList;
                }
            },
            IsReadOnly: {
                get: function () {
                    return this.InnerList.IsReadOnly;
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return this.InnerList.IsSynchronized;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return this.InnerList.SyncRoot;
                }
            },
            System$Collections$IList$IsFixedSize: {
                get: function () {
                    return this.InnerList.IsFixedSize;
                }
            }
        },
        alias: [
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "Count", "System$Collections$ICollection$Count",
            "IsReadOnly", "System$Collections$IList$IsReadOnly"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
                this._innerList = new System.Collections.ArrayList.$ctor3(4);
            },
            $ctor1: function (innerList) {
                this.$initialize();
                this._innerList = innerList;
            },
            $ctor2: function (size) {
                this.$initialize();
                this._innerList = new System.Collections.ArrayList.$ctor3(size);
            }
        },
        methods: {
            getItem: function (index) {
                return Bridge.cast(this.InnerList.getItem(index), System.Windows.Forms.Layout.IArrangedElement);
            },
            System$Collections$IList$getItem: function (index) {
                return this.InnerList.getItem(index);
            },
            System$Collections$IList$setItem: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            copyTo: function (array, index) {
                this.InnerList.copyTo(array, index);
            },
            equals: function (obj) {
                var elements = Bridge.as(obj, System.Windows.Forms.Layout.ArrangedElementCollection);
                if ((elements == null) || (this.Count !== elements.Count)) {
                    return false;
                }
                for (var i = 0; i < this.Count; i = (i + 1) | 0) {
                    if (!Bridge.referenceEquals(this.InnerList.getItem(i), elements.InnerList.getItem(i))) {
                        return false;
                    }
                }
                return true;
            },
            GetEnumerator: function () {
                return this.InnerList.GetEnumerator();
            },
            getHashCode: function () {
                return Bridge.getHashCode(this);
            },
            MoveElement: function (element, fromIndex, toIndex) {
                var length = (toIndex - fromIndex) | 0;
                switch (length) {
                    case -1: 
                    case 1: 
                        this.InnerList.setItem(fromIndex, this.InnerList.getItem(toIndex));
                        break;
                    default: 
                        {
                            var sourceIndex = 0;
                            var destinationIndex = 0;
                            if (length > 0) {
                                sourceIndex = (fromIndex + 1) | 0;
                                destinationIndex = fromIndex;
                            } else {
                                sourceIndex = toIndex;
                                destinationIndex = (toIndex + 1) | 0;
                                length = (-length) | 0;
                            }
                            System.Windows.Forms.Layout.ArrangedElementCollection.Copy(this, sourceIndex, this, destinationIndex, length);
                            break;
                        }
                }
                this.InnerList.setItem(toIndex, element);
            },
            System$Collections$IList$add: function (value) {
                return this.InnerList.add(value);
            },
            System$Collections$IList$clear: function () {
                this.InnerList.clear();
            },
            System$Collections$IList$contains: function (value) {
                return this.InnerList.contains(value);
            },
            System$Collections$IList$indexOf: function (value) {
                return this.InnerList.indexOf(value);
            },
            System$Collections$IList$insert: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$remove: function (value) {
                this.InnerList.remove(value);
            },
            System$Collections$IList$removeAt: function (index) {
                this.InnerList.removeAt(index);
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.CommonProperties", {
        statics: {
            fields: {
                _anchorNeverShrinksSection: null,
                _autoSizeModeSection: null,
                _autoSizeSection: null,
                _BoxStretchInternalSection: null,
                _dockAndAnchorNeedsLayoutSection: null,
                _dockAndAnchorSection: null,
                _dockModeSection: null,
                _flowBreakSection: null,
                _layoutBoundsProperty: 0,
                _layoutStateProperty: 0,
                _marginProperty: 0,
                _maximumSizeProperty: 0,
                _minimumSizeProperty: 0,
                _paddingProperty: 0,
                _preferredSizeCacheProperty: 0,
                _selfAutoSizingSection: null,
                _specifiedBoundsProperty: 0,
                DefaultAlignment: 0,
                DefaultAnchor: 0,
                DefaultAutoSize: false,
                DefaultDock: 0,
                DefaultMargin: null,
                DefaultMaximumSize: null,
                DefaultMinimumSize: null
            },
            ctors: {
                init: function () {
                    this._anchorNeverShrinksSection = new System.Collections.Specialized.BitVector32.Section();
                    this._autoSizeModeSection = new System.Collections.Specialized.BitVector32.Section();
                    this._autoSizeSection = new System.Collections.Specialized.BitVector32.Section();
                    this._BoxStretchInternalSection = new System.Collections.Specialized.BitVector32.Section();
                    this._dockAndAnchorNeedsLayoutSection = new System.Collections.Specialized.BitVector32.Section();
                    this._dockAndAnchorSection = new System.Collections.Specialized.BitVector32.Section();
                    this._dockModeSection = new System.Collections.Specialized.BitVector32.Section();
                    this._flowBreakSection = new System.Collections.Specialized.BitVector32.Section();
                    this._selfAutoSizingSection = new System.Collections.Specialized.BitVector32.Section();
                    this.DefaultMargin = new System.Windows.Forms.Padding();
                    this.DefaultMaximumSize = new System.Drawing.Size();
                    this.DefaultMinimumSize = new System.Drawing.Size();
                    this._anchorNeverShrinksSection = System.Collections.Specialized.BitVector32.CreateSection$1(1, System.Windows.Forms.Layout.CommonProperties._BoxStretchInternalSection);
                    this._autoSizeModeSection = System.Collections.Specialized.BitVector32.CreateSection$1(1, System.Windows.Forms.Layout.CommonProperties._selfAutoSizingSection);
                    this._autoSizeSection = System.Collections.Specialized.BitVector32.CreateSection$1(1, System.Windows.Forms.Layout.CommonProperties._dockModeSection);
                    this._BoxStretchInternalSection = System.Collections.Specialized.BitVector32.CreateSection$1(3, System.Windows.Forms.Layout.CommonProperties._autoSizeSection);
                    this._dockAndAnchorNeedsLayoutSection = System.Collections.Specialized.BitVector32.CreateSection(127);
                    this._dockAndAnchorSection = System.Collections.Specialized.BitVector32.CreateSection(15);
                    this._dockModeSection = System.Collections.Specialized.BitVector32.CreateSection$1(1, System.Windows.Forms.Layout.CommonProperties._dockAndAnchorSection);
                    this._flowBreakSection = System.Collections.Specialized.BitVector32.CreateSection$1(1, System.Windows.Forms.Layout.CommonProperties._anchorNeverShrinksSection);
                    this._layoutBoundsProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._layoutStateProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._marginProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._maximumSizeProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._minimumSizeProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._paddingProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._preferredSizeCacheProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._selfAutoSizingSection = System.Collections.Specialized.BitVector32.CreateSection$1(1, System.Windows.Forms.Layout.CommonProperties._flowBreakSection);
                    this._specifiedBoundsProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this.DefaultAlignment = System.Drawing.ContentAlignment.TopLeft;
                    this.DefaultAnchor = (5);
                    this.DefaultAutoSize = false;
                    this.DefaultDock = System.Windows.Forms.DockStyle.None;
                    this.DefaultMargin = new System.Windows.Forms.Padding.$ctor1(3);
                    this.DefaultMaximumSize = new System.Drawing.Size.$ctor2(0, 0);
                    this.DefaultMinimumSize = new System.Drawing.Size.$ctor2(0, 0);
                }
            },
            methods: {
                ClearMaximumSize: function (element) {
                    if (element.System$Windows$Forms$Layout$IArrangedElement$Properties.ContainsObject(System.Windows.Forms.Layout.CommonProperties._maximumSizeProperty)) {
                        element.System$Windows$Forms$Layout$IArrangedElement$Properties.RemoveObject(System.Windows.Forms.Layout.CommonProperties._maximumSizeProperty);
                    }
                },
                GetAutoSize: function (element) {
                    var num = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element).getItem$1(System.Windows.Forms.Layout.CommonProperties._autoSizeSection);
                    return (num > 0);
                },
                GetAutoSizeMode: function (element) {
                    if (System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element).getItem$1(System.Windows.Forms.Layout.CommonProperties._autoSizeModeSection) !== 0) {
                        return System.Windows.Forms.AutoSizeMode.GrowAndShrink;
                    }
                    return System.Windows.Forms.AutoSizeMode.GrowOnly;
                },
                GetFlowBreak: function (element) {
                    var num = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element).getItem$1(System.Windows.Forms.Layout.CommonProperties._flowBreakSection);
                    return (num === 1);
                },
                GetLayoutBounds: function (element) {
                    var flag = { };
                    var size = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetSize(System.Windows.Forms.Layout.CommonProperties._layoutBoundsProperty, flag);
                    if (flag.v) {
                        return size.$clone();
                    }
                    return System.Drawing.Size.Empty.$clone();
                },
                GetLayoutState: function (element) {
                    return new System.Collections.Specialized.BitVector32.$ctor2(element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetInteger(System.Windows.Forms.Layout.CommonProperties._layoutStateProperty));
                },
                GetMargin: function (element) {
                    var flag = { };
                    var padding = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetPadding$1(System.Windows.Forms.Layout.CommonProperties._marginProperty, flag);
                    if (flag.v) {
                        return padding.$clone();
                    }
                    return System.Windows.Forms.Layout.CommonProperties.DefaultMargin.$clone();
                },
                GetMaximumSize: function (element, defaultMaximumSize) {
                    var flag = { };
                    var size = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetSize(System.Windows.Forms.Layout.CommonProperties._maximumSizeProperty, flag);
                    if (flag.v) {
                        return size.$clone();
                    }
                    return defaultMaximumSize.$clone();
                },
                GetMinimumSize: function (element, defaultMinimumSize) {
                    var flag = { };
                    var size = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetSize(System.Windows.Forms.Layout.CommonProperties._minimumSizeProperty, flag);
                    if (flag.v) {
                        return size.$clone();
                    }
                    return defaultMinimumSize.$clone();
                },
                GetNeedsAnchorLayout: function (element) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    return ((layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockAndAnchorNeedsLayoutSection) !== 0) && (layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection) === 0));
                },
                GetNeedsDockAndAnchorLayout: function (element) {
                    return (System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element).getItem$1(System.Windows.Forms.Layout.CommonProperties._dockAndAnchorNeedsLayoutSection) > 0);
                },
                GetNeedsDockLayout: function (element) {
                    return ((System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element).getItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection) === 1) && element.System$Windows$Forms$Layout$IArrangedElement$ParticipatesInLayout);
                },
                GetPadding: function (element, defaultPadding) {
                    var flag = { };
                    var padding = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetPadding$1(System.Windows.Forms.Layout.CommonProperties._paddingProperty, flag);
                    if (flag.v) {
                        return padding.$clone();
                    }
                    return defaultPadding.$clone();
                },
                GetSelfAutoSizeInDefaultLayout: function (element) {
                    var num = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element).getItem$1(System.Windows.Forms.Layout.CommonProperties._selfAutoSizingSection);
                    return (num === 1);
                },
                GetSpecifiedBounds: function (element) {
                    var flag = { };
                    var rectangle = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetRectangle$1(System.Windows.Forms.Layout.CommonProperties._specifiedBoundsProperty, flag);
                    if (flag.v && (System.Drawing.Rectangle.op_Inequality(rectangle.$clone(), System.Windows.Forms.Layout.LayoutUtils.MaxRectangle.$clone()))) {
                        return rectangle.$clone();
                    }
                    return element.System$Windows$Forms$Layout$IArrangedElement$Bounds.$clone();
                },
                HasLayoutBounds: function (element) {
                    var flag = { };
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetSize(System.Windows.Forms.Layout.CommonProperties._layoutBoundsProperty, flag);
                    return flag.v;
                },
                ResetPadding: function (element) {
                    if (element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetObject(System.Windows.Forms.Layout.CommonProperties._paddingProperty) != null) {
                        element.System$Windows$Forms$Layout$IArrangedElement$Properties.RemoveObject(System.Windows.Forms.Layout.CommonProperties._paddingProperty);
                    }
                },
                SetAutoSize: function (element, value) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._autoSizeSection, value ? 1 : 0);
                    System.Windows.Forms.Layout.CommonProperties.SetLayoutState(element, layoutState.$clone());
                    if (!value) {
                        element.System$Windows$Forms$Layout$IArrangedElement$SetBounds(System.Windows.Forms.Layout.CommonProperties.GetSpecifiedBounds(element), System.Windows.Forms.BoundsSpecified.None);
                    }
                },
                SetAutoSizeMode: function (element, mode) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._autoSizeModeSection, (mode === System.Windows.Forms.AutoSizeMode.GrowAndShrink) ? 1 : 0);
                    System.Windows.Forms.Layout.CommonProperties.SetLayoutState(element, layoutState.$clone());
                },
                SetFlowBreak: function (element, value) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._flowBreakSection, value ? 1 : 0);
                    System.Windows.Forms.Layout.CommonProperties.SetLayoutState(element, layoutState.$clone());
                    System.Windows.Forms.Layout.LayoutTransaction.DoLayout(element.System$Windows$Forms$Layout$IArrangedElement$Container, element, System.Windows.Forms.Layout.PropertyNames.FlowBreak);
                },
                SetLayoutBounds: function (element, value) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetSize(System.Windows.Forms.Layout.CommonProperties._layoutBoundsProperty, value.$clone());
                },
                SetLayoutState: function (element, state) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetInteger(System.Windows.Forms.Layout.CommonProperties._layoutStateProperty, state.Data);
                },
                SetMargin: function (element, value) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetPadding(System.Windows.Forms.Layout.CommonProperties._marginProperty, value.$clone());
                    System.Windows.Forms.Layout.LayoutTransaction.DoLayout(element.System$Windows$Forms$Layout$IArrangedElement$Container, element, System.Windows.Forms.Layout.PropertyNames.Margin);
                },
                SetMaximumSize: function (element, value) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetSize(System.Windows.Forms.Layout.CommonProperties._maximumSizeProperty, value.$clone());
                    var bounds = element.System$Windows$Forms$Layout$IArrangedElement$Bounds.$clone();
                    bounds.Width = Math.min(bounds.Width, value.Width);
                    bounds.Height = Math.min(bounds.Height, value.Height);
                    element.System$Windows$Forms$Layout$IArrangedElement$SetBounds(bounds.$clone(), System.Windows.Forms.BoundsSpecified.Size);
                    System.Windows.Forms.Layout.LayoutTransaction.DoLayout(element.System$Windows$Forms$Layout$IArrangedElement$Container, element, System.Windows.Forms.Layout.PropertyNames.MaximumSize);
                },
                SetMinimumSize: function (element, value) {
                    var $t;
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetSize(System.Windows.Forms.Layout.CommonProperties._minimumSizeProperty, value.$clone());
                    $t = new System.Windows.Forms.Layout.LayoutTransaction.ctor(Bridge.as(element.System$Windows$Forms$Layout$IArrangedElement$Container, System.Windows.Forms.Control), element, System.Windows.Forms.Layout.PropertyNames.MinimumSize);
                    try {
                        var bounds = element.System$Windows$Forms$Layout$IArrangedElement$Bounds.$clone();
                        bounds.Width = Math.max(bounds.Width, value.Width);
                        bounds.Height = Math.max(bounds.Height, value.Height);
                        element.System$Windows$Forms$Layout$IArrangedElement$SetBounds(bounds.$clone(), System.Windows.Forms.BoundsSpecified.Size);
                    }
                    finally {
                        if (Bridge.hasValue($t)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                SetPadding: function (element, value) {
                    value = System.Windows.Forms.Layout.LayoutUtils.ClampNegativePaddingToZero(value.$clone());
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetPadding(System.Windows.Forms.Layout.CommonProperties._paddingProperty, value.$clone());
                },
                SetSelfAutoSizeInDefaultLayout: function (element, value) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._selfAutoSizingSection, value ? 1 : 0);
                    System.Windows.Forms.Layout.CommonProperties.SetLayoutState(element, layoutState.$clone());
                },
                ShouldSelfSize: function (element) {
                    return (!System.Windows.Forms.Layout.CommonProperties.GetAutoSize(element) || (((Bridge.is(element.System$Windows$Forms$Layout$IArrangedElement$Container, System.Windows.Forms.Control)) && (Bridge.hasValue(Bridge.cast(element.System$Windows$Forms$Layout$IArrangedElement$Container, System.Windows.Forms.Control).LayoutEngine))) && System.Windows.Forms.Layout.CommonProperties.GetSelfAutoSizeInDefaultLayout(element)));
                },
                UpdateSpecifiedBounds: function (element, x, y, width, height) {
                    var rectangle = new System.Drawing.Rectangle.$ctor2(x, y, width, height);
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetRectangle(System.Windows.Forms.Layout.CommonProperties._specifiedBoundsProperty, rectangle.$clone());
                },
                UpdateSpecifiedBounds$1: function (element, x, y, width, height, specified) {
                    var specifiedBounds = System.Windows.Forms.Layout.CommonProperties.GetSpecifiedBounds(element);
                    var flag = !!(((specified & System.Windows.Forms.BoundsSpecified.X) === System.Windows.Forms.BoundsSpecified.None) & (x !== specifiedBounds.X));
                    var flag2 = !!(((specified & System.Windows.Forms.BoundsSpecified.Y) === System.Windows.Forms.BoundsSpecified.None) & (y !== specifiedBounds.Y));
                    var flag3 = !!(((specified & System.Windows.Forms.BoundsSpecified.Width) === System.Windows.Forms.BoundsSpecified.None) & (width !== specifiedBounds.Width));
                    var flag4 = !!(((specified & System.Windows.Forms.BoundsSpecified.Height) === System.Windows.Forms.BoundsSpecified.None) & (height !== specifiedBounds.Height));
                    if (!!((!!((!!(flag | flag2)) | flag3)) | flag4)) {
                        if (!flag) {
                            specifiedBounds.X = x;
                        }
                        if (!flag2) {
                            specifiedBounds.Y = y;
                        }
                        if (!flag3) {
                            specifiedBounds.Width = width;
                        }
                        if (!flag4) {
                            specifiedBounds.Height = height;
                        }
                        element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetRectangle(System.Windows.Forms.Layout.CommonProperties._specifiedBoundsProperty, specifiedBounds.$clone());
                    } else if (element.System$Windows$Forms$Layout$IArrangedElement$Properties.ContainsObject(System.Windows.Forms.Layout.CommonProperties._specifiedBoundsProperty)) {
                        element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetRectangle(System.Windows.Forms.Layout.CommonProperties._specifiedBoundsProperty, System.Windows.Forms.Layout.LayoutUtils.MaxRectangle.$clone());
                    }
                },
                xClearAllPreferredSizeCaches: function (start) {
                    System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(start);
                    var children = start.System$Windows$Forms$Layout$IArrangedElement$Children;
                    for (var i = 0; i < children.Count; i = (i + 1) | 0) {
                        System.Windows.Forms.Layout.CommonProperties.xClearAllPreferredSizeCaches(children.getItem(i));
                    }
                },
                xClearPreferredSizeCache: function (element) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetSize(System.Windows.Forms.Layout.CommonProperties._preferredSizeCacheProperty, System.Windows.Forms.Layout.LayoutUtils.InvalidSize.$clone());
                },
                xGetAnchor: function (element) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    var anchor = layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockAndAnchorSection);
                    return ((layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection) === 0) ? System.Windows.Forms.Layout.CommonProperties.xTranslateAnchorValue(anchor) : (5));
                },
                xGetAutoSizedAndAnchored: function (element) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    if (layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._selfAutoSizingSection) !== 0) {
                        return false;
                    }
                    return ((layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._autoSizeSection) !== 0) && (layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection) === 0));
                },
                xGetDock: function (element) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    var style = layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockAndAnchorSection);
                    var mode = layoutState.getItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection);
                    return ((mode === System.Windows.Forms.Layout.CommonProperties.DockAnchorMode.Dock) ? style : System.Windows.Forms.DockStyle.None);
                },
                xGetPreferredSizeCache: function (element) {
                    var flag = { };
                    var size = element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetSize(System.Windows.Forms.Layout.CommonProperties._preferredSizeCacheProperty, flag);
                    if (flag.v && (System.Drawing.Size.op_Inequality(size.$clone(), System.Windows.Forms.Layout.LayoutUtils.InvalidSize.$clone()))) {
                        return size.$clone();
                    }
                    return System.Drawing.Size.Empty.$clone();
                },
                xSetAnchor: function (element, value) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._dockAndAnchorSection, System.Windows.Forms.Layout.CommonProperties.xTranslateAnchorValue(value));
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection, 0);
                    System.Windows.Forms.Layout.CommonProperties.SetLayoutState(element, layoutState.$clone());
                },
                xSetDock: function (element, value) {
                    var layoutState = System.Windows.Forms.Layout.CommonProperties.GetLayoutState(element);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._dockAndAnchorSection, value);
                    layoutState.setItem$1(System.Windows.Forms.Layout.CommonProperties._dockModeSection, (value === System.Windows.Forms.DockStyle.None) ? 0 : 1);
                    System.Windows.Forms.Layout.CommonProperties.SetLayoutState(element, layoutState.$clone());
                },
                xSetPreferredSizeCache: function (element, value) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetSize(System.Windows.Forms.Layout.CommonProperties._preferredSizeCacheProperty, value.$clone());
                },
                xTranslateAnchorValue: function (anchor) {
                    if (anchor !== System.Windows.Forms.AnchorStyles.None) {
                        if (anchor === (5)) {
                            return System.Windows.Forms.AnchorStyles.None;
                        }
                        return anchor;
                    }
                    return (5);
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.CommonProperties.DockAnchorMode", {
        $kind: "nested enum",
        statics: {
            fields: {
                Anchor: 0,
                Dock: 1
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.LayoutEngine", {
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            CastToArrangedElement: function (obj) {
                var element = Bridge.as(obj, System.Windows.Forms.Layout.IArrangedElement);
                if (obj == null) {
                    var args = System.Array.init([Bridge.getType(obj)], System.Object);
                    throw new System.NotSupportedException.$ctor1(System.Windows.Forms.SR.GetString("LayoutEngineUnsupportedType", args));
                }
                return element;
            },
            GetPreferredSize: function (container, proposedConstraints) {
                return System.Drawing.Size.Empty.$clone();
            },
            InitLayout: function (child, specified) {
                this.InitLayoutCore(this.CastToArrangedElement(child), specified);
            },
            InitLayoutCore: function (element, bounds) { },
            Layout: function (container, layoutEventArgs) {
                return this.LayoutCore(this.CastToArrangedElement(container), layoutEventArgs);
            },
            LayoutCore: function (container, layoutEventArgs) {
                return false;
            },
            ProcessSuspendedLayoutEventArgs: function (container, args) { }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.DefaultLayout.AnchorInfo", {
        $kind: "nested class",
        fields: {
            Bottom: 0,
            Left: 0,
            Right: 0,
            Top: 0
        }
    });

    Bridge.define("System.Windows.Forms.Layout.DefaultLayout.GrowthDirection", {
        $kind: "nested enum",
        statics: {
            fields: {
                Downward: 2,
                Left: 4,
                None: 0,
                Right: 8,
                Upward: 1
            }
        },
        $flags: true
    });

    Bridge.define("System.Windows.Forms.Layout.LayoutTransaction", {
        inherits: [System.IDisposable],
        statics: {
            methods: {
                CreateTransactionIf: function (condition, controlToLayout, elementCausingLayout, property) {
                    if (condition) {
                        return new System.Windows.Forms.Layout.LayoutTransaction.ctor(controlToLayout, elementCausingLayout, property);
                    }
                    System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(elementCausingLayout);
                    return null;
                },
                DoLayout: function (elementToLayout, elementCausingLayout, property) {
                    if (elementCausingLayout != null) {
                        System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(elementCausingLayout);
                        if (elementToLayout != null) {
                            System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(elementToLayout);
                            elementToLayout.System$Windows$Forms$Layout$IArrangedElement$PerformLayout(elementCausingLayout, property);
                        }
                    }
                },
                DoLayoutIf: function (condition, elementToLayout, elementCausingLayout, property) {
                    if (!condition) {
                        if (elementCausingLayout != null) {
                            System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(elementCausingLayout);
                        }
                    } else {
                        System.Windows.Forms.Layout.LayoutTransaction.DoLayout(elementToLayout, elementCausingLayout, property);
                    }
                }
            }
        },
        fields: {
            _controlToLayout: null,
            _resumeLayout: false
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (controlToLayout, controlCausingLayout, property) {
                System.Windows.Forms.Layout.LayoutTransaction.$ctor1.call(this, controlToLayout, controlCausingLayout, property, true);
            },
            $ctor1: function (controlToLayout, controlCausingLayout, property, resumeLayout) {
                this.$initialize();
                System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(controlCausingLayout);
                this._controlToLayout = controlToLayout;
                this._resumeLayout = resumeLayout;
                if (this._controlToLayout != null) {
                    this._controlToLayout.SuspendLayout();
                    System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(this._controlToLayout);
                    if (resumeLayout) {
                        this._controlToLayout.PerformLayout$2(new System.Windows.Forms.LayoutEventArgs.ctor(controlCausingLayout, property));
                    }
                }
            }
        },
        methods: {
            Dispose: function () {
                if (this._controlToLayout != null) {
                    this._controlToLayout.ResumeLayout$1(this._resumeLayout);
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.LayoutUtils", {
        statics: {
            fields: {
                AnyBottom: 0,
                AnyCenter: 0,
                AnyLeft: 0,
                AnyMiddle: 0,
                AnyRight: 0,
                AnyTop: 0,
                dockingToAnchor: null,
                HorizontalAnchorStyles: 0,
                InvalidSize: null,
                MaxRectangle: null,
                MaxSize: null,
                TestString: null,
                VerticalAnchorStyles: 0
            },
            ctors: {
                init: function () {
                    this.InvalidSize = new System.Drawing.Size();
                    this.MaxRectangle = new System.Drawing.Rectangle();
                    this.MaxSize = new System.Drawing.Size();
                    this.AnyBottom = (1792);
                    this.AnyCenter = (546);
                    this.AnyLeft = (273);
                    this.AnyMiddle = (112);
                    this.AnyRight = (1092);
                    this.AnyTop = (7);
                    this.dockingToAnchor = System.Array.init([(5)], System.Windows.Forms.AnchorStyles);
                    this.HorizontalAnchorStyles = (12);
                    this.InvalidSize = new System.Drawing.Size.$ctor2(-2147483648, -2147483648);
                    this.MaxRectangle = new System.Drawing.Rectangle.$ctor2(0, 0, 2147483647, 2147483647);
                    this.MaxSize = new System.Drawing.Size.$ctor2(2147483647, 2147483647);
                    this.TestString = "j^";
                    this.VerticalAnchorStyles = (3);
                }
            },
            methods: {
                AddAlignedRegion: function (textSize, imageSize, relation) {
                    return System.Windows.Forms.Layout.LayoutUtils.AddAlignedRegionCore(textSize.$clone(), imageSize.$clone(), System.Windows.Forms.Layout.LayoutUtils.IsVerticalRelation(relation));
                },
                AddAlignedRegionCore: function (currentSize, contentSize, vertical) {
                    if (vertical) {
                        currentSize.Width = Math.max(currentSize.Width, contentSize.Width);
                        currentSize.Height = (currentSize.Height + contentSize.Height) | 0;
                        return currentSize.$clone();
                    }
                    currentSize.Width = (currentSize.Width + contentSize.Width) | 0;
                    currentSize.Height = Math.max(currentSize.Height, contentSize.Height);
                    return currentSize.$clone();
                },
                Align: function (alignThis, withinThis, align) {
                    return System.Windows.Forms.Layout.LayoutUtils.VAlign(alignThis.$clone(), System.Windows.Forms.Layout.LayoutUtils.HAlign$1(alignThis.$clone(), withinThis.$clone(), align), align);
                },
                Align$1: function (alignThis, withinThis, anchorStyles) {
                    return System.Windows.Forms.Layout.LayoutUtils.VAlign$1(alignThis.$clone(), System.Windows.Forms.Layout.LayoutUtils.HAlign(alignThis.$clone(), withinThis.$clone(), anchorStyles), anchorStyles);
                },
                AlignAndStretch: function (fitThis, withinThis, anchorStyles) {
                    return System.Windows.Forms.Layout.LayoutUtils.Align$1(System.Windows.Forms.Layout.LayoutUtils.Stretch(fitThis.$clone(), withinThis.Size.$clone(), anchorStyles), withinThis.$clone(), anchorStyles);
                },
                AreWidthAndHeightLarger: function (size1, size2) {
                    return ((size1.Width >= size2.Width) && (size1.Height >= size2.Height));
                },
                ClampNegativePaddingToZero: function (padding) {
                    if (padding.All < 0) {
                        padding.Left = Math.max(0, padding.Left);
                        padding.Top = Math.max(0, padding.Top);
                        padding.Right = Math.max(0, padding.Right);
                        padding.Bottom = Math.max(0, padding.Bottom);
                    }
                    return padding.$clone();
                },
                ContentAlignmentToIndex: function (alignment) {
                    var num = System.Windows.Forms.Layout.LayoutUtils.xContentAlignmentToIndex(alignment & 15);
                    var num2 = System.Windows.Forms.Layout.LayoutUtils.xContentAlignmentToIndex((alignment >> 4) & 15);
                    var num3 = System.Windows.Forms.Layout.LayoutUtils.xContentAlignmentToIndex((alignment >> 8) & 15);
                    var num4 = (((((num2 !== 0) ? 4 : 0) | ((num3 !== 0) ? 8 : 0)) | num) | num2) | num3;
                    num4 = (num4 - 1) | 0;
                    return num4;
                },
                ConvertZeroToUnbounded: function (size) {
                    if (size.Width === 0) {
                        size.Width = 2147483647;
                    }
                    if (size.Height === 0) {
                        size.Height = 2147483647;
                    }
                    return size.$clone();
                },
                DeflateRect: function (rect, padding) {
                    rect.X = (rect.X + padding.Left) | 0;
                    rect.Y = (rect.Y + padding.Top) | 0;
                    rect.Width = (rect.Width - padding.Horizontal) | 0;
                    rect.Height = (rect.Height - padding.Vertical) | 0;
                    return rect.$clone();
                },
                ExpandRegionsToFillBounds: function (bounds, region1Align, region1, region2) {
                    switch (region1Align) {
                        case System.Windows.Forms.AnchorStyles.Top: 
                            region1.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region1.v.$clone(), System.Windows.Forms.AnchorStyles.Bottom);
                            region2.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region2.v.$clone(), System.Windows.Forms.AnchorStyles.Top);
                            return;
                        case System.Windows.Forms.AnchorStyles.Bottom: 
                            region1.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region1.v.$clone(), System.Windows.Forms.AnchorStyles.Top);
                            region2.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region2.v.$clone(), System.Windows.Forms.AnchorStyles.Bottom);
                            break;
                        case (3): 
                            break;
                        case System.Windows.Forms.AnchorStyles.Left: 
                            region1.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region1.v.$clone(), System.Windows.Forms.AnchorStyles.Right);
                            region2.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region2.v.$clone(), System.Windows.Forms.AnchorStyles.Left);
                            return;
                        case System.Windows.Forms.AnchorStyles.Right: 
                            region1.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region1.v.$clone(), System.Windows.Forms.AnchorStyles.Left);
                            region2.v = System.Windows.Forms.Layout.LayoutUtils.SubstituteSpecifiedBounds(bounds.$clone(), region2.v.$clone(), System.Windows.Forms.AnchorStyles.Right);
                            return;
                        default: 
                            return;
                    }
                },
                FlipPadding: function (padding) {
                    if (padding.All === -1) {
                        var top = padding.Top;
                        padding.Top = padding.Left;
                        padding.Left = top;
                        top = padding.Bottom;
                        padding.Bottom = padding.Right;
                        padding.Right = top;
                    }
                    return padding.$clone();
                },
                FlipPoint: function (point) {
                    var x = point.X;
                    point.X = point.Y;
                    point.Y = x;
                    return point.$clone();
                },
                FlipRectangle: function (rect) {
                    rect.Location = System.Windows.Forms.Layout.LayoutUtils.FlipPoint(rect.Location.$clone());
                    rect.Size = System.Windows.Forms.Layout.LayoutUtils.FlipSize(rect.Size.$clone());
                    return rect.$clone();
                },
                FlipRectangleIf: function (condition, rect) {
                    if (!condition) {
                        return rect.$clone();
                    }
                    return System.Windows.Forms.Layout.LayoutUtils.FlipRectangle(rect.$clone());
                },
                FlipSize: function (size) {
                    var width = size.Width;
                    size.Width = size.Height;
                    size.Height = width;
                    return size.$clone();
                },
                FlipSizeIf: function (condition, size) {
                    if (!condition) {
                        return size.$clone();
                    }
                    return System.Windows.Forms.Layout.LayoutUtils.FlipSize(size.$clone());
                },
                GetOppositeAnchor: function (anchor) {
                    var none = System.Windows.Forms.AnchorStyles.None;
                    if (anchor !== System.Windows.Forms.AnchorStyles.None) {
                        for (var i = 1; i <= 8; i = i << 1) {
                            switch (anchor & i) {
                                case System.Windows.Forms.AnchorStyles.Top: 
                                    none |= System.Windows.Forms.AnchorStyles.Bottom;
                                    break;
                                case System.Windows.Forms.AnchorStyles.Bottom: 
                                    none |= System.Windows.Forms.AnchorStyles.Top;
                                    break;
                                case System.Windows.Forms.AnchorStyles.Left: 
                                    none |= System.Windows.Forms.AnchorStyles.Right;
                                    break;
                                case System.Windows.Forms.AnchorStyles.Right: 
                                    none |= System.Windows.Forms.AnchorStyles.Left;
                                    break;
                            }
                        }
                    }
                    return none;
                },
                GetOppositeTextImageRelation: function (relation) {
                    return System.Windows.Forms.Layout.LayoutUtils.GetOppositeAnchor(relation);
                },
                GetUnifiedAnchor: function (element) {
                    var dock = System.Windows.Forms.Layout.DefaultLayout.GetDock(element);
                    if (dock !== System.Windows.Forms.DockStyle.None) {
                        return System.Windows.Forms.Layout.LayoutUtils.dockingToAnchor[System.Array.index(dock, System.Windows.Forms.Layout.LayoutUtils.dockingToAnchor)];
                    }
                    return System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                },
                HAlign$1: function (alignThis, withinThis, align) {
                    if ((align & (1092)) !== (0)) {
                        withinThis.X = (withinThis.X + (((withinThis.Width - alignThis.Width) | 0))) | 0;
                    } else if ((align & (546)) !== (0)) {
                        withinThis.X = (withinThis.X + (((Bridge.Int.div((((withinThis.Width - alignThis.Width) | 0)), 2)) | 0))) | 0;
                    }
                    withinThis.Width = alignThis.Width;
                    return withinThis.$clone();
                },
                HAlign: function (alignThis, withinThis, anchorStyles) {
                    if ((anchorStyles & System.Windows.Forms.AnchorStyles.Right) !== System.Windows.Forms.AnchorStyles.None) {
                        withinThis.X = (withinThis.X + (((withinThis.Width - alignThis.Width) | 0))) | 0;
                    } else if ((anchorStyles === System.Windows.Forms.AnchorStyles.None) || ((anchorStyles & (12)) === System.Windows.Forms.AnchorStyles.None)) {
                        withinThis.X = (withinThis.X + (((Bridge.Int.div((((withinThis.Width - alignThis.Width) | 0)), 2)) | 0))) | 0;
                    }
                    withinThis.Width = alignThis.Width;
                    return withinThis.$clone();
                },
                InflateRect: function (rect, padding) {
                    rect.X = (rect.X - padding.Left) | 0;
                    rect.Y = (rect.Y - padding.Top) | 0;
                    rect.Width = (rect.Width + padding.Horizontal) | 0;
                    rect.Height = (rect.Height + padding.Vertical) | 0;
                    return rect.$clone();
                },
                IntersectSizes: function (a, b) {
                    return new System.Drawing.Size.$ctor2(Math.min(a.Width, b.Width), Math.min(a.Height, b.Height));
                },
                IsHorizontalAlignment: function (align) {
                    return !System.Windows.Forms.Layout.LayoutUtils.IsVerticalAlignment(align);
                },
                IsHorizontalRelation: function (relation) {
                    return ((relation & (12)) > System.Windows.Forms.TextImageRelation.Overlay);
                },
                IsIntersectHorizontally: function (rect1, rect2) {
                    if (!rect1.IntersectsWith(rect2.$clone())) {
                        return false;
                    }
                    return (((rect1.X <= rect2.X) && ((((rect1.X + rect1.Width) | 0)) >= (((rect2.X + rect2.Width) | 0)))) || ((rect2.X <= rect1.X) && ((((rect2.X + rect2.Width) | 0)) >= (((rect1.X + rect1.Width) | 0)))));
                },
                IsIntersectVertically: function (rect1, rect2) {
                    if (!rect1.IntersectsWith(rect2.$clone())) {
                        return false;
                    }
                    return (((rect1.Y <= rect2.Y) && ((((rect1.Y + rect1.Width) | 0)) >= (((rect2.Y + rect2.Width) | 0)))) || ((rect2.Y <= rect1.Y) && ((((rect2.Y + rect2.Width) | 0)) >= (((rect1.Y + rect1.Width) | 0)))));
                },
                IsVerticalAlignment: function (align) {
                    return ((align & (514)) > (0));
                },
                IsVerticalRelation: function (relation) {
                    return ((relation & (3)) > System.Windows.Forms.TextImageRelation.Overlay);
                },
                IsZeroWidthOrHeight: function (rectangle) {
                    if (rectangle.Width !== 0) {
                        return (rectangle.Height === 0);
                    }
                    return true;
                },
                IsZeroWidthOrHeight$1: function (size) {
                    if (size.Width !== 0) {
                        return (size.Height === 0);
                    }
                    return true;
                },
                OldGetLargestStringSizeInCollection: function (font, objects) {
                    var $t;
                    var empty = System.Drawing.Size.Empty.$clone();
                    if (objects != null) {
                        $t = Bridge.getEnumerator(objects);
                        try {
                            while ($t.moveNext()) {
                                var obj2 = $t.Current;
                                var size2 = System.Windows.Forms.TextRenderer.MeasureText(Bridge.toString(obj2), font, new System.Drawing.Size.$ctor2(32767, 32767), System.Windows.Forms.TextFormatFlags.SingleLine);
                                empty.Width = Math.max(empty.Width, size2.Width);
                                empty.Height = Math.max(empty.Height, size2.Height);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }}
                    return empty.$clone();
                },
                RTLTranslate: function (bounds, withinBounds) {
                    bounds.X = (withinBounds.Width - bounds.Right) | 0;
                    return bounds.$clone();
                },
                SplitRegion: function (bounds, specifiedContent, region1Align, region1, region2) {
                    region1.v = (region2.v = bounds.$clone());
                    switch (region1Align) {
                        case System.Windows.Forms.AnchorStyles.Top: 
                            region1.v.Height = specifiedContent.Height;
                            region2.v.Y = (region2.v.Y + specifiedContent.Height) | 0;
                            region2.v.Height = (region2.v.Height - specifiedContent.Height) | 0;
                            return;
                        case System.Windows.Forms.AnchorStyles.Bottom: 
                            region1.v.Y = (region1.v.Y + (((bounds.Height - specifiedContent.Height) | 0))) | 0;
                            region1.v.Height = specifiedContent.Height;
                            region2.v.Height = (region2.v.Height - specifiedContent.Height) | 0;
                            break;
                        case (3): 
                            break;
                        case System.Windows.Forms.AnchorStyles.Left: 
                            region1.v.Width = specifiedContent.Width;
                            region2.v.X = (region2.v.X + specifiedContent.Width) | 0;
                            region2.v.Width = (region2.v.Width - specifiedContent.Width) | 0;
                            return;
                        case System.Windows.Forms.AnchorStyles.Right: 
                            region1.v.X = (region1.v.X + (((bounds.Width - specifiedContent.Width) | 0))) | 0;
                            region1.v.Width = specifiedContent.Width;
                            region2.v.Width = (region2.v.Width - specifiedContent.Width) | 0;
                            return;
                        default: 
                            return;
                    }
                },
                Stretch: function (stretchThis, withinThis, anchorStyles) {
                    var size = new System.Drawing.Size.$ctor2(((anchorStyles & (12)) === (12)) ? withinThis.Width : stretchThis.Width, ((anchorStyles & (3)) === (3)) ? withinThis.Height : stretchThis.Height);
                    if (size.Width > withinThis.Width) {
                        size.Width = withinThis.Width;
                    }
                    if (size.Height > withinThis.Height) {
                        size.Height = withinThis.Height;
                    }
                    return size.$clone();
                },
                SubAlignedRegion: function (currentSize, contentSize, relation) {
                    return System.Windows.Forms.Layout.LayoutUtils.SubAlignedRegionCore(currentSize.$clone(), contentSize.$clone(), System.Windows.Forms.Layout.LayoutUtils.IsVerticalRelation(relation));
                },
                SubAlignedRegionCore: function (currentSize, contentSize, vertical) {
                    if (vertical) {
                        currentSize.Height = (currentSize.Height - contentSize.Height) | 0;
                        return currentSize.$clone();
                    }
                    currentSize.Width = (currentSize.Width - contentSize.Width) | 0;
                    return currentSize.$clone();
                },
                SubstituteSpecifiedBounds: function (originalBounds, substitutionBounds, specified) {
                    var left = ((specified & System.Windows.Forms.AnchorStyles.Left) !== System.Windows.Forms.AnchorStyles.None) ? substitutionBounds.Left : originalBounds.Left;
                    var top = ((specified & System.Windows.Forms.AnchorStyles.Top) !== System.Windows.Forms.AnchorStyles.None) ? substitutionBounds.Top : originalBounds.Top;
                    var right = ((specified & System.Windows.Forms.AnchorStyles.Right) !== System.Windows.Forms.AnchorStyles.None) ? substitutionBounds.Right : originalBounds.Right;
                    var bottom = ((specified & System.Windows.Forms.AnchorStyles.Bottom) !== System.Windows.Forms.AnchorStyles.None) ? substitutionBounds.Bottom : originalBounds.Bottom;
                    return System.Drawing.Rectangle.FromLTRB(left, top, right, bottom);
                },
                UnionSizes: function (a, b) {
                    return new System.Drawing.Size.$ctor2(Math.max(a.Width, b.Width), Math.max(a.Height, b.Height));
                },
                VAlign: function (alignThis, withinThis, align) {
                    if ((align & (1792)) !== (0)) {
                        withinThis.Y = (withinThis.Y + (((withinThis.Height - alignThis.Height) | 0))) | 0;
                    } else if ((align & (112)) !== (0)) {
                        withinThis.Y = (withinThis.Y + (((Bridge.Int.div((((withinThis.Height - alignThis.Height) | 0)), 2)) | 0))) | 0;
                    }
                    withinThis.Height = alignThis.Height;
                    return withinThis.$clone();
                },
                VAlign$1: function (alignThis, withinThis, anchorStyles) {
                    if ((anchorStyles & System.Windows.Forms.AnchorStyles.Bottom) !== System.Windows.Forms.AnchorStyles.None) {
                        withinThis.Y = (withinThis.Y + (((withinThis.Height - alignThis.Height) | 0))) | 0;
                    } else if ((anchorStyles === System.Windows.Forms.AnchorStyles.None) || ((anchorStyles & (3)) === System.Windows.Forms.AnchorStyles.None)) {
                        withinThis.Y = (withinThis.Y + (((Bridge.Int.div((((withinThis.Height - alignThis.Height) | 0)), 2)) | 0))) | 0;
                    }
                    withinThis.Height = alignThis.Height;
                    return withinThis.$clone();
                },
                xContentAlignmentToIndex: function (threeBitFlag) {
                    return ((threeBitFlag === 4) ? (3) : (threeBitFlag & 255));
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache", {
        $kind: "nested class",
        statics: {
            fields: {
                MaxCacheSize: 0
            },
            ctors: {
                init: function () {
                    this.MaxCacheSize = 6;
                }
            }
        },
        fields: {
            nextCacheEntry: 0,
            sizeCacheList: null,
            unconstrainedPreferredSize: null
        },
        ctors: {
            init: function () {
                this.unconstrainedPreferredSize = new System.Drawing.Size();
                this.nextCacheEntry = -1;
                this.unconstrainedPreferredSize = System.Windows.Forms.Layout.LayoutUtils.InvalidSize.$clone();
            }
        },
        methods: {
            GetTextSize: function (text, font, proposedConstraints, flags) {
                var $t;
                if (!this.TextRequiresWordBreak(text, font, proposedConstraints.$clone(), flags)) {
                    return this.unconstrainedPreferredSize.$clone();
                }
                if (this.sizeCacheList == null) {
                    this.sizeCacheList = System.Array.init(6, function (){
                        return new System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache();
                    }, System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache);
                }
                $t = Bridge.getEnumerator(this.sizeCacheList);
                try {
                    while ($t.moveNext()) {
                        var cache = $t.Current.$clone();
                        if (System.Drawing.Size.op_Equality(cache.ConstrainingSize.$clone(), proposedConstraints.$clone())) {
                            return cache.PreferredSize.$clone();
                        }
                        if ((cache.ConstrainingSize.Width === proposedConstraints.Width) && (cache.PreferredSize.Height <= proposedConstraints.Height)) {
                            return cache.PreferredSize.$clone();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }var preferredSize = System.Windows.Forms.TextRenderer.MeasureText(text, font, proposedConstraints.$clone(), flags);
                this.nextCacheEntry = (((this.nextCacheEntry + 1) | 0)) % 6;
                this.sizeCacheList[System.Array.index(this.nextCacheEntry, this.sizeCacheList)] = new System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache.$ctor1(proposedConstraints.$clone(), preferredSize.$clone());
                return preferredSize.$clone();
            },
            GetUnconstrainedSize: function (text, font, flags) {
                if (System.Drawing.Size.op_Equality(this.unconstrainedPreferredSize.$clone(), System.Windows.Forms.Layout.LayoutUtils.InvalidSize.$clone())) {
                    flags &= -17;
                    this.unconstrainedPreferredSize = System.Windows.Forms.TextRenderer.MeasureText(text, font, System.Windows.Forms.Layout.LayoutUtils.MaxSize.$clone(), flags);
                }
                return this.unconstrainedPreferredSize.$clone();
            },
            InvalidateCache: function () {
                this.unconstrainedPreferredSize = System.Windows.Forms.Layout.LayoutUtils.InvalidSize.$clone();
                this.sizeCacheList = null;
            },
            TextRequiresWordBreak: function (text, font, size, flags) {
                return (this.GetUnconstrainedSize(text, font, flags).Width > size.Width);
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache(); }
            }
        },
        fields: {
            ConstrainingSize: null,
            PreferredSize: null
        },
        ctors: {
            init: function () {
                this.ConstrainingSize = new System.Drawing.Size();
                this.PreferredSize = new System.Drawing.Size();
            },
            $ctor1: function (constrainingSize, preferredSize) {
                this.$initialize();
                this.ConstrainingSize = constrainingSize.$clone();
                this.PreferredSize = preferredSize.$clone();
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([7140991206, this.ConstrainingSize, this.PreferredSize]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache)) {
                    return false;
                }
                return Bridge.equals(this.ConstrainingSize, o.ConstrainingSize) && Bridge.equals(this.PreferredSize, o.PreferredSize);
            },
            $clone: function (to) {
                var s = to || new System.Windows.Forms.Layout.LayoutUtils.MeasureTextCache.PreferredSizeCache();
                s.ConstrainingSize = this.ConstrainingSize.$clone();
                s.PreferredSize = this.PreferredSize.$clone();
                return s;
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.PropertyNames", {
        statics: {
            fields: {
                Alignment: null,
                Anchor: null,
                Appearance: null,
                AutoEllipsis: null,
                AutoScroll: null,
                AutoSize: null,
                BorderStyle: null,
                Bounds: null,
                CellBorderStyle: null,
                CheckAlign: null,
                ChildIndex: null,
                ColumnHeadersHeight: null,
                ColumnHeadersVisible: null,
                Columns: null,
                ColumnSpan: null,
                ColumnStyles: null,
                Controls: null,
                DisplayRectangle: null,
                DisplayStyle: null,
                Dock: null,
                DrawMode: null,
                DropDownButtonWidth: null,
                FlatAppearanceBorderSize: null,
                FlatStyle: null,
                FlowBreak: null,
                FlowDirection: null,
                Font: null,
                GripStyle: null,
                GrowStyle: null,
                Image: null,
                ImageAlign: null,
                ImageIndex: null,
                ImageKey: null,
                ImageScaling: null,
                ImageScalingSize: null,
                Items: null,
                LayoutSettings: null,
                LayoutStyle: null,
                LinkArea: null,
                Links: null,
                Location: null,
                Margin: null,
                MaximumSize: null,
                MinimumSize: null,
                Multiline: null,
                Orientation: null,
                Padding: null,
                Parent: null,
                PreferredSize: null,
                Renderer: null,
                RightToLeft: null,
                RightToLeftLayout: null,
                RowHeadersVisible: null,
                RowHeadersWidth: null,
                Rows: null,
                RowSpan: null,
                RowStyles: null,
                ScrollBars: null,
                ShowCheckMargin: null,
                ShowDropDownArrow: null,
                ShowImageMargin: null,
                Size: null,
                Spring: null,
                Style: null,
                TableIndex: null,
                Text: null,
                TextAlign: null,
                TextImageRelation: null,
                UseCompatibleTextRendering: null,
                Visible: null,
                WordWrap: null,
                WrapContents: null
            },
            ctors: {
                init: function () {
                    this.Alignment = "Alignment";
                    this.Anchor = "Anchor";
                    this.Appearance = "Appearance";
                    this.AutoEllipsis = "AutoEllipsis";
                    this.AutoScroll = "AutoScroll";
                    this.AutoSize = "AutoSize";
                    this.BorderStyle = "BorderStyle";
                    this.Bounds = "Bounds";
                    this.CellBorderStyle = "CellBorderStyle";
                    this.CheckAlign = "CheckAlign";
                    this.ChildIndex = "ChildIndex";
                    this.ColumnHeadersHeight = "ColumnHeadersHeight";
                    this.ColumnHeadersVisible = "ColumnHeadersVisible";
                    this.Columns = "Columns";
                    this.ColumnSpan = "ColumnSpan";
                    this.ColumnStyles = "ColumnStyles";
                    this.Controls = "Controls";
                    this.DisplayRectangle = "DisplayRectangle";
                    this.DisplayStyle = "DisplayStyle";
                    this.Dock = "Dock";
                    this.DrawMode = "DrawMode";
                    this.DropDownButtonWidth = "DropDownButtonWidth";
                    this.FlatAppearanceBorderSize = "FlatAppearance.BorderSize";
                    this.FlatStyle = "FlatStyle";
                    this.FlowBreak = "FlowBreak";
                    this.FlowDirection = "FlowDirection";
                    this.Font = "Font";
                    this.GripStyle = "GripStyle";
                    this.GrowStyle = "GrowStyle";
                    this.Image = "Image";
                    this.ImageAlign = "ImageAlign";
                    this.ImageIndex = "ImageIndex";
                    this.ImageKey = "ImageKey";
                    this.ImageScaling = "ImageScaling";
                    this.ImageScalingSize = "ImageScalingSize";
                    this.Items = "Items";
                    this.LayoutSettings = "LayoutSettings";
                    this.LayoutStyle = "LayoutStyle";
                    this.LinkArea = "LinkArea";
                    this.Links = "Links";
                    this.Location = "Location";
                    this.Margin = "Margin";
                    this.MaximumSize = "MaximumSize";
                    this.MinimumSize = "MinimumSize";
                    this.Multiline = "Multiline";
                    this.Orientation = "Orientation";
                    this.Padding = "Padding";
                    this.Parent = "Parent";
                    this.PreferredSize = "PreferredSize";
                    this.Renderer = "Renderer";
                    this.RightToLeft = "RightToLeft";
                    this.RightToLeftLayout = "RightToLeftLayout";
                    this.RowHeadersVisible = "RowHeadersVisible";
                    this.RowHeadersWidth = "RowHeadersWidth";
                    this.Rows = "Rows";
                    this.RowSpan = "RowSpan";
                    this.RowStyles = "RowStyles";
                    this.ScrollBars = "ScrollBars";
                    this.ShowCheckMargin = "ShowCheckMargin";
                    this.ShowDropDownArrow = "ShowDropDownArrow";
                    this.ShowImageMargin = "ShowCheckMargin";
                    this.Size = "Size";
                    this.Spring = "Spring";
                    this.Style = "Style";
                    this.TableIndex = "TableIndex";
                    this.Text = "Text";
                    this.TextAlign = "TextAlign";
                    this.TextImageRelation = "TextImageRelation";
                    this.UseCompatibleTextRendering = "UseCompatibleTextRendering";
                    this.Visible = "Visible";
                    this.WordWrap = "WordWrap";
                    this.WrapContents = "WrapContents";
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.LayoutEventArgs", {
        fields: {
            affectedComponent: null,
            affectedProperty: null
        },
        props: {
            AffectedComponent: {
                get: function () {
                    return this.affectedComponent;
                }
            },
            AffectedControl: {
                get: function () {
                    return (Bridge.as(this.affectedComponent, System.Windows.Forms.Control));
                }
            },
            AffectedProperty: {
                get: function () {
                    return this.affectedProperty;
                }
            }
        },
        ctors: {
            ctor: function (affectedComponent, affectedProperty) {
                this.$initialize();
                this.affectedComponent = affectedComponent;
                this.affectedProperty = affectedProperty;
            },
            $ctor1: function (affectedControl, affectedProperty) {
                System.Windows.Forms.LayoutEventArgs.ctor.call(this, Bridge.cast(affectedControl, System.ComponentModel.IComponent), affectedProperty);
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
                IsEdge: false,
                IsFF: false
            },
            ctors: {
                ctor: function () {
                    var userAgent = window.navigator.userAgent.toLowerCase();
                    System.Windows.Forms.MouseEventArgs.IsEdge = System.String.indexOf(userAgent, "edge") > -1;
                    System.Windows.Forms.MouseEventArgs.IsFF = System.String.indexOf(userAgent, "firefox") > -1;
                }
            },
            methods: {
                GetOffsetPoint: function (element) {
                    var top = 0;
                    var left = 0;

                    do {
                        var dym = element;
                        if (System.Windows.Forms.MouseEventArgs.IsFF) {
                            var rec = element.getBoundingClientRect();
                            top += rec.top;
                            left += rec.left;
                            //element = dym.offsetParent;
                            element = element.parentElement;
                        } else {
                            top += dym.offsetTop;
                            left += dym.offsetLeft;
                            element = dym.offsetParent;
                        }


                    } while (element != null);

                    return new System.Drawing.Point.$ctor1(Bridge.Int.clip32(left), Bridge.Int.clip32(top));
                },
                GetClientMouseLocation: function (e) {
                    var x = 0;
                    var y = 0;
                    			  if (!e) var e = window.event;

                    			  if (e.pageX || e.pageY) {
                    				x = e.pageX;
                    				y = e.pageY;
                    			  } else if (e.clientX || e.clientY) {
                    				x = e.clientX + document.body.scrollLeft +
                    								   document.documentElement.scrollLeft;
                    				y = e.clientY + document.body.scrollTop +
                    								   document.documentElement.scrollTop;
                    			  }
                    			
                    return new System.Drawing.PointF.$ctor1(x, y);
                },
                CreateFromMouseEvent: function (original, target) {
                    var $t;
                    // what we need to do is get the local x, y off from the target.            
                    var mousePoint = new System.Drawing.Point();

                    if (!System.Windows.Forms.MouseEventArgs.IsFF && Bridge.referenceEquals(original.currentTarget, target.Element)) {
                        if (Bridge.Browser.isIE || System.Windows.Forms.MouseEventArgs.IsEdge) {
                            var offset = System.Windows.Forms.MouseEventArgs.GetOffsetPoint(target.Element);
                            mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(original.clientX - offset.X), Bridge.Int.clip32(original.clientY - offset.Y));
                        } else {
                            mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(original.layerX), Bridge.Int.clip32(original.layerY));
                        }
                    } else {
                        if (System.Windows.Forms.MouseEventArgs.IsFF) {
                            var vect = System.Windows.Forms.MouseEventArgs.GetClientMouseLocation(original);
                            var rec = target.Element.getBoundingClientRect();
                            mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(vect.X - rec.left), Bridge.Int.clip32(vect.Y - rec.top));
                        } else {
                            var offset1 = System.Windows.Forms.MouseEventArgs.GetOffsetPoint(target.Element);
                            mousePoint = new System.Drawing.Point.$ctor1(Bridge.Int.clip32(original.x - offset1.X), Bridge.Int.clip32(original.y - offset1.Y));
                        }
                    }

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
                    throw new System.NotImplementedException.ctor();
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
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Object$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
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
            GetEnumerator: function () {
                return this._controls.GetEnumerator().$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this._controls.GetEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                var $t;
                this._owner.Element.insertBefore(($t = document.createElement("option"), $t.value = Bridge.toString(this._controls.Count), $t.textContent = (System.String.concat(item, "")), $t), Bridge.cast(this._owner.Element.childNodes[index], Node));
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
            fields: {
                Empty: null
            },
            ctors: {
                init: function () {
                    this.Empty = new System.Windows.Forms.Padding();
                },
                ctor: function () {
                    System.Windows.Forms.Padding.Empty = new System.Windows.Forms.Padding.$ctor1(0);
                }
            },
            methods: {
                Add: function (p1, p2) {
                    return (System.Windows.Forms.Padding.op_Addition(p1.$clone(), p2.$clone()));
                },
                Subtract: function (p1, p2) {
                    return (System.Windows.Forms.Padding.op_Subtraction(p1.$clone(), p2.$clone()));
                },
                op_Addition: function (p1, p2) {
                    return new System.Windows.Forms.Padding.$ctor2(((p1.Left + p2.Left) | 0), ((p1.Top + p2.Top) | 0), ((p1.Right + p2.Right) | 0), ((p1.Bottom + p2.Bottom) | 0));
                },
                op_Subtraction: function (p1, p2) {
                    return new System.Windows.Forms.Padding.$ctor2(((p1.Left - p2.Left) | 0), ((p1.Top - p2.Top) | 0), ((p1.Right - p2.Right) | 0), ((p1.Bottom - p2.Bottom) | 0));
                },
                op_Equality: function (p1, p2) {
                    return ((((p1.Left === p2.Left) && (p1.Top === p2.Top)) && (p1.Right === p2.Right)) && (p1.Bottom === p2.Bottom));
                },
                op_Inequality: function (p1, p2) {
                    return !(System.Windows.Forms.Padding.op_Equality(p1.$clone(), p2.$clone()));
                },
                getDefaultValue: function () { return new System.Windows.Forms.Padding(); }
            }
        },
        fields: {
            _all: false,
            _top: 0,
            _left: 0,
            _right: 0,
            _bottom: 0
        },
        props: {
            All: {
                get: function () {
                    if (!this._all) {
                        return -1;
                    }
                    return this._top;
                },
                set: function (value) {
                    if (!this._all || (this._top !== value)) {
                        this._all = true;
                        this._top = (this._left = (this._right = (this._bottom = value)));
                    }
                }
            },
            Bottom: {
                get: function () {
                    if (this._all) {
                        return this._top;
                    }
                    return this._bottom;
                },
                set: function (value) {
                    if (this._all || (this._bottom !== value)) {
                        this._all = false;
                        this._bottom = value;
                    }
                }
            },
            Left: {
                get: function () {
                    if (this._all) {
                        return this._top;
                    }
                    return this._left;
                },
                set: function (value) {
                    if (this._all || (this._left !== value)) {
                        this._all = false;
                        this._left = value;
                    }
                }
            },
            Right: {
                get: function () {
                    if (this._all) {
                        return this._top;
                    }
                    return this._right;
                },
                set: function (value) {
                    if (this._all || (this._right !== value)) {
                        this._all = false;
                        this._right = value;
                    }
                }
            },
            Top: {
                get: function () {
                    return this._top;
                },
                set: function (value) {
                    if (this._all || (this._top !== value)) {
                        this._all = false;
                        this._top = value;
                    }
                }
            },
            Horizontal: {
                get: function () {
                    return (((this.Left + this.Right) | 0));
                }
            },
            Vertical: {
                get: function () {
                    return (((this.Top + this.Bottom) | 0));
                }
            },
            Size: {
                get: function () {
                    return new System.Drawing.Size.$ctor2(this.Horizontal, this.Vertical);
                }
            }
        },
        ctors: {
            $ctor1: function (all) {
                this.$initialize();
                this._all = true;
                this._top = (this._left = (this._right = (this._bottom = all)));
            },
            $ctor2: function (left, top, right, bottom) {
                this.$initialize();
                this._top = top;
                this._left = left;
                this._right = right;
                this._bottom = bottom;
                this._all = ((this._top === this._left) && (this._top === this._right)) && (this._top === this._bottom);
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            equals: function (other) {
                return ((Bridge.is(other, System.Windows.Forms.Padding)) && (System.Windows.Forms.Padding.op_Equality(System.Nullable.getValue(Bridge.cast(Bridge.unbox(other), System.Windows.Forms.Padding)), this)));
            },
            getHashCode: function () {
                return (((this.Left ^ System.Windows.Forms.WindowsFormsUtils.RotateLeft(this.Top, 8)) ^ System.Windows.Forms.WindowsFormsUtils.RotateLeft(this.Right, 16)) ^ System.Windows.Forms.WindowsFormsUtils.RotateLeft(this.Bottom, 24));
            },
            toString: function () {
                var textArray1 = System.Array.init(["{Left=", Bridge.toString(this.Left), ",Top=", Bridge.toString(this.Top), ",Right=", Bridge.toString(this.Right), ",Bottom=", Bridge.toString(this.Bottom), "}"], System.String);
                return System.String.concat(textArray1);
            },
            ResetAll: function () {
                this.All = 0;
            },
            ResetBottom: function () {
                this.Bottom = 0;
            },
            ResetLeft: function () {
                this.Left = 0;
            },
            ResetRight: function () {
                this.Right = 0;
            },
            ResetTop: function () {
                this.Top = 0;
            },
            Scale: function (dx, dy) {
                this._top = Bridge.Int.clip32(this._top * dy);
                this._left = Bridge.Int.clip32(this._left * dx);
                this._right = Bridge.Int.clip32(this._right * dx);
                this._bottom = Bridge.Int.clip32(this._bottom * dy);
            },
            ShouldSerializeAll: function () {
                return this._all;
            },
            Debug_SanityCheck: function () {
                var flag1 = this._all;
            },
            $clone: function (to) {
                var s = to || new System.Windows.Forms.Padding();
                s._all = this._all;
                s._top = this._top;
                s._left = this._left;
                s._right = this._right;
                s._bottom = this._bottom;
                return s;
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore", {
        statics: {
            fields: {
                currentKey: 0
            },
            methods: {
                CreateKey: function () {
                    var $t;
                    return Bridge.identity(System.Windows.Forms.PropertyStore.currentKey, ($t = (System.Windows.Forms.PropertyStore.currentKey + 1) | 0, System.Windows.Forms.PropertyStore.currentKey = $t, $t));
                }
            }
        },
        fields: {
            intEntries: null,
            objEntries: null
        },
        methods: {
            ContainsInteger: function (key) {
                var flag = { };
                this.GetInteger$1(key, flag);
                return flag.v;
            },
            ContainsObject: function (key) {
                var flag = { };
                this.GetObject$1(key, flag);
                return flag.v;
            },
            Debug_VerifyLocateIntegerEntry: function (index, entryKey, length) {
                var num = (length - 1) | 0;
                var num2 = 0;
                var num3 = 0;
                do {
                    num3 = (Bridge.Int.div((((num + num2) | 0)), 2)) | 0;
                    var key = this.intEntries[System.Array.index(num3, this.intEntries)].Key;
                    if (key !== entryKey) {
                        if (entryKey < key) {
                            num = (num3 - 1) | 0;
                        } else {
                            num2 = (num3 + 1) | 0;
                        }
                    }
                } while (num >= num2);
                if (entryKey > this.intEntries[System.Array.index(num3, this.intEntries)].Key) {
                    num3 = (num3 + 1) | 0;
                }
            },
            Debug_VerifyLocateObjectEntry: function (index, entryKey, length) {
                var num = (length - 1) | 0;
                var num2 = 0;
                var num3 = 0;
                do {
                    num3 = (Bridge.Int.div((((num + num2) | 0)), 2)) | 0;
                    var key = this.objEntries[System.Array.index(num3, this.objEntries)].Key;
                    if (key !== entryKey) {
                        if (entryKey < key) {
                            num = (num3 - 1) | 0;
                        } else {
                            num2 = (num3 + 1) | 0;
                        }
                    }
                } while (num >= num2);
                if (entryKey > this.objEntries[System.Array.index(num3, this.objEntries)].Key) {
                    num3 = (num3 + 1) | 0;
                }
            },
            GetColor: function (key) {
                var flag = { };
                return this.GetColor$1(key, flag);
            },
            GetColor$1: function (key, found) {
                var obj2 = this.GetObject$1(key, found);
                if (found.v) {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.ColorWrapper);
                    if (wrapper != null) {
                        return wrapper.Color.$clone();
                    }
                }
                found.v = false;
                return System.Drawing.Color.Empty.$clone();
            },
            GetInteger: function (key) {
                var flag = { };
                return this.GetInteger$1(key, flag);
            },
            GetInteger$1: function (key, found) {
                var num2 = { };
                var num3 = { };
                var entryKey = this.SplitKey(key, num3);
                found.v = false;
                if (this.LocateIntegerEntry(entryKey, num2) && ((((1) << num3.v) & this.intEntries[System.Array.index(num2.v, this.intEntries)].Mask) !== 0)) {
                    found.v = true;
                    switch (num3.v) {
                        case 0: 
                            return this.intEntries[System.Array.index(num2.v, this.intEntries)].Value1;
                        case 1: 
                            return this.intEntries[System.Array.index(num2.v, this.intEntries)].Value2;
                        case 2: 
                            return this.intEntries[System.Array.index(num2.v, this.intEntries)].Value3;
                        case 3: 
                            return this.intEntries[System.Array.index(num2.v, this.intEntries)].Value4;
                    }
                }
                return 0;
            },
            GetObject: function (key) {
                var flag = { };
                return this.GetObject$1(key, flag);
            },
            GetObject$1: function (key, found) {
                var num = { };
                var num2 = { };
                var entryKey = this.SplitKey(key, num2);
                found.v = false;
                if (this.LocateObjectEntry(entryKey, num) && ((((1) << num2.v) & this.objEntries[System.Array.index(num.v, this.objEntries)].Mask) !== 0)) {
                    found.v = true;
                    switch (num2.v) {
                        case 0: 
                            return this.objEntries[System.Array.index(num.v, this.objEntries)].Value1;
                        case 1: 
                            return this.objEntries[System.Array.index(num.v, this.objEntries)].Value2;
                        case 2: 
                            return this.objEntries[System.Array.index(num.v, this.objEntries)].Value3;
                        case 3: 
                            return this.objEntries[System.Array.index(num.v, this.objEntries)].Value4;
                    }
                }
                return null;
            },
            GetPadding: function (key) {
                var flag = { };
                return this.GetPadding$1(key, flag);
            },
            GetPadding$1: function (key, found) {
                var obj2 = this.GetObject$1(key, found);
                if (found.v) {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.PaddingWrapper);
                    if (wrapper != null) {
                        return wrapper.Padding.$clone();
                    }
                }
                found.v = false;
                return System.Windows.Forms.Padding.Empty.$clone();
            },
            GetRectangle: function (key) {
                var flag = { };
                return this.GetRectangle$1(key, flag);
            },
            GetRectangle$1: function (key, found) {
                var obj2 = this.GetObject$1(key, found);
                if (found.v) {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.RectangleWrapper);
                    if (wrapper != null) {
                        return wrapper.Rectangle.$clone();
                    }
                }
                found.v = false;
                return System.Drawing.Rectangle.Empty.$clone();
            },
            GetSize: function (key, found) {
                var obj2 = this.GetObject$1(key, found);
                if (found.v) {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.SizeWrapper);
                    if (wrapper != null) {
                        return wrapper.Size.$clone();
                    }
                }
                found.v = false;
                return System.Drawing.Size.Empty.$clone();
            },
            LocateIntegerEntry: function (entryKey, index) {
                if (this.intEntries != null) {
                    var length = this.intEntries.length;
                    if (length <= 16) {
                        index.v = 0;
                        var num2 = (Bridge.Int.div(length, 2)) | 0;
                        if (this.intEntries[System.Array.index(num2, this.intEntries)].Key <= entryKey) {
                            index.v = num2;
                        }
                        if (this.intEntries[System.Array.index(index.v, this.intEntries)].Key === entryKey) {
                            return true;
                        }
                        num2 = (Bridge.Int.div((((length + 1) | 0)), 4)) | 0;
                        if (this.intEntries[System.Array.index(((index.v + num2) | 0), this.intEntries)].Key <= entryKey) {
                            index.v = (index.v + num2) | 0;
                            if (this.intEntries[System.Array.index(index.v, this.intEntries)].Key === entryKey) {
                                return true;
                            }
                        }
                        num2 = (Bridge.Int.div((((length + 3) | 0)), 8)) | 0;
                        if (this.intEntries[System.Array.index(((index.v + num2) | 0), this.intEntries)].Key <= entryKey) {
                            index.v = (index.v + num2) | 0;
                            if (this.intEntries[System.Array.index(index.v, this.intEntries)].Key === entryKey) {
                                return true;
                            }
                        }
                        num2 = (Bridge.Int.div((((length + 7) | 0)), 16)) | 0;
                        if (this.intEntries[System.Array.index(((index.v + num2) | 0), this.intEntries)].Key <= entryKey) {
                            index.v = (index.v + num2) | 0;
                            if (this.intEntries[System.Array.index(index.v, this.intEntries)].Key === entryKey) {
                                return true;
                            }
                        }
                        if (entryKey > this.intEntries[System.Array.index(index.v, this.intEntries)].Key) {
                            index.v = (index.v + 1) | 0;
                        }
                        return false;
                    }
                    var num3 = (length - 1) | 0;
                    var num4 = 0;
                    var num5 = 0;
                    do {
                        num5 = (Bridge.Int.div((((num3 + num4) | 0)), 2)) | 0;
                        var key = this.intEntries[System.Array.index(num5, this.intEntries)].Key;
                        if (key === entryKey) {
                            index.v = num5;
                            return true;
                        }
                        if (entryKey < key) {
                            num3 = (num5 - 1) | 0;
                        } else {
                            num4 = (num5 + 1) | 0;
                        }
                    } while (num3 >= num4);
                    index.v = num5;
                    if (entryKey > this.intEntries[System.Array.index(num5, this.intEntries)].Key) {
                        index.v = (index.v + 1) | 0;
                    }
                    return false;
                }
                index.v = 0;
                return false;
            },
            LocateObjectEntry: function (entryKey, index) {
                if (this.objEntries != null) {
                    var length = this.objEntries.length;
                    if (length <= 16) {
                        index.v = 0;
                        var num2 = (Bridge.Int.div(length, 2)) | 0;
                        if (this.objEntries[System.Array.index(num2, this.objEntries)].Key <= entryKey) {
                            index.v = num2;
                        }
                        if (this.objEntries[System.Array.index(index.v, this.objEntries)].Key === entryKey) {
                            return true;
                        }
                        num2 = (Bridge.Int.div((((length + 1) | 0)), 4)) | 0;
                        if (this.objEntries[System.Array.index(((index.v + num2) | 0), this.objEntries)].Key <= entryKey) {
                            index.v = (index.v + num2) | 0;
                            if (this.objEntries[System.Array.index(index.v, this.objEntries)].Key === entryKey) {
                                return true;
                            }
                        }
                        num2 = (Bridge.Int.div((((length + 3) | 0)), 8)) | 0;
                        if (this.objEntries[System.Array.index(((index.v + num2) | 0), this.objEntries)].Key <= entryKey) {
                            index.v = (index.v + num2) | 0;
                            if (this.objEntries[System.Array.index(index.v, this.objEntries)].Key === entryKey) {
                                return true;
                            }
                        }
                        num2 = (Bridge.Int.div((((length + 7) | 0)), 16)) | 0;
                        if (this.objEntries[System.Array.index(((index.v + num2) | 0), this.objEntries)].Key <= entryKey) {
                            index.v = (index.v + num2) | 0;
                            if (this.objEntries[System.Array.index(index.v, this.objEntries)].Key === entryKey) {
                                return true;
                            }
                        }
                        if (entryKey > this.objEntries[System.Array.index(index.v, this.objEntries)].Key) {
                            index.v = (index.v + 1) | 0;
                        }
                        return false;
                    }
                    var num3 = (length - 1) | 0;
                    var num4 = 0;
                    var num5 = 0;
                    do {
                        num5 = (Bridge.Int.div((((num3 + num4) | 0)), 2)) | 0;
                        var key = this.objEntries[System.Array.index(num5, this.objEntries)].Key;
                        if (key === entryKey) {
                            index.v = num5;
                            return true;
                        }
                        if (entryKey < key) {
                            num3 = (num5 - 1) | 0;
                        } else {
                            num4 = (num5 + 1) | 0;
                        }
                    } while (num3 >= num4);
                    index.v = num5;
                    if (entryKey > this.objEntries[System.Array.index(num5, this.objEntries)].Key) {
                        index.v = (index.v + 1) | 0;
                    }
                    return false;
                }
                index.v = 0;
                return false;
            },
            RemoveInteger: function (key) {
                var num = { };
                var num2 = { };
                var entryKey = this.SplitKey(key, num2);
                if (this.LocateIntegerEntry(entryKey, num) && ((((1) << num2.v) & this.intEntries[System.Array.index(num.v, this.intEntries)].Mask) !== 0)) {
                    this.intEntries[System.Array.index(num.v, this.intEntries)].Mask = Bridge.Int.sxs((this.intEntries[System.Array.index(num.v, this.intEntries)].Mask & ~(Bridge.Int.sxs(((1) << num2.v) & 65535))) & 65535);
                    if (this.intEntries[System.Array.index(num.v, this.intEntries)].Mask === 0) {
                        var destinationArray = System.Array.init(((this.intEntries.length - 1) | 0), function (){
                            return new System.Windows.Forms.PropertyStore.IntegerEntry();
                        }, System.Windows.Forms.PropertyStore.IntegerEntry);
                        if (num.v > 0) {
                            System.Array.copy(this.intEntries, 0, destinationArray, 0, num.v);
                        }
                        if (num.v < destinationArray.length) {
                            System.Array.copy(this.intEntries, ((num.v + 1) | 0), destinationArray, num.v, (((((this.intEntries.length - num.v) | 0)) - 1) | 0));
                        }
                        this.intEntries = destinationArray;
                    } else {
                        switch (num2.v) {
                            case 0: 
                                this.intEntries[System.Array.index(num.v, this.intEntries)].Value1 = 0;
                                return;
                            case 1: 
                                this.intEntries[System.Array.index(num.v, this.intEntries)].Value2 = 0;
                                return;
                            case 2: 
                                this.intEntries[System.Array.index(num.v, this.intEntries)].Value3 = 0;
                                return;
                            case 3: 
                                this.intEntries[System.Array.index(num.v, this.intEntries)].Value4 = 0;
                                return;
                        }
                    }
                }
            },
            RemoveObject: function (key) {
                var num = { };
                var num2 = { };
                var entryKey = this.SplitKey(key, num2);
                if (this.LocateObjectEntry(entryKey, num) && ((((1) << num2.v) & this.objEntries[System.Array.index(num.v, this.objEntries)].Mask) !== 0)) {
                    this.objEntries[System.Array.index(num.v, this.objEntries)].Mask = Bridge.Int.sxs((this.objEntries[System.Array.index(num.v, this.objEntries)].Mask & ~(Bridge.Int.sxs(((1) << num2.v) & 65535))) & 65535);
                    if (this.objEntries[System.Array.index(num.v, this.objEntries)].Mask === 0) {
                        if (this.objEntries.length === 1) {
                            this.objEntries = null;
                        } else {
                            var destinationArray = System.Array.init(((this.objEntries.length - 1) | 0), function (){
                                return new System.Windows.Forms.PropertyStore.ObjectEntry();
                            }, System.Windows.Forms.PropertyStore.ObjectEntry);
                            if (num.v > 0) {
                                System.Array.copy(this.objEntries, 0, destinationArray, 0, num.v);
                            }
                            if (num.v < destinationArray.length) {
                                System.Array.copy(this.objEntries, ((num.v + 1) | 0), destinationArray, num.v, (((((this.objEntries.length - num.v) | 0)) - 1) | 0));
                            }
                            this.objEntries = destinationArray;
                        }
                    } else {
                        switch (num2.v) {
                            case 0: 
                                this.objEntries[System.Array.index(num.v, this.objEntries)].Value1 = null;
                                return;
                            case 1: 
                                this.objEntries[System.Array.index(num.v, this.objEntries)].Value2 = null;
                                return;
                            case 2: 
                                this.objEntries[System.Array.index(num.v, this.objEntries)].Value3 = null;
                                return;
                            case 3: 
                                this.objEntries[System.Array.index(num.v, this.objEntries)].Value4 = null;
                                return;
                        }
                    }
                }
            },
            SetColor: function (key, value) {
                var flag = { };
                var obj2 = this.GetObject$1(key, flag);
                if (!flag.v) {
                    this.SetObject(key, new System.Windows.Forms.PropertyStore.ColorWrapper(value.$clone()));
                } else {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.ColorWrapper);
                    if (wrapper != null) {
                        wrapper.Color = value.$clone();
                    } else {
                        this.SetObject(key, new System.Windows.Forms.PropertyStore.ColorWrapper(value.$clone()));
                    }
                }
            },
            SetInteger: function (key, value) {
                var num = { };
                var num2 = { };
                var entryKey = this.SplitKey(key, num2);
                if (!this.LocateIntegerEntry(entryKey, num)) {
                    if (this.intEntries != null) {
                        var destinationArray = System.Array.init(((this.intEntries.length + 1) | 0), function (){
                            return new System.Windows.Forms.PropertyStore.IntegerEntry();
                        }, System.Windows.Forms.PropertyStore.IntegerEntry);
                        if (num.v > 0) {
                            System.Array.copy(this.intEntries, 0, destinationArray, 0, num.v);
                        }
                        if ((((this.intEntries.length - num.v) | 0)) > 0) {
                            System.Array.copy(this.intEntries, num.v, destinationArray, ((num.v + 1) | 0), ((this.intEntries.length - num.v) | 0));
                        }
                        this.intEntries = destinationArray;
                    } else {
                        this.intEntries = System.Array.init(1, function (){
                            return new System.Windows.Forms.PropertyStore.IntegerEntry();
                        }, System.Windows.Forms.PropertyStore.IntegerEntry);
                    }
                    this.intEntries[System.Array.index(num.v, this.intEntries)].Key = entryKey;
                }
                switch (num2.v) {
                    case 0: 
                        this.intEntries[System.Array.index(num.v, this.intEntries)].Value1 = value;
                        break;
                    case 1: 
                        this.intEntries[System.Array.index(num.v, this.intEntries)].Value2 = value;
                        break;
                    case 2: 
                        this.intEntries[System.Array.index(num.v, this.intEntries)].Value3 = value;
                        break;
                    case 3: 
                        this.intEntries[System.Array.index(num.v, this.intEntries)].Value4 = value;
                        break;
                }
                this.intEntries[System.Array.index(num.v, this.intEntries)].Mask = Bridge.Int.sxs((((1) << num2.v) | ((this.intEntries[System.Array.index(num.v, this.intEntries)].Mask) & 65535)) & 65535);
            },
            SetObject: function (key, value) {
                var num = { };
                var num2 = { };
                var entryKey = this.SplitKey(key, num2);
                if (!this.LocateObjectEntry(entryKey, num)) {
                    if (this.objEntries != null) {
                        var destinationArray = System.Array.init(((this.objEntries.length + 1) | 0), function (){
                            return new System.Windows.Forms.PropertyStore.ObjectEntry();
                        }, System.Windows.Forms.PropertyStore.ObjectEntry);
                        if (num.v > 0) {
                            System.Array.copy(this.objEntries, 0, destinationArray, 0, num.v);
                        }
                        if ((((this.objEntries.length - num.v) | 0)) > 0) {
                            System.Array.copy(this.objEntries, num.v, destinationArray, ((num.v + 1) | 0), ((this.objEntries.length - num.v) | 0));
                        }
                        this.objEntries = destinationArray;
                    } else {
                        this.objEntries = System.Array.init(1, function (){
                            return new System.Windows.Forms.PropertyStore.ObjectEntry();
                        }, System.Windows.Forms.PropertyStore.ObjectEntry);
                    }
                    this.objEntries[System.Array.index(num.v, this.objEntries)].Key = entryKey;
                }
                switch (num2.v) {
                    case 0: 
                        this.objEntries[System.Array.index(num.v, this.objEntries)].Value1 = value;
                        break;
                    case 1: 
                        this.objEntries[System.Array.index(num.v, this.objEntries)].Value2 = value;
                        break;
                    case 2: 
                        this.objEntries[System.Array.index(num.v, this.objEntries)].Value3 = value;
                        break;
                    case 3: 
                        this.objEntries[System.Array.index(num.v, this.objEntries)].Value4 = value;
                        break;
                }
                this.objEntries[System.Array.index(num.v, this.objEntries)].Mask = Bridge.Int.sxs((((this.objEntries[System.Array.index(num.v, this.objEntries)].Mask) & 65535) | ((1) << num2.v)) & 65535);
            },
            SetPadding: function (key, value) {
                var flag = { };
                var obj2 = this.GetObject$1(key, flag);
                if (!flag.v) {
                    this.SetObject(key, new System.Windows.Forms.PropertyStore.PaddingWrapper(value.$clone()));
                } else {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.PaddingWrapper);
                    if (wrapper != null) {
                        wrapper.Padding = value.$clone();
                    } else {
                        this.SetObject(key, new System.Windows.Forms.PropertyStore.PaddingWrapper(value.$clone()));
                    }
                }
            },
            SetRectangle: function (key, value) {
                var flag = { };
                var obj2 = this.GetObject$1(key, flag);
                if (!flag.v) {
                    this.SetObject(key, new System.Windows.Forms.PropertyStore.RectangleWrapper(value.$clone()));
                } else {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.RectangleWrapper);
                    if (wrapper != null) {
                        wrapper.Rectangle = value.$clone();
                    } else {
                        this.SetObject(key, new System.Windows.Forms.PropertyStore.RectangleWrapper(value.$clone()));
                    }
                }
            },
            SetSize: function (key, value) {
                var flag = { };
                var obj2 = this.GetObject$1(key, flag);
                if (!flag.v) {
                    this.SetObject(key, new System.Windows.Forms.PropertyStore.SizeWrapper(value.$clone()));
                } else {
                    var wrapper = Bridge.as(obj2, System.Windows.Forms.PropertyStore.SizeWrapper);
                    if (wrapper != null) {
                        wrapper.Size = value.$clone();
                    } else {
                        this.SetObject(key, new System.Windows.Forms.PropertyStore.SizeWrapper(value.$clone()));
                    }
                }
            },
            SplitKey: function (key, element) {
                element.v = Bridge.Int.sxs((key & 3) & 65535);
                return System.Int64.clip16(System.Int64(key).and(System.Int64([-4,0])));
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore.ColorWrapper", {
        $kind: "nested class",
        fields: {
            Color: null
        },
        ctors: {
            init: function () {
                this.Color = new System.Drawing.Color();
            },
            ctor: function (color) {
                this.$initialize();
                this.Color = color.$clone();
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore.IntegerEntry", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Windows.Forms.PropertyStore.IntegerEntry(); }
            }
        },
        fields: {
            Key: 0,
            Mask: 0,
            Value1: 0,
            Value2: 0,
            Value3: 0,
            Value4: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([4904798238, this.Key, this.Mask, this.Value1, this.Value2, this.Value3, this.Value4]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Windows.Forms.PropertyStore.IntegerEntry)) {
                    return false;
                }
                return Bridge.equals(this.Key, o.Key) && Bridge.equals(this.Mask, o.Mask) && Bridge.equals(this.Value1, o.Value1) && Bridge.equals(this.Value2, o.Value2) && Bridge.equals(this.Value3, o.Value3) && Bridge.equals(this.Value4, o.Value4);
            },
            $clone: function (to) {
                var s = to || new System.Windows.Forms.PropertyStore.IntegerEntry();
                s.Key = this.Key;
                s.Mask = this.Mask;
                s.Value1 = this.Value1;
                s.Value2 = this.Value2;
                s.Value3 = this.Value3;
                s.Value4 = this.Value4;
                return s;
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore.ObjectEntry", {
        $kind: "nested struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Windows.Forms.PropertyStore.ObjectEntry(); }
            }
        },
        fields: {
            Key: 0,
            Mask: 0,
            Value1: null,
            Value2: null,
            Value3: null,
            Value4: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([3559475494, this.Key, this.Mask, this.Value1, this.Value2, this.Value3, this.Value4]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, System.Windows.Forms.PropertyStore.ObjectEntry)) {
                    return false;
                }
                return Bridge.equals(this.Key, o.Key) && Bridge.equals(this.Mask, o.Mask) && Bridge.equals(this.Value1, o.Value1) && Bridge.equals(this.Value2, o.Value2) && Bridge.equals(this.Value3, o.Value3) && Bridge.equals(this.Value4, o.Value4);
            },
            $clone: function (to) {
                var s = to || new System.Windows.Forms.PropertyStore.ObjectEntry();
                s.Key = this.Key;
                s.Mask = this.Mask;
                s.Value1 = this.Value1;
                s.Value2 = this.Value2;
                s.Value3 = this.Value3;
                s.Value4 = this.Value4;
                return s;
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore.PaddingWrapper", {
        $kind: "nested class",
        fields: {
            Padding: null
        },
        ctors: {
            init: function () {
                this.Padding = new System.Windows.Forms.Padding();
            },
            ctor: function (padding) {
                this.$initialize();
                this.Padding = padding.$clone();
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore.RectangleWrapper", {
        $kind: "nested class",
        fields: {
            Rectangle: null
        },
        ctors: {
            init: function () {
                this.Rectangle = new System.Drawing.Rectangle();
            },
            ctor: function (rectangle) {
                this.$initialize();
                this.Rectangle = rectangle.$clone();
            }
        }
    });

    Bridge.define("System.Windows.Forms.PropertyStore.SizeWrapper", {
        $kind: "nested class",
        fields: {
            Size: null
        },
        ctors: {
            init: function () {
                this.Size = new System.Drawing.Size();
            },
            ctor: function (size) {
                this.$initialize();
                this.Size = size.$clone();
            }
        }
    });

    Bridge.define("System.Windows.Forms.SR", {
        statics: {
            methods: {
                GetString: function (name, args) {
                    if (args === void 0) { args = []; }
                    return name;
                }
            }
        }
    });

    Bridge.define("System.Windows.Forms.TextFormatFlags", {
        $kind: "enum",
        statics: {
            fields: {
                Bottom: 8,
                Default: 0,
                EndEllipsis: 32768,
                ExpandTabs: 64,
                ExternalLeading: 512,
                GlyphOverhangPadding: 0,
                HidePrefix: 1048576,
                HorizontalCenter: 1,
                Internal: 4096,
                Left: 0,
                LeftAndRightPadding: 536870912,
                ModifyString: 65536,
                NoClipping: 256,
                NoFullWidthCharacterBreak: 524288,
                NoPadding: 268435456,
                NoPrefix: 2048,
                PathEllipsis: 16384,
                PrefixOnly: 2097152,
                PreserveGraphicsClipping: 16777216,
                PreserveGraphicsTranslateTransform: 33554432,
                Right: 2,
                RightToLeft: 131072,
                SingleLine: 32,
                TextBoxControl: 8192,
                Top: 0,
                VerticalCenter: 4,
                WordBreak: 16,
                WordEllipsis: 262144
            }
        },
        $flags: true
    });

    Bridge.define("System.Windows.Forms.TextImageRelation", {
        $kind: "enum",
        statics: {
            fields: {
                ImageAboveText: 1,
                ImageBeforeText: 4,
                Overlay: 0,
                TextAboveImage: 2,
                TextBeforeImage: 8
            }
        }
    });

    Bridge.define("System.Windows.Forms.TextRenderer", {
        statics: {
            methods: {
                MeasureText: function (text, font, proposedSize, flags) {
                    throw new System.NotImplementedException.ctor();
                    //if (string.IsNullOrEmpty(text))
                    //{
                    //    return Size.Empty;
                    //}
                    //using (WindowsFont font2 = WindowsGraphicsCacheManager.GetWindowsFont(font))
                    //{
                    //    return WindowsGraphicsCacheManager.MeasurementGraphics.MeasureText(text, font2, proposedSize, GetIntTextFormatFlags(flags));
                    //}
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        }
    });

    Bridge.define("System.Windows.Forms.WindowsFormsUtils", {
        statics: {
            methods: {
                RotateLeft: function (value, nBits) {
                    nBits = nBits % 32;
                    return ((value << nBits) | (value >> (((32 - nBits) | 0))));
                }
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

    Bridge.define("System.Collections.ArrayList.FixedSizeArrayList", {
        inherits: [System.Collections.ArrayList],
        $kind: "nested class",
        fields: {
            _list: null
        },
        props: {
            Capacity: {
                get: function () {
                    return this._list.Capacity;
                },
                set: function (value) {
                    throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
                }
            },
            Count: {
                get: function () {
                    return this._list.Count;
                }
            },
            IsFixedSize: {
                get: function () {
                    return true;
                }
            },
            IsReadOnly: {
                get: function () {
                    return this._list.IsReadOnly;
                }
            },
            IsSynchronized: {
                get: function () {
                    return this._list.IsSynchronized;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._list.SyncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (l) {
                this.$initialize();
                System.Collections.ArrayList.ctor.call(this);
                this._list = l;
                this._version = this._list._version;
            }
        },
        methods: {
            getItem: function (index) {
                return this._list.getItem(index);
            },
            setItem: function (index, value) {
                this._list.setItem(index, value);
                this._version = this._list._version;
            },
            add: function (obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            AddRange: function (c) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            BinarySearch: function (index, count, value, comparer) {
                return this._list.BinarySearch(index, count, value, comparer);
            },
            clear: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            clone: function () {
                var $t;
                return ($t = new System.Collections.ArrayList.FixedSizeArrayList(this._list), $t._list = Bridge.cast(this._list.clone(), System.Collections.ArrayList), $t);
            },
            contains: function (obj) {
                return this._list.contains(obj);
            },
            copyTo: function (array, index) {
                this._list.copyTo(array, index);
            },
            CopyTo$1: function (index, array, arrayIndex, count) {
                this._list.CopyTo$1(index, array, arrayIndex, count);
            },
            GetEnumerator: function () {
                return this._list.GetEnumerator();
            },
            GetEnumerator$1: function (index, count) {
                return this._list.GetEnumerator$1(index, count);
            },
            GetRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this.Count - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return new System.Collections.ArrayList.Range(this, index, count);
            },
            indexOf: function (value) {
                return this._list.indexOf(value);
            },
            IndexOf: function (value, startIndex) {
                return this._list.IndexOf(value, startIndex);
            },
            IndexOf$1: function (value, startIndex, count) {
                return this._list.IndexOf$1(value, startIndex, count);
            },
            insert: function (index, obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            InsertRange: function (index, c) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            LastIndexOf: function (value) {
                return this._list.LastIndexOf(value);
            },
            LastIndexOf$1: function (value, startIndex) {
                return this._list.LastIndexOf$1(value, startIndex);
            },
            LastIndexOf$2: function (value, startIndex, count) {
                return this._list.LastIndexOf$2(value, startIndex, count);
            },
            remove: function (value) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            removeAt: function (index) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            RemoveRange: function (index, count) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            },
            Reverse$1: function (index, count) {
                this._list.Reverse$1(index, count);
                this._version = this._list._version;
            },
            SetRange: function (index, c) {
                this._list.SetRange(index, c);
                this._version = this._list._version;
            },
            Sort$2: function (index, count, comparer) {
                this._list.Sort$2(index, count, comparer);
                this._version = this._list._version;
            },
            ToArray$1: function () {
                return this._list.ToArray$1();
            },
            ToArray: function (type) {
                return this._list.ToArray(type);
            },
            TrimToSize: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.IListWrapper", {
        inherits: [System.Collections.ArrayList],
        $kind: "nested class",
        fields: {
            _list: null
        },
        props: {
            Capacity: {
                get: function () {
                    return System.Array.getCount(this._list);
                },
                set: function (value) {
                    if (value < this.Count) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("value", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_SmallCapacity"));
                    }
                }
            },
            Count: {
                get: function () {
                    return System.Array.getCount(this._list);
                }
            },
            IsFixedSize: {
                get: function () {
                    return this._list.System$Collections$IList$IsFixedSize;
                }
            },
            IsReadOnly: {
                get: function () {
                    return System.Array.getIsReadOnly(this._list);
                }
            },
            IsSynchronized: {
                get: function () {
                    return this._list.System$Collections$ICollection$IsSynchronized;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._list.System$Collections$ICollection$SyncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                System.Collections.ArrayList.ctor.call(this);
                this._list = list;
                this._version = 0;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this._list, index);
            },
            setItem: function (index, value) {
                System.Array.setItem(this._list, index, value);
                this._version = (this._version + 1) | 0;
            },
            add: function (obj) {
                var num = System.Array.add(this._list, obj);
                this._version = (this._version + 1) | 0;
                return num;
            },
            AddRange: function (c) {
                this.InsertRange(this.Count, c);
            },
            BinarySearch: function (index, count, value, comparer) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this.Count - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                if (comparer == null) {
                    comparer = new (System.Collections.Generic.Comparer$1(System.Object))(System.Collections.Generic.Comparer$1.$default.fn);
                }
                var num = index;
                var num2 = ((((index + count) | 0)) - 1) | 0;
                while (num <= num2) {
                    var num3 = (Bridge.Int.div((((num + num2) | 0)), 2)) | 0;
                    var num4 = comparer[Bridge.geti(comparer, "System$Collections$Generic$IComparer$1$System$Object$compare", "System$Collections$Generic$IComparer$1$compare")](value, System.Array.getItem(this._list, num3));
                    if (num4 === 0) {
                        return num3;
                    }
                    if (num4 < 0) {
                        num2 = (num3 - 1) | 0;
                    } else {
                        num = (num3 + 1) | 0;
                    }
                }
                return ~num;
            },
            clear: function () {
                if (this._list.System$Collections$IList$IsFixedSize) {
                    throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_FixedSizeCollection"));
                }
                System.Array.clear(this._list);
                this._version = (this._version + 1) | 0;
            },
            clone: function () {
                return new System.Collections.ArrayList.IListWrapper(this._list);
            },
            contains: function (obj) {
                return System.Array.contains(this._list, obj);
            },
            copyTo: function (array, index) {
                System.Array.copyTo(this._list, array, index);
            },
            CopyTo$1: function (index, array, arrayIndex, count) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if ((index < 0) || (arrayIndex < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "arrayIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (count < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((array.length - arrayIndex) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Arg_RankMultiDimNotSupported"));
                }
                if ((((System.Array.getCount(this._list) - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                for (var i = index; i < (((index + count) | 0)); i = (i + 1) | 0) {
                    System.Array.set(array, System.Array.getItem(this._list, i), Bridge.identity(arrayIndex, (arrayIndex = (arrayIndex + 1) | 0)));
                }
            },
            GetEnumerator: function () {
                return Bridge.getEnumerator(this._list);
            },
            GetEnumerator$1: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((System.Array.getCount(this._list) - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return new System.Collections.ArrayList.IListWrapper.IListWrapperEnumWrapper.$ctor1(this, index, count);
            },
            GetRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((System.Array.getCount(this._list) - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return new System.Collections.ArrayList.Range(this, index, count);
            },
            indexOf: function (value) {
                return System.Array.indexOf(this._list, value, 0, null);
            },
            IndexOf: function (value, startIndex) {
                return this.IndexOf$1(value, startIndex, ((System.Array.getCount(this._list) - startIndex) | 0));
            },
            IndexOf$1: function (value, startIndex, count) {
                if ((startIndex < 0) || (startIndex > this.Count)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if ((count < 0) || (startIndex > (((this.Count - count) | 0)))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Count"));
                }
                var num = (startIndex + count) | 0;
                if (value == null) {
                    for (var j = startIndex; j < num; j = (j + 1) | 0) {
                        if (System.Array.getItem(this._list, j) == null) {
                            return j;
                        }
                    }
                    return -1;
                }
                for (var i = startIndex; i < num; i = (i + 1) | 0) {
                    if ((System.Array.getItem(this._list, i) != null) && Bridge.equals(System.Array.getItem(this._list, i), value)) {
                        return i;
                    }
                }
                return -1;
            },
            insert: function (index, obj) {
                System.Array.insert(this._list, index, obj);
                this._version = (this._version + 1) | 0;
            },
            InsertRange: function (index, c) {
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor3("c", System.EnvironmentV2.GetResourceString("ArgumentNull_Collection"));
                }
                if ((index < 0) || (index > this.Count)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if (System.Array.getCount(c) > 0) {
                    var list = Bridge.as(this._list, System.Collections.ArrayList);
                    if (list != null) {
                        list.InsertRange(index, c);
                    } else {
                        var enumerator = Bridge.getEnumerator(c);
                        while (enumerator.System$Collections$IEnumerator$moveNext()) {
                            System.Array.insert(this._list, Bridge.identity(index, (index = (index + 1) | 0)), enumerator.System$Collections$IEnumerator$Current);
                        }
                    }
                    this._version = (this._version + 1) | 0;
                }
            },
            LastIndexOf: function (value) {
                return this.LastIndexOf$2(value, ((System.Array.getCount(this._list) - 1) | 0), System.Array.getCount(this._list));
            },
            LastIndexOf$1: function (value, startIndex) {
                return this.LastIndexOf$2(value, startIndex, ((startIndex + 1) | 0));
            },
            LastIndexOf$2: function (value, startIndex, count) {
                if (System.Array.getCount(this._list) !== 0) {
                    if ((startIndex < 0) || (startIndex >= System.Array.getCount(this._list))) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                    }
                    if ((count < 0) || (count > (((startIndex + 1) | 0)))) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Count"));
                    }
                    var num = ((((startIndex - count) | 0)) + 1) | 0;
                    if (value == null) {
                        for (var j = startIndex; j >= num; j = (j - 1) | 0) {
                            if (System.Array.getItem(this._list, j) == null) {
                                return j;
                            }
                        }
                        return -1;
                    }
                    for (var i = startIndex; i >= num; i = (i - 1) | 0) {
                        if ((System.Array.getItem(this._list, i) != null) && Bridge.equals(System.Array.getItem(this._list, i), value)) {
                            return i;
                        }
                    }
                }
                return -1;
            },
            remove: function (value) {
                var index = this.indexOf(value);
                if (index >= 0) {
                    this.removeAt(index);
                }
            },
            removeAt: function (index) {
                this._list.System$Collections$IList$removeAt(index);
                this._version = (this._version + 1) | 0;
            },
            RemoveRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((System.Array.getCount(this._list) - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                if (count > 0) {
                    this._version = (this._version + 1) | 0;
                }
                while (count > 0) {
                    this._list.System$Collections$IList$removeAt(index);
                    count = (count - 1) | 0;
                }
            },
            Reverse$1: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((System.Array.getCount(this._list) - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                var num = index;
                var num2 = ((((index + count) | 0)) - 1) | 0;
                while (num < num2) {
                    var obj2 = System.Array.getItem(this._list, num);
                    System.Array.setItem(this._list, Bridge.identity(num, (num = (num + 1) | 0)), System.Array.getItem(this._list, num2));
                    System.Array.setItem(this._list, Bridge.identity(num2, (num2 = (num2 - 1) | 0)), obj2);
                }
                this._version = (this._version + 1) | 0;
            },
            SetRange: function (index, c) {
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor3("c", System.EnvironmentV2.GetResourceString("ArgumentNull_Collection"));
                }
                if ((index < 0) || (index > (((System.Array.getCount(this._list) - System.Array.getCount(c)) | 0)))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if (System.Array.getCount(c) > 0) {
                    var enumerator = Bridge.getEnumerator(c);
                    while (enumerator.System$Collections$IEnumerator$moveNext()) {
                        System.Array.setItem(this._list, Bridge.identity(index, (index = (index + 1) | 0)), enumerator.System$Collections$IEnumerator$Current);
                    }
                    this._version = (this._version + 1) | 0;
                }
            },
            Sort$2: function (index, count, comparer) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((System.Array.getCount(this._list) - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                var array = System.Array.init(count, null, System.Object);
                this.CopyTo$1(index, array, 0, count);
                System.Array.sort(array, 0, count, comparer);
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    System.Array.setItem(this._list, ((i + index) | 0), array[System.Array.index(i, array)]);
                }
                this._version = (this._version + 1) | 0;
            },
            ToArray$1: function () {
                var array = System.Array.init(this.Count, null, System.Object);
                System.Array.copyTo(this._list, array, 0);
                return array;
            },
            ToArray: function (type) {
                if (type == null) {
                    throw new System.ArgumentNullException.$ctor1("type");
                }
                var array = System.Array.init(System.Array.getCount(this._list), Bridge.getDefaultValue(type), type);
                System.Array.copyTo(this._list, array, 0);
                return array;
            },
            TrimToSize: function () { }
        }
    });

    Bridge.define("System.Collections.ArrayList.Range", {
        inherits: [System.Collections.ArrayList],
        $kind: "nested class",
        fields: {
            _baseIndex: 0,
            _baseList: null,
            _baseSize: 0,
            _baseVersion: 0
        },
        props: {
            Capacity: {
                get: function () {
                    return this._baseList.Capacity;
                },
                set: function (value) {
                    if (value < this.Count) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("value", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_SmallCapacity"));
                    }
                }
            },
            Count: {
                get: function () {
                    this.InternalUpdateRange();
                    return this._baseSize;
                }
            },
            IsFixedSize: {
                get: function () {
                    return this._baseList.IsFixedSize;
                }
            },
            IsReadOnly: {
                get: function () {
                    return this._baseList.IsReadOnly;
                }
            },
            IsSynchronized: {
                get: function () {
                    return this._baseList.IsSynchronized;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._baseList.SyncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (list, index, count) {
                this.$initialize();
                System.Collections.ArrayList.$ctor1.call(this, false);
                this._baseList = list;
                this._baseIndex = index;
                this._baseSize = count;
                this._baseVersion = list._version;
                this._version = list._version;
            }
        },
        methods: {
            getItem: function (index) {
                this.InternalUpdateRange();
                if ((index < 0) || (index >= this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                return this._baseList.getItem(((this._baseIndex + index) | 0));
            },
            setItem: function (index, value) {
                this.InternalUpdateRange();
                if ((index < 0) || (index >= this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this._baseList.setItem(((this._baseIndex + index) | 0), value);
                this.InternalUpdateVersion();
            },
            add: function (value) {
                this.InternalUpdateRange();
                this._baseList.insert(((this._baseIndex + this._baseSize) | 0), value);
                this.InternalUpdateVersion();
                var num = this._baseSize;
                this._baseSize = (num + 1) | 0;
                return num;
            },
            AddRange: function (c) {
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor1("c");
                }
                this.InternalUpdateRange();
                var count = System.Array.getCount(c);
                if (count > 0) {
                    this._baseList.InsertRange(((this._baseIndex + this._baseSize) | 0), c);
                    this.InternalUpdateVersion();
                    this._baseSize = (this._baseSize + count) | 0;
                }
            },
            BinarySearch: function (index, count, value, comparer) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                var num = this._baseList.BinarySearch(((this._baseIndex + index) | 0), count, value, comparer);
                if (num >= 0) {
                    return (((num - this._baseIndex) | 0));
                }
                return (((num + this._baseIndex) | 0));
            },
            clear: function () {
                this.InternalUpdateRange();
                if (this._baseSize !== 0) {
                    this._baseList.RemoveRange(this._baseIndex, this._baseSize);
                    this.InternalUpdateVersion();
                    this._baseSize = 0;
                }
            },
            clone: function () {
                var $t;
                this.InternalUpdateRange();
                return ($t = new System.Collections.ArrayList.Range(this._baseList, this._baseIndex, this._baseSize), $t._baseList = Bridge.cast(this._baseList.clone(), System.Collections.ArrayList), $t);
            },
            contains: function (item) {
                this.InternalUpdateRange();
                if (item == null) {
                    for (var j = 0; j < this._baseSize; j = (j + 1) | 0) {
                        if (this._baseList.getItem(((this._baseIndex + j) | 0)) == null) {
                            return true;
                        }
                    }
                    return false;
                }
                for (var i = 0; i < this._baseSize; i = (i + 1) | 0) {
                    if ((this._baseList.getItem(((this._baseIndex + i) | 0)) != null) && Bridge.equals(this._baseList.getItem(((this._baseIndex + i) | 0)), item)) {
                        return true;
                    }
                }
                return false;
            },
            copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Arg_RankMultiDimNotSupported"));
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((array.length - index) | 0)) < this._baseSize) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                this._baseList.CopyTo$1(this._baseIndex, array, index, this._baseSize);
            },
            CopyTo$1: function (index, array, arrayIndex, count) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Arg_RankMultiDimNotSupported"));
                }
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((array.length - arrayIndex) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                this._baseList.CopyTo$1(((this._baseIndex + index) | 0), array, arrayIndex, count);
            },
            GetEnumerator: function () {
                return this.GetEnumerator$1(0, this._baseSize);
            },
            GetEnumerator$1: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                return this._baseList.GetEnumerator$1(((this._baseIndex + index) | 0), count);
            },
            GetRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                return new System.Collections.ArrayList.Range(this, index, count);
            },
            indexOf: function (value) {
                this.InternalUpdateRange();
                var num = this._baseList.IndexOf$1(value, this._baseIndex, this._baseSize);
                if (num >= 0) {
                    return (((num - this._baseIndex) | 0));
                }
                return -1;
            },
            IndexOf: function (value, startIndex) {
                if (startIndex < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if (startIndex > this._baseSize) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this.InternalUpdateRange();
                var num = this._baseList.IndexOf$1(value, ((this._baseIndex + startIndex) | 0), ((this._baseSize - startIndex) | 0));
                if (num >= 0) {
                    return (((num - this._baseIndex) | 0));
                }
                return -1;
            },
            IndexOf$1: function (value, startIndex, count) {
                if ((startIndex < 0) || (startIndex > this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if ((count < 0) || (startIndex > (((this._baseSize - count) | 0)))) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Count"));
                }
                this.InternalUpdateRange();
                var num = this._baseList.IndexOf$1(value, ((this._baseIndex + startIndex) | 0), count);
                if (num >= 0) {
                    return (((num - this._baseIndex) | 0));
                }
                return -1;
            },
            insert: function (index, value) {
                if ((index < 0) || (index > this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this.InternalUpdateRange();
                this._baseList.insert(((this._baseIndex + index) | 0), value);
                this.InternalUpdateVersion();
                this._baseSize = (this._baseSize + 1) | 0;
            },
            InsertRange: function (index, c) {
                if ((index < 0) || (index > this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                if (c == null) {
                    throw new System.ArgumentNullException.$ctor1("c");
                }
                this.InternalUpdateRange();
                var count = System.Array.getCount(c);
                if (count > 0) {
                    this._baseList.InsertRange(((this._baseIndex + index) | 0), c);
                    this._baseSize = (this._baseSize + count) | 0;
                    this.InternalUpdateVersion();
                }
            },
            InternalUpdateRange: function () {
                if (this._baseVersion !== this._baseList._version) {
                    throw new System.InvalidOperationException.$ctor1(System.EnvironmentV2.GetResourceString("InvalidOperation_UnderlyingArrayListChanged"));
                }
            },
            InternalUpdateVersion: function () {
                this._baseVersion = (this._baseVersion + 1) | 0;
                this._version = (this._version + 1) | 0;
            },
            LastIndexOf: function (value) {
                this.InternalUpdateRange();
                var num = this._baseList.LastIndexOf$2(value, (((((this._baseIndex + this._baseSize) | 0)) - 1) | 0), this._baseSize);
                if (num >= 0) {
                    return (((num - this._baseIndex) | 0));
                }
                return -1;
            },
            LastIndexOf$1: function (value, startIndex) {
                return this.LastIndexOf$2(value, startIndex, ((startIndex + 1) | 0));
            },
            LastIndexOf$2: function (value, startIndex, count) {
                this.InternalUpdateRange();
                if (this._baseSize !== 0) {
                    if (startIndex >= this._baseSize) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                    }
                    if (startIndex < 0) {
                        throw new System.ArgumentOutOfRangeException.$ctor4("startIndex", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                    }
                    var num = this._baseList.LastIndexOf$2(value, ((this._baseIndex + startIndex) | 0), count);
                    if (num >= 0) {
                        return (((num - this._baseIndex) | 0));
                    }
                }
                return -1;
            },
            removeAt: function (index) {
                if ((index < 0) || (index >= this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this.InternalUpdateRange();
                this._baseList.removeAt(((this._baseIndex + index) | 0));
                this.InternalUpdateVersion();
                this._baseSize = (this._baseSize - 1) | 0;
            },
            RemoveRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                if (count > 0) {
                    this._baseList.RemoveRange(((this._baseIndex + index) | 0), count);
                    this.InternalUpdateVersion();
                    this._baseSize = (this._baseSize - count) | 0;
                }
            },
            Reverse$1: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                this._baseList.Reverse$1(((this._baseIndex + index) | 0), count);
                this.InternalUpdateVersion();
            },
            SetRange: function (index, c) {
                this.InternalUpdateRange();
                if ((index < 0) || (index >= this._baseSize)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_Index"));
                }
                this._baseList.SetRange(((this._baseIndex + index) | 0), c);
                if (System.Array.getCount(c) > 0) {
                    this.InternalUpdateVersion();
                }
            },
            Sort$2: function (index, count, comparer) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this._baseSize - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                this.InternalUpdateRange();
                this._baseList.Sort$2(((this._baseIndex + index) | 0), count, comparer);
                this.InternalUpdateVersion();
            },
            ToArray$1: function () {
                this.InternalUpdateRange();
                var destinationArray = System.Array.init(this._baseSize, null, System.Object);
                System.Array.copy(this._baseList._items, this._baseIndex, destinationArray, 0, this._baseSize);
                return destinationArray;
            },
            ToArray: function (type) {
                if (type == null) {
                    throw new System.ArgumentNullException.$ctor1("type");
                }
                this.InternalUpdateRange();
                var array = System.Array.init(this._baseSize, Bridge.getDefaultValue(type), type);
                this._baseList.CopyTo$1(this._baseIndex, array, 0, this._baseSize);
                return array;
            },
            TrimToSize: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_RangeCollection"));
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.ReadOnlyArrayList", {
        inherits: [System.Collections.ArrayList],
        $kind: "nested class",
        fields: {
            _list: null
        },
        props: {
            Capacity: {
                get: function () {
                    return this._list.Capacity;
                },
                set: function (value) {
                    throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
                }
            },
            Count: {
                get: function () {
                    return this._list.Count;
                }
            },
            IsFixedSize: {
                get: function () {
                    return true;
                }
            },
            IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            IsSynchronized: {
                get: function () {
                    return this._list.IsSynchronized;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._list.SyncRoot;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (l) {
                this.$initialize();
                System.Collections.ArrayList.ctor.call(this);
                this._list = l;
            }
        },
        methods: {
            getItem: function (index) {
                return this._list.getItem(index);
            },
            setItem: function (index, value) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            add: function (obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            AddRange: function (c) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            BinarySearch: function (index, count, value, comparer) {
                return this._list.BinarySearch(index, count, value, comparer);
            },
            clear: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            clone: function () {
                var $t;
                return ($t = new System.Collections.ArrayList.ReadOnlyArrayList(this._list), $t._list = Bridge.cast(this._list.clone(), System.Collections.ArrayList), $t);
            },
            contains: function (obj) {
                return this._list.contains(obj);
            },
            copyTo: function (array, index) {
                this._list.copyTo(array, index);
            },
            CopyTo$1: function (index, array, arrayIndex, count) {
                this._list.CopyTo$1(index, array, arrayIndex, count);
            },
            GetEnumerator: function () {
                return this._list.GetEnumerator();
            },
            GetEnumerator$1: function (index, count) {
                return this._list.GetEnumerator$1(index, count);
            },
            GetRange: function (index, count) {
                if ((index < 0) || (count < 0)) {
                    throw new System.ArgumentOutOfRangeException.$ctor4((index < 0) ? "index" : "count", System.EnvironmentV2.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((this.Count - index) | 0)) < count) {
                    throw new System.ArgumentException.$ctor1(System.EnvironmentV2.GetResourceString("Argument_InvalidOffLen"));
                }
                return new System.Collections.ArrayList.Range(this, index, count);
            },
            indexOf: function (value) {
                return this._list.indexOf(value);
            },
            IndexOf: function (value, startIndex) {
                return this._list.IndexOf(value, startIndex);
            },
            IndexOf$1: function (value, startIndex, count) {
                return this._list.IndexOf$1(value, startIndex, count);
            },
            insert: function (index, obj) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            InsertRange: function (index, c) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            LastIndexOf: function (value) {
                return this._list.LastIndexOf(value);
            },
            LastIndexOf$1: function (value, startIndex) {
                return this._list.LastIndexOf$1(value, startIndex);
            },
            LastIndexOf$2: function (value, startIndex, count) {
                return this._list.LastIndexOf$2(value, startIndex, count);
            },
            remove: function (value) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            removeAt: function (index) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            RemoveRange: function (index, count) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            Reverse$1: function (index, count) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            SetRange: function (index, c) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            Sort$2: function (index, count, comparer) {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            },
            ToArray$1: function () {
                return this._list.ToArray$1();
            },
            ToArray: function (type) {
                return this._list.ToArray(type);
            },
            TrimToSize: function () {
                throw new System.NotSupportedException.$ctor1(System.EnvironmentV2.GetResourceString("NotSupported_ReadOnlyCollection"));
            }
        }
    });

    Bridge.define("System.Collections.ArrayList.SyncArrayList", {
        inherits: [System.Collections.ArrayList],
        $kind: "nested class",
        fields: {
            _list: null,
            _root: null
        },
        props: {
            Capacity: {
                get: function () {
                    var obj2 = this._root;
                    obj2;
                    {
                        return this._list.Capacity;
                    }
                },
                set: function (value) {
                    var obj2 = this._root;
                    obj2;
                    {
                        this._list.Capacity = value;
                    }
                }
            },
            Count: {
                get: function () {
                    var obj2 = this._root;
                    obj2;
                    {
                        return this._list.Count;
                    }
                }
            },
            IsFixedSize: {
                get: function () {
                    return this._list.IsFixedSize;
                }
            },
            IsReadOnly: {
                get: function () {
                    return this._list.IsReadOnly;
                }
            },
            IsSynchronized: {
                get: function () {
                    return true;
                }
            },
            SyncRoot: {
                get: function () {
                    return this._root;
                }
            }
        },
        alias: [
            "add", "System$Collections$IList$add",
            "clear", "System$Collections$IList$clear",
            "clone", "System$ICloneable$clone",
            "contains", "System$Collections$IList$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "indexOf", "System$Collections$IList$indexOf",
            "insert", "System$Collections$IList$insert",
            "remove", "System$Collections$IList$remove",
            "removeAt", "System$Collections$IList$removeAt",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IList$IsFixedSize",
            "IsReadOnly", "System$Collections$IList$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IList$getItem",
            "setItem", "System$Collections$IList$setItem",
            "SyncRoot", "System$Collections$ICollection$SyncRoot"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                System.Collections.ArrayList.$ctor1.call(this, false);
                this._list = list;
                this._root = list.SyncRoot;
            }
        },
        methods: {
            getItem: function (index) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.getItem(index);
                }
            },
            setItem: function (index, value) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.setItem(index, value);
                }
            },
            add: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.add(value);
                }
            },
            AddRange: function (c) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.AddRange(c);
                }
            },
            BinarySearch$1: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.BinarySearch$1(value);
                }
            },
            BinarySearch$2: function (value, comparer) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.BinarySearch$2(value, comparer);
                }
            },
            BinarySearch: function (index, count, value, comparer) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.BinarySearch(index, count, value, comparer);
                }
            },
            clear: function () {
                var obj2 = this._root;
                obj2;
                {
                    this._list.clear();
                }
            },
            clone: function () {
                var obj2 = this._root;
                obj2;
                {
                    return new System.Collections.ArrayList.SyncArrayList(Bridge.cast(this._list.clone(), System.Collections.ArrayList));
                }
            },
            contains: function (item) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.contains(item);
                }
            },
            CopyTo: function (array) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.CopyTo(array);
                }
            },
            copyTo: function (array, index) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.copyTo(array, index);
                }
            },
            CopyTo$1: function (index, array, arrayIndex, count) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.CopyTo$1(index, array, arrayIndex, count);
                }
            },
            GetEnumerator: function () {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.GetEnumerator();
                }
            },
            GetEnumerator$1: function (index, count) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.GetEnumerator$1(index, count);
                }
            },
            GetRange: function (index, count) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.GetRange(index, count);
                }
            },
            indexOf: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.indexOf(value);
                }
            },
            IndexOf: function (value, startIndex) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.IndexOf(value, startIndex);
                }
            },
            IndexOf$1: function (value, startIndex, count) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.IndexOf$1(value, startIndex, count);
                }
            },
            insert: function (index, value) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.insert(index, value);
                }
            },
            InsertRange: function (index, c) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.InsertRange(index, c);
                }
            },
            LastIndexOf: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.LastIndexOf(value);
                }
            },
            LastIndexOf$1: function (value, startIndex) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.LastIndexOf$1(value, startIndex);
                }
            },
            LastIndexOf$2: function (value, startIndex, count) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.LastIndexOf$2(value, startIndex, count);
                }
            },
            remove: function (value) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.remove(value);
                }
            },
            removeAt: function (index) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.removeAt(index);
                }
            },
            RemoveRange: function (index, count) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.RemoveRange(index, count);
                }
            },
            Reverse$1: function (index, count) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.Reverse$1(index, count);
                }
            },
            SetRange: function (index, c) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.SetRange(index, c);
                }
            },
            Sort: function () {
                var obj2 = this._root;
                obj2;
                {
                    this._list.Sort();
                }
            },
            Sort$1: function (comparer) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.Sort$1(comparer);
                }
            },
            Sort$2: function (index, count, comparer) {
                var obj2 = this._root;
                obj2;
                {
                    this._list.Sort$2(index, count, comparer);
                }
            },
            ToArray$1: function () {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.ToArray$1();
                }
            },
            ToArray: function (type) {
                var obj2 = this._root;
                obj2;
                {
                    return this._list.ToArray(type);
                }
            },
            TrimToSize: function () {
                var obj2 = this._root;
                obj2;
                {
                    this._list.TrimToSize();
                }
            }
        }
    });

    Bridge.define("System.Collections.Specialized.HybridDictionary", {
        inherits: [System.Collections.IDict,System.Collections.ICollection,System.Collections.IEnumerable],
        statics: {
            fields: {
                CutoverPoint: 0,
                FixedSizeCutoverPoint: 0,
                InitialHashtableSize: 0
            },
            ctors: {
                init: function () {
                    this.CutoverPoint = 9;
                    this.FixedSizeCutoverPoint = 6;
                    this.InitialHashtableSize = 13;
                }
            }
        },
        fields: {
            caseInsensitive: false,
            hashtable: null,
            list: null
        },
        props: {
            Count: {
                get: function () {
                    var list = this.list;
                    if (this.hashtable != null) {
                        return this.hashtable.count;
                    }
                    if (list != null) {
                        return list.Count;
                    }
                    return 0;
                }
            },
            IsFixedSize: {
                get: function () {
                    return false;
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
            Keys: {
                get: function () {
                    if (this.hashtable != null) {
                        return this.hashtable.getKeys();
                    }
                    return this.List.Keys;
                }
            },
            List: {
                get: function () {
                    if (this.list == null) {
                        this.list = new System.Collections.Specialized.ListDictionary.$ctor1(this.caseInsensitive ? System.StringComparer.OrdinalIgnoreCase : null);
                    }
                    return this.list;
                }
            },
            SyncRoot: {
                get: function () {
                    return this;
                }
            },
            Values: {
                get: function () {
                    if (this.hashtable != null) {
                        return this.hashtable.getValues();
                    }
                    return this.List.Values;
                }
            }
        },
        alias: [
            "add", "System$Collections$IDict$add",
            "clear", "System$Collections$IDict$clear",
            "contains", "System$Collections$IDict$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "remove", "System$Collections$IDict$remove",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IDict$IsFixedSize",
            "IsReadOnly", "System$Collections$IDict$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IDict$getItem",
            "setItem", "System$Collections$IDict$setItem",
            "Keys", "System$Collections$IDict$Keys",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "Values", "System$Collections$IDict$Values"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (caseInsensitive) {
                this.$initialize();
                this.caseInsensitive = caseInsensitive;
            },
            $ctor2: function (initialSize) {
                System.Collections.Specialized.HybridDictionary.$ctor3.call(this, initialSize, false);
            },
            $ctor3: function (initialSize, caseInsensitive) {
                this.$initialize();
                this.caseInsensitive = caseInsensitive;
                if (initialSize >= 6) {
                    if (caseInsensitive) {
                        this.hashtable = new (System.Collections.Generic.Dictionary$2(System.String, System.Object))(null, System.StringComparer.OrdinalIgnoreCase);
                    } else {
                        this.hashtable = new (System.Collections.Generic.Dictionary$2(System.String, System.Object))();
                    }
                }
            }
        },
        methods: {
            getItem: function (key) {
                var list = this.list;
                if (this.hashtable != null) {
                    return this.hashtable.get(Bridge.as(key, System.String));
                }
                if (list != null) {
                    return list.getItem(key);
                }
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                return null;
            },
            setItem: function (key, value) {
                if (this.hashtable != null) {
                    this.hashtable.set(Bridge.as(key, System.String), value);
                } else if (this.list != null) {
                    if (this.list.Count >= 8) {
                        this.ChangeOver();
                        this.hashtable.set(Bridge.as(key, System.String), value);
                    } else {
                        this.list.setItem(key, value);
                    }
                } else {
                    this.list = new System.Collections.Specialized.ListDictionary.$ctor1(this.caseInsensitive ? System.StringComparer.OrdinalIgnoreCase : null);
                    this.list.setItem(key, value);
                }
            },
            add: function (key, value) {
                if (this.hashtable != null) {
                    this.hashtable.add(Bridge.as(key, System.String), value);
                } else if (this.list == null) {
                    this.list = new System.Collections.Specialized.ListDictionary.$ctor1(this.caseInsensitive ? System.StringComparer.OrdinalIgnoreCase : null);
                    this.list.add(key, value);
                } else if ((((this.list.Count + 1) | 0)) >= 9) {
                    this.ChangeOver();
                    this.hashtable.add(Bridge.as(key, System.String), value);
                } else {
                    this.list.add(key, value);
                }
            },
            ChangeOver: function () {
                var hashtable;
                var enumerator = Bridge.cast(this.list.GetEnumerator(), System.Collections.IDictEnumrator);
                if (this.caseInsensitive) {
                    hashtable = new (System.Collections.Generic.Dictionary$2(System.String, System.Object))(null, System.StringComparer.OrdinalIgnoreCase);
                } else {
                    hashtable = new (System.Collections.Generic.Dictionary$2(System.String, System.Object))();
                }
                while (enumerator.System$Collections$IEnumerator$moveNext()) {
                    hashtable.add(Bridge.as(enumerator.System$Collections$IDictEnumrator$Key, System.String), enumerator.System$Collections$IDictEnumrator$Value);
                }
                this.hashtable = hashtable;
                this.list = null;
            },
            clear: function () {
                if (this.hashtable != null) {
                    var hashtable = this.hashtable;
                    this.hashtable = null;
                    hashtable.clear();
                }
                if (this.list != null) {
                    var list = this.list;
                    this.list = null;
                    list.clear();
                }
            },
            contains: function (key) {
                var list = this.list;
                if (this.hashtable != null) {
                    return this.hashtable.containsKey(Bridge.as(key, System.String));
                }
                if (list != null) {
                    return list.contains(key);
                }
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                return false;
            },
            copyTo: function (array, index) {
                var $t;
                if (this.hashtable != null) {
                    ($t = this.hashtable.getValues(), System.Array.copy($t, 0, array, index, $t.length));
                } else {
                    this.List.copyTo(array, index);
                }
            },
            GetEnumerator: function () {
                if (this.hashtable != null) {
                    return this.hashtable.GetEnumerator();
                }
                if (this.list == null) {
                    this.list = new System.Collections.Specialized.ListDictionary.$ctor1(this.caseInsensitive ? System.StringComparer.OrdinalIgnoreCase : null);
                }
                return Bridge.cast(this.list.GetEnumerator(), System.Collections.IDictEnumrator);
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                if (this.hashtable != null) {
                    return this.hashtable.GetEnumerator();
                }
                if (this.list == null) {
                    this.list = new System.Collections.Specialized.ListDictionary.$ctor1(this.caseInsensitive ? System.StringComparer.OrdinalIgnoreCase : null);
                }
                return this.list.GetEnumerator();
            },
            remove: function (key) {
                if (this.hashtable != null) {
                    this.hashtable.remove(Bridge.as(key, System.String));
                } else if (this.list != null) {
                    this.list.remove(key);
                } else if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                return true;
            }
        }
    });

    Bridge.define("System.Collections.Specialized.ListDictionary", {
        inherits: [System.Collections.IDict],
        fields: {
            _syncRoot: null,
            comparer: null,
            count: 0,
            head: null,
            version: 0
        },
        props: {
            Count: {
                get: function () {
                    return this.count;
                }
            },
            IsFixedSize: {
                get: function () {
                    return false;
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
            Keys: {
                get: function () {
                    return new System.Collections.Specialized.ListDictionary.NodeKeyValueCollection(this, true);
                }
            },
            SyncRoot: {
                get: function () {
                    if (this._syncRoot == null) {
                        this._syncRoot = { };
                        //Interlocked.CompareExchange(ref this._syncRoot, new object(), null);
                    }
                    return this._syncRoot;
                }
            },
            Values: {
                get: function () {
                    return new System.Collections.Specialized.ListDictionary.NodeKeyValueCollection(this, false);
                }
            }
        },
        alias: [
            "add", "System$Collections$IDict$add",
            "clear", "System$Collections$IDict$clear",
            "contains", "System$Collections$IDict$contains",
            "copyTo", "System$Collections$ICollection$copyTo",
            "GetEnumerator", "System$Collections$IEnumerable$GetEnumerator",
            "remove", "System$Collections$IDict$remove",
            "Count", "System$Collections$ICollection$Count",
            "IsFixedSize", "System$Collections$IDict$IsFixedSize",
            "IsReadOnly", "System$Collections$IDict$IsReadOnly",
            "IsSynchronized", "System$Collections$ICollection$IsSynchronized",
            "getItem", "System$Collections$IDict$getItem",
            "setItem", "System$Collections$IDict$setItem",
            "Keys", "System$Collections$IDict$Keys",
            "SyncRoot", "System$Collections$ICollection$SyncRoot",
            "Values", "System$Collections$IDict$Values"
        ],
        ctors: {
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (comparer) {
                this.$initialize();
                this.comparer = comparer;
            }
        },
        methods: {
            getItem: function (key) {
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                var head = this.head;
                if (this.comparer != null) {
                    while (head != null) {
                        var x = head.key;
                        if ((x != null) && (this.comparer.System$Collections$IComparer$compare(x, key) === 0)) {
                            return head.value;
                        }
                        head = head.next;
                    }
                } else {
                    while (head != null) {
                        var obj2 = head.key;
                        if ((obj2 != null) && Bridge.equals(obj2, key)) {
                            return head.value;
                        }
                        head = head.next;
                    }
                }
                return null;
            },
            setItem: function (key, value) {
                var $t;
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                this.version = (this.version + 1) | 0;
                var node = null;
                var head = this.head;
                while (head != null) {
                    var x = head.key;
                    if ((this.comparer == null) ? Bridge.equals(x, key) : (this.comparer.System$Collections$IComparer$compare(x, key) === 0)) {
                        break;
                    }
                    node = head;
                    head = head.next;
                }
                if (head != null) {
                    head.value = value;
                } else {
                    var node3 = ($t = new System.Collections.Specialized.ListDictionary.DictionaryNode(), $t.key = key, $t.value = value, $t);
                    if (node != null) {
                        node.next = node3;
                    } else {
                        this.head = node3;
                    }
                    this.count = (this.count + 1) | 0;
                }
            },
            add: function (key, value) {
                var $t;
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                this.version = (this.version + 1) | 0;
                var node = null;
                for (var node2 = this.head; node2 != null; node2 = node2.next) {
                    var x = node2.key;
                    if ((this.comparer == null) ? Bridge.equals(x, key) : (this.comparer.System$Collections$IComparer$compare(x, key) === 0)) {
                        throw new System.ArgumentException.$ctor1(System.Windows.Forms.SR.GetString("Argument_AddingDuplicate"));
                    }
                    node = node2;
                }
                var node3 = ($t = new System.Collections.Specialized.ListDictionary.DictionaryNode(), $t.key = key, $t.value = value, $t);
                if (node != null) {
                    node.next = node3;
                } else {
                    this.head = node3;
                }
                this.count = (this.count + 1) | 0;
            },
            clear: function () {
                this.count = 0;
                this.head = null;
                this.version = (this.version + 1) | 0;
            },
            contains: function (key) {
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                for (var node = this.head; node != null; node = node.next) {
                    var x = node.key;
                    if ((this.comparer == null) ? Bridge.equals(x, key) : (this.comparer.System$Collections$IComparer$compare(x, key) === 0)) {
                        return true;
                    }
                }
                return false;
            },
            copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }
                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor4("index", System.Windows.Forms.SR.GetString("ArgumentOutOfRange_NeedNonNegNum"));
                }
                if ((((array.length - index) | 0)) < this.count) {
                    throw new System.ArgumentException.$ctor1(System.Windows.Forms.SR.GetString("Arg_InsufficientSpace"));
                }
                for (var node = this.head; node != null; node = node.next) {
                    System.Array.set(array, new System.Collections.DictionaryEntry.$ctor1(node.key, node.value).$clone(), index);
                    index = (index + 1) | 0;
                }
            },
            GetEnumerator: function () {
                return new System.Collections.Specialized.ListDictionary.NodeEnumerator(this);
            },
            remove: function (key) {
                if (key == null) {
                    throw new System.ArgumentNullException.$ctor3("key", System.Windows.Forms.SR.GetString("ArgumentNull_Key"));
                }
                this.version = (this.version + 1) | 0;
                var node = null;
                var head = this.head;
                while (head != null) {
                    var x = head.key;
                    if ((this.comparer == null) ? Bridge.equals(x, key) : (this.comparer.System$Collections$IComparer$compare(x, key) === 0)) {
                        break;
                    }
                    node = head;
                    head = head.next;
                }
                if (head != null) {
                    if (Bridge.referenceEquals(head, this.head)) {
                        this.head = head.next;
                    } else {
                        node.next = head.next;
                    }
                    this.count = (this.count - 1) | 0;
                }
                return true;
            }
        }
    });

    Bridge.define("System.Collections.Specialized.ListDictionary.NodeEnumerator", {
        inherits: [System.Collections.IDictEnumrator],
        $kind: "nested class",
        fields: {
            current: null,
            list: null,
            start: false,
            version: 0
        },
        props: {
            Current: {
                get: function () {
                    return this.Entry.$clone();
                }
            },
            Entry: {
                get: function () {
                    if (this.current == null) {
                        throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    return new System.Collections.DictionaryEntryV2.$ctor1(this.current.key, this.current.value);
                }
            },
            Key: {
                get: function () {
                    if (this.current == null) {
                        throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    return this.current.key;
                }
            },
            Value: {
                get: function () {
                    if (this.current == null) {
                        throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumOpCantHappen"));
                    }
                    return this.current.value;
                }
            }
        },
        alias: [
            "moveNext", "System$Collections$IEnumerator$moveNext",
            "reset", "System$Collections$IEnumerator$reset",
            "Current", "System$Collections$IEnumerator$Current",
            "Entry", "System$Collections$IDictEnumrator$Entry",
            "Key", "System$Collections$IDictEnumrator$Key",
            "Value", "System$Collections$IDictEnumrator$Value"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                this.list = list;
                this.version = list.version;
                this.start = true;
                this.current = null;
            }
        },
        methods: {
            moveNext: function () {
                if (this.version !== this.list.version) {
                    throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumFailedVersion"));
                }
                if (this.start) {
                    this.current = this.list.head;
                    this.start = false;
                } else if (this.current != null) {
                    this.current = this.current.next;
                }
                return (this.current != null);
            },
            reset: function () {
                if (this.version !== this.list.version) {
                    throw new System.InvalidOperationException.$ctor1(System.Windows.Forms.SR.GetString("InvalidOperation_EnumFailedVersion"));
                }
                this.start = true;
                this.current = null;
            }
        }
    });

    Bridge.define("System.ComponentModel.Container", {
        inherits: [System.ComponentModel.IContainer],
        alias: ["Dispose", "System$IDisposable$Dispose"],
        methods: {
            Dispose: function () {

            }
        }
    });

    Bridge.define("System.ComponentModel.ISite", {
        inherits: [System.IServiceProviderV2],
        $kind: "interface"
    });

    Bridge.define("System.OrdinalComparer", {
        inherits: [System.StringComparer,System.IWellKnownStringEqualityComparer],
        fields: {
            _ignoreCase: false
        },
        alias: [
            "compare$1", ["System$Collections$Generic$IComparer$1$System$String$compare", "System$Collections$Generic$IComparer$1$compare"],
            "equals2", ["System$Collections$Generic$IEqualityComparer$1$System$String$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2"],
            "getHashCode2", ["System$Collections$Generic$IEqualityComparer$1$System$String$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2"]
        ],
        ctors: {
            ctor: function (ignoreCase) {
                this.$initialize();
                System.StringComparer.ctor.call(this);
                this._ignoreCase = ignoreCase;
            }
        },
        methods: {
            compare$1: function (x, y) {
                if (Bridge.referenceEquals(x, y)) {
                    return 0;
                }
                if (x == null) {
                    return -1;
                }
                if (y == null) {
                    return 1;
                }
                if (this._ignoreCase) {
                    return System.String.compare(x, y, 5);
                }
                return System.StringUtils.CompareOrdinal(x, y);
            },
            equals$1: function (obj) {
                var comparer = Bridge.as(obj, System.OrdinalComparer);
                if (comparer == null) {
                    return false;
                }
                return (this._ignoreCase === comparer._ignoreCase);
            },
            equals2: function (x, y) {
                if (Bridge.referenceEquals(x, y)) {
                    return true;
                }
                if ((x == null) || (y == null)) {
                    return false;
                }
                if (!this._ignoreCase) {
                    return System.String.equals(x, y);
                }
                if (x.length !== y.length) {
                    return false;
                }
                return (System.String.compare(x, y, 5) === 0);
            },
            getHashCode$1: function () {
                var hashCode = Bridge.getHashCode(("OrdinalComparer"));
                if (!this._ignoreCase) {
                    return hashCode;
                }
                return ~hashCode;
            },
            getHashCode2: function (obj) {
                if (obj == null) {
                    throw new System.ArgumentNullException.$ctor1("obj");
                }
                if (this._ignoreCase) {
                    return 0; // TODO: TextInfo.GetHashCodeOrdinalIgnoreCase(obj);
                }
                return Bridge.getHashCode(obj);
            },
            System$IWellKnownStringEqualityComparer$GetEqualityComparerForSerialization: function () {
                return this;
            },
            System$IWellKnownStringEqualityComparer$GetRandomizedEqualityComparer: function () {
                return new System.OrdinalRandomizedComparer(this._ignoreCase);
            }
        }
    });

    Bridge.define("System.OrdinalRandomizedComparer", {
        inherits: [System.StringComparer,System.IWellKnownStringEqualityComparer],
        fields: {
            _entropy: System.Int64(0),
            _ignoreCase: false
        },
        alias: [
            "compare$1", ["System$Collections$Generic$IComparer$1$System$String$compare", "System$Collections$Generic$IComparer$1$compare"],
            "equals2", ["System$Collections$Generic$IEqualityComparer$1$System$String$equals2", "System$Collections$Generic$IEqualityComparer$1$equals2"],
            "getHashCode2", ["System$Collections$Generic$IEqualityComparer$1$System$String$getHashCode2", "System$Collections$Generic$IEqualityComparer$1$getHashCode2"]
        ],
        ctors: {
            init: function () {
                this._entropy = System.Int64(0);
            },
            ctor: function (ignoreCase) {
                this.$initialize();
                System.StringComparer.ctor.call(this);
                this._ignoreCase = ignoreCase;
                //TODO : this._entropy = HashHelpers.GetEntropy();
            }
        },
        methods: {
            compare$1: function (x, y) {
                if (Bridge.referenceEquals(x, y)) {
                    return 0;
                }
                if (x == null) {
                    return -1;
                }
                if (y == null) {
                    return 1;
                }
                if (this._ignoreCase) {
                    return System.String.compare(x, y, 5);
                }
                return System.StringUtils.CompareOrdinal(x, y);
            },
            equals$1: function (obj) {
                var comparer = Bridge.as(obj, System.OrdinalRandomizedComparer);
                if (comparer == null) {
                    return false;
                }
                return ((this._ignoreCase === comparer._ignoreCase) && (this._entropy.equals(comparer._entropy)));
            },
            equals2: function (x, y) {
                if (Bridge.referenceEquals(x, y)) {
                    return true;
                }
                if ((x == null) || (y == null)) {
                    return false;
                }
                if (!this._ignoreCase) {
                    return System.String.equals(x, y);
                }
                if (x.length !== y.length) {
                    return false;
                }
                return (System.String.compare(x, y, 5) === 0);
            },
            getHashCode$1: function () {
                var hashCode = Bridge.getHashCode(("OrdinalRandomizedComparer"));
                return ((this._ignoreCase ? ~hashCode : hashCode) ^ (System.Int64.clip32(this._entropy.and(System.Int64(2147483647)))));
            },
            getHashCode2: function (obj) {
                if (obj == null) {
                    throw new System.ArgumentNullException.$ctor1("obj");
                }
                if (this._ignoreCase) {
                    return 0; //TODO TextInfo.GetHashCodeOrdinalIgnoreCase(obj, true, this._entropy);
                }
                return 0; // TODO string.InternalMarvin32HashString(obj, obj.Length, this._entropy);
            },
            System$IWellKnownStringEqualityComparer$GetEqualityComparerForSerialization: function () {
                return new System.OrdinalComparer(this._ignoreCase);
            },
            System$IWellKnownStringEqualityComparer$GetRandomizedEqualityComparer: function () {
                return new System.OrdinalRandomizedComparer(this._ignoreCase);
            }
        }
    });

    Bridge.define("System.Windows.Forms.Layout.IArrangedElement", {
        inherits: [System.ComponentModel.IComponent,System.IDisposable],
        $kind: "interface"
    });

    /** @namespace System.Windows.Forms */

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
                    throw new System.NotImplementedException.ctor();
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
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Windows$Forms$DataGridViewColumn$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
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
            GetEnumerator: function () {
                return this._controls.GetEnumerator().$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this._controls.GetEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                this.header.insertBefore(item.Element, Bridge.cast(this.header.childNodes[index], Node));
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
                    throw new System.NotImplementedException.ctor();
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
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Data$DataRow$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
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
            GetEnumerator: function () {
                return this._controls.GetEnumerator().$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this._controls.GetEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._controls.indexOf(item);
            },
            insert: function (index, item) {
                this.body.insertBefore(item.Element, Bridge.cast(this.body.childNodes[index], Node));
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

    Bridge.define("System.Windows.Forms.Layout.DefaultLayout", {
        inherits: [System.Windows.Forms.Layout.LayoutEngine],
        statics: {
            fields: {
                _cachedBoundsProperty: 0,
                _layoutInfoProperty: 0,
                Instance: null
            },
            ctors: {
                init: function () {
                    this._cachedBoundsProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this._layoutInfoProperty = System.Windows.Forms.PropertyStore.CreateKey();
                    this.Instance = new System.Windows.Forms.Layout.DefaultLayout();
                }
            },
            methods: {
                ApplyCachedBounds: function (container) {
                    var $t;
                    if (System.Windows.Forms.Layout.CommonProperties.GetAutoSize(container)) {
                        var displayRectangle = container.System$Windows$Forms$Layout$IArrangedElement$DisplayRectangle.$clone();
                        if ((displayRectangle.Width === 0) || (displayRectangle.Height === 0)) {
                            System.Windows.Forms.Layout.DefaultLayout.ClearCachedBounds(container);
                            return;
                        }
                    }
                    var dictionary = Bridge.cast(container.System$Windows$Forms$Layout$IArrangedElement$Properties.GetObject(System.Windows.Forms.Layout.DefaultLayout._cachedBoundsProperty), System.Collections.IDict);
                    if (dictionary != null) {
                        $t = Bridge.getEnumerator(dictionary);
                        try {
                            while ($t.moveNext()) {
                                var entry = Bridge.cast($t.Current, System.Object);
                                var key = Bridge.cast(entry.Key, System.Windows.Forms.Layout.IArrangedElement);
                                var bounds = Bridge.cast(entry.Value, System.Drawing.Rectangle);
                                key.System$Windows$Forms$Layout$IArrangedElement$SetBounds(bounds.$clone(), System.Windows.Forms.BoundsSpecified.None);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }System.Windows.Forms.Layout.DefaultLayout.ClearCachedBounds(container);
                    }
                },
                ClearCachedBounds: function (container) {
                    container.System$Windows$Forms$Layout$IArrangedElement$Properties.SetObject(System.Windows.Forms.Layout.DefaultLayout._cachedBoundsProperty, null);
                },
                GetAnchor: function (element) {
                    return System.Windows.Forms.Layout.CommonProperties.xGetAnchor(element);
                },
                GetAnchorDestination: function (element, displayRect, measureOnly) {
                    var anchorInfo = System.Windows.Forms.Layout.DefaultLayout.GetAnchorInfo(element);
                    var num = (anchorInfo.Left + displayRect.X) | 0;
                    var num2 = (anchorInfo.Top + displayRect.Y) | 0;
                    var num3 = (anchorInfo.Right + displayRect.X) | 0;
                    var num4 = (anchorInfo.Bottom + displayRect.Y) | 0;
                    var anchor = System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                    if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Right)) {
                        num3 = (num3 + displayRect.Width) | 0;
                        if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Left)) {
                            num = (num + displayRect.Width) | 0;
                        }
                    } else if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Left)) {
                        num3 = (num3 + (((Bridge.Int.div(displayRect.Width, 2)) | 0))) | 0;
                        num = (num + (((Bridge.Int.div(displayRect.Width, 2)) | 0))) | 0;
                    }
                    if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Bottom)) {
                        num4 = (num4 + displayRect.Height) | 0;
                        if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Top)) {
                            num2 = (num2 + displayRect.Height) | 0;
                        }
                    } else if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Top)) {
                        num4 = (num4 + (((Bridge.Int.div(displayRect.Height, 2)) | 0))) | 0;
                        num2 = (num2 + (((Bridge.Int.div(displayRect.Height, 2)) | 0))) | 0;
                    }
                    if (!measureOnly) {
                        if (num3 < num) {
                            num3 = num;
                        }
                        if (num4 < num2) {
                            num4 = num2;
                        }
                    } else {
                        var cachedBounds = System.Windows.Forms.Layout.DefaultLayout.GetCachedBounds(element);
                        if (((num3 < num) || (cachedBounds.Width !== element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Width)) || (cachedBounds.X !== element.System$Windows$Forms$Layout$IArrangedElement$Bounds.X)) {
                            if (System.Drawing.Rectangle.op_Inequality(cachedBounds.$clone(), element.System$Windows$Forms$Layout$IArrangedElement$Bounds.$clone())) {
                                num = Math.max(Math.abs(num), Math.abs(cachedBounds.Left));
                            }
                            num3 = ((((num + Math.max(element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Width, cachedBounds.Width)) | 0)) + Math.abs(num3)) | 0;
                        } else {
                            num = (num > 0) ? num : element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Left;
                            num3 = (num3 > 0) ? num3 : (((element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Right + Math.abs(num3)) | 0));
                        }
                        if (((num4 < num2) || (cachedBounds.Height !== element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Height)) || (cachedBounds.Y !== element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Y)) {
                            if (System.Drawing.Rectangle.op_Inequality(cachedBounds.$clone(), element.System$Windows$Forms$Layout$IArrangedElement$Bounds.$clone())) {
                                num2 = Math.max(Math.abs(num2), Math.abs(cachedBounds.Top));
                            }
                            num4 = ((((num2 + Math.max(element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Height, cachedBounds.Height)) | 0)) + Math.abs(num4)) | 0;
                        } else {
                            num2 = (num2 > 0) ? num2 : element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Top;
                            num4 = (num4 > 0) ? num4 : (((element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Bottom + Math.abs(num4)) | 0));
                        }
                    }
                    return new System.Drawing.Rectangle.$ctor2(num, num2, ((num3 - num) | 0), ((num4 - num2) | 0));
                },
                GetAnchorInfo: function (element) {
                    return Bridge.cast(element.System$Windows$Forms$Layout$IArrangedElement$Properties.GetObject(System.Windows.Forms.Layout.DefaultLayout._layoutInfoProperty), System.Windows.Forms.Layout.DefaultLayout.AnchorInfo);
                },
                GetAnchorPreferredSize: function (container) {
                    var empty = System.Drawing.Size.Empty.$clone();
                    for (var i = (container.System$Windows$Forms$Layout$IArrangedElement$Children.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        var element = container.System$Windows$Forms$Layout$IArrangedElement$Children.getItem(i);
                        if (!System.Windows.Forms.Layout.CommonProperties.GetNeedsDockLayout(element) && element.System$Windows$Forms$Layout$IArrangedElement$ParticipatesInLayout) {
                            var anchor = System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                            var margin = System.Windows.Forms.Layout.CommonProperties.GetMargin(element);
                            var rectangle = System.Windows.Forms.Layout.LayoutUtils.InflateRect(System.Windows.Forms.Layout.DefaultLayout.GetCachedBounds(element), margin.$clone());
                            if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Left) && !System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Right)) {
                                empty.Width = Math.max(empty.Width, rectangle.Right);
                            }
                            if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Bottom)) {
                                empty.Height = Math.max(empty.Height, rectangle.Bottom);
                            }
                            if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Right)) {
                                var rectangle2 = System.Windows.Forms.Layout.DefaultLayout.GetAnchorDestination(element, System.Drawing.Rectangle.Empty.$clone(), true);
                                if (rectangle2.Width < 0) {
                                    empty.Width = Math.max(empty.Width, ((rectangle.Right + rectangle2.Width) | 0));
                                } else {
                                    empty.Width = Math.max(empty.Width, rectangle2.Right);
                                }
                            }
                            if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Bottom)) {
                                var rectangle3 = System.Windows.Forms.Layout.DefaultLayout.GetAnchorDestination(element, System.Drawing.Rectangle.Empty.$clone(), true);
                                if (rectangle3.Height < 0) {
                                    empty.Height = Math.max(empty.Height, ((rectangle.Bottom + rectangle3.Height) | 0));
                                } else {
                                    empty.Height = Math.max(empty.Height, rectangle3.Bottom);
                                }
                            }
                        }
                    }
                    return empty.$clone();
                },
                GetCachedBounds: function (element) {
                    if (element.System$Windows$Forms$Layout$IArrangedElement$Container != null) {
                        var dictionary = Bridge.cast(element.System$Windows$Forms$Layout$IArrangedElement$Container.System$Windows$Forms$Layout$IArrangedElement$Properties.GetObject(System.Windows.Forms.Layout.DefaultLayout._cachedBoundsProperty), System.Collections.IDict);
                        if (dictionary != null) {
                            var obj2 = dictionary.System$Collections$IDict$getItem(element);
                            if (obj2 != null) {
                                return System.Nullable.getValue(Bridge.cast(Bridge.unbox(obj2), System.Drawing.Rectangle));
                            }
                        }
                    }
                    return element.System$Windows$Forms$Layout$IArrangedElement$Bounds.$clone();
                },
                GetDock: function (element) {
                    return System.Windows.Forms.Layout.CommonProperties.xGetDock(element);
                },
                GetGrowthBounds: function (element, newSize) {
                    var growthDirection = System.Windows.Forms.Layout.DefaultLayout.GetGrowthDirection(element);
                    var cachedBounds = System.Windows.Forms.Layout.DefaultLayout.GetCachedBounds(element);
                    var location = cachedBounds.Location.$clone();
                    if ((growthDirection & System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.Left) !== System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.None) {
                        location.X = (location.X - (((newSize.Width - cachedBounds.Width) | 0))) | 0;
                    }
                    if ((growthDirection & System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.Upward) !== System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.None) {
                        location.Y = (location.Y - (((newSize.Height - cachedBounds.Height) | 0))) | 0;
                    }
                    return new System.Drawing.Rectangle.$ctor1(location.$clone(), newSize.$clone());
                },
                GetGrowthDirection: function (element) {
                    var anchor = System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                    var none = System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.None;
                    if (((anchor & System.Windows.Forms.AnchorStyles.Right) !== System.Windows.Forms.AnchorStyles.None) && ((anchor & System.Windows.Forms.AnchorStyles.Left) === System.Windows.Forms.AnchorStyles.None)) {
                        none |= System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.Left;
                    } else {
                        none |= System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.Right;
                    }
                    if (((anchor & System.Windows.Forms.AnchorStyles.Bottom) !== System.Windows.Forms.AnchorStyles.None) && ((anchor & System.Windows.Forms.AnchorStyles.Top) === System.Windows.Forms.AnchorStyles.None)) {
                        return (none | System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.Upward);
                    }
                    return (none | System.Windows.Forms.Layout.DefaultLayout.GrowthDirection.Downward);
                },
                GetHorizontalDockedSize: function (element, remainingSize, measureOnly) {
                    var size = System.Windows.Forms.Layout.DefaultLayout.xGetDockedSize(element, remainingSize.$clone(), new System.Drawing.Size.$ctor2(1, remainingSize.Height), measureOnly);
                    if (!measureOnly) {
                        size.Height = remainingSize.Height;
                        return size.$clone();
                    }
                    size.Height = Math.max(size.Height, remainingSize.Height);
                    return size.$clone();
                },
                GetVerticalDockedSize: function (element, remainingSize, measureOnly) {
                    var size = System.Windows.Forms.Layout.DefaultLayout.xGetDockedSize(element, remainingSize.$clone(), new System.Drawing.Size.$ctor2(remainingSize.Width, 1), measureOnly);
                    if (!measureOnly) {
                        size.Width = remainingSize.Width;
                        return size.$clone();
                    }
                    size.Width = Math.max(size.Width, remainingSize.Width);
                    return size.$clone();
                },
                HasCachedBounds: function (container) {
                    return ((container != null) && (container.System$Windows$Forms$Layout$IArrangedElement$Properties.GetObject(System.Windows.Forms.Layout.DefaultLayout._cachedBoundsProperty) != null));
                },
                IsAnchored: function (anchor, desiredAnchor) {
                    return ((anchor & desiredAnchor) === desiredAnchor);
                },
                LayoutAnchoredControls: function (container) {
                    var displayRectangle = container.System$Windows$Forms$Layout$IArrangedElement$DisplayRectangle.$clone();

                    if (!System.Windows.Forms.Layout.CommonProperties.GetAutoSize(container) || ((displayRectangle.Width !== 0) && (displayRectangle.Height !== 0))) {
                        var children = container.System$Windows$Forms$Layout$IArrangedElement$Children;
                        for (var i = (children.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                            var element = children.getItem(i);
                            if (System.Windows.Forms.Layout.CommonProperties.GetNeedsAnchorLayout(element)) {
                                System.Windows.Forms.Layout.DefaultLayout.SetCachedBounds(element, System.Windows.Forms.Layout.DefaultLayout.GetAnchorDestination(element, displayRectangle.$clone(), false));
                            }
                        }
                    }
                },
                LayoutAutoSizedControls: function (container) {
                    var children = container.System$Windows$Forms$Layout$IArrangedElement$Children;
                    for (var i = (children.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        var element = children.getItem(i);
                        if (System.Windows.Forms.Layout.CommonProperties.xGetAutoSizedAndAnchored(element)) {
                            var cachedBounds = System.Windows.Forms.Layout.DefaultLayout.GetCachedBounds(element);
                            var anchor = System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                            var preferredSize = element.System$Windows$Forms$Layout$IArrangedElement$DisplayRectangle.Size.$clone();
                            //Size maxSize = cachedBounds.Size;
                            if ((anchor & (12)) === (12)) {
                                preferredSize.Width = cachedBounds.Width;
                            }
                            if ((anchor & (3)) === (3)) {
                                preferredSize.Height = cachedBounds.Height;
                            }

                            var bounds = cachedBounds.$clone();
                            if (System.Windows.Forms.Layout.CommonProperties.GetAutoSizeMode(element) === System.Windows.Forms.AutoSizeMode.GrowAndShrink) {
                                bounds = System.Windows.Forms.Layout.DefaultLayout.GetGrowthBounds(element, preferredSize.$clone());
                            } else if ((cachedBounds.Width < preferredSize.Width) || (cachedBounds.Height < preferredSize.Height)) {
                                var newSize = System.Windows.Forms.Layout.LayoutUtils.UnionSizes(cachedBounds.Size.$clone(), preferredSize.$clone());
                                bounds = System.Windows.Forms.Layout.DefaultLayout.GetGrowthBounds(element, newSize.$clone());
                            }
                            if (System.Drawing.Rectangle.op_Inequality(bounds.$clone(), cachedBounds.$clone())) {
                                System.Windows.Forms.Layout.DefaultLayout.SetCachedBounds(element, bounds.$clone());
                            }
                        }
                    }
                },
                LayoutDockedControls: function (container, measureOnly) {
                    var $step = 0,
                        $jumpFromFinally, 
                        remainingBounds, 
                        empty, 
                        element, 
                        children, 
                        i, 
                        size6, 
                        element2, 
                        size2, 
                        rectangle2, 
                        size3, 
                        rectangle4, 
                        size4, 
                        rectangle5, 
                        size5, 
                        rectangle6, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5], $step);
                                switch ($step) {
                                    case 0: {
                                        remainingBounds = { v : measureOnly ? System.Drawing.Rectangle.Empty.$clone() : container.System$Windows$Forms$Layout$IArrangedElement$DisplayRectangle };
                                        empty = { v : System.Drawing.Size.Empty.$clone() };
                                        element = null;
                                        children = container.System$Windows$Forms$Layout$IArrangedElement$Children;
                                        i = (children.Count - 1) | 0;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( i >= 0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                        $step = 5;
                                        continue;
                                    }
                                    case 2: {
                                        size6 = new System.Drawing.Size();
                                        element2 = children.getItem(i);
                                        if (System.Windows.Forms.Layout.CommonProperties.GetNeedsDockLayout(element2)) {
                                            switch (System.Windows.Forms.Layout.DefaultLayout.GetDock(element2)) {
                                                case System.Windows.Forms.DockStyle.Top: 
                                                    {
                                                        size2 = System.Windows.Forms.Layout.DefaultLayout.GetVerticalDockedSize(element2, remainingBounds.v.Size.$clone(), measureOnly);
                                                        rectangle2 = new System.Drawing.Rectangle.$ctor2(remainingBounds.v.X, remainingBounds.v.Y, size2.Width, size2.Height);
                                                        System.Windows.Forms.Layout.DefaultLayout.xLayoutDockedControl(element2, rectangle2.$clone(), measureOnly, empty, remainingBounds);
                                                        remainingBounds.v.Y = (remainingBounds.v.Y + element2.System$Windows$Forms$Layout$IArrangedElement$Bounds.Height) | 0;
                                                        remainingBounds.v.Height = (remainingBounds.v.Height - element2.System$Windows$Forms$Layout$IArrangedElement$Bounds.Height) | 0;
                                                        break;
                                                    }
                                                case System.Windows.Forms.DockStyle.Bottom: 
                                                    {
                                                        size3 = System.Windows.Forms.Layout.DefaultLayout.GetVerticalDockedSize(element2, remainingBounds.v.Size.$clone(), measureOnly);
                                                        rectangle4 = new System.Drawing.Rectangle.$ctor2(remainingBounds.v.X, ((remainingBounds.v.Bottom - size3.Height) | 0), size3.Width, size3.Height);
                                                        System.Windows.Forms.Layout.DefaultLayout.xLayoutDockedControl(element2, rectangle4.$clone(), measureOnly, empty, remainingBounds);
                                                        remainingBounds.v.Height = (remainingBounds.v.Height - element2.System$Windows$Forms$Layout$IArrangedElement$Bounds.Height) | 0;
                                                        break;
                                                    }
                                                case System.Windows.Forms.DockStyle.Left: 
                                                    {
                                                        size4 = System.Windows.Forms.Layout.DefaultLayout.GetHorizontalDockedSize(element2, remainingBounds.v.Size.$clone(), measureOnly);
                                                        rectangle5 = new System.Drawing.Rectangle.$ctor2(remainingBounds.v.X, remainingBounds.v.Y, size4.Width, size4.Height);
                                                        System.Windows.Forms.Layout.DefaultLayout.xLayoutDockedControl(element2, rectangle5.$clone(), measureOnly, empty, remainingBounds);
                                                        remainingBounds.v.X = (remainingBounds.v.X + element2.System$Windows$Forms$Layout$IArrangedElement$Bounds.Width) | 0;
                                                        remainingBounds.v.Width = (remainingBounds.v.Width - element2.System$Windows$Forms$Layout$IArrangedElement$Bounds.Width) | 0;
                                                        break;
                                                    }
                                                case System.Windows.Forms.DockStyle.Right: 
                                                    {
                                                        size5 = System.Windows.Forms.Layout.DefaultLayout.GetHorizontalDockedSize(element2, remainingBounds.v.Size.$clone(), measureOnly);
                                                        rectangle6 = new System.Drawing.Rectangle.$ctor2(((remainingBounds.v.Right - size5.Width) | 0), remainingBounds.v.Y, size5.Width, size5.Height);
                                                        System.Windows.Forms.Layout.DefaultLayout.xLayoutDockedControl(element2, rectangle6.$clone(), measureOnly, empty, remainingBounds);
                                                        remainingBounds.v.Width = (remainingBounds.v.Width - element2.System$Windows$Forms$Layout$IArrangedElement$Bounds.Width) | 0;
                                                        break;
                                                    }
                                                case System.Windows.Forms.DockStyle.Fill: 
                                                    //if (!(element2 is MdiClient))
                                                    //{
                                                    //    goto Label_025B;
                                                    //}
                                                    element = element2;
                                                    break;
                                            }
                                        }
                                        $step = 3;
                                        continue;// MDI SUPPORT.... Not Sure... #TODO - MDIClient#
                                        //   Label_025B:
                                        //size6 = remainingBounds.Size;
                                        //Rectangle newElementBounds = new Rectangle(remainingBounds.X, remainingBounds.Y, size6.Width, size6.Height);
                                        //xLayoutDockedControl(element2, newElementBounds, measureOnly, ref empty, ref remainingBounds);
                                    }
                                    case 3: {
                                        if (element != null) {
                                            System.Windows.Forms.Layout.DefaultLayout.SetCachedBounds(element, remainingBounds.v.$clone());
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        i = (i - 1) | 0;
                                        $step = 1;
                                        continue;
                                    }
                                    case 5: {
                                        return empty.v.$clone();
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        }, arguments);

                    return $asyncBody();
                },
                ScaleAnchorInfo: function (element, factor) {
                    var anchorInfo = System.Windows.Forms.Layout.DefaultLayout.GetAnchorInfo(element);
                    if (anchorInfo != null) {
                        anchorInfo.Left = Bridge.Int.clip32(anchorInfo.Left * factor.Width);
                        anchorInfo.Top = Bridge.Int.clip32(anchorInfo.Top * factor.Height);
                        anchorInfo.Right = Bridge.Int.clip32(anchorInfo.Right * factor.Width);
                        anchorInfo.Bottom = Bridge.Int.clip32(anchorInfo.Bottom * factor.Height);
                        System.Windows.Forms.Layout.DefaultLayout.SetAnchorInfo(element, anchorInfo);
                    }
                },
                SetAnchor: function (container, element, value) {
                    var anchor = System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                    if (anchor !== value) {
                        if (System.Windows.Forms.Layout.CommonProperties.GetNeedsDockLayout(element)) {
                            System.Windows.Forms.Layout.DefaultLayout.SetDock(element, System.Windows.Forms.DockStyle.None);
                        }
                        System.Windows.Forms.Layout.CommonProperties.xSetAnchor(element, value);
                        if (System.Windows.Forms.Layout.CommonProperties.GetNeedsAnchorLayout(element)) {
                            System.Windows.Forms.Layout.DefaultLayout.UpdateAnchorInfo(element);
                        } else {
                            System.Windows.Forms.Layout.DefaultLayout.SetAnchorInfo(element, null);
                        }
                        if (element.System$Windows$Forms$Layout$IArrangedElement$Container != null) {
                            var flag = System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Right) && !System.Windows.Forms.Layout.DefaultLayout.IsAnchored(value, System.Windows.Forms.AnchorStyles.Right);
                            var flag2 = System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Bottom) && !System.Windows.Forms.Layout.DefaultLayout.IsAnchored(value, System.Windows.Forms.AnchorStyles.Bottom);
                            if ((element.System$Windows$Forms$Layout$IArrangedElement$Container.System$Windows$Forms$Layout$IArrangedElement$Container != null) && (!!(flag | flag2))) {
                                System.Windows.Forms.Layout.LayoutTransaction.DoLayout(element.System$Windows$Forms$Layout$IArrangedElement$Container.System$Windows$Forms$Layout$IArrangedElement$Container, element, System.Windows.Forms.Layout.PropertyNames.Anchor);
                            }
                            System.Windows.Forms.Layout.LayoutTransaction.DoLayout(element.System$Windows$Forms$Layout$IArrangedElement$Container, element, System.Windows.Forms.Layout.PropertyNames.Anchor);
                        }
                    }
                },
                SetAnchorInfo: function (element, value) {
                    element.System$Windows$Forms$Layout$IArrangedElement$Properties.SetObject(System.Windows.Forms.Layout.DefaultLayout._layoutInfoProperty, value);
                },
                SetCachedBounds: function (element, bounds) {
                    if (System.Drawing.Rectangle.op_Inequality(bounds.$clone(), System.Windows.Forms.Layout.DefaultLayout.GetCachedBounds(element))) {
                        var dictionary = Bridge.cast(element.System$Windows$Forms$Layout$IArrangedElement$Container.System$Windows$Forms$Layout$IArrangedElement$Properties.GetObject(System.Windows.Forms.Layout.DefaultLayout._cachedBoundsProperty), System.Collections.IDict);
                        if (dictionary == null) {
                            dictionary = new System.Collections.Specialized.HybridDictionary.ctor();
                            element.System$Windows$Forms$Layout$IArrangedElement$Container.System$Windows$Forms$Layout$IArrangedElement$Properties.SetObject(System.Windows.Forms.Layout.DefaultLayout._cachedBoundsProperty, dictionary);
                        }
                        dictionary.System$Collections$IDict$setItem(element, bounds.$clone());
                    }
                },
                SetDock: function (element, value) {
                    var $t;
                    if (System.Windows.Forms.Layout.DefaultLayout.GetDock(element) !== value) {
                        if (!System.Windows.Forms.ClientUtils.IsEnumValid(Bridge.box(value, System.Windows.Forms.DockStyle, System.Enum.toStringFn(System.Windows.Forms.DockStyle)), value, 0, 5)) {
                            throw new System.ComponentModel.InvalidEnumArgumentException.$ctor3("value", value, System.Windows.Forms.DockStyle);
                        }
                        var needsDockLayout = System.Windows.Forms.Layout.CommonProperties.GetNeedsDockLayout(element);
                        System.Windows.Forms.Layout.CommonProperties.xSetDock(element, value);
                        $t = new System.Windows.Forms.Layout.LayoutTransaction.ctor(Bridge.as(element.System$Windows$Forms$Layout$IArrangedElement$Container, System.Windows.Forms.Control), element, System.Windows.Forms.Layout.PropertyNames.Dock);
                        try {
                            if (value === System.Windows.Forms.DockStyle.None) {
                                if (needsDockLayout) {
                                    element.System$Windows$Forms$Layout$IArrangedElement$SetBounds(System.Windows.Forms.Layout.CommonProperties.GetSpecifiedBounds(element), System.Windows.Forms.BoundsSpecified.None);
                                    System.Windows.Forms.Layout.DefaultLayout.UpdateAnchorInfo(element);
                                }
                            } else {
                                element.System$Windows$Forms$Layout$IArrangedElement$SetBounds(System.Windows.Forms.Layout.CommonProperties.GetSpecifiedBounds(element), System.Windows.Forms.BoundsSpecified.All);
                            }
                        }
                        finally {
                            if (Bridge.hasValue($t)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                UpdateAnchorInfo: function (element) {
                    var $t;
                    var anchorInfo = System.Windows.Forms.Layout.DefaultLayout.GetAnchorInfo(element);
                    if (anchorInfo == null) {
                        anchorInfo = new System.Windows.Forms.Layout.DefaultLayout.AnchorInfo();
                        System.Windows.Forms.Layout.DefaultLayout.SetAnchorInfo(element, anchorInfo);
                    }
                    if (System.Windows.Forms.Layout.CommonProperties.GetNeedsAnchorLayout(element) && (element.System$Windows$Forms$Layout$IArrangedElement$Container != null)) {
                        var cachedBounds = System.Windows.Forms.Layout.DefaultLayout.GetCachedBounds(element);
                        var info2 = ($t = new System.Windows.Forms.Layout.DefaultLayout.AnchorInfo(), $t.Left = anchorInfo.Left, $t.Top = anchorInfo.Top, $t.Right = anchorInfo.Right, $t.Bottom = anchorInfo.Bottom, $t);
                        anchorInfo.Left = element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Left;
                        anchorInfo.Top = element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Top;
                        anchorInfo.Right = element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Right;
                        anchorInfo.Bottom = element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Bottom;
                        var displayRectangle = element.System$Windows$Forms$Layout$IArrangedElement$Container.System$Windows$Forms$Layout$IArrangedElement$DisplayRectangle.$clone();
                        var width = displayRectangle.Width;
                        var height = displayRectangle.Height;
                        anchorInfo.Left = (anchorInfo.Left - displayRectangle.X) | 0;
                        anchorInfo.Top = (anchorInfo.Top - displayRectangle.Y) | 0;
                        anchorInfo.Right = (anchorInfo.Right - displayRectangle.X) | 0;
                        anchorInfo.Bottom = (anchorInfo.Bottom - displayRectangle.Y) | 0;
                        var anchor = System.Windows.Forms.Layout.DefaultLayout.GetAnchor(element);
                        if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Right)) {
                            if ((System.Windows.Forms.DpiHelper.EnableAnchorLayoutHighDpiImprovements && ((((anchorInfo.Right - width) | 0)) > 0)) && (info2.Right < 0)) {
                                anchorInfo.Right = info2.Right;
                                anchorInfo.Left = (info2.Right - cachedBounds.Width) | 0;
                            } else {
                                anchorInfo.Right = (anchorInfo.Right - width) | 0;
                                if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Left)) {
                                    anchorInfo.Left = (anchorInfo.Left - width) | 0;
                                }
                            }
                        } else if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Left)) {
                            anchorInfo.Right = (anchorInfo.Right - (((Bridge.Int.div(width, 2)) | 0))) | 0;
                            anchorInfo.Left = (anchorInfo.Left - (((Bridge.Int.div(width, 2)) | 0))) | 0;
                        }
                        if (System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Bottom)) {
                            if ((System.Windows.Forms.DpiHelper.EnableAnchorLayoutHighDpiImprovements && ((((anchorInfo.Bottom - height) | 0)) > 0)) && (info2.Bottom < 0)) {
                                anchorInfo.Bottom = info2.Bottom;
                                anchorInfo.Top = (info2.Bottom - cachedBounds.Height) | 0;
                            } else {
                                anchorInfo.Bottom = (anchorInfo.Bottom - height) | 0;
                                if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Top)) {
                                    anchorInfo.Top = (anchorInfo.Top - height) | 0;
                                }
                            }
                        } else if (!System.Windows.Forms.Layout.DefaultLayout.IsAnchored(anchor, System.Windows.Forms.AnchorStyles.Top)) {
                            anchorInfo.Bottom = (anchorInfo.Bottom - (((Bridge.Int.div(height, 2)) | 0))) | 0;
                            anchorInfo.Top = (anchorInfo.Top - (((Bridge.Int.div(height, 2)) | 0))) | 0;
                        }
                    }
                },
                xGetDockedSize: function (element, remainingSize, constraints, measureOnly) {
                    if (System.Windows.Forms.Layout.CommonProperties.GetAutoSize(element)) {
                        return element.System$Windows$Forms$Layout$IArrangedElement$GetPreferredSize(constraints.$clone());
                    }
                    return element.System$Windows$Forms$Layout$IArrangedElement$Bounds.Size.$clone();
                },
                xLayout: function (container, measureOnly, preferredSize) {
                    var children = container.System$Windows$Forms$Layout$IArrangedElement$Children;
                    preferredSize.v = new System.Drawing.Size.$ctor2(-7103, -7105);
                    if (measureOnly || (children.Count !== 0)) {
                        var flag = false;
                        var flag2 = false;
                        var flag3 = false;
                        for (var i = (children.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                            var element = children.getItem(i);
                            if (System.Windows.Forms.Layout.CommonProperties.GetNeedsDockAndAnchorLayout(element)) {
                                if (!flag && System.Windows.Forms.Layout.CommonProperties.GetNeedsDockLayout(element)) {
                                    flag = true;
                                }
                                if (!flag2 && System.Windows.Forms.Layout.CommonProperties.GetNeedsAnchorLayout(element)) {
                                    flag2 = true;
                                }
                                if (!flag3 && System.Windows.Forms.Layout.CommonProperties.xGetAutoSizedAndAnchored(element)) {
                                    flag3 = true;
                                }
                            }
                        }
                        var empty = System.Drawing.Size.Empty.$clone();
                        var b = System.Drawing.Size.Empty.$clone();
                        if (flag) {
                            empty = System.Windows.Forms.Layout.DefaultLayout.LayoutDockedControls(container, measureOnly);
                        }
                        if (flag2 && !measureOnly) {
                            System.Windows.Forms.Layout.DefaultLayout.LayoutAnchoredControls(container);
                        }
                        if (flag3) {
                            System.Windows.Forms.Layout.DefaultLayout.LayoutAutoSizedControls(container);
                        }
                        if (!measureOnly) {
                            System.Windows.Forms.Layout.DefaultLayout.ApplyCachedBounds(container);
                        } else {
                            b = System.Windows.Forms.Layout.DefaultLayout.GetAnchorPreferredSize(container);
                            var padding = System.Windows.Forms.Padding.Empty.$clone();
                            var control = Bridge.as(container, System.Windows.Forms.Control);
                            if (control != null) {
                                padding = control.Padding.$clone();
                            } else {
                                padding = System.Windows.Forms.Layout.CommonProperties.GetPadding(container, System.Windows.Forms.Padding.Empty.$clone());
                            }
                            b.Width = (b.Width - padding.Left) | 0;
                            b.Height = (b.Height - padding.Top) | 0;
                            System.Windows.Forms.Layout.DefaultLayout.ClearCachedBounds(container);
                            preferredSize.v = System.Windows.Forms.Layout.LayoutUtils.UnionSizes(empty.$clone(), b.$clone());
                        }
                    }
                    return System.Windows.Forms.Layout.CommonProperties.GetAutoSize(container);
                },
                xLayoutDockedControl: function (element, newElementBounds, measureOnly, preferredSize, remainingBounds) {
                    if (measureOnly) {
                        var proposedSize = new System.Drawing.Size.$ctor2(Math.max(0, ((newElementBounds.Width - remainingBounds.v.Width) | 0)), Math.max(0, ((newElementBounds.Height - remainingBounds.v.Height) | 0)));
                        var dock = System.Windows.Forms.Layout.DefaultLayout.GetDock(element);
                        switch (dock) {
                            case System.Windows.Forms.DockStyle.Top: 
                            case System.Windows.Forms.DockStyle.Bottom: 
                                proposedSize.Width = 0;
                                break;
                        }
                        if ((dock === System.Windows.Forms.DockStyle.Left) || (dock === System.Windows.Forms.DockStyle.Right)) {
                            proposedSize.Height = 0;
                        }
                        if (dock !== System.Windows.Forms.DockStyle.Fill) {
                            preferredSize.v = System.Drawing.Size.op_Addition(preferredSize.v.$clone(), proposedSize.$clone());
                            remainingBounds.v.Size = System.Drawing.Size.op_Addition(remainingBounds.v.Size.$clone(), proposedSize.$clone());
                        } else if ((dock === System.Windows.Forms.DockStyle.Fill) && System.Windows.Forms.Layout.CommonProperties.GetAutoSize(element)) {
                            var size2 = element.System$Windows$Forms$Layout$IArrangedElement$GetPreferredSize(proposedSize.$clone());
                            remainingBounds.v.Size = System.Drawing.Size.op_Addition(remainingBounds.v.Size.$clone(), size2.$clone());
                            preferredSize.v = System.Drawing.Size.op_Addition(preferredSize.v.$clone(), size2.$clone());
                        }
                    } else {
                        element.System$Windows$Forms$Layout$IArrangedElement$SetBounds(newElementBounds.$clone(), System.Windows.Forms.BoundsSpecified.None);
                    }
                }
            }
        },
        methods: {
            GetPreferredSize: function (container, proposedBounds) {
                var size = { v : new System.Drawing.Size() };
                System.Windows.Forms.Layout.DefaultLayout.xLayout(container, true, size);
                return size.v.$clone();
            },
            InitLayoutCore: function (element, specified) {
                if ((specified !== System.Windows.Forms.BoundsSpecified.None) && System.Windows.Forms.Layout.CommonProperties.GetNeedsAnchorLayout(element)) {
                    System.Windows.Forms.Layout.DefaultLayout.UpdateAnchorInfo(element);
                }
            },
            LayoutCore: function (container, args) {
                var size = { v : new System.Drawing.Size() };
                return System.Windows.Forms.Layout.DefaultLayout.xLayout(container, false, size);
            }
        }
    });

    Bridge.define("System.Windows.Forms.Control", {
        inherits: [System.Windows.Forms.Layout.IArrangedElement,System.ComponentModel.IComponent],
        statics: {
            fields: {
                ClickedOnControl: null,
                PropControlsCollection: 0
            },
            ctors: {
                init: function () {
                    this.PropControlsCollection = System.Windows.Forms.PropertyStore.CreateKey();
                },
                ctor: function () {
                    document.body.style.overflow = "hidden";
                    window.onmousemove = function (ev) {
                        if (System.Windows.Forms.Control.ClickedOnControl != null) {
                            ev.stopPropagation();

                            System.Windows.Forms.Control.ClickedOnControl.OnMouseMove(System.Windows.Forms.MouseEventArgs.CreateFromMouseEvent(ev, System.Windows.Forms.Control.ClickedOnControl));
                        }
                        return null;
                    };

                    window.onkeydown = function (ev) {
                        if (ev.keyCode === 9) {
                            if (System.Windows.Forms.Form.ActiveForm != null) {
                                var NotshiftKey = !ev.shiftKey;

                                var frm = System.Windows.Forms.Form.ActiveForm;
                                if (frm.ActiveControl != null) {
                                    ev.stopPropagation();
                                    ev.preventDefault();
                                    var prevActive = frm.ActiveControl;
                                    var nextControl = frm.ActiveControl.GetNextControl(frm.ActiveControl, NotshiftKey);
                                    if (nextControl != null) {
                                        if (prevActive == null || !Bridge.referenceEquals(prevActive.Parent, nextControl.Parent)) {
                                            nextControl.OnChildGotTabbed();
                                        }
                                        frm.ActiveControl = nextControl;

                                    } else {
                                        //Control control = frm;
                                        //control = control.TabIndexControl(NotshiftKey, true);
                                        //if (control != null)
                                        //{
                                        //    if (!control.TabStop)
                                        //    {
                                        //        control = frm.ActiveControl.GetNextControl(control, NotshiftKey);
                                        //    }

                                        //    if (control != null)
                                        //    {
                                        //        ev.stopPropagation();
                                        //        ev.preventDefault();

                                        //        control.OnChildGotTabbed();
                                        //        frm.ActiveControl = control;
                                        //    }
                                        //}
                                    }
                                } else {
                                    //TODO - finish tab looping
                                    //Control control = frm;
                                    //control = control.TabIndexControl(NotshiftKey, true);
                                    //if (control != null)
                                    //{
                                    //    if (!control.TabStop)
                                    //    {
                                    //        control = frm.ActiveControl.GetNextControl(control, NotshiftKey);
                                    //    }

                                    //    if (control != null)
                                    //    {
                                    //        ev.stopPropagation();
                                    //        ev.preventDefault();

                                    //        control.OnChildGotTabbed();
                                    //        frm.ActiveControl = control;                                    
                                    //    }
                                    //}                            
                                }
                            }
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
            MaximumSize: null,
            MinimumSize: null,
            RenderTransparent: false,
            _visible: false,
            _parent: null,
            _size: null,
            _tabStop: false,
            _tabIndex: 0,
            Text: null,
            _backColor: null,
            _enabled: false,
            _readonly: false,
            _foreColor: null,
            _tag: null,
            Controls: null,
            _font: null,
            _autoSize: false,
            _init: false,
            Element: null,
            Padding: null,
            _participatesInLayout: false,
            _properties: null,
            layoutSuspendCount: 0,
            LayoutEngine: null,
            LayoutChanged: null,
            _disposing: false,
            CacheTextInternal: false,
            cachedLayoutEventArgs: null,
            state: 0,
            state2: 0
        },
        events: {
            Load: null,
            MarginChanged: null,
            Click: null,
            Resize: null,
            LocationChanged: null,
            Move: null,
            DockChanged: null,
            MouseDown: null,
            MouseMove: null,
            MouseUp: null,
            Disposed: null,
            MouseLeave: null,
            MouseEnter: null,
            GotFocus: null,
            LostFocus: null
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
            AutoSizeMode: {
                get: function () {
                    return this.GetAutoSizeMode();
                },
                set: function (value) {
                    if (!System.Windows.Forms.ClientUtils.IsEnumValid(Bridge.box(value, System.Windows.Forms.AutoSizeMode, System.Enum.toStringFn(System.Windows.Forms.AutoSizeMode)), value, 0, 1)) {
                        throw new System.ComponentModel.InvalidEnumArgumentException.$ctor3("value", value, System.Windows.Forms.AutoSizeMode);
                    }
                    if (this.GetAutoSizeMode() !== value) {
                        this.SetAutoSizeMode(value);
                        if (this.ParentInternal != null) {
                            if (Bridge.referenceEquals(this.ParentInternal.LayoutEngine, System.Windows.Forms.Layout.DefaultLayout.Instance)) {
                                this.ParentInternal.LayoutEngine.InitLayout(this, System.Windows.Forms.BoundsSpecified.Size);
                            }
                            System.Windows.Forms.Layout.LayoutTransaction.DoLayout(this.ParentInternal, this, System.Windows.Forms.Layout.PropertyNames.AutoSize);
                        }
                    }
                }
            },
            Location: {
                get: function () {
                    return this._location.$clone();
                },
                set: function (value) {
                    var prev = this._location.$clone();
                    this._location = value.$clone(); // new Point(value.X + Margin.Left, value.Y + Margin.Top);

                    this.Element.style.left = this._location.X + "px";
                    this.Element.style.top = this._location.Y + "px";

                    if (prev.X !== value.X || prev.Y !== value.Y) {
                        System.Windows.Forms.Layout.CommonProperties.UpdateSpecifiedBounds(this, value.X, value.Y, this.Width, this.Height);
                        this.OnLocationChanged({ });
                    }

                }
            },
            Width: {
                get: function () {
                    return this.Size.Width;
                },
                set: function (value) {
                    this.Size = new System.Drawing.Size.$ctor2(value, this.Size.Height);
                }
            },
            Height: {
                get: function () {
                    return this.Size.Height;
                },
                set: function (value) {
                    this.Size = new System.Drawing.Size.$ctor2(this.Size.Width, value);
                }
            },
            ParentInternal: {
                get: function () {
                    return this._parent;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._parent, value)) {
                        if (value != null) {
                            value.Controls.add(this);
                        } else {
                            this._parent.Controls.remove(this);
                        }
                    }
                }
            },
            Anchor: {
                get: function () {
                    return System.Windows.Forms.Layout.DefaultLayout.GetAnchor(this);
                },
                set: function (value) {
                    System.Windows.Forms.Layout.DefaultLayout.SetAnchor(this.ParentInternal, this, value);
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
            Dock: {
                get: function () {
                    return System.Windows.Forms.Layout.DefaultLayout.GetDock(this);
                },
                set: function (value) {
                    if (value !== this.Dock) {
                        this.SuspendLayout();
                        try {
                            System.Windows.Forms.Layout.DefaultLayout.SetDock(this, value);
                            this.OnDockChanged({ });
                        }
                        finally {
                            this.ResumeLayout();
                        }
                    }
                }
            },
            Parent: {
                get: function () {
                    //IntSecurity.GetParent.Demand();
                    return this.ParentInternal;
                },
                set: function (value) {
                    this.ParentInternal = value;
                }
            },
            Size: {
                get: function () {
                    return this._size.$clone();
                },
                set: function (value) {
                    var prev = this._size.$clone();
                    this._size = value.$clone(); // new Size(value.Width - Margin.Right, value.Height - Margin.Bottom);

                    if (this._autoSize) {
                        this.Element.style.width = "auto";
                        this.Element.style.height = "auto";
                    } else {
                        //Resize
                        this.Element.style.width = this._size.Width + "px";
                        this.Element.style.height = this._size.Height + "px";

                        if (System.Drawing.Size.op_Inequality(value.$clone(), prev.$clone())) {
                            System.Windows.Forms.Layout.CommonProperties.UpdateSpecifiedBounds(this, this.Location.X, this.Location.Y, value.Width, value.Height);
                            this.OnResize({ });
                        }
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
                        this.Element.removeAttribute("tabIndex");
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
            ForeColor: {
                get: function () {
                    return this._foreColor.$clone();
                },
                set: function (value) {
                    this.ForeColor = value.$clone();
                    this.Element.style.color = this._foreColor.ToHtml();
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
                    System.Drawing.Font.SetFont(this._font, this.Element);
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
            },
            Margin: {
                get: function () {
                    return System.Windows.Forms.Layout.CommonProperties.GetMargin(this);
                },
                set: function (value) {
                    //var prevlocation = Location;
                    //var prevSize = Size;

                    this.SetMargins(value.$clone());

                    this.OnMarginChanged({ });

                    //Location = prevlocation;
                    //Size = prevSize;
                }
            },
            Bounds: {
                get: function () {
                    return new System.Drawing.Rectangle.$ctor1(this.Location.$clone(), this.Size.$clone());
                }
            },
            Children: {
                get: function () {
                    return new System.Windows.Forms.Layout.ArrangedElementCollection.$ctor1(new System.Collections.ArrayList.$ctor2(this.Controls._items));
                }
            },
            Container: {
                get: function () {
                    return this.Parent;
                }
            },
            DisplayRectangle: {
                get: function () {
                    return new System.Drawing.Rectangle.$ctor2(0, 0, this.ClientSize.Width, this.ClientSize.Height);
                }
            },
            ClientSize: {
                get: function () {
                    return this.Size.$clone();
                },
                set: function (value) {
                    this.Size = value.$clone();
                }
            },
            ParticipatesInLayout: {
                get: function () {
                    return this._participatesInLayout;
                }
            },
            Properties: {
                get: function () {
                    return this._properties;
                }
            },
            Site: {
                get: function () {
                    return function () {
                        throw new System.NotImplementedException.ctor();
                    }();
                },
                set: function (value) {
                    throw new System.NotImplementedException.ctor();
                }
            },
            Disposing: {
                get: function () {
                    return this._disposing;
                }
            }
        },
        alias: [
            "Bounds", "System$Windows$Forms$Layout$IArrangedElement$Bounds",
            "Children", "System$Windows$Forms$Layout$IArrangedElement$Children",
            "Container", "System$Windows$Forms$Layout$IArrangedElement$Container",
            "DisplayRectangle", "System$Windows$Forms$Layout$IArrangedElement$DisplayRectangle",
            "ParticipatesInLayout", "System$Windows$Forms$Layout$IArrangedElement$ParticipatesInLayout",
            "Properties", "System$Windows$Forms$Layout$IArrangedElement$Properties",
            "Site", "System$ComponentModel$IComponent$Site",
            "addDisposed", "System$ComponentModel$IComponent$addDisposed",
            "removeDisposed", "System$ComponentModel$IComponent$removeDisposed",
            "GetPreferredSize", "System$Windows$Forms$Layout$IArrangedElement$GetPreferredSize",
            "PerformLayout", "System$Windows$Forms$Layout$IArrangedElement$PerformLayout",
            "Dispose", "System$IDisposable$Dispose"
        ],
        ctors: {
            init: function () {
                this._location = new System.Drawing.Point();
                this.MaximumSize = new System.Drawing.Size();
                this.MinimumSize = new System.Drawing.Size();
                this._size = new System.Drawing.Size();
                this._backColor = new System.Drawing.Color();
                this._foreColor = new System.Drawing.Color();
                this.Padding = new System.Windows.Forms.Padding();
                this._enabled = true;
                this._readonly = false;
                this._participatesInLayout = true;
                this._properties = new System.Windows.Forms.PropertyStore();
                this.LayoutEngine = new System.Windows.Forms.Layout.DefaultLayout();
                this._disposing = false;
            },
            ctor: function (element) {
                this.$initialize();
                this.Element = element;

                this.Controls = new System.Windows.Forms.ControlCollection(this);

                this.Element.style.overflow = "hidden";

                this.Element.style.position = "absolute";
                this.Element.style.boxSizing = "borderbox";

                this.Element.style.padding = "0";
                // Element.style.margin = "1px";

                this.Element.style.fontSize = "inherit";
                this.Element.style.fontFamily = "inherit";

                this.Visible = true;

                this.TabStop = this.GetDefaultTabStop();

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

                this.Element.onfocus = Bridge.fn.bind(this, function (ev) {
                    var frm = this.FindForm();
                    frm.ActiveControl = this;

                    this.OnGotFocus({ });

                    return null;
                });

                this.Element.onblur = Bridge.fn.bind(this, function (ev) {
                    this.OnLostFocus({ });

                    return null;
                });

                this.Element.onmouseleave = Bridge.fn.bind(this, function (ev) {
                    ev.stopPropagation();

                    if (System.Windows.Forms.Control.ClickedOnControl == null) {
                        document.body.style.cursor = null;
                    }

                    this.OnMouseLeave({ });

                    return null;
                });

                this.Element.onmouseenter = Bridge.fn.bind(this, function (ev) {
                    ev.stopPropagation();

                    this.OnMouseEnter({ });

                    return null;
                });

                this.Element.onmousemove = Bridge.fn.bind(this, function (ev) {
                    if (System.Windows.Forms.Control.ClickedOnControl == null) {
                        ev.stopPropagation();

                        this.OnMouseMove(System.Windows.Forms.MouseEventArgs.CreateFromMouseEvent(ev, this));
                    }

                    return null;
                });
                this.SetMargins(this.GetDefaultMargins());
                this.AutoSizeMode = System.Windows.Forms.AutoSizeMode.GrowOnly;
                this._init = true;
            }
        },
        methods: {
            OnChildGotTabbed: function () {
                if (this.Parent != null) {
                    this.Parent.OnChildGotTabbed();
                }
            },
            GetNextControl: function (ctl, forward, isParent) {
                var $t;
                if (isParent === void 0) { isParent = false; }
                if (ctl == null) {
                    return null;
                }
                if (ctl.Parent == null) {
                    return null;
                }
                var diffControl = null;
                var diff = 2147483647;
                $t = Bridge.getEnumerator(ctl.Parent.Children);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, System.Windows.Forms.Control);
                        if (Bridge.referenceEquals(child, ctl)) {
                            continue;
                        }
                        // change to once closest
                        if ((child.TabStop || isParent) && (forward ? child.TabIndex > ctl.TabIndex : child.TabIndex <= ctl.TabIndex)) {
                            var preDiff;
                            if (forward) {
                                preDiff = (child.TabIndex - ctl.TabIndex) | 0;
                            } else {
                                preDiff = (ctl.TabIndex - child.TabIndex) | 0;
                            }
                            if (preDiff < diff) {
                                diffControl = child;
                                diff = preDiff;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }if (diffControl == null) {
                    if (ctl.Parent.Parent == null) {
                        return null;
                    }
                    var control = this.GetNextControl(ctl.Parent, forward, true);

                    if (control == null) {
                        return null;
                    }
                    var controlFound = null;
                    while (((controlFound = control.TabIndexControl(forward))) == null) {
                        control = this.GetNextControl(control, forward, true);
                        if (control == null) {
                            return null;
                        }
                    }
                    return controlFound;
                } else {
                    return diffControl;
                }
            },
            TabIndexControl: function (forward, checkAll) {
                var $t;
                if (checkAll === void 0) { checkAll = false; }
                var selected = null;
                var index = forward ? 2147483647 : -2147483648;
                $t = Bridge.getEnumerator(this.Controls);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        if ((checkAll || item.TabStop) && (forward ? item.TabIndex < index : item.TabIndex > index)) {
                            index = item.TabIndex;
                            selected = item;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return selected;
            },
            GetAutoSizeMode: function () {
                return System.Windows.Forms.Layout.CommonProperties.GetAutoSizeMode(this);
            },
            SetAutoSizeMode: function (mode) {
                System.Windows.Forms.Layout.CommonProperties.SetAutoSizeMode(this, mode);
            },
            Invalidate: function () {
                // TODO: Paint.. Support.
            },
            OnMove: function (e) {
                if (!Bridge.staticEquals(this.Move, null)) {
                    this.Move(this, e);
                }
                if (this.RenderTransparent) {
                    this.Invalidate();
                }
            },
            OnLocationChanged: function (e) {
                this.OnMove({ });
                if (!Bridge.staticEquals(this.LocationChanged, null)) {
                    this.LocationChanged(this, e);
                }
            },
            OnResize: function (e) {
                // TODO: if (((this.controlStyle & ControlStyles.ResizeRedraw) == ControlStyles.ResizeRedraw) || this.GetState(0x400000))
                //{
                //    this.Invalidate();
                //}
                System.Windows.Forms.Layout.LayoutTransaction.DoLayout(this, this, System.Windows.Forms.Layout.PropertyNames.Bounds);
                if (!Bridge.staticEquals(this.Resize, null)) {
                    this.Resize(this, e);
                }
            },
            OnControlAdded: function (control) {

            },
            OnControlRemoved: function (control) {

            },
            OnDockChanged: function (e) {
                if (!Bridge.staticEquals(this.DockChanged, null)) {
                    this.DockChanged(this, e);
                }
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
            GetDefaultTabStop: function () {
                return true;
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
            GetCurrentInheritFont: function () {
                if (this.Font != null) {
                    return this.Font;
                }
                if (this.Parent == null) {
                    return null;
                }
                return this.Parent.GetCurrentInheritFont();
            },
            FindForm: function () {
                if (this.Parent == null) {
                    return null;
                }
                if (Bridge.is(this.Parent, System.Windows.Forms.Form)) {
                    return this.Parent;
                } else {
                    return this.Parent.FindForm();
                }
            },
            GetDefaultMargins: function () {
                return new System.Windows.Forms.Padding.$ctor1(3);
            },
            SetMargins: function (margin) {
                margin = System.Windows.Forms.Layout.LayoutUtils.ClampNegativePaddingToZero(margin.$clone());
                //if(margin == Padding.Empty)
                //{
                //    Element.style.marginLeft = null;
                //    Element.style.marginTop = null;
                //    Element.style.marginRight = null;
                //    Element.style.marginBottom = null;
                //}
                //else
                //{
                //    Element.style.marginLeft = margin.Left + "px";
                //    Element.style.marginTop = margin.Top + "px";
                //    Element.style.marginRight = margin.Right + "px";
                //    Element.style.marginBottom = margin.Bottom + "px";
                //}
                System.Windows.Forms.Layout.CommonProperties.SetMargin(this, margin.$clone());
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
                var $t;
                ($t = document.activeElement) != null ? $t.blur() : null;

                if (!Bridge.staticEquals(this.Load, null)) {
                    this.Load(this, e);
                }
            },
            OnMouseUp: function (e) {
                if (!Bridge.staticEquals(this.MouseUp, null)) {
                    this.MouseUp(this, e);
                }
            },
            OnMarginChanged: function (e) {
                if (!Bridge.staticEquals(this.MarginChanged, null)) {
                    this.MarginChanged(this, e);
                }
            },
            OnGotFocus: function (e) {
                if (!Bridge.staticEquals(this.GotFocus, null)) {
                    this.GotFocus(this, e);
                }
            },
            OnLostFocus: function (e) {
                if (!Bridge.staticEquals(this.LostFocus, null)) {
                    this.LostFocus(this, e);
                }
            },
            OnMouseLeave: function (e) {
                if (!Bridge.staticEquals(this.MouseLeave, null)) {
                    this.MouseLeave(this, e);
                }
            },
            OnMouseEnter: function (e) {
                if (!Bridge.staticEquals(this.MouseEnter, null)) {
                    this.MouseEnter(this, e);
                }
            },
            SuspendLayout: function () {
                this.layoutSuspendCount = (((this.layoutSuspendCount + 1) | 0)) & 255;
                if (this.layoutSuspendCount === 1) {
                    this.OnLayoutSuspended();
                }
            },
            OnLayoutSuspended: function () { },
            ResumeLayout: function () {
                this.ResumeLayout$1(true);
            },
            ResumeLayout$1: function (performLayout) {
                var flag = false;
                if (this.layoutSuspendCount > 0) {
                    if (this.layoutSuspendCount === 1) {
                        this.layoutSuspendCount = (((this.layoutSuspendCount + 1) | 0)) & 255;
                        try {
                            this.OnLayoutResuming(performLayout);
                        }
                        finally {
                            this.layoutSuspendCount = (((this.layoutSuspendCount - 1) | 0)) & 255;
                        }
                    }
                    this.layoutSuspendCount = (((this.layoutSuspendCount - 1) | 0)) & 255;
                    if (!!(((this.layoutSuspendCount === 0) && this.GetState(512)) & performLayout)) {
                        this.PerformLayout$1();
                        flag = true;
                    }
                }
                if (!flag) {
                    this.SetState2(64, true);
                }
                if (!performLayout) {
                    this.OnInitLayout();
                    System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(this);
                    var controls = this.Controls;
                    if (controls != null) {
                        for (var i = 0; i < controls.Count; i = (i + 1) | 0) {
                            controls.getItem(i).OnInitLayout();
                            this.LayoutEngine.InitLayout(controls.getItem(i), System.Windows.Forms.BoundsSpecified.All);
                            System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(controls.getItem(i));
                        }
                    }
                }
            },
            OnLayoutResuming: function (performLayout) {
                if (this.ParentInternal != null) {
                    this.ParentInternal.OnChildLayoutResuming(this, performLayout);
                }
            },
            OnChildLayoutResuming: function (child, performLayout) {
                if (this.ParentInternal != null) {
                    this.ParentInternal.OnChildLayoutResuming(child, performLayout);
                }
            },
            SetState2: function (flag, value) {
                this.state2 = value ? (this.state2 | flag) : (this.state2 & ~flag);
            },
            OnLayout: function (levent) {
                //if (this.IsActiveX)
                //{
                //    this.ActiveXViewChanged();
                //}
                // LayoutEventHandler handler = (LayoutEventHandler)base.Events[EventLayout];
                if (!Bridge.staticEquals(this.LayoutChanged, null)) {
                    this.LayoutChanged(this, levent);
                }
                if (this.LayoutEngine.Layout(this, levent) && (this.ParentInternal != null)) {
                    this.ParentInternal.SetState(8388608, true);
                }
            },
            SetState: function (flag, value) {
                this.state = value ? (this.state | flag) : (this.state & ~flag);
            },
            GetAnyDisposingInHierarchy: function () {
                var parent = this;
                while (parent != null) {
                    if (parent.Disposing) {
                        return true;
                    }
                    parent = parent.Parent;
                }
                return false;
            },
            PerformLayout$2: function (args) {
                if (!this.GetAnyDisposingInHierarchy()) {
                    if (this.layoutSuspendCount > 0) {
                        this.SetState(512, true);
                        if ((this.cachedLayoutEventArgs == null) || (this.GetState2(64) && (args != null))) {
                            this.cachedLayoutEventArgs = args;
                            if (this.GetState2(64)) {
                                this.SetState2(64, false);
                            }
                        }
                        this.LayoutEngine.ProcessSuspendedLayoutEventArgs(this, args);
                    } else {
                        this.layoutSuspendCount = 1;
                        try {
                            this.CacheTextInternal = true;
                            this.OnLayout(args);
                        }
                        finally {
                            this.CacheTextInternal = false;
                            this.SetState(8389120, false);
                            this.layoutSuspendCount = 0;
                            if ((this.ParentInternal != null) && this.ParentInternal.GetState(8388608)) {
                                System.Windows.Forms.Layout.LayoutTransaction.DoLayout(this.ParentInternal, this, System.Windows.Forms.Layout.PropertyNames.PreferredSize);
                            }
                        }
                    }
                }
            },
            PerformLayout$1: function () {
                if (this.cachedLayoutEventArgs != null) {
                    this.PerformLayout$2(this.cachedLayoutEventArgs);
                    this.cachedLayoutEventArgs = null;
                    this.SetState2(64, false);
                } else {
                    this.PerformLayout(null, null);
                }
            },
            PerformLayout: function (affectedElement, propertyName) {
                this.PerformLayout$2(new System.Windows.Forms.LayoutEventArgs.ctor(affectedElement, propertyName));
            },
            OnInitLayout: function () {

            },
            GetState: function (flag) {
                return ((this.state & flag) > 0);
            },
            GetState2: function (flag) {
                return ((this.state2 & flag) > 0);
            },
            ApplySizeConstraints: function (proposedSize) {
                return this.ApplyBoundsConstraints(0, 0, proposedSize.Width, proposedSize.Height).Size.$clone();
            },
            GetPreferredSizeCore: function (proposedSize) {
                return System.Windows.Forms.Layout.CommonProperties.GetSpecifiedBounds(this).Size.$clone();
            },
            GetPreferredSize: function (proposedSize) {
                var preferredSizeCore = new System.Drawing.Size();
                if (this.GetState(6144)) {
                    return System.Windows.Forms.Layout.CommonProperties.xGetPreferredSizeCache(this);
                }
                proposedSize = System.Windows.Forms.Layout.LayoutUtils.ConvertZeroToUnbounded(proposedSize.$clone());
                proposedSize = this.ApplySizeConstraints(proposedSize.$clone());
                if (this.GetState2(2048)) {
                    var size2 = System.Windows.Forms.Layout.CommonProperties.xGetPreferredSizeCache(this);
                    if (!size2.IsEmpty && (System.Drawing.Size.op_Equality(proposedSize.$clone(), System.Windows.Forms.Layout.LayoutUtils.MaxSize.$clone()))) {
                        return size2.$clone();
                    }
                }
                this.CacheTextInternal = true;
                try {
                    preferredSizeCore = this.GetPreferredSizeCore(proposedSize.$clone());
                }
                finally {
                    this.CacheTextInternal = false;
                }
                preferredSizeCore = this.ApplySizeConstraints(preferredSizeCore.$clone());
                if (this.GetState2(2048) && (System.Drawing.Size.op_Equality(proposedSize.$clone(), System.Windows.Forms.Layout.LayoutUtils.MaxSize.$clone()))) {
                    System.Windows.Forms.Layout.CommonProperties.xSetPreferredSizeCache(this, preferredSizeCore.$clone());
                }
                return preferredSizeCore.$clone();
            },
            ApplyBoundsConstraints: function (suggestedX, suggestedY, proposedWidth, proposedHeight) {
                var $t;
                if (!(System.Drawing.Size.op_Inequality(this.MaximumSize.$clone(), System.Drawing.Size.Empty.$clone())) && !(System.Drawing.Size.op_Inequality(this.MinimumSize.$clone(), System.Drawing.Size.Empty.$clone()))) {
                    return new System.Drawing.Rectangle.$ctor2(suggestedX, suggestedY, proposedWidth, proposedHeight);
                }
                var b = System.Windows.Forms.Layout.LayoutUtils.ConvertZeroToUnbounded(this.MaximumSize.$clone());
                var rectangle = ($t = new System.Drawing.Rectangle.$ctor2(suggestedX, suggestedY, 0, 0), $t.Size = System.Windows.Forms.Layout.LayoutUtils.IntersectSizes(new System.Drawing.Size.$ctor2(proposedWidth, proposedHeight), b.$clone()), $t);
                rectangle.Size = System.Windows.Forms.Layout.LayoutUtils.UnionSizes(rectangle.Size.$clone(), this.MinimumSize.$clone());
                return rectangle.$clone();
            },
            SetBoundsCore: function (x, y, width, height, specified) {
                if (this.ParentInternal != null) {
                    this.ParentInternal.SuspendLayout();
                }
                try {
                    if (((this.Location.X !== x) || (this.Location.Y !== y)) || ((this.Width !== width) || (this.Height !== height))) {
                        System.Windows.Forms.Layout.CommonProperties.UpdateSpecifiedBounds$1(this, x, y, width, height, specified);
                        var rectangle = this.ApplyBoundsConstraints(x, y, width, height);



                        //y = rectangle.Y;
                        //if (!this.IsHandleCreated)
                        //{
                        //    this.UpdateBounds(x, y, width, height);
                        //}
                        if (!this.GetState(65536)) {
                            this.Location = rectangle.Location.$clone();
                            this.Size = rectangle.Size.$clone();


                            //int flags = 20;
                            //if ((this.x == x) && (this.y == y))
                            //{
                            //    flags |= 2;
                            //}
                            //if ((this.width == width) && (this.height == height))
                            //{
                            //    flags |= 1;
                            //}
                            this.OnBoundsUpdate(this.Location.X, this.Location.Y, this.Size.Width, this.Size.Height);
                            //SafeNativeMethods.SetWindowPos(new HandleRef(this.window, this.Handle), NativeMethods.NullHandleRef, x, y, width, height, flags);
                        }
                    }
                }
                finally {
                    //  this.InitScaling(specified);
                    if (this.ParentInternal != null) {
                        System.Windows.Forms.Layout.CommonProperties.xClearPreferredSizeCache(this.ParentInternal);
                        this.ParentInternal.LayoutEngine.InitLayout(this, specified);
                        this.ParentInternal.ResumeLayout$1(true);
                    }
                }
            },
            OnBoundsUpdate: function (x, y, width, height) { },
            System$Windows$Forms$Layout$IArrangedElement$SetBounds: function (bounds, specified) {
                //ISite site = this.Site;
                //IComponentChangeService service = null;
                //PropertyDescriptor member = null;
                //PropertyDescriptor descriptor2 = null;
                //bool flag = false;
                //bool flag2 = false;
                //if ((site != null) && site.DesignMode)
                //{
                //    service = (IComponentChangeService)site.GetService(typeof(IComponentChangeService));
                //    if (service != null)
                //    {
                //        member = TypeDescriptor.GetProperties(this)[PropertyNames.Size];
                //        descriptor2 = TypeDescriptor.GetProperties(this)[PropertyNames.Location];
                //        try
                //        {
                //            if (((member != null) && !member.IsReadOnly) && ((bounds.Width != this.Width) || (bounds.Height != this.Height)))
                //            {
                //                //if (!(site is INestedSite))
                //                //{
                //                //    service.OnComponentChanging(this, member);
                //                //}
                //                flag = true;
                //            }
                //            if (((descriptor2 != null) && !descriptor2.IsReadOnly) && ((bounds.X != this.x) || (bounds.Y != this.y)))
                //            {
                //                //if (!(site is INestedSite))
                //                //{
                //                //    service.OnComponentChanging(this, descriptor2);
                //                //}
                //                flag2 = true;
                //            }
                //        }
                //        catch (InvalidOperationException)
                //        {
                //        }
                //    }
                //}
                this.SetBoundsCore(bounds.X, bounds.Y, bounds.Width, bounds.Height, specified);
                //if ((site != null) && (service != null))
                //{
                //    try
                //    {
                //        if (flag)
                //        {
                //            service.OnComponentChanged(this, member, null, null);
                //        }
                //        if (flag2)
                //        {
                //            service.OnComponentChanged(this, descriptor2, null, null);
                //        }
                //    }
                //    catch (InvalidOperationException)
                //    {
                //    }
                //}
            },
            SetBounds: function (x, y, width, height, specified) {
                if ((specified & System.Windows.Forms.BoundsSpecified.X) === System.Windows.Forms.BoundsSpecified.None) {
                    x = this.Location.X;
                }
                if ((specified & System.Windows.Forms.BoundsSpecified.Y) === System.Windows.Forms.BoundsSpecified.None) {
                    y = this.Location.Y;
                }
                if ((specified & System.Windows.Forms.BoundsSpecified.Width) === System.Windows.Forms.BoundsSpecified.None) {
                    width = this.Size.Width;
                }
                if ((specified & System.Windows.Forms.BoundsSpecified.Height) === System.Windows.Forms.BoundsSpecified.None) {
                    height = this.Size.Height;
                }
                if (((this.Location.X !== x) || (this.Location.Y !== y)) || ((this.Size.Width !== width) || (this.Size.Height !== height))) {
                    this.SetBoundsCore(x, y, width, height, specified);
                    System.Windows.Forms.Layout.LayoutTransaction.DoLayout(this.ParentInternal, this, System.Windows.Forms.Layout.PropertyNames.Bounds);
                } else {
                    //this.InitScaling(specified);
                }
            },
            Dispose: function () {
                var $t;
                if (this._disposing) {
                    return;
                }
                this._disposing = true;

                if (!Bridge.staticEquals(this.Disposed, null)) {
                    this.Disposed(this, { });
                }

                $t = Bridge.getEnumerator(this.Controls);
                try {
                    while ($t.moveNext()) {
                        var item = { v : $t.Current };
                        item.v != null ? item.v.Dispose() : null;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }}
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
            DrawMode: 0
        },
        ctors: {
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
            _items: null
        },
        props: {
            Owner: {
                get: function () {
                    return this._owner;
                }
            },
            Count: {
                get: function () {
                    return this._items.Count;
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
                    throw new System.NotImplementedException.ctor();
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
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$System$Windows$Forms$Control$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$indexOf",
            "insert", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$insert",
            "remove", "System$Collections$Generic$ICollection$1$System$Windows$Forms$Control$remove",
            "removeAt", "System$Collections$Generic$IList$1$System$Windows$Forms$Control$removeAt"
        ],
        ctors: {
            ctor: function (owner) {
                this.$initialize();
                this._owner = owner;
                this._items = new (System.Collections.Generic.List$1(System.Windows.Forms.Control)).ctor();
            }
        },
        methods: {
            getItem: function (index) {
                return this._items.getItem(index);
            },
            setItem: function (index, value) {
                this._items.setItem(index, value);
            },
            add: function (item) {
                this._owner.Element.appendChild(item.Element);
                item._parent = this.Owner;
                item.InvokeLoad();
                this._items.add(item);
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
                    this._items.add(item[System.Array.index(i, item)]);
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
                			
                this._items.clear();
            },
            contains: function (item) {
                return this._items.contains(item);
            },
            copyTo$1: function (array, arrayIndex) {
                this._items.copyTo(array, arrayIndex);
            },
            copyTo: function (array, arrayIndex) {
                this._items.copyTo(Bridge.cast(array, System.Array.type(System.Windows.Forms.Control)), arrayIndex);
            },
            GetEnumerator: function () {
                return this._items.GetEnumerator().$clone();
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return this._items.GetEnumerator().$clone();
            },
            indexOf: function (item) {
                return this._items.indexOf(item);
            },
            insert: function (index, item) {
                this._owner.Element.insertBefore(item.Element, Bridge.cast(this._owner.Element.childNodes[index], Node));
                this._items.insert(index, item);
                this._owner.OnControlAdded(item);
            },
            remove: function (item) {
                this._owner.Element.removeChild(item.Element);

                this._owner.OnControlRemoved(item);

                return this._items.remove(item);
            },
            removeAt: function (index) {
                this._owner.Element.removeChild(this._owner.Element.childNodes[index]);

                this._owner.OnControlRemoved(this._items.getItem(index));

                this._items.removeAt(index);
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
                            var arry = System.String.split(str, [44].map(function (i) {{ return String.fromCharCode(i); }}));
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
                            var arry = System.String.split(str, [44].map(function (i) {{ return String.fromCharCode(i); }}));
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
                this.Element.setAttribute("scope", "label");
            }
        },
        methods: {
            GetDefaultTabStop: function () {
                return false;
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
                            var arry = System.String.split(str, [44].map(function (i) {{ return String.fromCharCode(i); }}));
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
            _linkTag: null
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
                            $t.System$IDisposable$Dispose();
                        }
                    }return pages.ToArray();
                }
            },
            Font: {
                get: function () {
                    return Bridge.ensureBaseProperty(this, "Font").$System$Windows$Forms$Control$Font;
                },
                set: function (value) {
                    Bridge.ensureBaseProperty(this, "Font").$System$Windows$Forms$Control$Font = value;
                    this.ResizeTabHeaderSize();
                }
            },
            SelectedIndex: {
                get: function () {
                    return this._selectedIndex;
                },
                set: function (value) {
                    if (this._selectedIndex !== value) {
                        this._selectedIndex = value;
                        this.PerformLayout$1();
                    }
                }
            },
            SelectedPage: {
                get: function () {
                    var $t;
                    return this._selectedIndex < 0 ? null : ($t = this.TabPages)[System.Array.index(this._selectedIndex, $t)];
                },
                set: function (value) {
                    var $t;
                    if (value == null) {
                        this.SelectedIndex = -1;
                        return;
                    }
                    for (var i = 0; i < this.TabPages.length; i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(($t = this.TabPages)[System.Array.index(i, $t)], value)) {
                            this.SelectedIndex = i;
                            return;
                        }
                    }
                    this.SelectedIndex = -1;
                }
            },
            LinkTag: {
                get: function () {
                    return this._linkTag;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._linkTag, value)) {
                        this._linkTag = value;
                        this.PerformLayout$1();
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
                            var arry = System.String.split(str, [44].map(function (i) {{ return String.fromCharCode(i); }}));
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
            },
            LinkTag1: {
                get: function () {
                    return this._linkTag;
                },
                set: function (value) {
                    this._linkTag = value;
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
                this.Element.style.outline = "0";
            }
        },
        methods: {
            OnControlAdded: function (control) {
                System.Windows.Forms.Control.prototype.OnControlAdded.call(this, control);

                if (Bridge.is(control, System.Windows.Forms.TabPage)) {
                    this.Controls.add(control.Header);

                    this.PerformLayout$1();
                }
            },
            OnControlRemoved: function (control) {
                System.Windows.Forms.Control.prototype.OnControlRemoved.call(this, control);

                if (Bridge.is(control, System.Windows.Forms.TabPage)) {
                    this.Controls.remove(control.Header);

                    this.PerformLayout$1();
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
                        div.Element.style.outline = "none";
                        div.Element.style.margin = "none";

                        System.Drawing.Font.SetFont(page.GetCurrentInheritFont(), div.Element);

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
                        $t.System$IDisposable$Dispose();
                    }
                }},
            RenderTabContent: function () {
                var $t, $t1;
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
                                var tags = System.String.split(this.LinkTag, [32].map(function (i) {{ return String.fromCharCode(i); }}));
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
                                        $t1.System$IDisposable$Dispose();
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
                            page.Size = new System.Drawing.Size.$ctor2(((this.Size.Width - 8) | 0), ((this.Size.Height - (26)) | 0));
                            page.Header.Element.style.borderBottom = null;
                            page.Header.Element.style.cursor = null;
                        } else {

                            this.Controls.remove(page.Header);
                            this.Controls.add(page.Header);

                            page.Element.classList.remove("active");

                            page.Header.Element.style.cursor = "pointer";
                            page.Header.Element.classList.remove("active");
                            page.Header.Element.style.outline = "0";
                            page.Header.Element.style.margin = "0";
                            page.Header.Element.style.borderBottom = "none";

                            page.Visible = false;
                        }
                        i = (i + 1) | 0;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                if (activePage != null) {
                    this.Controls.remove(activePage.Header);
                    this.Controls.add(activePage.Header);
                }

                this.ResizeTabHeaderSize();
            },
            OnLayout: function (levent) {
                System.Windows.Forms.Control.prototype.OnLayout.call(this, levent);

                this.RenderTabContent();
            },
            PerformLayout$1: function () {
                System.Windows.Forms.Control.prototype.PerformLayout$1.call(this);

                this.RenderTabContent();
            },
            GetDefaultTabStop: function () {
                return false;
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
        },
        methods: {
            GetDefaultTabStop: function () {
                return false;
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
        fields: {
            DialogResult: 0
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.ButtonBase.ctor.call(this, document.createElement("button"));

            }
        },
        methods: {
            OnClick: function (e) {
                if (this.DialogResult !== System.Windows.Forms.DialogResult.None) {
                    var frm = this.GetForm();
                    if (frm != null) {
                        frm.DialogResult = this.DialogResult;
                        frm.Close();
                    }
                }
                System.Windows.Forms.ButtonBase.prototype.OnClick.call(this, e);
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
                            var arry = System.String.split(str, [44].map(function (i) {{ return String.fromCharCode(i); }}));
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
                    document.body.style.userSelect = "none";

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
                            $t.System$IDisposable$Dispose();
                        }
                    }$t1 = Bridge.getEnumerator(RemoveList);
                    try {
                        while ($t1.moveNext()) {
                            var item1 = $t1.Current;
                            System.Windows.Forms.Form._minimizedForms.remove(item1);
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
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
            btnClose: null,
            _activeControl: null,
            StartPosition: 0,
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
            ActiveControl: {
                get: function () {
                    return this._activeControl;
                },
                set: function (value) {
                    if (!Bridge.referenceEquals(this._activeControl, value)) {
                        this.SetActiveControl(value);
                        this._activeControl.Element.focus();
                    }
                }
            },
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

                //btnClose = new Button()
                //{
                //    Tag = "Close"
                //};
                //btnClose.Element.setAttribute("scope", "closeform");            
                //Controls.Add(btnClose);

                this._setBorderWidth();
            }
        },
        methods: {
            SetActiveControl: function (control) {
                if (this._activeControl != null) {
                    this._activeControl.Element.blur();
                }
                this._activeControl = control;
            },
            GetDefaultMargins: function () {
                return System.Windows.Forms.Padding.Empty.$clone();
            },
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
                if ((this._isDialog && this._inDialogResult) || this._inClose) {
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

                this.Dispose();

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
                    this.DialogResults.AddRange(dialogResults);
                }
            },
            _showForm: function () {
                document.body.appendChild(this.Element);
                if (this.StartPosition === System.Windows.Forms.FormStartPosition.CenterScreen) {
                    var rec = document.body.getBoundingClientRect();

                    this.Location = new System.Drawing.Point.$ctor1(Bridge.Int.clip32((rec.width * 0.5) - (this.Size.Width * 0.5)), Bridge.Int.clip32((rec.height * 0.5) + (this.Size.Height * 0.5)));
                }
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
            GetMovementMode: function (e) {
                if (this._allowMoveChange || this._allowSizeChange) {
                    if (this._allowSizeChange) {
                        if (e.X >= 0 && e.X <= 3 && e.Y >= 0 && e.Y <= 3) {
                            document.body.style.cursor = "nw-resize";
                            return System.Windows.Forms.Form.FormMovementModes.TopLeft;
                        } else if (e.X >= 0 && e.X <= 2 && e.Y > 3 && e.Y < ((this.Size.Height - 3) | 0)) {
                            document.body.style.cursor = "w-resize";
                            return System.Windows.Forms.Form.FormMovementModes.Left;
                        } else if (e.X >= 0 && e.X <= 3 && e.Y >= ((this.Size.Height - 3) | 0) && e.Y <= this.Size.Height) {
                            document.body.style.cursor = "sw-resize";
                            return System.Windows.Forms.Form.FormMovementModes.BottomLeft;
                        } else if (e.X > 3 && e.X < ((this.Size.Width - 3) | 0) && e.Y >= 0 && e.Y < 3) {
                            document.body.style.cursor = "n-resize";
                            return System.Windows.Forms.Form.FormMovementModes.Top;
                        } else if (e.X >= ((this.Size.Width - 3) | 0) && e.X <= this.Size.Width && e.Y >= 0 && e.Y < 3) {
                            document.body.style.cursor = "ne-resize";
                            return System.Windows.Forms.Form.FormMovementModes.TopRight;
                        } else if (e.X > ((this.Size.Width - 3) | 0) && e.X <= this.Size.Width && e.Y > 3 && e.Y < ((this.Size.Height - 3) | 0)) {
                            document.body.style.cursor = "e-resize";
                            return System.Windows.Forms.Form.FormMovementModes.Right;
                        } else if (e.X >= ((this.Size.Width - 3) | 0) && e.X <= this.Size.Width && e.Y >= ((this.Size.Height - 3) | 0) && e.Y <= this.Size.Height) {
                            document.body.style.cursor = "se-resize";
                            return System.Windows.Forms.Form.FormMovementModes.BottomRight;
                        } else if (e.X > 3 && e.X < ((this.Size.Width - 3) | 0) && e.Y > ((this.Size.Height - 3) | 0) && e.Y <= this.Size.Height) {
                            document.body.style.cursor = "s-resize";
                            return System.Windows.Forms.Form.FormMovementModes.Bottom;
                        }
                    }

                    if (!this._mouseDownOnBorder && this._allowMoveChange && e.X > 1 && e.X <= ((this.Size.Width - this._formRightBorder) | 0) && e.Y > 1 && e.Y <= this._formTopBorder) {
                        document.body.style.cursor = "move";
                        return System.Windows.Forms.Form.FormMovementModes.Move;
                    }
                }

                document.body.style.cursor = null;

                return System.Windows.Forms.Form.FormMovementModes.None;
            },
            OnMouseDown: function (e) {
                System.Windows.Forms.Form.ActiveForm = this;
                // work out area... of click.
                //document.body.style.userSelect = null;

                this._formMovementModes = this.GetMovementMode(e);

                if (((this._mouseDownOnBorder = (this._formMovementModes !== System.Windows.Forms.Form.FormMovementModes.None)))) {
                    //document.body.style.userSelect = "none";
                    this._prevX = (this.Location.X - (((e.X + this.Location.X) | 0))) | 0;
                    this._prevY = (this.Location.Y - (((e.Y + this.Location.Y) | 0))) | 0;

                    this._prevFormX = this.Location.X;
                    this._prevFormY = this.Location.Y;
                }

                System.Windows.Forms.ContainerControl.prototype.OnMouseDown.call(this, e);
            },
            OnMouseUp: function (e) {
                //document.body.style.userSelect = null;
                this._mouseDownOnBorder = false;

                document.body.style.cursor = null;

                System.Windows.Forms.ContainerControl.prototype.OnMouseUp.call(this, e);
            },
            OnMouseMove: function (e) {
                // is mouse down???
                if (this._mouseDownOnBorder) {
                    var prev = this.Location.$clone();
                    var newY = ((((this.Location.Y + e.Y) | 0)) + this._prevY) | 0;
                    var newX = ((((this.Location.X + e.X) | 0)) + this._prevX) | 0;

                    if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.Move) {
                        this.Location = new System.Drawing.Point.$ctor1(newX, newY);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.TopLeft) {
                        this.SuspendLayout();
                        this.Location = new System.Drawing.Point.$ctor1(newX, newY);
                        this.Size = new System.Drawing.Size.$ctor2(((this.Size.Width + (((prev.X - this.Location.X) | 0))) | 0), ((this.Size.Height + (((prev.Y - this.Location.Y) | 0))) | 0));
                        this.ResumeLayout$1(true);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.Top) {
                        this.SuspendLayout();
                        this.Location = new System.Drawing.Point.$ctor1(this.Location.X, newY);
                        this.Size = new System.Drawing.Size.$ctor2(this.Size.Width, ((this.Size.Height - (((newY - prev.Y) | 0))) | 0));
                        this.ResumeLayout$1(true);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.TopRight) {
                        this.SuspendLayout();
                        this.Location = new System.Drawing.Point.$ctor1(this.Location.X, newY);
                        this.Size = new System.Drawing.Size.$ctor2(e.X, ((this.Size.Height - (((newY - prev.Y) | 0))) | 0));
                        this.ResumeLayout$1(true);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.Left) {
                        this.SuspendLayout();
                        this.Location = new System.Drawing.Point.$ctor1(newX, this.Location.Y);
                        this.Size = new System.Drawing.Size.$ctor2(((this.Size.Width - (((newX - prev.X) | 0))) | 0), this.Size.Height);
                        this.ResumeLayout$1(true);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.BottomLeft) {
                        this.SuspendLayout();
                        this.Location = new System.Drawing.Point.$ctor1(newX, this.Location.Y);
                        this.Size = new System.Drawing.Size.$ctor2(((this.Size.Width - (((newX - prev.X) | 0))) | 0), e.Y);
                        this.ResumeLayout$1(true);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.Bottom) {
                        this.Size = new System.Drawing.Size.$ctor2(this.Size.Width, e.Y);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.Right) {
                        this.Size = new System.Drawing.Size.$ctor2(e.X, this.Size.Height);
                    } else if (this._formMovementModes === System.Windows.Forms.Form.FormMovementModes.BottomRight) {
                        this.Size = new System.Drawing.Size.$ctor2(e.X, e.Y);
                    }

                } else {
                    this.GetMovementMode(e);
                }
                System.Windows.Forms.ContainerControl.prototype.OnMouseMove.call(this, e);
            },
            _processWinFormCloseButton: function () {

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
                return new System.Drawing.Size.$ctor2(((size.Width - (((this._formLeftBorder + this._formRightBorder) | 0))) | 0), ((size.Height - (((this._formTopBorder + this._formBottonBorder) | 0))) | 0));
            },
            SetSize: function (clientSize) {
                return new System.Drawing.Size.$ctor2(((clientSize.Width + (((this._formLeftBorder + this._formRightBorder) | 0))) | 0), ((clientSize.Height + (((this._formTopBorder + this._formBottonBorder) | 0))) | 0));
            },
            Dispose$1: function (disposing) {

            }
        }
    });

    Bridge.define("System.Windows.Forms.Panel", {
        inherits: [System.Windows.Forms.ContainerControl],
        fields: {
            _borderStyle: 0
        },
        props: {
            BorderStyle: {
                get: function () {
                    return this._borderStyle;
                },
                set: function (value) {
                    if (this._borderStyle !== value) {
                        this._borderStyle = value;
                        switch (this._borderStyle) {
                            case System.Windows.Forms.BorderStyle.None: 
                                this.Element.style.border = null;
                                break;
                            case System.Windows.Forms.BorderStyle.FixedSingle: 
                            case System.Windows.Forms.BorderStyle.Fixed3D: 
                                this.Element.style.border = "1px solid rgb(100, 100, 100)";
                                break;
                            default: 
                                break;
                        }
                    }
                }
            }
        },
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
                if (this.Parent != null && Bridge.is(this.Parent, System.Windows.Forms.TabControl)) {
                    this.Parent.SelectedPage = this;
                }
            },
            OnChildGotTabbed: function () {
                if (this.Parent != null && Bridge.is(this.Parent, System.Windows.Forms.TabControl)) {
                    this.Parent.SelectedPage = this;
                }
                System.Windows.Forms.Panel.prototype.OnChildGotTabbed.call(this);
            }
        }
    });
});
