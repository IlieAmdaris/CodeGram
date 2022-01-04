using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Identity.Web;
using Persistance.MSGraph;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class AzureADB2CExtensions
    {
        public static void AddAzureADB2C(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddMicrosoftIdentityWebApi(opt =>
               {
                   configuration.Bind(nameof(AzureAdB2C), opt);
               }, opt =>
               {
                   configuration.Bind(nameof(AzureAdB2C), opt);
               });
        }
    }
}
