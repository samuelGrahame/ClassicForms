using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System
{
    public static class DateHelper
    {
        internal static DateTime FromBinaryRaw(long dateData)
        {
            long num = dateData & 0x3fffffffffffffffL;
            if ((num < 0L) || (num > 0x2bca2875f4373fffL))
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_DateTimeBadBinaryData"), "dateData");
            }
            // TODO:-SUpport ULONG DATE...
            return new DateTime(dateData);
        }

        public static DateTime FromBinary(long dateData)
        {
            //long num2;
            if ((dateData & -9223372036854775808L) == 0)
            {
                return FromBinaryRaw(dateData);
            }
            long ticks = dateData & 0x3fffffffffffffffL;
            if (ticks > 0x3fffff36d5964000L)
            {
                ticks -= 0x4000000000000000L;
            }
            //TODO WORK OUT THIS STUFF
           // bool isAmbiguousLocalDst = false;
            //if (ticks < 0L)
            //{
            //    num2 = 0; //TimeZoneInfo.GetLocalUtcOffset(MinValue, TimeZoneInfoOptions.NoThrowOnInvalidTime).Ticks;
            //}
            //else if (ticks > 0x2bca2875f4373fffL)
            //{
            //    num2 = 0x2bca2875f4373fffL; // TimeZoneInfo.GetLocalUtcOffset(MaxValue, TimeZoneInfoOptions.NoThrowOnInvalidTime).Ticks;
            //}
            //else
            //{
            //    DateTime time = new DateTime(ticks, DateTimeKind.Utc);
            //    num2 = 0;
            //    //bool isDaylightSavings = false;
            //    //num2 = TimeZoneInfo.GetUtcOffsetFromUtc(time, TimeZoneInfo.Local, out isDaylightSavings, out isAmbiguousLocalDst).Ticks;
            //}
            //ticks += num2;
            if (ticks < 0L)
            {
                ticks += 0xc92a69c000L;
            }
            if ((ticks < 0L) || (ticks > 0x2bca2875f4373fffL))
            {
                throw new ArgumentException(EnvironmentV2.GetResourceString("Argument_DateTimeBadBinaryData"), "dateData");
            }
            return new DateTime(ticks, DateTimeKind.Local);
        }

    }
}
