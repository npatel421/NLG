import { handleSubmit } from '../js/formHandler';

const postDataURL = 'http://localhost:8082/userResponse'

test('this is postData test', async () => {
  const data = await postData(postDataURL, {"text" : "John is a nice player"});
  expect(data.text).toBe('polarity: positive');
});