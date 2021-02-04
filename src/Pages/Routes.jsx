import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import MembersPage from "./Members/MembersPage";
import NewMemberPage from "./Members/NewMemberPage";
import MemberDetailPage from "./Members/MemberDetailPage";
import BooksListPage from "./Books/BooksListPage";
import BookAddEditPage from "./Books/BookAddEditPage";
import BookDetailPage from "./Books/BookDetailPage";
export default function Routes() {
  return (
    <div className="p-3">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/member/:memberSlug/edit">
          <NewMemberPage />
        </Route>
        <Route exact path="/member/:memberSlug">
          <MemberDetailPage />
        </Route>
        <Route exact path="/members/add">
          <NewMemberPage />
        </Route>
        <Route exact path="/members">
          <MembersPage />
        </Route>
        <Route exact path="/book/:bookSlug/edit">
          <BookAddEditPage />
        </Route>
        <Route exact path="/book/:bookSlug">
          <BookDetailPage />
        </Route>
        <Route exact path="/books/add">
          <BookAddEditPage />
        </Route>
        <Route exact path="/books">
          <BooksListPage />
        </Route>
      </Switch>
    </div>
  );
}
