using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace settings.Controllers
{
  [ApiController]
  [Route("client")]
  public class SettingsController : Controller
  {
    public readonly IConfiguration _configuration;

    public SettingsController(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    [HttpGet]
    public IActionResult Get()
    {
      var connectionString = _configuration.GetConnectionString("DefaultConnection");
      return Ok(new
      {
        ApiRoot = _configuration.GetValue<string>("ApiRoot"),
        signUpSignInPolicyId = _configuration.GetValue<string>("signUpSignInPolicyId"),
        ClientId = _configuration.GetValue<string>("ClientId"),
        Domain = _configuration.GetValue<string>("Domain"),
        Instance = _configuration.GetValue<string>("Instance"),
        Scope = _configuration.GetValue<string>("Scope")
      });
    }
  }
}
