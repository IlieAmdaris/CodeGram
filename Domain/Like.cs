using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Like : AuditableEntity
    {
        public Guid UserId { get; set; }
        public Guid PostId { get; set; }
        public Post Post { get; set; }
    }
}
