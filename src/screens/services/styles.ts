import { StyleSheet } from 'react-native';

import { colors, spacing, borderRadius, typography, shadows } from '../../constants';
import { metrics } from '../../utils';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  topRow: {
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  topActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  circleButton: {
    width: spacing.xl2,
    height: spacing.xl2,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.sm,
  },
  circleButtonText: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
  },
  primaryCta: {
    marginHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.xxxl,
    backgroundColor: '#6BAEB2',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  primaryCtaText: {
    color: colors.white,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.bold,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: spacing.xl2,
    height: spacing.xl2,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepCircleActive: {
    backgroundColor: colors.primary,
  },
  stepIcon: {
    fontSize: typography.fontSize.md,
  },
  stepLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.border.dark,
    marginHorizontal: spacing.sm,
  },
  stepLineActive: {
    borderColor: colors.primary,
  },
  stepControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.mdl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
    fontFamily: typography.fontFamily.semiBold,
  },
  sectionTitleSm: {
    fontSize: typography.fontSize.md,
    color: colors.text.title,
    fontFamily: typography.fontFamily.medium,
  },
  sectionSpacing: {
    marginTop: spacing.lg,
  },
  fieldSpacing: {
    marginTop: spacing.lg,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.sm,
  },
  inputPlaceholder: {
    color: colors.text.tertiary,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.regular,
  },
  datePill: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.mdl3,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.sm,
  },
  caret: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
  },
  areaList: {
    borderRadius: borderRadius.xxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    ...shadows.md,
    overflow: 'hidden',
  },
  areaItem: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
  },
  areaItemSelected: {
    backgroundColor: colors.primary,
  },
  areaItemText: {
    color: colors.text.secondary,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
  },
  areaItemTextSelected: {
    color: colors.white,
  },
  addressInput: {
    marginTop: spacing.lg,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.sm,
    marginBottom: spacing.md,
  },
  inputPill: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    ...shadows.sm,
    marginBottom: spacing.sm,
  },
  optionalLabel: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
  },
  calendar: {
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    ...shadows.sm,
    padding: spacing.md,
  },
  calendarComponent: {
    borderRadius: borderRadius.lg,
  },
  calendarHeader: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  calendarTitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    fontFamily: typography.fontFamily.bold,
  },
  calendarWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  calendarWeekday: {
    flex: 1,
    textAlign: 'center',
    color: colors.text.secondary,
    fontFamily: typography.fontFamily.medium,
  },
  calendarDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: `${100 / 7}%`,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCellSelected: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  dayText: {
    color: colors.text.primary,
    fontFamily: typography.fontFamily.regular,
  },
  dayTextSelected: {
    color: colors.white,
    fontFamily: typography.fontFamily.bold,
  },
  slotList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  slotListSpacing: {
    marginTop: spacing.md,
  },
  slotInput: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.mdl3,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.sm,
    marginTop: spacing.sm,
  },
  slotChip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sml,
    borderRadius: borderRadius.xxxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
  },
  slotChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  slotText: {
    color: colors.text.primary,
    fontFamily: typography.fontFamily.medium,
  },
  slotTextActive: {
    color: colors.white,
  },
  summaryCard: {
    borderRadius: borderRadius.xxl,
    borderWidth: 1,
    borderColor: colors.border.primary7,
    backgroundColor: '#EFF8F8',
    padding: spacing.lg,
    ...shadows.md,
    gap: spacing.md,
    marginBottom:spacing.lg,
    
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    color: colors.text.title,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
  },
  summaryValue: {
    color: colors.text.primary,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
  },
  summaryValueHighlight: {
    color: colors.primary,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
  },
  primaryButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxxl,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.medium,
  },
  confirmBadge: {
    alignItems: 'center',
  },
  confirmCircle: {
    width: spacing.xl2 * 1.6,
    height: spacing.xl2 * 1.6,
    borderRadius: borderRadius.full,
    borderWidth: 3,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmIcon: {
    fontSize: typography.fontSize.xl,
    color: colors.primary,
  },
  confirmTitle: {
    textAlign: 'center',
    fontSize: typography.fontSize.lg,
    color: colors.text.title,
    fontFamily: typography.fontFamily.bold,
    marginBottom: spacing.lg,
  },
  serviceGrid: {
    gap: spacing.md,
  },
  serviceSection: {
    gap: spacing.md,

  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    padding: spacing.md,
    gap: spacing.md,

  },
  serviceRowList: {
    borderRadius: borderRadius.xxl,
    paddingRight: spacing.lg,
  },
  serviceRowActive: {
    backgroundColor:colors.background.primary5,
    borderColor: colors.background.primary7,

  },
  serviceThumb: {
    width: metrics.width(99),
    height: metrics.width(74),
    borderRadius: borderRadius.md,
  },
  serviceDetails: {
    flex: 1,
    gap: spacing.xs,
  },
  serviceName: {
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
    fontFamily: typography.fontFamily.medium,
  },
  serviceMeta: {
    color: colors.text.secondary,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
  },
  servicePrice: {
    color: colors.primary,
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.md,
  },
  radio: {
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: borderRadius.full,
    borderWidth: 1.6,
    borderColor: colors.border.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: colors.primary,
    backgroundColor: 'rgba(54, 150, 154, 0.08)',
  },
  radioDot: {
    width: spacing.sm,
    height: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
  vehicleCard: {
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    paddingVertical: spacing.sm,
    ...shadows.sm,
  },
  vehicleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  vehicleRowActive: {
    backgroundColor: '#E4F4F5',
  },
  vehicleImage: {
    width: spacing.xxl,
    height: spacing.xxl,
    resizeMode: 'contain',
  },
  vehicleLabel: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.text.title,
    fontFamily: typography.fontFamily.medium,
  },
  dashedDivider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.border.dark,
    marginHorizontal: spacing.md,
  },
  radioSmall: {
    width: spacing.xl,
    height: spacing.xl,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border.dark,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  radioSmallActive: {
    borderColor: colors.primary,
  },
  radioSmallDot: {
    width: spacing.sm,
    height: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
  inlineCheckbox: {
    borderWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  togglePill: {
    width: spacing.xl2,
    height: spacing.lg,
    borderRadius: borderRadius.xxxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
    ...shadows.sm,
  },
  togglePillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  toggleDot: {
    width: spacing.md,
    height: spacing.md,
    borderRadius: borderRadius.full,
    backgroundColor: colors.border.dark,
    alignSelf: 'flex-start',
  },
  toggleDotActive: {
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.md,
    marginTop: spacing.md,
  },
  categoryCard: {
    width: '47%',
    borderRadius: borderRadius.xxl,
    backgroundColor: colors.white,
    
    borderWidth: 1,
    borderColor: colors.border.light,
    overflow:'hidden',
    
    ...shadows.md,
  },
  categoryCardActive: {},
  categoryImage: {
    width: '100%',
    height: metrics.width(145),
    borderTopLeftRadius:borderRadius.xxl,
    borderTopRightRadius:borderRadius.xxl
  },
  categoryLabelWrap: {
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    color: colors.text.title,
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.medium,
  },
  categoryLabelWrapSelected: {
    backgroundColor: colors.primary,
  },
  categoryLabelSelected: {
    color: colors.white,
  },
  checkCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sml,
  },
  checkCircleText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.medium,
  },
  dropdownList: {
    margin: spacing.md,
  },
  dividerLine: {
    width: '100%',
  },
  topButton: {
    marginVertical: spacing.mdl4,
    backgroundColor:colors.primary50
  },
  topButtonContainer: {
    marginHorizontal: spacing.lg,
  },
  iconContainer:{
    borderRadius:100,
    borderWidth:1,
    borderColor:colors.border.light,
    padding:spacing.sml,
  }

});

export default styles;
