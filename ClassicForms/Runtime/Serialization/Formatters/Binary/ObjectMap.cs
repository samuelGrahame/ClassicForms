using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal sealed class ObjectMap
    {
        // Fields
        internal BinaryAssemblyInfo assemblyInfo;
        internal BinaryTypeEnum[] binaryTypeEnumA;
        internal bool isInitObjectInfo;
        internal string[] memberNames;
        internal Type[] memberTypes;
        internal int objectId;
        internal ReadObjectInfo objectInfo;
        internal string objectName;
        internal ObjectReader objectReader;
        internal Type objectType;
        internal object[] typeInformationA;

        // Methods
        
        internal ObjectMap(string objectName, Type objectType, string[] memberNames, ObjectReader objectReader, int objectId, BinaryAssemblyInfo assemblyInfo)
        {
            this.isInitObjectInfo = true;
            this.objectName = objectName;
            this.objectType = objectType;
            this.memberNames = memberNames;
            this.objectReader = objectReader;
            this.objectId = objectId;
            this.assemblyInfo = assemblyInfo;
            this.objectInfo = objectReader.CreateReadObjectInfo(objectType);
            this.memberTypes = this.objectInfo.GetMemberTypes(memberNames, objectType);
            this.binaryTypeEnumA = new BinaryTypeEnum[this.memberTypes.Length];
            this.typeInformationA = new object[this.memberTypes.Length];
            for (int i = 0; i < this.memberTypes.Length; i++)
            {
                object typeInformation = null;
                this.binaryTypeEnumA[i] = BinaryConverter.GetParserBinaryTypeInfo(this.memberTypes[i], out typeInformation);
                this.typeInformationA[i] = typeInformation;
            }
        }
        
        internal ObjectMap(string objectName, string[] memberNames, BinaryTypeEnum[] binaryTypeEnumA, object[] typeInformationA, int[] memberAssemIds, ObjectReader objectReader, int objectId, BinaryAssemblyInfo assemblyInfo, SizedArray assemIdToAssemblyTable)
        {
            this.isInitObjectInfo = true;
            this.objectName = objectName;
            this.memberNames = memberNames;
            this.binaryTypeEnumA = binaryTypeEnumA;
            this.typeInformationA = typeInformationA;
            this.objectReader = objectReader;
            this.objectId = objectId;
            this.assemblyInfo = assemblyInfo;
            if (assemblyInfo == null)
            {
                object[] values = new object[] { objectName };
                throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_Assembly", values));
            }
            this.objectType = objectReader.GetType(assemblyInfo, objectName);
            this.memberTypes = new Type[memberNames.Length];
            for (int i = 0; i < memberNames.Length; i++)
            {
                BinaryConverter.TypeFromInfo(binaryTypeEnumA[i], typeInformationA[i], objectReader, (BinaryAssemblyInfo)assemIdToAssemblyTable[memberAssemIds[i]], out _, out _, out Type type, out _);
                this.memberTypes[i] = type;
            }
            this.objectInfo = objectReader.CreateReadObjectInfo(this.objectType, memberNames, null);
            if (!this.objectInfo.isSi)
            {
                this.objectInfo.GetMemberTypes(memberNames, this.objectInfo.objectType);
            }
        }
        
        internal static ObjectMap Create(string name, Type objectType, string[] memberNames, ObjectReader objectReader, int objectId, BinaryAssemblyInfo assemblyInfo) =>
            new ObjectMap(name, objectType, memberNames, objectReader, objectId, assemblyInfo);

        
        internal static ObjectMap Create(string name, string[] memberNames, BinaryTypeEnum[] binaryTypeEnumA, object[] typeInformationA, int[] memberAssemIds, ObjectReader objectReader, int objectId, BinaryAssemblyInfo assemblyInfo, SizedArray assemIdToAssemblyTable) =>
            new ObjectMap(name, memberNames, binaryTypeEnumA, typeInformationA, memberAssemIds, objectReader, objectId, assemblyInfo, assemIdToAssemblyTable);

        internal ReadObjectInfo CreateObjectInfo(ref SerializationInfo si, ref object[] memberData)
        {
            if (this.isInitObjectInfo)
            {
                this.isInitObjectInfo = false;
                this.objectInfo.InitDataStore(ref si, ref memberData);
                return this.objectInfo;
            }
            this.objectInfo.PrepareForReuse();
            this.objectInfo.InitDataStore(ref si, ref memberData);
            return this.objectInfo;
        }
    }
}
