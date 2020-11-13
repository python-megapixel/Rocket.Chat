import React from 'react';

import { UserInfo } from './UserInfo';
import { RoomInfo } from './RoomInfo';
import VerticalBar from './VerticalBar';

export default {
	title: 'components/RoomInfo',
	component: UserInfo,
};

const room = {
	name: 'rocketchat-frontend-team',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis nisi vel arcu bibendum vehicula. Integer vitae suscipit libero',
	announcement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis nisi vel arcu bibendum vehicula. Integer vitae suscipit libero',
	topic: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis nisi vel arcu bibendum vehicula. Integer vitae suscipit libero',
};

export const Default = () => <VerticalBar>
	<RoomInfo
		{...room}
		icon='lock'
		onClickHide={alert}
		onClickLeave={alert}
		onClickEdit={alert}
		onClickDelete={alert}
	/>
</VerticalBar>;


export const Archived = () => <VerticalBar>
	<RoomInfo
		{...room}
		icon='lock'
		onClickHide={alert}
		onClickLeave={alert}
		onClickEdit={alert}
		onClickDelete={alert}
		archived
	/>
</VerticalBar>;
