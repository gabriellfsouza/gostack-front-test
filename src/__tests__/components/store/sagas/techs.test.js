import { runSaga } from "redux-saga";
import { getTechsSuccess } from "~/store/modules/techs/actions";
import { getTechs } from "~/store/modules/techs/sagas";

describe("Techs saga", () => {
  it("should be abre to fetch techs", async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(["Node.js"]));
  });
});
