module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-typescript'],
  ],
    "overrides": [
      {
        "files": ["__tests__/**/*"],
        "env": {
          "jest": true
        }
      }
    ]
};