const API_URL = 'http://127.0.0.1:8000/api';
export const API_URL_File = 'http://127.0.0.1:8000';
const programCategoryRoutes = {
  index: createUrl('/program_categories'),
  show: createUrl('/program_categories'),
  store: createUrl('/program_categories'),
  update: createUrl('/program_categories'),
  destroy: createUrl('/program_categories')
};
const programRoutes = {
  index: createUrl('/programs'),
  show: createUrl('/programs'),
  store: createUrl('/programs'),
  update: createUrl('/programs'),
  destroy: createUrl('/programs')
};
const programDetailRoutes = {
  index: createUrl('/program_details'),
  show: createUrl('/program_details'),
  store: createUrl('/program_details'),
  update: createUrl('/program_details'),
  destroy: createUrl('/program_details')
};
const projectRoutes = {
  index: createUrl('/projects'),
  show: createUrl('/projects'),
  store: createUrl('/projects'),
  update: createUrl('/projects'),
  destroy: createUrl('/projects')
};
const projectCategoryRoutes = {
  index: createUrl('/project_categories'),
  show: createUrl('/project_categories'),
  store: createUrl('/project_categories'),
  update: createUrl('/project_categories'),
  destroy: createUrl('/project_categories')
};
const regionRoutes = {
  index: createUrl('/regions'),
  show: createUrl('/regions'),
  store: createUrl('/regions'),
  update: createUrl('/regions'),
  destroy: createUrl('/regions')
};
const zoneRoutes = {
  index: createUrl('/zones'),
  show: createUrl('/zones'),
  store: createUrl('/zones'),
  update: createUrl('/zones'),
  destroy: createUrl('/zones')
};
const woredaRoutes = {
  index: createUrl('/woredas'),
  show: createUrl('/woredas'),
  store: createUrl('/woredas'),
  update: createUrl('/woredas'),
  destroy: createUrl('/woredas')
};
const kebeleRoutes = {
  index: createUrl('/kebeles'),
  show: createUrl('/kebeles'),
  store: createUrl('/kebeles'),
  update: createUrl('/kebeles'),
  destroy: createUrl('/kebeles')
};
const clusterRoutes = {
  index: createUrl('/clusters'),
  show: createUrl('/clusters'),
  store: createUrl('/clusters'),
  update: createUrl('/clusters'),
  destroy: createUrl('/clusters')
};
const clusterMemberRoutes = {
  index: createUrl('/cluster_members'),
  show: createUrl('/cluster_members'),
  store: createUrl('/cluster_members'),
  update: createUrl('/cluster_members'),
  destroy: createUrl('/cluster_members')
};
const implementerRoutes = {
  index: createUrl('/implementers'),
  show: createUrl('/implementers'),
  store: createUrl('/implementers'),
  update: createUrl('/implementers'),
  destroy: createUrl('/implementers')
};
const projectImplementerRoutes = {
  index: createUrl('/project_implementers'),
  show: createUrl('/project_implementers'),
  store: createUrl('/project_implementers'),
  update: createUrl('/project_implementers'),
  destroy: createUrl('/project_implementers')
};
const beneficariesRoutes = {
  index: createUrl('/beneficiaries'),
  show: createUrl('/beneficiaries'),
  store: createUrl('/beneficiaries'),
  update: createUrl('/beneficiaries'),
  destroy: createUrl('/beneficiaries')
};
const frequenciesRoutes = {
  index: createUrl('/frequencies'),
  show: createUrl('/frequencies'),
  store: createUrl('/frequencies'),
  update: createUrl('/frequencies'),
  destroy: createUrl('/frequencies')
};
const projectFrequenciesRoutes = {
  index: createUrl('/project_frequencies'),
  show: createUrl('/project_frequencies'),
  store: createUrl('/project_frequencies'),
  update: createUrl('/project_frequencies'),
  destroy: createUrl('/project_frequencies')
};
const projectBeneficiariesRoutes = {
  index: createUrl('/project_beneficiaries'),
  show: createUrl('/project_beneficiaries'),
  store: createUrl('/project_beneficiaries'),
  update: createUrl('/project_beneficiaries'),
  destroy: createUrl('/project_beneficiaries')
};
const projectDetailRoutes = {
  index: createUrl('/project_details'),
  show: createUrl('/project_details'),
  store: createUrl('/project_details'),
  update: createUrl('/project_details'),
  destroy: createUrl('/project_details')
};
const outputRoutes = {
  index: createUrl('/outputs'),
  show: createUrl('/outputs'),
  store: createUrl('/outputs'),
  update: createUrl('/outputs'),
  destroy: createUrl('/outputs')
};
const outputIndicatorRoutes = {
  index: createUrl('/output_indicators'),
  show: createUrl('/output_indicators'),
  store: createUrl('/output_indicators'),
  update: createUrl('/output_indicators'),
  destroy: createUrl('/output_indicators')
};
const outcomeRoutes = {
  index: createUrl('/outcomes'),
  show: createUrl('/outcomes'),
  store: createUrl('/outcomes'),
  update: createUrl('/outcomes'),
  destroy: createUrl('/outcomes'),
  outcome_outputs: createUrl('/outcome_outputs')
};
const outcomeIndicatorsRoutes = {
  index: createUrl('/outcome_indicators'),
  show: createUrl('/outcome_indicators'),
  store: createUrl('/outcome_indicators'),
  update: createUrl('/outcome_indicators'),
  destroy: createUrl('/outcome_indicators'),
  outcome_outputs: createUrl('/outcome_outputs')
};
const timePlansRoutes = {
  index: createUrl('/time_plans'),
  show: createUrl('/time_plans'),
  store: createUrl('/time_plans'),
  update: createUrl('/time_plans'),
  destroy: createUrl('/time_plans'),
};
const datatypes = {
  index: createUrl('/data_types'),
  show: createUrl('/data_types'),
  store: createUrl('/data_types'),
  update: createUrl('/data_types'),
  destroy: createUrl('/data_types'),
};
const measuringUnit = {
  index: createUrl('/measuring_units'),
  show: createUrl('/measuring_units'),
  store: createUrl('/measuring_units'),
  update: createUrl('/measuring_units'),
  destroy: createUrl('/measuring_units'),
};
const disaggregation_methods = {
  index: createUrl('/disaggregation_methods'),
  show: createUrl('/disaggregation_methods'),
  store: createUrl('/disaggregation_methods'),
  update: createUrl('/disaggregation_methods'),
  destroy: createUrl('/disaggregation_methods'),
};
const indicators = {
  index: createUrl('/indicators'),
  show: createUrl('/indicators'),
  store: createUrl('/indicators'),
  update: createUrl('/indicators'),
  destroy: createUrl('/indicators'),
};
const milestones = {
  index: createUrl('/milestones'),
  show: createUrl('/milestones'),
  store: createUrl('/milestones'),
  update: createUrl('/milestones'),
  destroy: createUrl('/milestones'),
};
const indicator_disaggregation_methods = {
  index: createUrl('/indicator_disaggregation_methods'),
  show: createUrl('/indicator_disaggregation_methods'),
  store: createUrl('/indicator_disaggregation_methods'),
  update: createUrl('/indicator_disaggregation_methods'),
  destroy: createUrl('/indicator_disaggregation_methods'),
};

