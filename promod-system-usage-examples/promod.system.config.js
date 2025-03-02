// @ts-check
const commonActions = {
  click: {
    entryType: 'Action',
  },
  getContent: {
    entryType: 'Action',
    resultType: 'Content',
  },
  getVisibility: {
    entryType: 'Action',
    resultType: 'Visible',
  },
  _whereContent: {
    resultType: 'Content',
  },
  _whereVisibiliy: {
    resultType: 'Visible',
  },
};

const collectionActionTypes = {
  action: 'TItemListAction',
  check: 'TItemListCheck',
  compare: 'TItemListCompare',
};

const baseElementsActionsDescription = {
  Input: {
    setKeys: {
      entryType: 'setKeys',
    },
    ...commonActions,
  },
  Button: {
    ...commonActions,
  },
  Text: {
    ...commonActions,
  },
};

const collectionGenericAction = {
  where: { action: '_whereContent', actionType: 'resultType' },
  visible: { action: '_whereVisibiliy', actionType: 'resultType' },
  action: { action: 'getVisibility', actionType: 'entryType' },
  generic: collectionActionTypes.action,
};

const baseCollectionActionsDescription = {
  getContent: {
    entryType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      action: { action: 'getContent', actionType: 'entryType' },
      generic: collectionActionTypes.action,
    },
    resultType: {
      action: { action: 'getContent', actionType: 'resultType' },
      endType: '[]',
    },
  },
  getVisibility: {
    entryType: {
      ...collectionGenericAction,
    },
    resultType: {
      click: { action: 'getVisibility', actionType: 'resultType' },
      endType: '[]',
    },
  },
  setKeys: {
    entryType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      action: { action: 'setKeys', actionType: 'entryType' },
      generic: collectionActionTypes.action,
    },
  },
  click: {
    entryType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      action: { action: 'click', actionType: 'entryType' },
      generic: collectionActionTypes.action,
    },
  },
  _whereContent: {
    entryType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      action: { action: 'getContent', actionType: 'entryType' },
      generic: collectionActionTypes.action,
    },
    resultType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      action: { action: 'getContent', actionType: 'entryType' },
      generic: collectionActionTypes.action,
    },
  },
  _whereVisibiliy: {
    entryType: {
      ...collectionGenericAction,
    },
    resultType: {
      ...collectionGenericAction,
    },
  },
};

const resultActionsMap = {
  click: 'void',
  getContent: 'resultType',
  getVisibility: 'resultType',
  setKeys: 'void',
};

const baseLibraryDescription = {
  getPageInstance: 'getPage',

  entityId: 'id',
  pageId: 'Page',
  fragmentId: 'Fragment',

  collectionId: 'ItemList',
  collectionItemId: 'Item',
  collectionRootElementsId: 'roots',

  waitOptionsId: 'TWaitOpts',
  generalActionOptionsId: 'TActionOpts',

  getDataMethod: 'getContent',
  getVisibilityMethod: 'getVisibility',
  getBaseElementFromCollectionByIndex: 'get',
  getCollectionItemInstance: 'getListItem',
  getCollectionTypeFormat: 'object',
};

const collectionRandomDataDescription = {
  _whereContent: {
    action: '_whereContent',
    actionType: 'resultType',
  },
  _whereVisibiliy: {
    action: '_whereVisibiliy',
    actionType: 'resultType',
  },
};

const collectionDescription = {
  action: '_action',
  where: '_whereContent',
  visible: '_whereVisibiliy',
  length: 'length',
};

const elementAction = {
  getText: 'text',
  getContent: 'text',
};

module.exports = {
  pathToBase: 'lib',
  baseElementsActionsDescription,
  baseCollectionActionsDescription,
  resultActionsMap,
  baseLibraryDescription,
  collectionDescription,
  collectionRandomDataDescription,
  elementAction,
  collectionActionTypes,
};
