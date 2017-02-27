'use strict';
const fsUtils = require('../../lib/fsUtils');

module.exports = {

  check() {
    return fsUtils.exists('docs')
      && (fsUtils.exists('docs/developers') || fsUtils.exists('docs/users'));
  }

};