const activity_categories = {
  index: createUrl('/activity_categories'),
  show: createUrl('/activity_categories'),
  store: createUrl('/activity_categories'),
  update: createUrl('/activity_categories'),
  destroy: createUrl('/activity_categories'),
};
const activities = {
  index: createUrl('/activities'),
  show: createUrl('/activities'),
  store: createUrl('/activities'),
  update: createUrl('/activities'),
  destroy: createUrl('/activities'),
};
const activity_budgets = {
  index: createUrl('/activity_budgets'),
  show: createUrl('/activity_budgets'),
  store: createUrl('/activity_budgets'),
  update: createUrl('/activity_budgets'),
  destroy: createUrl('/activity_budgets')
};

const activity_indicators = {
  index: createUrl('/activity_indicators'),
  show: createUrl('/activity_indicators'),
  store: createUrl('/activity_indicators'),
  update: createUrl('/activity_indicators'),
  destroy: createUrl('/activity_indicators')
};

const expenditure_categories = {
  index: createUrl('/expenditure_categories'),
  show: createUrl('/expenditure_categories'),
  store: createUrl('/expenditure_categories'),
  update: createUrl('/expenditure_categories'),
  destroy: createUrl('/expenditure_categories')
};
const expenditures = {
  index: createUrl('/expenditures'),
  show: createUrl('/expenditures'),
  store: createUrl('/expenditures'),
  update: createUrl('/expenditures'),
  destroy: createUrl('/expenditures')
};

const status = {
  index: createUrl('/statuses'),
  show: createUrl('/statuses'),
  store: createUrl('/statuses'),
  update: createUrl('/statuses'),
  destroy: createUrl('/statuses'),
};


const donors = {
  index: createUrl('/donors'),
  show: createUrl('/donors'),
  store: createUrl('/donors'),
  update: createUrl('/donors'),
  destroy: createUrl('/donors'),
};

const createCustomForms = {
  index: createUrl('/forms'),
  show: createUrl('/forms'),
  store: createUrl('/forms'),
  update: createUrl('/forms'),
  destroy: createUrl('/forms')
};

