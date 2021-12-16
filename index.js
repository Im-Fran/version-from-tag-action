const core = require('@actions/core');
const github = require('@actions/github');

try {
    if(process.env.GITHUB_REF_TYPE === 'tag') {
        const tagName = process.env.GITHUB_REF_NAME
        const removeFirstCharacter = core.getInput('remove-first-character') || 'none'
        const variableName = core.getInput('version-variable-name') || 'VERSION'
        core.exportVariable(variableName, removeFirstCharacter ? tagName.replace(removeFirstCharacter, '') : tagName)
    }
}catch (e) {
    core.setFailed(e.message);
}