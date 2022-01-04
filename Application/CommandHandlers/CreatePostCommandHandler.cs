using Application.Commands;
using Domain;
using MediatR;
using Persistance;
using Persistance.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.CommandHandlers
{
    public class CreatePostCommandHandler : IRequestHandler<CreatePostCommand, Post>
    {
        private readonly CodeGramDbContext _dbContext;
        private readonly ICurrentUser _user;

        public CreatePostCommandHandler(CodeGramDbContext dbContext, ICurrentUser user)
        {
            _dbContext = dbContext;
            _user = user;
        }
        public async Task<Post> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            var post = new Post
            {
                Id = Guid.NewGuid(),
                Type = request.Type,
                UserId = _user.Id ?? throw new Exception("User id is required"),
                HashTags = new List<HashTag>(),
                Content = request.Content,
                Likes = new List<Like>()
            };

            _dbContext.Posts.Add(post);

            await _dbContext.SaveChangesAsync();

            return post;
        }
    }
}
