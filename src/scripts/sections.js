export const sections = [
	{
		paths: [
			'/tas/(secure|public)/login/form.*',
			'/tas/(secure|public)/login/saml',
			'/tas/(secure|public)/logout',
			'/tas/admin/.*',
		],
		files: [
			'/login/login.css',
		],
	},
	{
		paths: '/passwordforgottenrequest.*',
		files: '/login/passwordforgotten.css',
	},
	{
		paths: [
			'/tas/secure/mango/.*',
			'/services/workflows-v2.*',
			'/tas/secure/(?!assetmgmt).*?action=.*',
			'/tas/secure/suggestions/.*',
			'/tas/secure/homescreen-html-widgets/.*',
			'/tas/secure/shareandsubscribe/.*',
		],
		files: [
			'/button.css',
			'/general.css',
			'/tab.css',
			'/menu.css',
			'/feed.css',
			'/process-pages.css',
			'/suggestions.css',
			'/share.css',
			'/form.css',
			'/knowledge-item.css',
			'/selection.css',
			'/card.css',
			'/planboard.css',
			'/reservations.css',
			'/taskboard.css',
			'/change.css',
			'/time-registration.css',
			'/audit-trail.css',
			'/service.css',
			'/form-editor.css',
			'/action-card.css',
			'/action-explorer.css',
			'/settings.css',
			'/report-wizard.css',
		],
	},
	{
		paths: '/tas/secure/emaileditor/.*',
		files: '/email.css',
	},
	{
		paths: '/tas/secure/mango/.*',
		files: '/graphic-overview.css',
	},
	{
		paths: '/tas/secure/concurrent_users/.*',
		files: '/concurrent-users.css',
	},
	{
		paths: [
			'/tas/secure/grid.*',
			'/tas/secure/(?!assetmgmt).*?action=.*',
		],
		files: '/grid.css',
	},
	{
		paths: '/tas/secure/agileboard/.*',
		files: '/agileboard.css',
	},
	{
		paths: '/tas/secure/assetmgmt/module-page-buttons.*',
		files: '/assetmgmt/module-page-buttons.css',
	},
	{
		paths: '/tas/secure/assetmgmt/module-page-migration-information.*',
		files: '/assetmgmt/module-page-migration.css',
	},
	{
		paths: '/tas/secure/assetmgmt/overview.*',
		files: [
			'/assetmgmt/overview.css',
			'/assetmgmt/overview-with-ds.css',
		]
	},
	{
		paths: [
			'/tas/secure/assetmgmt/card.*',
			'/tas/secure/assetmgmt/settings.*',
		],
		files: '/assetmgmt/card.css',
	},
	{
		paths: '/tas/secure/assetmgmt/bulk-edit.*',
		files: '/assetmgmt/bulk-edit.css',
	},
	{
		paths: '/services/active-user-overview.*',
		files: '/active-user-overview.css',
	},
	{
		paths: '/services/user-group-linking-ui/.*',
		files: '/user-group-linking.css',
	},
	{
		paths: '/services/knowledge-base-ui-v1/suggestions-popup.*',
		files: '/knowledgebase-v1/suggestions-popup.css',
	},
	{
		paths: '/services/knowledge-base-ui-v1/overview.*',
		files: '/knowledgebase-v1/overview.css',
	},
	{
		paths: '/services/knowledge-base-ui-v1/details-page.*',
		files: '/knowledgebase-v1/knowledgeitem.css',
	},
	{
		paths: '/services/knowledge-base-ui-v1/search-results.*',
		files: '/knowledgebase-v1/search-results.css',
	},
	{
		paths: [
			'/tas/secure/assetmgmt/bulk-edit.*',
			'/tas/secure/assetmgmt/overview.*',
			'/services/active-user-overview.*',
			'/services/user-group-linking-ui/.*',
			'/services/knowledge-base-ui-v1/.*',
		],
		files: [
			'/design-system/feedback.css',
			'/design-system/button.css',
			'/design-system/panel.css',
			'/design-system/select.css',
			'/design-system/switch.css',
			'/design-system/datatable.css',
			'/design-system/pagination.css',
			'/design-system/search.css',
			'/design-system/modal.css',
			'/design-system/tag.css',
			'/design-system/pageheader.css',
			'/design-system/breadcrumbs.css',
			'/design-system/tabs.css',
			'/design-system/accordion.css',
			'/design-system/checkbox.css',
			'/design-system/radio.css',
		]
	},
	{
		paths: [
			'/tas/secure/hardware(?!\\?action=showlist).*',
			'/tas/secure/software(?!\\?action=showlist).*',
			'/tas/secure/license(?!\\?action=showlist).*',
			'/tas/secure/telephonesystems(?!\\?action=showlist).*',
			'/tas/secure/networkcomponent(?!\\?action=showlist).*',
			'/tas/secure/inventory(?!\\?action=showlist).*',
			'/tas/secure/free\\dobject(?!\\?action=showlist).*',
		],
		files: '/configurationmgmt.css',
	},
	{
		paths: '/tas/secure/events/index.html.*',
		files: '/event/event-card.css',
	},
	{
		paths: '/tas/secure/report\?.*',
		files: '/report/report.css',
	},
	{
		paths: '/tas/secure/marketplacewidget/widget.*',
		files: '/actionmgmt/marketplace-widget.css',
	},
	{
		paths: '/services/action-v1/infoWidget.*',
		files: '/actionmgmt/info-widget.css',
	},
];