const createFormSections = {
  index: createUrl('/form_sections'),
  show: createUrl('/form_sections'),
  store: createUrl('/form_sections'),
  update: createUrl('/form_sections'),
  destroy: createUrl('/form_sections')
};

const createFormColumns = {
  index: createUrl('/form_columns'),
  show: createUrl('/form_columns'),
  store: createUrl('/form_columns'),
  update: createUrl('/form_columns'),
  destroy: createUrl('/form_columns')
};

const createGeneratedForm = {
  index: createUrl('/generated_forms'),
  show: createUrl('/generated_forms'),
  store: createUrl('/generated_forms'),
  update: createUrl('/generated_forms'),
  destroy: createUrl('/generated_forms')
};

const createFormsData = {
  index: createUrl('/form_datas'),
  show: createUrl('/form_datas'),
  store: createUrl('/form_datas'),
  update: createUrl('/form_datas'),
  destroy: createUrl('/form_datas')
};

const createSharedForm = {
  index: createUrl('/shared_forms'),
  show: createUrl('/shared_forms'),
  store: createUrl('/shared_forms'),
  update: createUrl('/shared_forms'),
  destroy: createUrl('/shared_forms')
};

const currencies = {
  index: createUrl('/currencies'),
  show: createUrl('/currencies'),
  store: createUrl('/currencies'),
  update: createUrl('/currencies'),
  destroy: createUrl('/currencies')
};

const budgets = {
  index: createUrl('/budgets'),
  show: createUrl('/budgets'),
  store: createUrl('/budgets'),
  update: createUrl('/budgets'),
  destroy: createUrl('/budgets')
};

const finances = {
  index: createUrl('/finances'),
  show: createUrl('/finances'),
  store: createUrl('/finances'),
  update: createUrl('/finances'),
  destroy: createUrl('/finances'),
  project_finance: createUrl('/project-finance'),
  financial_report: createUrl('/financial-report')
};

const finance_plans = {
  index: createUrl('/finance_plans'),
  show: createUrl('/finance_plans'),
  store: createUrl('/finance_plans'),
  update: createUrl('/finance_plans'),
  destroy: createUrl('/finance_plans')
};
const monthly_expenditures = {
  index: createUrl('/monthly_expenditures'),
  show: createUrl('/monthly_expenditures'),
  store: createUrl('/monthly_expenditures'),
  update: createUrl('/monthly_expenditures'),
  destroy: createUrl('/monthly_expenditures'),
  get_monthly_expenditures_by_finance_plan: createUrl('/get_monthly_expenditures_by_finance_plan')
};


const createFormsDataFile = {
  index: createUrl('/form_data_files'),
  show: createUrl('/form_data_files'),
  store: createUrl('/form_data_files'),
  update: createUrl('/form_data_files'),
  destroy: createUrl('/form_data_files')
};

const createUsers = {
  index: createUrl('/users'),
  show: createUrl('/users'),
  store: createUrl('/users'),
  update: createUrl('/users'),
  destroy: createUrl('/users')
};

const createRoles = {
  index: createUrl('/roles'),
  show: createUrl('/roles'),
  store: createUrl('/roles'),
  update: createUrl('/roles'),
  destroy: createUrl('/roles')
};

const createModels = {
  index: createUrl('/models'),
  show: createUrl('/models'),
  store: createUrl('/models'),
  update: createUrl('/models'),
  destroy: createUrl('/models')
};

const createOuter = {
  index: createUrl('/outer'),
  show: createUrl('/outer'),
  store: createUrl('/outer'),
  update: createUrl('/outer'),
  destroy: createUrl('/outer')
};
const createDisaggreagtion = {
  index: createUrl('/disaggregation_methods'),
  show: createUrl('/disaggregation_methods'),
  store: createUrl('/disaggregation_methods'),
  update: createUrl('/disaggregation_methods'),
  destroy: createUrl('/disaggregation_methods')
};

const createCalculationMethod = {
  index: createUrl('/calculation_methods'),
  show: createUrl('/calculation_methods'),
  store: createUrl('/calculation_methods'),
  update: createUrl('/calculation_methods'),
  destroy: createUrl('/calculation_methods')
};
const createIndicatorCalculationMethod = {
  index: createUrl('/indicator_calculation_methods'),
  show: createUrl('/indicator_calculation_methods'),
  store: createUrl('/indicator_calculation_methods'),
  update: createUrl('/indicator_calculation_methods'),
  destroy: createUrl('/indicator_calculation_methods')
};

const createIndicatorForm = {
  index: createUrl('/indicator_forms'),
  show: createUrl('/indicator_forms'),
  store: createUrl('/indicator_forms'),
  update: createUrl('/indicator_forms'),
  destroy: createUrl('/indicator_forms')
};

