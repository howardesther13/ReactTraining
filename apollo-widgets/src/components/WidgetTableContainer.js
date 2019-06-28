import { compose, withApollo } from 'react-apollo';

import { withWidgetsQuery, withLocalQuery } from '../queries';

import { 
  withReplaceWidgetMutation, withDeleteWidgetMutation, withDeleteSelectedWidgetsMutation,
  withAddSelectedWidgetIdMutation, withRemoveSelectedWidgetIdMutation, withEditWidgetMutation
} from '../mutations';

import { WidgetTable } from './WidgetTable';

export const WidgetTableContainer = compose([
  withApollo,
  withWidgetsQuery,
  withLocalQuery,
  withReplaceWidgetMutation,
  withDeleteWidgetMutation,
  withDeleteSelectedWidgetsMutation,
  withAddSelectedWidgetIdMutation,
  withRemoveSelectedWidgetIdMutation,
  withEditWidgetMutation,
])(WidgetTable);