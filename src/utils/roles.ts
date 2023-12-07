/* eslint-disable no-irregular-whitespace */
/*

RO10003  SBM  true  SHECOM branch manager
RO10004  RH  true  SHECOM Regional Head
RO10005  SH  true  State Head
RO10008  CPVE  true  Contact Point Verification Executive
RO10009  TVE  true  Tele-Verification Executive
RO10007  SA  true  SheCom Admin
RO10002  RM  true  Relationship Manager
RO10010  CSM  true  NST Customer Success Manager
RO10011  NBU  true  NST Business User
RO10006  SBU  true  SHECOM Business User
RO10012  NA  true  NST Admin
RO10013  FBBM  true  Federal Bank Branch Manager
RO10014  FBBU  true  Federal Bank Business User
RO10015  FBA  true  Federal Bank Admin
 * 
 */

type Role = 'SBM' | 'RH' | 'SH' | 'CPVE';

export type RolePage = { [key in Role]: string[] };

type RoleFullName = { [key in Role]: string };

export const roleName: RoleFullName = {
	SBM: 'SHECOM branch manager',
	RH: 'SHECOM Regional Head',
	SH: 'State Head',
	CPVE: 'SHECOM branch manager',
};

export const roles: RolePage = {
	SBM: ['reports', 'prospects'],
	RH: [],
	SH: [],
	CPVE: [],
};
