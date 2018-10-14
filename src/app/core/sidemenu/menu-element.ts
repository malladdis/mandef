export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': '/auth/dashboard',
        'open': false
    },
    {
        'name': 'Tracking',
        'icon': 'insert_chart',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Activity',
                'link': 'material-widgets/buttons',
                'icon': false,
                'chip': false,
                'open': false,
            },
            {
                'name': 'Financial',
                'link': 'material-widgets/list',
                'icon': false,
                'chip': false,
                'open': false,
            },
            {

                'name': 'Programme Result',
                'link': 'material-widgets/stepper',
                'icon': false,
                'chip': false,
                'open': false,

            }
        ]
    },
    {
        'name': 'Master Modules',
        'icon': 'list',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Programme',
                'icon': false,
                'link': 'master-modules/program',
                'open': false,
            },
            {
                'name': 'Project',
                'icon': false,
                'link': 'master-modules/project',
                'open': false,
            },
            {
                'name': 'Budget',
                'icon': false,
                'link': 'master-modules/budget',
                'open': false,
            },
            {
              'name': 'Donor',
              'icon': false,
              'link': 'master-modules/donors',
              'open': false,
            }
        ]

    },
    {
        'name': 'custom-forms',
        'icon': 'input',
        'link': '/auth/custom-forms',
        'open': false,
    },
    {
        'name': 'Report',
        'icon': 'insert_drive_file',
        'link': false,
        'open': false,
        'sub': [
            {
              'name': 'Programmes',
              'icon': false,
              'link': '/auth/reports/programmes',
              'open': false,
            },
            {
              'name': 'Projects',
              'icon': false,
              'link': '/auth/reports/projects',
              'open': false,
            }
      ]
    },
     {
      'name': 'Survey',
      'open': false,
      'link': '/auth/dashboard',
      'icon': 'done',
    },
    {
          'name': 'Data Entry',
          'icon': 'edit',
          'open': false,
          'link': false,
          'sub': [
              {
                  'name': 'Individual Beneficiary',
                  'icon': false,
                  'link': '/auth/dashboard',
                  'open': false,
              },
              {
                  'name': 'Group Beneficiary',
                  'icon': false,
                  'link': '/auth/dashboard',
                  'open': false,
              },
              {
                  'name': 'Activities',
                  'icon': false,
                  'link': '/auth/dashboard',
                  'open': false,
              },
              {
                'name': 'Budget',
                'icon': false,
                'link': '/auth/dashboard',
                'open': false,
              },
              {
                'name': 'Activities Expenditures',
                'icon': false,
                'link': '/auth/dashboard',
                'open': false,
              },
              {
                'name': 'Admin Expenditures',
                'icon': false,
                'link': '/auth/dashboard',
                'open': false,
              },
              {
                'name': 'Intervention Input',
                'icon': false,
                'link': '/auth/dashboard',
                'open': false,
              }
          ]
      }
];
