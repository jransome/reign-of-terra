export default function(spec) {
  spec.describe('Home page,click button to start', function() {
    spec.it('works', async function() {
      await spec.press('Scene.button');
      await spec.exists('NextScene')
    });
  });
}
