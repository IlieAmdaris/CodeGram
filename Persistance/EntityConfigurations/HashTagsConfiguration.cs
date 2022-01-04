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
    public class HashTagsConfiguration : IEntityTypeConfiguration<HashTag>
    {
        public void Configure(EntityTypeBuilder<HashTag> builder)
        {
            builder.HasOne(x => x.Post).WithMany(x => x.HashTags).HasForeignKey(x => x.PostId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
