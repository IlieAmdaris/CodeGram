using Microsoft.AspNetCore.Http;
using Persistance.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Services
{
    public class HttpContextCurrentUser : ICurrentUser
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public HttpContextCurrentUser(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        public Guid? Id
        {
            get
            {
                var context = _httpContextAccessor.HttpContext;
                var idClaimValue = context.User.Claims.FirstOrDefault(x => x.Type == "sub")?.Value;
                if (string.IsNullOrEmpty(idClaimValue))
                {
                    return null;
                }
                return Guid.Parse(idClaimValue);
            }
        }

    }
}
