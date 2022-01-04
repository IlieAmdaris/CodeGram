using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.MSGraph
{
    public class AzureAdB2C
    {
        public string Instance { get; set; }
        public string ClientId { get; set; }
        public string Domain { get; set; }
        public string[] Scopes { get; set; }
    }
}
