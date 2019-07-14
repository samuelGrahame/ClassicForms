using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace System.Runtime.Serialization.Formatters.Binary
{
    internal static class BinaryConverter
    {
        // Methods
        //internal static BinaryTypeEnum GetBinaryTypeInfo(Type type, WriteObjectInfo objectInfo, string typeName, ObjectWriter objectWriter, out object typeInformation, out int assemId)
        //{
        //    BinaryTypeEnum primitive;
        //    assemId = 0;
        //    typeInformation = null;
        //    if (type == Converter.typeofString)
        //    {
        //        return BinaryTypeEnum.String;
        //    }
        //    if (((objectInfo == null) || ((objectInfo != null) && !objectInfo.isSi)) && (type == Converter.typeofObject))
        //    {
        //        return BinaryTypeEnum.Object;
        //    }
        //    if (type == Converter.typeofStringArray)
        //    {
        //        return BinaryTypeEnum.StringArray;
        //    }
        //    if (type == Converter.typeofObjectArray)
        //    {
        //        return BinaryTypeEnum.ObjectArray;
        //    }
        //    if (Converter.IsPrimitiveArray(type, out typeInformation))
        //    {
        //        return BinaryTypeEnum.PrimitiveArray;
        //    }
        //    InternalPrimitiveTypeE ee = objectWriter.ToCode(type);
        //    if (ee == InternalPrimitiveTypeE.Invalid)
        //    {
        //        string fullName = null;
        //        if (objectInfo == null)
        //        {
        //            fullName = type.Assembly.FullName;
        //            typeInformation = type.FullName;
        //        }
        //        else
        //        {
        //            fullName = objectInfo.GetAssemblyString();
        //            typeInformation = objectInfo.GetTypeFullName();
        //        }
        //        if (fullName.Equals(Converter.urtAssemblyString))
        //        {
        //            primitive = BinaryTypeEnum.ObjectUrt;
        //            assemId = 0;
        //            return primitive;
        //        }
        //        primitive = BinaryTypeEnum.ObjectUser;
        //        assemId = (int)objectInfo.assemId;
        //        if (assemId != 0)
        //        {
        //            return primitive;
        //        }
        //        object[] values = new object[] { typeInformation };
        //        throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_AssemblyId", values));
        //    }
        //    primitive = BinaryTypeEnum.Primitive;
        //    typeInformation = ee;
        //    return primitive;
        //}

        internal static BinaryTypeEnum GetParserBinaryTypeInfo(Type type, out object typeInformation)
        {
            BinaryTypeEnum primitive;
            typeInformation = null;
            if (type == Converter.typeofString)
            {
                return BinaryTypeEnum.String;
            }
            if (type == Converter.typeofObject)
            {
                return BinaryTypeEnum.Object;
            }
            if (type == Converter.typeofObjectArray)
            {
                return BinaryTypeEnum.ObjectArray;
            }
            if (type == Converter.typeofStringArray)
            {
                return BinaryTypeEnum.StringArray;
            }
            if (Converter.IsPrimitiveArray(type, out typeInformation))
            {
                return BinaryTypeEnum.PrimitiveArray;
            }
            InternalPrimitiveTypeE ee = Converter.ToCode(type);
            if (ee == InternalPrimitiveTypeE.Invalid)
            {
                if (Assembly.GetAssembly(type) == Converter.urtAssembly)
                {
                    primitive = BinaryTypeEnum.ObjectUrt;
                }
                else
                {
                    primitive = BinaryTypeEnum.ObjectUser;
                }
                typeInformation = type.FullName;
                return primitive;
            }
            primitive = BinaryTypeEnum.Primitive;
            typeInformation = ee;
            return primitive;
        }

        internal static object ReadTypeInfo(BinaryTypeEnum binaryTypeEnum, __BinaryParser input, out int assemId)
        {
            object obj2 = null;
            int num = 0;
            switch (binaryTypeEnum)
            {
                case BinaryTypeEnum.Primitive:
                case BinaryTypeEnum.PrimitiveArray:
                    obj2 = (InternalPrimitiveTypeE)input.ReadByte();
                    break;

                case BinaryTypeEnum.String:
                case BinaryTypeEnum.Object:
                case BinaryTypeEnum.ObjectArray:
                case BinaryTypeEnum.StringArray:
                    break;

                case BinaryTypeEnum.ObjectUrt:
                    obj2 = input.ReadString();
                    break;

                case BinaryTypeEnum.ObjectUser:
                    obj2 = input.ReadString();
                    num = input.ReadInt32();
                    break;

                default:
                    {
                        object[] values = new object[] { binaryTypeEnum.ToString() };
                        throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TypeRead", values));
                    }
            }
            assemId = num;
            return obj2;
        }

        internal static void TypeFromInfo(BinaryTypeEnum binaryTypeEnum, object typeInformation, ObjectReader objectReader, BinaryAssemblyInfo assemblyInfo, out InternalPrimitiveTypeE primitiveTypeEnum, out string typeString, out Type type, out bool isVariant)
        {
            isVariant = false;
            primitiveTypeEnum = InternalPrimitiveTypeE.Invalid;
            typeString = null;
            type = null;
            switch (binaryTypeEnum)
            {
                case BinaryTypeEnum.Primitive:
                    primitiveTypeEnum = (InternalPrimitiveTypeE)typeInformation;
                    typeString = Converter.ToComType(primitiveTypeEnum);
                    type = Converter.ToType(primitiveTypeEnum);
                    return;

                case BinaryTypeEnum.String:
                    type = Converter.typeofString;
                    return;

                case BinaryTypeEnum.Object:
                    type = Converter.typeofObject;
                    isVariant = true;
                    return;

                case BinaryTypeEnum.ObjectUrt:
                case BinaryTypeEnum.ObjectUser:
                    if (typeInformation == null)
                    {
                        break;
                    }
                    typeString = typeInformation.ToString();
                    type = objectReader.GetType(assemblyInfo, typeString);
                    if (type != Converter.typeofObject)
                    {
                        break;
                    }
                    isVariant = true;
                    return;

                case BinaryTypeEnum.ObjectArray:
                    type = Converter.typeofObjectArray;
                    return;

                case BinaryTypeEnum.StringArray:
                    type = Converter.typeofStringArray;
                    return;

                case BinaryTypeEnum.PrimitiveArray:
                    primitiveTypeEnum = (InternalPrimitiveTypeE)typeInformation;
                    type = Converter.ToArrayType(primitiveTypeEnum);
                    return;

                default:
                    {
                        object[] values = new object[] { binaryTypeEnum.ToString() };
                        throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TypeRead", values));
                    }
            }
        }

        //internal static void WriteTypeInfo(BinaryTypeEnum binaryTypeEnum, object typeInformation, int assemId, __BinaryWriter sout)
        //{
        //    switch (binaryTypeEnum)
        //    {
        //        case BinaryTypeEnum.Primitive:
        //        case BinaryTypeEnum.PrimitiveArray:
        //            sout.WriteByte((byte)((InternalPrimitiveTypeE)typeInformation));
        //            return;

        //        case BinaryTypeEnum.String:
        //        case BinaryTypeEnum.Object:
        //        case BinaryTypeEnum.ObjectArray:
        //        case BinaryTypeEnum.StringArray:
        //            return;

        //        case BinaryTypeEnum.ObjectUrt:
        //            sout.WriteString(typeInformation.ToString());
        //            return;

        //        case BinaryTypeEnum.ObjectUser:
        //            sout.WriteString(typeInformation.ToString());
        //            sout.WriteInt32(assemId);
        //            return;
        //    }
        //    object[] values = new object[] { binaryTypeEnum.ToString() };
        //    throw new SerializationException(EnvironmentV2.GetResourceString("Serialization_TypeWrite", values));
        //}
    }



}
