using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Post : AuditableEntity
    {
        public string Content { get; set; }
        public ICollection<Like> Likes { get; set; }
        public bool Type { get; set; }
        public Guid UserId { get; set; }
        public ICollection<HashTag> HashTags { get; set; }

    }
}
