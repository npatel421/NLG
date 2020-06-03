import { postData } from '../js/formHandler';

const postDataURL = 'http://localhost:8082/userResponse'
const data = {};
data.text = "John is a nice player."

test('this is postData test', async (done) => {
  const input = await postData(postDataURL,data);
  expect(postData(input)).toBe('polarity: positive');
});