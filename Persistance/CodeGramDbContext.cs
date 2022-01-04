using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Persistance
{
    public class CodeGramDbContext : DbContext
    {
        public CodeGramDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Post> Posts { get; set; }
        public DbSet<HashTag> Hashtags { get; set; }
        public DbSet<Like> Likes { get; set; }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var modifiedEntries = ChangeTracker.Entries()
                    .Where(x => x.State == EntityState.Added || x.State == EntityState.Modified);

            foreach (var entry in modifiedEntries)
            {
                if (entry.Entity is AuditableEntity userTrackerEntity)
                {
                    userTrackerEntity.TimeOfAction = DateTimeOffset.Now;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
