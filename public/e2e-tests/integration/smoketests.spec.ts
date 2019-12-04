import { e2eScenario, Pages } from '@grafana/e2e';
import { ScenarioContext } from '@grafana/e2e/src/support';

e2eScenario({
  describeName: 'Smoke tests',
  itName: 'Login scenario, create test data source, dashboard, panel, and export scenario',
  addScenarioDataSource: true,
  addScenarioDashBoard: true,
  skipScenario: false,
  scenario: ({ dataSourceName, dashboardTitle, dashboardUid }: ScenarioContext) => {
    Pages.AddDashboard.visit();
    Pages.AddDashboard.ctaButtons()
      .first()
      .click();

    Pages.Panels.EditPanel.tabItems()
      .first()
      .click();
    Pages.Panels.DataSource.TestData.QueryTab.scenarioSelect().select('CSV Metric Values');

    Pages.Panels.EditPanel.tabItems()
      .first()
      .next()
      .click();

    Pages.Panels.Visualization.Graph.VisualizationTab.xAxisSection()
      .contains('Show')
      .click();
  },
});