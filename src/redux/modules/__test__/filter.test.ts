import filterReducer, {
  initialState,
  selectCurrency,
  setCurrencies,
  toggleAllCheckboxes,
  toggleCurrentCheckbox,
  toggleOnlyCurrentCheckbox,
} from '../filter'

describe('Filter reducer', () => {
  it('Should return initial state', () => {
    const state = filterReducer(undefined, {} as any)

    expect(state).toEqual(initialState)
  })

  it('Should set currencies', () => {
    const state = filterReducer(
      initialState,
      setCurrencies({
        eur: 0.5,
        rub: 1,
        usd: 2,
      })
    )

    expect(state.currencyMap).toEqual({
      eur: 0.5,
      rub: 1,
      usd: 2,
    })
  })

  it('Should set current currency', () => {
    const state = filterReducer(initialState, selectCurrency('usd'))

    expect(state.currentCurr).toBe('usd')
  })

  it('Should select all checkboxes', () => {
    const state = filterReducer(initialState, toggleAllCheckboxes(true))

    expect(state.transfers.every(value => value)).toBeTruthy()
  })

  it('Should select checkbox', () => {
    const state = filterReducer(initialState, toggleCurrentCheckbox(1, true))

    expect(state.transfers[1]).toBeTruthy()
  })

  it('Should check only current checkbox', () => {
    const firstState = filterReducer(initialState, toggleCurrentCheckbox(1, true))
    const secondState = filterReducer(firstState, toggleCurrentCheckbox(2, true))
    const state = filterReducer(secondState, toggleOnlyCurrentCheckbox(0, true))

    expect(state.transfers).toEqual([true, false, false, false])
  })
})
