const consolidate = require('consolidate')
const execSync = require('child_process').execSync

consolidate.slim = {
  render: function(str, options, fn) {
    fn(null, execSync(`slimrb -s -o attr_list_delims='{"("=>")","["=>"]"}'`, {input: str}).toString())
  }
}

module.exports = consolidate.slim
