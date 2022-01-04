using Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Commands
{
    public class CreatePostCommand : IRequest<Post>
    {
        public string Content { get; set; }
        public bool Type { get; set; }
        public Guid UserId { get; set; }
    }
}