const createDataEntry = {
  index: createUrl('/data_entries'),
  show: createUrl('/data_entries'),
  store: createUrl('/data_entries'),
  update: createUrl('/data_entries'),
  destroy: createUrl('/data_entries')
};

const createPeriods = {
  index: createUrl('/current'),
  show: createUrl('/current'),
  store: createUrl('/current'),
  update: createUrl('/current'),
  destroy: createUrl('/current')
};
const createIndicatorDisaggregationMethods = {
  index: createUrl('/indicator_disaggregation_methods'),
  show: createUrl('/indicator_disaggregation_methods'),
  store: createUrl('/indicator_disaggregation_methods'),
  update: createUrl('/indicator_disaggregation_methods'),
  destroy: createUrl('/indicator_disaggregation_methods')
};
const createDataEntryDisaggregation = {
  index: createUrl('/data_entry_disaggregation'),
  show: createUrl('/data_entry_disaggregation'),
  store: createUrl('/data_entry_disaggregation'),
  update: createUrl('/data_entry_disaggregation'),
  destroy: createUrl('/data_entry_disaggregation')
};

const createIndicatorFields = {
  index: createUrl('/indicator_form_fields'),
  show: createUrl('/indicator_form_fields'),
  store: createUrl('/indicator_form_fields'),
  update: createUrl('/indicator_form_fields'),
  destroy: createUrl('/indicator_form_fields')
};
const files = {
  index: createUrl('/files'),
  show: createUrl('/files'),
  store: createUrl('/files'),
  update: createUrl('/files'),
  destroy: createUrl('/files')
};

const CreatesurveyCategory = {
  index: createUrl('/survey_category'),
  show: createUrl('/survey_category'),
  store: createUrl('/survey_category'),
  update: createUrl('/survey_category'),
  destroy: createUrl('/survey_category')
};

const createSurvey = {
  index: createUrl('/surveys'),
  show: createUrl('/surveys'),
  store: createUrl('/surveys'),
  update: createUrl('/surveys'),
  destroy: createUrl('/surveys')
};

const userRoutes = {
  me: createAuthUrl('/me'),
  users: createAuthUrl('/users')
};

function createUrl(route: string) {
  return `${API_URL}${route}`;
}

function createAuthUrl(route: string) {
  return `${API_URL}/auth${route}`;
}

export const apiRoutes = {
  programCategory: programCategoryRoutes,
  program: programRoutes,
  program_detail: programDetailRoutes,
  project: projectRoutes,
  projectCategory: projectCategoryRoutes,
  region: regionRoutes,
  zone: zoneRoutes,
  woreda: woredaRoutes,
  kebele: kebeleRoutes,
  cluster: clusterRoutes,
  clusterMemeber: clusterMemberRoutes,
  implementer: implementerRoutes,
  beneficaries: beneficariesRoutes,
  user: userRoutes,
  frequencies: frequenciesRoutes,
  project_frequency: projectFrequenciesRoutes,
  project_implementers: projectImplementerRoutes,
  project_detail: projectDetailRoutes,
  project_beneficiaries: projectBeneficiariesRoutes,
  outputs: outputRoutes,
  output_indicator: outputIndicatorRoutes,
  outcomes: outcomeRoutes,
  outcomeIndicator: outcomeIndicatorsRoutes,
  timeplans: timePlansRoutes,
  datatypes: datatypes,
  measuring_units: measuringUnit,
  disaggregation_methods: disaggregation_methods,
  indicators: indicators,
  indicator_disaggregation_methods: indicator_disaggregation_methods,
  activity_categories: activity_categories,
  statuses: status,
  activities: activities,
  activity_budgets: activity_budgets,
  activity_indicators: activity_indicators,
  expenditure_categories: expenditure_categories,
  expenditures: expenditures,
  customForms: createCustomForms,
  formSections: createFormSections,
  formColumn: createFormColumns,
  generatedForm: createGeneratedForm,
  formsData: createFormsData,
  formsDataFile: createFormsDataFile,
  users: createUsers,
  roles: createRoles,
  models: createModels,
  outer: createOuter,
  donors: donors,
  currencies: currencies,
  budgets: budgets,
  finance: finances,
  dataEntry: createDataEntry,
  indicatorDisaggregation: createIndicatorDisaggregationMethods,
  periods: createPeriods,
  calculationMethod: createCalculationMethod,
  disaggregation: createDisaggreagtion,
  indicatorCalculationMethod: createIndicatorCalculationMethod,
  indicatorForm: createIndicatorForm,
  dataEntryDisaggregation: createDataEntryDisaggregation,
  finance_plans: finance_plans,
  monthly_expenditures: monthly_expenditures,
  files: files,
  milestones: milestones,
  sharedForm: createSharedForm,
  indicatorFields: createIndicatorFields,
  surveyCategory: CreatesurveyCategory,
  survyes: createSurvey
};


