// import '@storybook/addon-actions/register';
// import '@storybook/addon-links/register';
// import '@storybook/addon-knobs/register';
// import 'storybook-dark-mode/register';
// import '@storybook/addon-viewport/register';
// import '@storybook/addon-a11y/register';
// import '@storybook/addon-docs/register';
// import '@storybook/addon-storysource/register';

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
  ],
};
