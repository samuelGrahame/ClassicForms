using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace System.Windows.Forms
{    
    internal class HelpInfo
    {
        private string helpFilePath;
        private string keyword;
        private HelpNavigator navigator;
        private int option;
        private object param;

        public HelpInfo(string helpfilepath)
        {
            this.helpFilePath = helpfilepath;
            this.keyword = "";
            this.navigator = HelpNavigator.TableOfContents;
            this.param = null;
            this.option = 1;
        }

        public HelpInfo(string helpfilepath, string keyword)
        {
            this.helpFilePath = helpfilepath;
            this.keyword = keyword;
            this.navigator = HelpNavigator.TableOfContents;
            this.param = null;
            this.option = 2;
        }

        public HelpInfo(string helpfilepath, HelpNavigator navigator)
        {
            this.helpFilePath = helpfilepath;
            this.keyword = "";
            this.navigator = navigator;
            this.param = null;
            this.option = 3;
        }

        public HelpInfo(string helpfilepath, HelpNavigator navigator, object param)
        {
            this.helpFilePath = helpfilepath;
            this.keyword = "";
            this.navigator = navigator;
            this.param = param;
            this.option = 4;
        }

        public override string ToString()
        {
            string[] textArray1 = new string[] { "{HelpFilePath=", this.helpFilePath, ", keyword =", this.keyword, ", navigator=", this.navigator.ToString(), "}" };
            return string.Concat(textArray1);
        }

        public string HelpFilePath =>
            this.helpFilePath;

        public string Keyword =>
            this.keyword;

        public HelpNavigator Navigator =>
            this.navigator;

        public int Option =>
            this.option;

        public object Param =>
            this.param;
    }
}
