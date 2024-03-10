export default ({ config }) => ({
    ...config,
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED,
        eas: {
            projectId: '4c93f368-9025-4eae-8ee8-ded544ff11c1',
        },
    },
});
