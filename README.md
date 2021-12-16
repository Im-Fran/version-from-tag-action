# Version From Tag Action
Get version from tag and store it to the environment variables.

## Inputs

### `remove-first-character`

**Optional** If specified, the value will be used to replace the first character in the version, if is none the full tag name will be used. Defaults to `none`

Example:

1. You have the tag name `v1.0.0`
2. You have the `remove-first-character` value as `v1`
3. The output of the `VERSION` environment variable will be `.0.0`

### `version-variable-name`

**Optional** If specified, the value will be used as the name of the environment variable. Defaults to `VERSION`
