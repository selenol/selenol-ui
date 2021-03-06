/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import AppDispatcher from "../../platform/dispatcher/AppDispatcher";
import GroupMembershipActionTypes from
"../constants/GroupMembershipActionTypes";
import {Map} from "immutable";
import {ReduceStore} from "flux/utils";


/**
 * Store to keep information about the membership request of the owned groups.
 */
class GroupMembershipStore extends ReduceStore {
    constructor () {
        super(AppDispatcher);
    }

    getInitialState () {
        return Map();
    }
    reduce(state, action) {
        switch (action.type) {
            case GroupMembershipActionTypes.WAITING_REQUESTS_REFRESH:
                return action.requests.reduce(
                    (p, r) => p.set(r.membership_request_id, r), Map());
            case GroupMembershipActionTypes.REQUEST:
                return state.set(action.request.membership_request_id,
                    action.request);
            default:
                return state;
        }
    }
}

export default new GroupMembershipStore();
