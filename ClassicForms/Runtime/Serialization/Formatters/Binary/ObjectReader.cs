using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Resources;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class ObjectReader
    {
        // Fields
        private bool bFullDeserialization;
        private BinaryMethodCall binaryMethodCall;
        private BinaryMethodReturn binaryMethodReturn;
        private bool bIsCrossAppDomain;
        private bool bMethodCall;
        private bool bMethodReturn;
        private bool bOldFormatDetected;
        internal bool bSimpleAssembly;
        internal object[] crossAppDomainArray;
        internal InternalFE formatterEnums;
        internal HeaderHandler handler;
        internal object handlerObject;
        internal Header[] headers;
        internal SerializationBinder m_binder;
        internal StreamingContext m_context;
        internal IFormatterConverter m_formatterConverter;
        internal ObjectManager m_objectManager;
        internal Stream m_stream;
        internal ISurrogateSelector m_surrogates;
        internal object m_topObject;
        private string previousAssemblyString;
        private string previousName;
        private Type previousType;
        internal SerObjectInfoInit serObjectInfoInit;
        //private static FileIOPermission sfileIOPermission = new FileIOPermission(PermissionState.Unrestricted);
        internal SerStack stack;
        private const int THRESHOLD_FOR_VALUETYPE_IDS = 0x7fffffff;
        internal long topId;
        private Dictionary<string, TypeNAssembly> typeCache = new Dictionary<string, TypeNAssembly>();
        private IntSizedArray valTypeObjectIdTable;
        private SerStack valueFixupStack;

        // Methods
        internal ObjectReader(Stream stream, ISurrogateSelector selector, StreamingContext context, InternalFE formatterEnums, SerializationBinder binder)
        {
            if (stream == null)
            {
                throw new ArgumentNullException("stream", EnvironmentV2.GetResourceString("ArgumentNull_Stream"));
            }
            this.m_stream = stream;
            this.m_surrogates = selector;
            this.m_context = context;
            this.m_binder = binder;
            if (this.m_binder != null)
            {
                //TODO: ResourceReader.TypeLimitingDeserializationBinder binder2 = this.m_binder as ResourceReader.TypeLimitingDeserializationBinder;
                //if (binder2 != null)
                //{
                //    binder2.ObjectReader = this;
                //}
            }
            this.formatterEnums = formatterEnums;
        }

        
        internal Type Bind(string assemblyString, string typeString)
        {
            Type type = null;
            if (this.m_binder != null)
            {
                type = this.m_binder.BindToType(assemblyString, typeString);
            }
            if (type == null)
            {
                type = this.FastBindToType(assemblyString, typeString);
            }
            return type;
        }

        
        internal void CheckSecurity(ParseRecord pr)
        {
            //TODO:
            //Type pRdtType = pr.PRdtType;
            //if ((pRdtType != null) && this.IsRemoting)
            //{
            //    if (typeof(MarshalByRefObject).IsAssignableFrom(pRdtType))
            //    {
            //        object[] values = new object[] { pRdtType.FullName };
            //        throw new ArgumentException(EnvironmentV2.GetResourceString("Serialization_MBRAsMBV", values));
            //    }
            //    FormatterServices.CheckTypeSecurity(pRdtType, this.formatterEnums.FEsecurityLevel);
            //}
        }

        
        private void CheckSerializable(Type t)
        {
            //TODO:
            //if (!t.IsSerializable && !this.HasSurrogate(t))
            //{
            //    throw new SerializationException(string.Format(CultureInfo.InvariantCulture, EnvironmentV2.GetResourceString("Serialization_NonSerType"), t.FullName, t.Assembly.FullName));
            //}
        }

       
        private static void CheckTypeForwardedTo(Assembly sourceAssembly, Assembly destAssembly, Type resolvedType)
        {
            //TODO:
            //if ((!FormatterServices.UnsafeTypeForwardersIsEnabled() && (sourceAssembly != destAssembly)) && !destAssembly.PermissionSet.IsSubsetOf(sourceAssembly.PermissionSet))
            //{
            //    TypeInformation typeInformation = BinaryFormatter.GetTypeInformation(resolvedType);
            //    if (!typeInformation.HasTypeForwardedFrom)
            //    {
            //        SecurityException exception2 = new SecurityException
            //        {
            //            Demanded = sourceAssembly.PermissionSet
            //        };
            //        throw exception2;
            //    }
            //    Assembly assembly = null;
            //    try
            //    {
            //        assembly = Assembly.Load(typeInformation.AssemblyString);
            //    }
            //    catch
            //    {
            //    }
            //    if (assembly != sourceAssembly)
            //    {
            //        SecurityException exception1 = new SecurityException
            //        {
            //            Demanded = sourceAssembly.PermissionSet
            //        };
            //        throw exception1;
            //    }
            //}
        }

        
        internal ReadObjectInfo CreateReadObjectInfo(Type objectType) =>
            ReadObjectInfo.Create(objectType, this.m_surrogates, this.m_context, this.m_objectManager, this.serObjectInfoInit, this.m_formatterConverter, this.bSimpleAssembly);

        
        internal ReadObjectInfo CreateReadObjectInfo(Type objectType, string[] memberNames, Type[] memberTypes) =>
            ReadObjectInfo.Create(objectType, memberNames, memberTypes, this.m_surrogates, this.m_context, this.m_objectManager, this.serObjectInfoInit, this.m_formatterConverter, this.bSimpleAssembly);

        internal object CrossAppDomainArray(int index) =>
            this.crossAppDomainArray[index];

        
        internal object Deserialize(HeaderHandler handler, __BinaryParser serParser, bool fCheck, bool isCrossAppDomain, IMethodCallMessage methodCallMessage)
        {
            if (serParser == null)
            {
                object[] values = new object[] { serParser };
                throw new ArgumentNullException("serParser", EnvironmentV2.GetResourceString("ArgumentNull_WithParamName", values));
            }
            this.bFullDeserialization = false;
            this.TopObject = null;
            this.topId = 0L;
            this.bMethodCall = false;
            this.bMethodReturn = false;
            this.bIsCrossAppDomain = isCrossAppDomain;
            this.bSimpleAssembly = this.formatterEnums.FEassemblyFormat == FormatterAssemblyStyle.Simple;
            if (fCheck)
            {
                //TODO:
                //CodeAccessPermission.Demand(PermissionType.SecuritySerialization);
            }
            this.handler = handler;
            serParser.Run();
            if (this.bFullDeserialization)
            {
                this.m_objectManager.DoFixups();
            }
            if (!this.bMethodCall && !this.bMethodReturn)
            {
                if (this.TopObject == null)
                {
                    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TopObject"));
                }
                //if (this.HasSurrogate(this.TopObject.GetType()) && (this.topId != 0))
                //{
                //    this.TopObject = this.m_objectManager.GetObject(this.topId);
                //}
                if (this.TopObject is IObjectReference)
                {
                    this.TopObject = ((IObjectReference)this.TopObject).GetRealObject(this.m_context);
                }
            }
            if (this.bFullDeserialization)
            {
                this.m_objectManager.RaiseDeserializationEvent();
            }
            if (handler != null)
            {
                this.handlerObject = handler(this.headers);
            }
            if (this.bMethodCall)
            {
                object[] topObject = this.TopObject as object[];
                this.TopObject = this.binaryMethodCall.ReadArray(topObject, this.handlerObject);
            }
            else if (this.bMethodReturn)
            {
                object[] returnA = this.TopObject as object[];
                this.TopObject = this.binaryMethodReturn.ReadArray(returnA, methodCallMessage, this.handlerObject);
            }
            return this.TopObject;
        }

        
        internal Type FastBindToType(string assemblyName, string typeName)
        {
            Type typeFromAssembly = null;
            TypeNAssembly cachedValue = null; // = (TypeNAssembly)this.typeCache.GetCachedValue(typeName);

            this.typeCache.TryGetValue(typeName, out cachedValue);

            if ((cachedValue == null) || (cachedValue.assemblyName != assemblyName))
            {
                Assembly assm = null;
                if (this.bSimpleAssembly)
                {
                    try
                    {
                        //sfileIOPermission.Assert();
                        try
                        {
                            assm = Assembly.Load(assemblyName);
                            //assm = ResolveSimpleAssemblyName(new AssemblyName(assemblyName));
                        }
                        finally
                        {
                            //CodeAccessPermission.RevertAssert();
                        }
                    }
                    catch (Exception)
                    {
                    }
                    if (assm == null)
                    {
                        return null;
                    }
                    GetSimplyNamedTypeFromAssembly(assm, typeName, ref typeFromAssembly);
                }
                else
                {
                    try
                    {
                        //..sfileIOPermission.Assert();
                        try
                        {
                            assm = Assembly.Load(assemblyName);
                        }
                        finally
                        {
                            //CodeAccessPermission.RevertAssert();
                        }
                    }
                    catch (Exception)
                    {
                    }
                    if (assm == null)
                    {
                        return null;
                    }
                    typeFromAssembly = assm.GetType(typeName); // FormatterServices.GetTypeFromAssembly(assm, typeName);
                }
                if (typeFromAssembly == null)
                {
                    return null;
                }
                CheckTypeForwardedTo(assm, typeFromAssembly.Assembly, typeFromAssembly);
                cachedValue = new TypeNAssembly
                {
                    type = typeFromAssembly,
                    assemblyName = assemblyName
                };
                this.typeCache[typeName] = cachedValue; //.SetCachedValue(cachedValue);
            }
            return cachedValue.type;
        }

        
        internal long GetId(long objectId)
        {
            if (!this.bFullDeserialization)
            {
                this.InitFullDeserialization();
            }
            if (objectId > 0L)
            {
                return objectId;
            }
            if (!this.bOldFormatDetected && (objectId != -1L))
            {
                return (-1L * objectId);
            }
            this.bOldFormatDetected = true;
            if (this.valTypeObjectIdTable == null)
            {
                this.valTypeObjectIdTable = new IntSizedArray();
            }
            long num = 0L;
            num = this.valTypeObjectIdTable[(int)objectId];
            if (num == 0)
            {
                num = 0x7fffffffL + objectId;
                this.valTypeObjectIdTable[(int)objectId] = (int)num;
            }
            return num;
        }

        
        private static void GetSimplyNamedTypeFromAssembly(Assembly assm, string typeName, ref Type type)
        {
            //try
            //{
            //    //type = FormatterServices.GetTypeFromAssembly(assm, typeName);
            //}     
            //catch (Exception)
            //{
            //}
            if (type == null)
            {
                type = Type.GetType(typeName); // TODO: , new Func<AssemblyName, Assembly>(ObjectReader.ResolveSimpleAssemblyName), new Func<Assembly, string, bool, Type>(new TopLevelAssemblyTypeResolver(assm).ResolveType), false
            }
        }

        
        internal Type GetType(BinaryAssemblyInfo assemblyInfo, string name)
        {
            Type typeFromAssembly = null;
            if ((((this.previousName != null) && (this.previousName.Length == name.Length)) && (this.previousName.Equals(name) && (this.previousAssemblyString != null))) && ((this.previousAssemblyString.Length == assemblyInfo.assemblyString.Length) && this.previousAssemblyString.Equals(assemblyInfo.assemblyString)))
            {
                return this.previousType;
            }
            typeFromAssembly = this.Bind(assemblyInfo.assemblyString, name);
            if (typeFromAssembly == null)
            {
                Assembly assm = assemblyInfo.GetAssembly();
                if (this.bSimpleAssembly)
                {
                    GetSimplyNamedTypeFromAssembly(assm, name, ref typeFromAssembly);
                }
                else
                {
                   // typeFromAssembly = FormatterServices.GetTypeFromAssembly(assm, name);
                }
                if (typeFromAssembly != null)
                {
                    CheckTypeForwardedTo(assm, typeFromAssembly.Assembly, typeFromAssembly);
                }
            }
            this.previousAssemblyString = assemblyInfo.assemblyString;
            this.previousName = name;
            this.previousType = typeFromAssembly;
            return typeFromAssembly;
        }

        
        //private bool HasSurrogate(Type t) =>
        //    (this.m_surrogates?.GetSurrogate(t, this.m_context, out _) > null);

        
        private void IndexTraceMessage(string message, int[] index)
        {
            StringBuilder builder = new StringBuilder(10); // StringBuilderCache.Acquire(10);
            builder.Append("[");
            for (int i = 0; i < index.Length; i++)
            {
                builder.Append(index[i]);
                if (i != (index.Length - 1))
                {
                    builder.Append(",");
                }
            }
            builder.Append("]");
        }

        
        private void InitFullDeserialization()
        {
            this.bFullDeserialization = true;
            this.stack = new SerStack("ObjectReader Object Stack");
            this.m_objectManager = new ObjectManager(this.m_surrogates, this.m_context, false, this.bIsCrossAppDomain);
            if (this.m_formatterConverter == null)
            {
                this.m_formatterConverter = new FormatterConverter();
            }
        }

        private void NextRectangleMap(ParseRecord pr)
        {
            for (int i = pr.PRrank - 1; i > -1; i--)
            {
                if (pr.PRrectangularMap[i] < (pr.PRlengthA[i] - 1))
                {
                    pr.PRrectangularMap[i]++;
                    if (i < (pr.PRrank - 1))
                    {
                        for (int j = i + 1; j < pr.PRrank; j++)
                        {
                            pr.PRrectangularMap[j] = 0;
                        }
                    }
                    Array.Copy(pr.PRrectangularMap, pr.PRindexMap, pr.PRrank);
                    return;
                }
            }
        }

        
        internal void Parse(ParseRecord pr)
        {
            switch (pr.PRparseTypeEnum)
            {
                case InternalParseTypeE.SerializedStreamHeader:
                    this.ParseSerializedStreamHeader(pr);
                    return;

                case InternalParseTypeE.Object:
                    this.ParseObject(pr);
                    return;

                case InternalParseTypeE.Member:
                    this.ParseMember(pr);
                    return;

                case InternalParseTypeE.ObjectEnd:
                    this.ParseObjectEnd(pr);
                    return;

                case InternalParseTypeE.MemberEnd:
                    this.ParseMemberEnd(pr);
                    return;

                case InternalParseTypeE.SerializedStreamHeaderEnd:
                    this.ParseSerializedStreamHeaderEnd(pr);
                    return;

                case InternalParseTypeE.Envelope:
                case InternalParseTypeE.EnvelopeEnd:
                case InternalParseTypeE.Body:
                case InternalParseTypeE.BodyEnd:
                    return;
            }
            object[] values = new object[] { pr.PRname };
            throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_XMLElement", values));
        }

        
        private void ParseArray(ParseRecord pr)
        {
            long pRobjectId = pr.PRobjectId;
            if (pr.PRarrayTypeEnum == InternalArrayTypeE.Base64)
            {
                if (pr.PRvalue.Length > 0)
                {
                    pr.PRnewObj = Convert.FromBase64String(pr.PRvalue);
                }
                else
                {
                    pr.PRnewObj = new byte[0];
                }
                if (this.stack.Peek() == pr)
                {
                    this.stack.Pop();
                }
                if (pr.PRobjectPositionEnum == InternalObjectPositionE.Top)
                {
                    this.TopObject = pr.PRnewObj;
                }
                ParseRecord objectPr = (ParseRecord)this.stack.Peek();
                this.RegisterObject(pr.PRnewObj, pr, objectPr);
            }
            else if ((pr.PRnewObj != null) && Converter.IsWriteAsByteArray(pr.PRarrayElementTypeCode))
            {
                if (pr.PRobjectPositionEnum == InternalObjectPositionE.Top)
                {
                    this.TopObject = pr.PRnewObj;
                }
                ParseRecord record2 = (ParseRecord)this.stack.Peek();
                this.RegisterObject(pr.PRnewObj, pr, record2);
            }
            else if ((pr.PRarrayTypeEnum == InternalArrayTypeE.Jagged) || (pr.PRarrayTypeEnum == InternalArrayTypeE.Single))
            {
                bool flag = true;
                if ((pr.PRlowerBoundA == null) || (pr.PRlowerBoundA[0] == 0))
                {
                    if (pr.PRarrayElementType == Converter.typeofString)
                    {
                        pr.PRobjectA = new string[pr.PRlengthA[0]];
                        pr.PRnewObj = pr.PRobjectA;
                        flag = false;
                    }
                    else if (pr.PRarrayElementType == Converter.typeofObject)
                    {
                        pr.PRobjectA = new object[pr.PRlengthA[0]];
                        pr.PRnewObj = pr.PRobjectA;
                        flag = false;
                    }
                    else if (pr.PRarrayElementType != null)
                    {
                       // TODO: pr.PRnewObj = Array.UnsafeCreateInstance(pr.PRarrayElementType, pr.PRlengthA[0]);
                    }
                    pr.PRisLowerBound = false;
                }
                else
                {
                    if (pr.PRarrayElementType != null)
                    {
                        //TODO: pr.PRnewObj = Array.UnsafeCreateInstance(pr.PRarrayElementType, pr.PRlengthA, pr.PRlowerBoundA);
                    }
                    pr.PRisLowerBound = true;
                }
                if (pr.PRarrayTypeEnum == InternalArrayTypeE.Single)
                {
                    if (!pr.PRisLowerBound && Converter.IsWriteAsByteArray(pr.PRarrayElementTypeCode))
                    {
                        //TODO: pr.PRprimitiveArray = new PrimitiveArray(pr.PRarrayElementTypeCode, (Array)pr.PRnewObj);
                    }
                    else if ((flag && (pr.PRarrayElementType != null)) && (!pr.PRarrayElementType.IsValueType && !pr.PRisLowerBound))
                    {
                        pr.PRobjectA = (object[])pr.PRnewObj;
                    }
                }
                if (pr.PRobjectPositionEnum == InternalObjectPositionE.Headers)
                {
                    this.headers = (Header[])pr.PRnewObj;
                }
                pr.PRindexMap = new int[1];
            }
            else if (pr.PRarrayTypeEnum == InternalArrayTypeE.Rectangular)
            {
                pr.PRisLowerBound = false;
                if (pr.PRlowerBoundA != null)
                {
                    for (int j = 0; j < pr.PRrank; j++)
                    {
                        if (pr.PRlowerBoundA[j] != 0)
                        {
                            pr.PRisLowerBound = true;
                        }
                    }
                }
                if (pr.PRarrayElementType != null)
                {
                    if (!pr.PRisLowerBound)
                    {
                        // TODO: pr.PRnewObj = Array.UnsafeCreateInstance(pr.PRarrayElementType, pr.PRlengthA);
                    }
                    else
                    {
                       //TODO:  pr.PRnewObj = Array.UnsafeCreateInstance(pr.PRarrayElementType, pr.PRlengthA, pr.PRlowerBoundA);
                    }
                }
                int num2 = 1;
                for (int i = 0; i < pr.PRrank; i++)
                {
                    num2 *= pr.PRlengthA[i];
                }
                pr.PRindexMap = new int[pr.PRrank];
                pr.PRrectangularMap = new int[pr.PRrank];
                pr.PRlinearlength = num2;
            }
            else
            {
                object[] values = new object[] { pr.PRarrayTypeEnum };
                throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_ArrayType", values));
            }
            this.CheckSecurity(pr);
        }

        
        private void ParseArrayMember(ParseRecord pr)
        {
            ParseRecord record = (ParseRecord)this.stack.Peek();
            if (record.PRarrayTypeEnum == InternalArrayTypeE.Rectangular)
            {
                if (record.PRmemberIndex > 0)
                {
                    this.NextRectangleMap(record);
                }
                if (record.PRisLowerBound)
                {
                    for (int i = 0; i < record.PRrank; i++)
                    {
                        record.PRindexMap[i] = record.PRrectangularMap[i] + record.PRlowerBoundA[i];
                    }
                }
            }
            else if (!record.PRisLowerBound)
            {
                record.PRindexMap[0] = record.PRmemberIndex;
            }
            else
            {
                record.PRindexMap[0] = record.PRlowerBoundA[0] + record.PRmemberIndex;
            }
            if (pr.PRmemberValueEnum == InternalMemberValueE.Reference)
            {
                object obj2 = this.m_objectManager.GetObject(pr.PRidRef);
                if (obj2 == null)
                {
                    int[] destinationArray = new int[record.PRrank];
                    Array.Copy(record.PRindexMap, 0, destinationArray, 0, record.PRrank);
                    this.m_objectManager.RecordArrayElementFixup(record.PRobjectId, destinationArray, pr.PRidRef);
                }
                else if (record.PRobjectA != null)
                {
                    record.PRobjectA[record.PRindexMap[0]] = obj2;
                }
                else
                {
                    ((Array)record.PRnewObj).SetValue(obj2, record.PRindexMap);
                }
            }
            else if (pr.PRmemberValueEnum == InternalMemberValueE.Nested)
            {
                if (pr.PRdtType == null)
                {
                    pr.PRdtType = record.PRarrayElementType;
                }
                this.ParseObject(pr);
                this.stack.Push(pr);
                if (record.PRarrayElementType != null)
                {
                    if (record.PRarrayElementType.IsValueType && (pr.PRarrayElementTypeCode == InternalPrimitiveTypeE.Invalid))
                    {
                        pr.PRisValueTypeFixup = true;
                        // TODO: this.ValueFixupStack.Push(new ValueFixup((Array)record.PRnewObj, record.PRindexMap));
                    }
                    else if (record.PRobjectA != null)
                    {
                        record.PRobjectA[record.PRindexMap[0]] = pr.PRnewObj;
                    }
                    else
                    {
                        ((Array)record.PRnewObj).SetValue(pr.PRnewObj, record.PRindexMap);
                    }
                }
            }
            else if (pr.PRmemberValueEnum == InternalMemberValueE.InlineValue)
            {
                if ((record.PRarrayElementType == Converter.typeofString) || (pr.PRdtType == Converter.typeofString))
                {
                    this.ParseString(pr, record);
                    if (record.PRobjectA != null)
                    {
                        record.PRobjectA[record.PRindexMap[0]] = pr.PRvalue;
                    }
                    else
                    {
                        ((Array)record.PRnewObj).SetValue(pr.PRvalue, record.PRindexMap);
                    }
                }
                else if (record.PRisArrayVariant)
                {
                    if (pr.PRkeyDt == null)
                    {
                        throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_ArrayTypeObject"));
                    }
                    object pRvalue = null;
                    if (pr.PRdtType == Converter.typeofString)
                    {
                        this.ParseString(pr, record);
                        pRvalue = pr.PRvalue;
                    }
                    else if (pr.PRdtTypeCode == InternalPrimitiveTypeE.Invalid)
                    {
                        this.CheckSerializable(pr.PRdtType);
                        if (this.IsRemoting && (this.formatterEnums.FEsecurityLevel != TypeFilterLevel.Full))
                        {
                            //TODO: pRvalue = FormatterServices.GetSafeUninitializedObject(pr.PRdtType);
                        }
                        else
                        {
                            //TODO: pRvalue = FormatterServices.GetUninitializedObject(pr.PRdtType);
                        }
                    }
                    else if (pr.PRvarValue != null)
                    {
                        pRvalue = pr.PRvarValue;
                    }
                    else
                    {
                        pRvalue = Converter.FromString(pr.PRvalue, pr.PRdtTypeCode);
                    }
                    if (record.PRobjectA != null)
                    {
                        record.PRobjectA[record.PRindexMap[0]] = pRvalue;
                    }
                    else
                    {
                        ((Array)record.PRnewObj).SetValue(pRvalue, record.PRindexMap);
                    }
                }
                //else if (record.PRprimitiveArray != null)
                //{
                //    record.PRprimitiveArray.SetValue(pr.PRvalue, record.PRindexMap[0]);
                //}
                else
                {
                    object pRvarValue = null;
                    if (pr.PRvarValue != null)
                    {
                        pRvarValue = pr.PRvarValue;
                    }
                    else
                    {
                        pRvarValue = Converter.FromString(pr.PRvalue, record.PRarrayElementTypeCode);
                    }
                    if (record.PRobjectA != null)
                    {
                        record.PRobjectA[record.PRindexMap[0]] = pRvarValue;
                    }
                    else
                    {
                        ((Array)record.PRnewObj).SetValue(pRvarValue, record.PRindexMap);
                    }
                }
            }
            else if (pr.PRmemberValueEnum == InternalMemberValueE.Null)
            {
                record.PRmemberIndex += pr.PRnullCount - 1;
            }
            else
            {
                this.ParseError(pr, record);
            }
            record.PRmemberIndex++;
        }

        
        private void ParseArrayMemberEnd(ParseRecord pr)
        {
            if (pr.PRmemberValueEnum == InternalMemberValueE.Nested)
            {
                this.ParseObjectEnd(pr);
            }
        }

        private void ParseError(ParseRecord processing, ParseRecord onStack)
        {
            object[] values = new object[1];
            object[] objArray2 = new object[] { onStack.PRname, " ", onStack.PRparseTypeEnum, " ", processing.PRname, " ", processing.PRparseTypeEnum };
            values[0] = string.Concat(objArray2);
            throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_ParseError", values));
        }

        
        private void ParseMember(ParseRecord pr)
        {
            ParseRecord parentPr = (ParseRecord)this.stack.Peek();
            string pRname = null;
            if (parentPr != null)
            {
                pRname = parentPr.PRname;
            }
            InternalMemberTypeE pRmemberTypeEnum = pr.PRmemberTypeEnum;
            if ((pRmemberTypeEnum != InternalMemberTypeE.Field) && (pRmemberTypeEnum == InternalMemberTypeE.Item))
            {
                this.ParseArrayMember(pr);
            }
            else
            {
                if ((pr.PRdtType == null) && parentPr.PRobjectInfo.isTyped)
                {
                    pr.PRdtType = parentPr.PRobjectInfo.GetType(pr.PRname);
                    if (pr.PRdtType != null)
                    {
                        pr.PRdtTypeCode = Converter.ToCode(pr.PRdtType);
                    }
                }
                if (pr.PRmemberValueEnum == InternalMemberValueE.Null)
                {
                    parentPr.PRobjectInfo.AddValue(pr.PRname, null, ref parentPr.PRsi, ref parentPr.PRmemberData);
                }
                else if (pr.PRmemberValueEnum == InternalMemberValueE.Nested)
                {
                    this.ParseObject(pr);
                    this.stack.Push(pr);
                    if (((pr.PRobjectInfo != null) && (pr.PRobjectInfo.objectType != null)) && pr.PRobjectInfo.objectType.IsValueType)
                    {
                        pr.PRisValueTypeFixup = true;
                        //TODO: this.ValueFixupStack.Push(new ValueFixup(parentPr.PRnewObj, pr.PRname, parentPr.PRobjectInfo));
                    }
                    else
                    {
                        parentPr.PRobjectInfo.AddValue(pr.PRname, pr.PRnewObj, ref parentPr.PRsi, ref parentPr.PRmemberData);
                    }
                }
                else if (pr.PRmemberValueEnum == InternalMemberValueE.Reference)
                {
                    object obj2 = this.m_objectManager.GetObject(pr.PRidRef);
                    if (obj2 == null)
                    {
                        parentPr.PRobjectInfo.AddValue(pr.PRname, null, ref parentPr.PRsi, ref parentPr.PRmemberData);
                        parentPr.PRobjectInfo.RecordFixup(parentPr.PRobjectId, pr.PRname, pr.PRidRef);
                    }
                    else
                    {
                        parentPr.PRobjectInfo.AddValue(pr.PRname, obj2, ref parentPr.PRsi, ref parentPr.PRmemberData);
                    }
                }
                else if (pr.PRmemberValueEnum == InternalMemberValueE.InlineValue)
                {
                    if (pr.PRdtType == Converter.typeofString)
                    {
                        this.ParseString(pr, parentPr);
                        parentPr.PRobjectInfo.AddValue(pr.PRname, pr.PRvalue, ref parentPr.PRsi, ref parentPr.PRmemberData);
                    }
                    else if (pr.PRdtTypeCode != InternalPrimitiveTypeE.Invalid)
                    {
                        object pRvarValue = null;
                        if (pr.PRvarValue != null)
                        {
                            pRvarValue = pr.PRvarValue;
                        }
                        else
                        {
                            pRvarValue = Converter.FromString(pr.PRvalue, pr.PRdtTypeCode);
                        }
                        parentPr.PRobjectInfo.AddValue(pr.PRname, pRvarValue, ref parentPr.PRsi, ref parentPr.PRmemberData);
                    }
                    else if (pr.PRarrayTypeEnum == InternalArrayTypeE.Base64)
                    {
                        parentPr.PRobjectInfo.AddValue(pr.PRname, Convert.FromBase64String(pr.PRvalue), ref parentPr.PRsi, ref parentPr.PRmemberData);
                    }
                    else
                    {
                        if (pr.PRdtType == Converter.typeofObject)
                        {
                            object[] values = new object[] { pr.PRname };
                            throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TypeMissing", values));
                        }
                        this.ParseString(pr, parentPr);
                        if (pr.PRdtType == Converter.typeofSystemVoid)
                        {
                            parentPr.PRobjectInfo.AddValue(pr.PRname, pr.PRdtType, ref parentPr.PRsi, ref parentPr.PRmemberData);
                        }
                        else if (parentPr.PRobjectInfo.isSi)
                        {
                            parentPr.PRobjectInfo.AddValue(pr.PRname, pr.PRvalue, ref parentPr.PRsi, ref parentPr.PRmemberData);
                        }
                    }
                }
                else
                {
                    this.ParseError(pr, parentPr);
                }
            }
        }

        
        private void ParseMemberEnd(ParseRecord pr)
        {
            switch (pr.PRmemberTypeEnum)
            {
                case InternalMemberTypeE.Field:
                    if (pr.PRmemberValueEnum != InternalMemberValueE.Nested)
                    {
                        break;
                    }
                    this.ParseObjectEnd(pr);
                    return;

                case InternalMemberTypeE.Item:
                    this.ParseArrayMemberEnd(pr);
                    return;

                default:
                    this.ParseError(pr, (ParseRecord)this.stack.Peek());
                    break;
            }
        }

        
        private void ParseObject(ParseRecord pr)
        {
            if (!this.bFullDeserialization)
            {
                this.InitFullDeserialization();
            }
            if (pr.PRobjectPositionEnum == InternalObjectPositionE.Top)
            {
                this.topId = pr.PRobjectId;
            }
            if (pr.PRparseTypeEnum == InternalParseTypeE.Object)
            {
                this.stack.Push(pr);
            }
            if (pr.PRobjectTypeEnum == InternalObjectTypeE.Array)
            {
                this.ParseArray(pr);
            }
            else if (pr.PRdtType == null)
            {
                pr.PRnewObj = new TypeLoadExceptionHolder(pr.PRkeyDt);
            }
            else if (pr.PRdtType == Converter.typeofString)
            {
                if (pr.PRvalue != null)
                {
                    pr.PRnewObj = pr.PRvalue;
                    if (pr.PRobjectPositionEnum == InternalObjectPositionE.Top)
                    {
                        this.TopObject = pr.PRnewObj;
                    }
                    else
                    {
                        this.stack.Pop();
                        this.RegisterObject(pr.PRnewObj, pr, (ParseRecord)this.stack.Peek());
                    }
                }
            }
            else
            {
                this.CheckSerializable(pr.PRdtType);
                if (this.IsRemoting && (this.formatterEnums.FEsecurityLevel != TypeFilterLevel.Full))
                {
                  //  pr.PRnewObj = FormatterServices.GetSafeUninitializedObject(pr.PRdtType);
                }
                else
                {
                  //  pr.PRnewObj = FormatterServices.GetUninitializedObject(pr.PRdtType);
                }
                this.m_objectManager.RaiseOnDeserializingEvent(pr.PRnewObj);
                if (pr.PRnewObj == null)
                {
                    object[] values = new object[] { pr.PRdtType };
                    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TopObjectInstantiate", values));
                }
                if (pr.PRobjectPositionEnum == InternalObjectPositionE.Top)
                {
                    this.TopObject = pr.PRnewObj;
                }
                if (pr.PRobjectInfo == null)
                {
                    pr.PRobjectInfo = ReadObjectInfo.Create(pr.PRdtType, this.m_surrogates, this.m_context, this.m_objectManager, this.serObjectInfoInit, this.m_formatterConverter, this.bSimpleAssembly);
                }
                this.CheckSecurity(pr);
            }
        }

        
        private void ParseObjectEnd(ParseRecord pr)
        {
            ParseRecord record = (ParseRecord)this.stack.Peek();
            if (record == null)
            {
                record = pr;
            }
            if ((record.PRobjectPositionEnum == InternalObjectPositionE.Top) && (record.PRdtType == Converter.typeofString))
            {
                record.PRnewObj = record.PRvalue;
                this.TopObject = record.PRnewObj;
            }
            else
            {
                this.stack.Pop();
                ParseRecord objectPr = (ParseRecord)this.stack.Peek();
                if (record.PRnewObj != null)
                {
                    if (record.PRobjectTypeEnum == InternalObjectTypeE.Array)
                    {
                        if (record.PRobjectPositionEnum == InternalObjectPositionE.Top)
                        {
                            this.TopObject = record.PRnewObj;
                        }
                        this.RegisterObject(record.PRnewObj, record, objectPr);
                    }
                    else
                    {
                        record.PRobjectInfo.PopulateObjectMembers(record.PRnewObj, record.PRmemberData);
                        if (!record.PRisRegistered && (record.PRobjectId > 0L))
                        {
                            this.RegisterObject(record.PRnewObj, record, objectPr);
                        }
                        if (record.PRisValueTypeFixup)
                        {
                        //    ((ValueFixup)this.ValueFixupStack.Pop()).Fixup(record, objectPr);
                        }
                        if (record.PRobjectPositionEnum == InternalObjectPositionE.Top)
                        {
                            this.TopObject = record.PRnewObj;
                        }
                        record.PRobjectInfo.ObjectEnd();
                    }
                }
            }
        }

        private void ParseSerializedStreamHeader(ParseRecord pr)
        {
            this.stack.Push(pr);
        }

        private void ParseSerializedStreamHeaderEnd(ParseRecord pr)
        {
            this.stack.Pop();
        }

        
        private void ParseString(ParseRecord pr, ParseRecord parentPr)
        {
            if (!pr.PRisRegistered && (pr.PRobjectId > 0L))
            {
                this.RegisterObject(pr.PRvalue, pr, parentPr, true);
            }
        }

        
        private void RegisterObject(object obj, ParseRecord pr, ParseRecord objectPr)
        {
            this.RegisterObject(obj, pr, objectPr, false);
        }

        
        private void RegisterObject(object obj, ParseRecord pr, ParseRecord objectPr, bool bIsString)
        {
            if (!pr.PRisRegistered)
            {
                pr.PRisRegistered = true;
                SerializationInfo pRsi = null;
                long idOfContainingObj = 0L;
                MemberInfo member = null;
                int[] arrayIndex = null;
                if (objectPr != null)
                {
                    arrayIndex = objectPr.PRindexMap;
                    idOfContainingObj = objectPr.PRobjectId;
                    if ((objectPr.PRobjectInfo != null) && !objectPr.PRobjectInfo.isSi)
                    {
                        member = objectPr.PRobjectInfo.GetMemberInfo(pr.PRname);
                    }
                }
                pRsi = pr.PRsi;
                if (bIsString)
                {
                    this.m_objectManager.RegisterString((string)obj, pr.PRobjectId, pRsi, idOfContainingObj, member);
                }
                else
                {
                    this.m_objectManager.RegisterObject(obj, pr.PRobjectId, pRsi, idOfContainingObj, member, arrayIndex);
                }
            }
        }

       
        //TODO: Assembly Name
        private static Assembly ResolveSimpleAssemblyName(object assemblyName)
        {
            //StackCrawlMark lookForMe = StackCrawlMark.LookForMe;
            //Assembly assembly = RuntimeAssembly.LoadWithPartialNameInternal(assemblyName, null, ref lookForMe);
            //if ((assembly == null) && (assemblyName != null))
            //{
            //    assembly = RuntimeAssembly.LoadWithPartialNameInternal(assemblyName.Name, null, ref lookForMe);
            //}
            //return assembly;
            //TODO:            
            return null;
        }

        internal void SetMethodCall(BinaryMethodCall binaryMethodCall)
        {
            this.bMethodCall = true;
            this.binaryMethodCall = binaryMethodCall;
        }

        internal void SetMethodReturn(BinaryMethodReturn binaryMethodReturn)
        {
            this.bMethodReturn = true;
            this.binaryMethodReturn = binaryMethodReturn;
        }

        // Properties
        private bool IsRemoting
        {
            get
            {
                if (!this.bMethodCall)
                {
                    return this.bMethodReturn;
                }
                return true;
            }
        }

        internal object TopObject
        {
            get =>
                this.m_topObject;
            set
            {
                this.m_topObject = value;
                if (this.m_objectManager != null)
                {
                    this.m_objectManager.TopObject = value;
                }
            }
        }

        private SerStack ValueFixupStack
        {
            get
            {
                if (this.valueFixupStack == null)
                {
                    this.valueFixupStack = new SerStack("ValueType Fixup Stack");
                }
                return this.valueFixupStack;
            }
        }

        // Nested Types
        internal sealed class TopLevelAssemblyTypeResolver
        {
            // Fields
            private Assembly m_topLevelAssembly;

            // Methods
            public TopLevelAssemblyTypeResolver(Assembly topLevelAssembly)
            {
                this.m_topLevelAssembly = topLevelAssembly;
            }

            public Type ResolveType(Assembly assembly, string simpleTypeName, bool ignoreCase) =>
                assembly?.GetType(simpleTypeName); // , false, ignoreCase
        }

        internal class TypeNAssembly
        {
            // Fields
            public string assemblyName;
            public Type type;
        }
    }






}
