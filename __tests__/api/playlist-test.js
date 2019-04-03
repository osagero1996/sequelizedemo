const frisby = require('frisby');

// it('should return 204 when deleting a playlist that does not exist', () => {
//   return frisby
//   .del('http://localhost:8000/api/playlists/-1')
//   .expect('status', 404);
// });

it('should return 404 when deleting a playlist that does not exist', () => {
  return frisby
  .del('http://localhost:8000/api/playlists/-1')
  .expect('status', 404);
});
