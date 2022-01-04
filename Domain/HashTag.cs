using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class HashTag : EntityBase
    {
        public string Name { get; set; }
        public Post Post { get; set; }
        public Guid PostId { get; set; }
    }
}
