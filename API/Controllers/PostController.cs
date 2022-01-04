using Application.Commands;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("controller")]
    public class PostController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PostController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<Post>> CreatePost([FromBody] CreatePostCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        /*[HttpPost("{galleryId}/add-photo")]
        public async Task<IActionResult> AddPhotoToGallery(Guid galleryId)
        {
            var files = Request.Form.Files as IEnumerable<IFormFile>;
            var command = new AddPhotoToGalleryCommand { GalleryId = galleryId, Files = files };
            await _mediator.Send(command);
            return Ok();
        }*/

        /*[HttpGet]
        public async Task<ActionResult<Post>> ListAllPosts()
        {
            var galleries = await _mediator.Send(new ListAllGalleriesQuery());
            return Ok(galleries);
        }*/

        /*[HttpGet("{galleryId}")]
        public async Task<ActionResult<List<string>>> GetAllPhotosForGallery(Guid GalleryId)
        {
            var photoUris = await _mediator.Send(new GetAllPhotosForGalleryQuery { Id = GalleryId });
            return Ok(photoUris);
        }
        [HttpGet("count")]
        public async Task<long> GetNumberOfGalleries()
        {
            var nrOfGalleries = await _mediator.Send(new GetNumberOfGalleriesQuery());
            return nrOfGalleries;
        }*/
        /*[HttpDelete("delete")]
        public async Task<IActionResult> DeleteAllGalleries()
        {
            var isDeleted = await _mediator.Send(new DeleteAllGalleriesCommand());
            return Ok(isDeleted);
        }*/
    }
}
