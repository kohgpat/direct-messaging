import React, { useState, useMemo, useContext } from "react";
import initialState from "./initialState";

const DirectContext = React.createContext();

function DirectProvider(props) {
  const [state, setState] = useState(initialState);

  const value = useMemo(() => [state, setState], [state]);

  return <DirectContext.Provider value={value} {...props} />;
}

function useDirect() {
  const context = useContext(DirectContext);

  if (!context) {
    throw new Error("useDirect should be used within a DirectContext");
  }

  const [state, setState] = context;

  const getDialogues = () => {
    const query =
      state.ui.dialogues.filter.query &&
      state.ui.dialogues.filter.query.toLowerCase();

    if (query) {
      return state.dialogues.filter(dialogue => {
        return [
          dialogue.user.name.toLowerCase(),
          dialogue.user.description.toLowerCase(),
          dialogue.user.location.toLowerCase(),
          dialogue.message.toLowerCase()
        ].some(data => data.includes(query));
      });
    }

    return state.dialogues;
  };

  const selectDialogue = dialogue => {
    const dialogues = state.dialogues.map(d => ({
      ...d,
      selected: false
    }));
    const idx = dialogues.findIndex(d => d.id === dialogue.id);

    setState({
      ...state,
      dialogues: [
        ...dialogues.slice(0, idx),
        {
          ...dialogues[idx],
          selected: true
        },
        ...dialogues.slice(idx + 1)
      ]
    });
  };

  const getSelectedDialogue = () => {
    return state.dialogues.find(dialogue => dialogue.selected);
  };

  const getAboutShow = () => {
    return state.ui.aboutUser;
  };

  const toggleAboutUser = () => {
    setState({
      ...state,
      ui: {
        aboutUser: {
          show: !state.ui.aboutUser.show
        }
      }
    });
  };

  const setDialoguesFilterQuery = query => {
    setState({
      ...state,
      ui: {
        ...state.ui,
        dialogues: {
          filter: {
            query
          }
        }
      }
    });
  };

  const getDialoguesFilterQuery = () => {
    return state.ui.dialogues.filter.query;
  };

  return {
    getDialogues,
    selectDialogue,
    getSelectedDialogue,
    getAboutShow,
    toggleAboutUser,
    setDialoguesFilterQuery,
    getDialoguesFilterQuery
  };
}

export { DirectProvider, useDirect };
