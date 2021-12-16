const core = require('@actions/core');
const github = require('@actions/github');

try {
    if(process.env.GITHUB_REF_TYPE === 'tag') {
        const tagName = process.env.GITHUB_REF_NAME
        const removeFirstCharacter = core.getInput('remove-first-character') || 'none'
        const variableName = core.getInput('version-variable-name') || 'VERSION'
        let version;
        if(removeFirstCharacter !== 'none') {
            const indexOf = tagName.indexOf(removeFirstCharacter)
            version = tagName.substring(indexOf, indexOf + removeFirstCharacter.length)
        }else{
            version = tagName
        }
        core.exportVariable(variableName, version)
    }
}catch (e) {
    core.setFailed(e.message);
}