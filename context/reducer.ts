import { ActionType, AppActions } from "./actions";
import { AppState, initialAppState } from "./state";

export function appReducer(state: AppState, action: AppActions): AppState {
  switch (action.type) {
    case ActionType.AddProduct:
      return { ...state, cartItems: [action.payload, ...state.cartItems] };
    case ActionType.SetSelectedStorage:
      return {
        ...state,
        selectedStorage: action.payload,
      };
    case ActionType.RemoveFromCart:
      return {
        ...initialAppState,
        cartItems: state.cartItems.map((item) => ({
          ...item,
        })),
      };
    case ActionType.SetSelectedColor:
      return {
        ...state,
        selectedColor: action.payload,
      };
    default:
      return state;
  }
}

// export const setPlayerValue = (id: number, value: number): SetPlayerValue => ({
//   type: ActionType.SetPlayerValue,
//   payload: { id, value },
// });

// export const resetGame = (): ResetGame => ({
//   type: ActionType.ResetGame,
// });
