using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Abstractions
{
    public interface ICurrentUser
    {
        public Guid? Id { get; }
    }
}
