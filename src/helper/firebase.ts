/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, set, onValue, update } from "firebase/database";
import { firebaseDataBase } from "../configs/app.config";

interface IWriteDataBase {
  path: string;
  data: unknown;
}

export const writeDataBase = async ({ path, data }: IWriteDataBase) => {
  try {
    await set(ref(firebaseDataBase, path), data);
    console.log("create data succsess");
  } catch (e) {
    console.error(e);
  }
};

interface IReadDataBase {
  path: string;
  callBack: (value: unknown) => void;
}

export const readDataBase = async ({ path, callBack }: IReadDataBase) => {
  const dataBaseRefrence = ref(firebaseDataBase, path);
  onValue(dataBaseRefrence, (snapshot) => {
    const result = snapshot.val();
    callBack(result);
  });
};

interface IUpdateDataBase {
  path: string;
  data: unknown;
}

export const updateDataBase = async ({ path, data }: IUpdateDataBase) => {
  const updates = {} as any;
  updates[path] = data;
  return update(ref(firebaseDataBase), updates)
    .then(() => console.log("update succsess"))
    .catch((e) => console.error(e));
};
