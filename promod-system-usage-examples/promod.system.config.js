// @ts-check
/**
 * @info common actions for all base lements
 * that should be counted during action generation
 *
 * @example file ./lib/base/element.ts
 *
 * BaseElement has next availalbe for action generation
 * setKeys
 * click
 * getContent
 * getVisibility
 *
 * entryType property is used for dype definition
 *
 * @example file ./lib/elements/input.ts
 * Input has next types list
 *
 * InputAction
 * InputVisible
 * InputContent
 * InputSetKeys
 *
 * to represent these types usage it could be overriden like, but it does not required
 * since main goal of these types is to be used in generated code
 *
 * class Input extends BaseElement {
 *  constructor(rootElement, id) {
 *    super(rootElement, id);
 *  }
 *
 *  async setKeys(setKeysData: string) {
 *   await this.root.set(setKeysData);
 *  }
 *
 *  async getContent(_arg: InputAction): Promise<InputContent> {
 *    return await this.root.getInputValue();
 *  }
 *
 *  async getVisibility(_arg: InputAction): Promise<InputVisible> {
 *    return await super.getVisibility(_arg);
 *  }
 *
 *  async click(_arg: InputAction): Promise<void> {
 *    await super.click(_arg);
 *  }
 *
 * Take a look on Input methods setKeys and getContent
 * setKeys is a new method that is not available in BaseElement since it is
 * not possible to set keys for Button or Text elements.
 *
 * getContent is overriden to return value from input element, since input content is a value
 * that was set by user.
 *
 */
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
  waitContent: {
    entryType: 'Content',
  },
  _whereContent: {
    resultType: 'Content',
  },
  _whereVisibiliy: {
    resultType: 'Visible',
  },
};

/**
 * @info definition of the actions based on the base project element base
 *
 * @example file ./lib/elements/input.ts
 *
 * Input has setKeys action that is not available for other elements
 * so it should be added to Input property details, so generation will
 * include this action for all Fragments/Pages elements that
 * setKeys action going to be generated.
 * If Page elements and page Fragments do not have Input element
 * setKeys action will not be generated
 */
const baseElementsActionsDescription = {
  Input: {
    setKeys: {
      entryType: 'SetKeys',
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

/**
 * @info definition of the list actions
 *
 * @example file ./lib/base/list.ts
 * next type has _whereContent, _whereVisibiliy, _action properties
 *
 * type TAction = {
 *   _whereContent?: unknown;
 *   _whereVisibiliy?: unknown;
 *   _action?: unknown;
 * };
 * it is used for list element search by criteria
 *
 * e.g hext html page
 *    <input />
 *	  <input style="display: none;"/>
 *	  <input />
 *	  <input />
 * some values were filled before so inputs have next values
 *    <input /> // value: 1
 *    <input style="display: none;"/>
 *    <input /> // value: 4
 *    <input /> // value: 5
 *
 * goal is to set "add to current data" value in field which is bilitble and has value 4,
 * so action object should be next
 * const listSetKeysAction = {
 *  _whereVisibiliy: true,
 *  _whereContent: '4',
 *  _action: 'add to current data',
 * }
 *
 */
const collectionActionTypes = {
  action: 'TItemListAction',
  check: 'TItemListCheck',
  compare: 'TItemListCompare',
};

/**
 * @info collectionDescription
 * collectionDescription is used to define collection actions object
 * that is used in generated code and usage on test level
 *
 * @see promod.system.config.js:110
 *
 */
const collectionDescription = {
  action: '_action',
  where: '_whereContent',
  visible: '_whereVisibiliy',
  length: 'length',
};

const collectionGenericAction = {
  where: { action: '_whereContent', actionType: 'resultType' },
  visible: { action: '_whereVisibiliy', actionType: 'resultType' },
  generic: collectionActionTypes.action,
};

const baseCollectionActionsDescription = {
  getContent: {
    entryType: {
      ...collectionGenericAction,
      action: { action: 'getContent', actionType: 'entryType' },
    },
    resultType: {
      action: { action: 'getContent', actionType: 'resultType' },
      endType: '[]',
    },
  },
  getVisibility: {
    entryType: {
      ...collectionGenericAction,
      action: { action: 'getVisibility', actionType: 'entryType' },
    },
    resultType: {
      click: { action: 'getVisibility', actionType: 'resultType' },
      endType: '[]',
    },
  },
  setKeys: {
    entryType: {
      ...collectionGenericAction,
      action: { action: 'setKeys', actionType: 'entryType' },
    },
  },
  click: {
    entryType: {
      ...collectionGenericAction,
      action: { action: 'click', actionType: 'entryType' },
    },
  },
  _whereContent: {
    entryType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      generic: collectionActionTypes.action,
      action: { action: 'getContent', actionType: 'entryType' },
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
  waitContent: {
    entryType: {
      where: { action: '_whereContent', actionType: 'resultType' },
      visible: { action: '_whereVisibiliy', actionType: 'resultType' },
      action: { action: 'getContent', actionType: 'entryType' },
      generic: collectionActionTypes.check,
    },
  },
};

/**
 * @info definitions of the actions that are used in generated types
 * to avoid any misconceptions in generated code and expected behavior
 * on actions usage level
 */
const resultActionsMap = {
  click: 'void',
  getContent: 'resultType',
  getVisibility: 'resultType',
  setKeys: 'void',
  waitVisibility: 'void',
  waitContent: 'void',
};

/**
 * @info base library description
 *
 *
 * @example file ./lib/base/list.ts
 * getListItem method is used to get collection item instance
 *
 * const listItems = new ItemList($$('input'), 'Inputs list', Input);
 *
 * const secondInput = listItems.getListItem(1);
 * used index 1 to get second input element since indexes are started from 0
 *
 *
 * @property getPageInstance is used by generator to get page instance
 * @property entityId is used to proper name of the action
 * @property pageId is used to indentify page class from the module if getPageInstance property is not defined
 * @property fragmentId is used to define entity id property name
 * @property getCollectionTypeFormat is used to define strategy of collection type generation
 * @example file ./lib/base/list.ts
 *
 * type declaration of the list requires generated type to be defined as one type
 * which is used for generic
 *
 * type TAction = {
 *  _whereContent?: unknown;
 *  _whereVisibiliy?: unknown;
 *  _action?: unknown;
 * };
 *
 * export type TItemListAction<T extends TAction> = {
 *  _whereContent?: T['_whereContent'];
 *  _whereVisibiliy?: T['_whereVisibiliy'];
 *  _action?: T['_action'];
 * };
 *
 * it is possible to have TItemListAction<TWhere, TVilible, TAction> type
 * which has 3 generic types used
 */
const baseLibraryDescription = {
  getPageInstance: 'getPage',

  getDataMethod: 'getContent',
  getVisibilityMethod: 'getVisibility',
  waitVisibilityMethod: 'waitVisibility',
  waitContentMethod: 'waitContent',

  entityId: 'id',
  pageId: 'Page',
  fragmentId: 'Fragment',

  waitOptionsId: 'TWaitOpts',
  generalActionOptionsId: 'TActionOpts',

  collectionId: 'ItemList',
  collectionRootElementsId: 'roots',

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

module.exports = {
  pathToBase: 'lib',
  baseElementsActionsDescription,
  baseCollectionActionsDescription,
  resultActionsMap,
  baseLibraryDescription,
  collectionDescription,
  collectionRandomDataDescription,
  collectionActionTypes,
};
