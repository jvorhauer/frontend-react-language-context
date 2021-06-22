import content from '../data/content.json';
import jp from 'jsonpath';

function getContent(language, key) {
  return jp.query(content, '$.' + language + '.' + key);
}

export default getContent;
