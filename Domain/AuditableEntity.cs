using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class AuditableEntity : EntityBase
    {
        public DateTimeOffset TimeOfAction { get; set; }
    }
}
