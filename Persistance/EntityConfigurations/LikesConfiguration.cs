using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.EntityConfigurations
{
    public class LikesConfiguration : IEntityTypeConfiguration<Like>
    {
        public void Configure(EntityTypeBuilder<Like> builder)
        {
            builder.HasOne(x => x.Post).WithMany(x => x.Likes).HasForeignKey(x => x.PostId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
